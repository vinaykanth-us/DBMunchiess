/* ==========================================
   MUNCHIES ON MAPLE — SHARED DEMO CART
   Single source of truth for the demo ordering system.
   Cart lives in localStorage ("dbmunchies_cart") so it
   survives page changes (menu <-> home <-> checkout).
   DEMO ONLY — no real orders, no payments, no card details.
   Load this file BEFORE menu.js / featured.js / checkout.js.
========================================== */

(function () {
    "use strict";

    var CART_KEY = "dbmunchies_cart";

    /* Orderable items that live outside the 38-item menu
       (featured dishes + Indian Combo on the home page).
       Prices are the ones already shown on the site — never invented. */
    var EXTRA_ITEMS = {
        101: { id: 101, name: "Bezawada Rajugari Kodi Pulao", price: 9.99, category: "Featured" },
        102: { id: 102, name: "Chicken Fry Piece Biryani", price: 9.99, category: "Featured" },
        103: { id: 103, name: "Indian Combo — Kodi Pulao", price: 12.99, category: "Indian Combo" },
        104: { id: 104, name: "Indian Combo — Chicken Fry Piece Biryani", price: 12.99, category: "Indian Combo" }
    };

    var listeners = [];

    function load() {
        try {
            var raw = localStorage.getItem(CART_KEY);
            var parsed = raw ? JSON.parse(raw) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (e) {
            return [];
        }
    }

    function save(cart) {
        try {
            localStorage.setItem(CART_KEY, JSON.stringify(cart));
        } catch (e) { /* storage unavailable — cart still works in memory */ }
    }

    function notify(changedId) {
        renderDrawer();
        updateFloatingButton();
        updateNavCount();
        listeners.forEach(function (fn) {
            try { fn(changedId); } catch (e) { /* keep the cart working */ }
        });
    }

    /* Resolve a full item record by id: featured/combo first,
       then the 38-item menu (when menu.js is loaded on the page),
       then whatever is already in the cart. */
    function findItem(id) {
        id = Number(id);
        if (EXTRA_ITEMS[id]) return EXTRA_ITEMS[id];
        if (typeof menuItems !== "undefined") {
            var fromMenu = menuItems.find(function (item) { return item.id === id; });
            if (fromMenu) return fromMenu;
        }
        var inCart = load().find(function (item) { return item.id === id; });
        return inCart || null;
    }

    function getCart() {
        return load();
    }

    function qtyOf(id) {
        var found = load().find(function (item) { return item.id === Number(id); });
        return found ? found.quantity : 0;
    }

    function totals() {
        var cart = load();
        return {
            count: cart.reduce(function (sum, item) { return sum + item.quantity; }, 0),
            total: cart.reduce(function (sum, item) { return sum + item.price * item.quantity; }, 0)
        };
    }

    function addItem(id) {
        var item = findItem(id);
        if (!item || item.available === false) return false;
        var cart = load();
        var existing = cart.find(function (entry) { return entry.id === item.id; });
        if (existing) {
            existing.quantity++;
        } else {
            cart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                category: item.category || "",
                quantity: 1
            });
        }
        save(cart);
        notify(item.id);
        return true;
    }

    function setQty(id, qty) {
        id = Number(id);
        var cart = load();
        var existing = cart.find(function (entry) { return entry.id === id; });
        if (!existing) return;
        if (qty <= 0) {
            cart = cart.filter(function (entry) { return entry.id !== id; });
        } else {
            existing.quantity = qty;
        }
        save(cart);
        notify(id);
    }

    function removeItem(id) {
        setQty(id, 0);
    }

    function clearCart() {
        save([]);
        notify(null);
    }

    /* ==========================================
       QUANTITY STEPPER — the white pill from the
       user's screenshot: trash | number | +
       Trash shows when quantity is 1 (removes the item);
       a minus shows when quantity is 2+ (steps down).
    ========================================== */

    function stepperHTML(id, qty, size) {
        var leftIcon = qty <= 1
            ? '<i class="fa-regular fa-trash-can" aria-hidden="true"></i>'
            : '<i class="fa-solid fa-minus" aria-hidden="true"></i>';
        var leftLabel = qty <= 1 ? "Remove from cart" : "One less";
        return '' +
            '<div class="qty-stepper' + (size ? " qty-stepper--" + size : "") + '" data-stepper-for="' + id + '">' +
                '<button type="button" class="qty-stepper__btn qty-stepper__btn--dec" ' +
                    'data-cart-action="dec" data-id="' + id + '" aria-label="' + leftLabel + '">' +
                    leftIcon +
                '</button>' +
                '<span class="qty-stepper__num" aria-live="polite">' + qty + '</span>' +
                '<button type="button" class="qty-stepper__btn qty-stepper__btn--inc" ' +
                    'data-cart-action="inc" data-id="' + id + '" aria-label="One more">' +
                    '<i class="fa-solid fa-plus" aria-hidden="true"></i>' +
                '</button>' +
            '</div>';
    }

    function addButtonHTML(id, name) {
        return '' +
            '<button type="button" class="menu-add-btn" data-cart-action="add" data-id="' + id + '"' +
                ' aria-label="Add ' + name + ' to cart">' +
                '<i class="fa-solid fa-plus" aria-hidden="true"></i>' +
            '</button>';
    }

    /* One delegated click handler for every Add / stepper button
       on the page — menu cards, featured cards, cart drawer,
       and checkout summary. */
    document.addEventListener("click", function (event) {
        var button = event.target.closest("[data-cart-action]");
        if (!button) return;
        var action = button.dataset.cartAction;
        var id = Number(button.dataset.id);
        if (action === "add") {
            addItem(id);
        } else if (action === "inc") {
            setQty(id, qtyOf(id) + 1);
        } else if (action === "dec") {
            setQty(id, qtyOf(id) - 1);
        } else if (action === "remove") {
            removeItem(id);
        }
    });

    /* ==========================================
       CART DRAWER + FLOATING CART BUTTON
       The drawer markup already exists on menu.html;
       on pages without it (home), it is injected here
       so the cart opens everywhere items can be added.
    ========================================== */

    function ensureCartUI() {
        if (!document.getElementById("cartPanel")) {
            var overlay = document.createElement("div");
            overlay.className = "cart-overlay";
            overlay.id = "cartOverlay";
            var panel = document.createElement("aside");
            panel.className = "cart-panel";
            panel.id = "cartPanel";
            panel.setAttribute("aria-label", "Your cart");
            panel.innerHTML = '' +
                '<div class="cart-header">' +
                    '<div><span class="eyebrow">YOUR SELECTION</span><h2>Your Cart</h2></div>' +
                    '<button type="button" id="closeCart" aria-label="Close cart">' +
                        '<i class="fa-solid fa-xmark" aria-hidden="true"></i>' +
                    '</button>' +
                '</div>' +
                '<div class="cart-items" id="cartItems">' +
                    '<p class="empty-cart">Your cart is empty.</p>' +
                '</div>' +
                '<div class="cart-footer">' +
                    '<div class="cart-total"><span>Total</span><strong id="cartTotal">$0.00</strong></div>' +
                    '<a class="primary-btn checkout-btn" href="checkout.html">Continue to Order ' +
                        '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>' +
                    '<p class="checkout-disclaimer">Demo cart — no payment will be collected.</p>' +
                '</div>';
            document.body.appendChild(overlay);
            document.body.appendChild(panel);
            overlay.addEventListener("click", closeCart);
            var closeBtn = panel.querySelector("#closeCart");
            if (closeBtn) closeBtn.addEventListener("click", closeCart);
        }
        if (!document.getElementById("floatingCartBtn")) {
            var floating = document.createElement("button");
            floating.type = "button";
            floating.className = "floating-cart-btn";
            floating.id = "floatingCartBtn";
            floating.setAttribute("aria-label", "View your cart");
            floating.innerHTML = '' +
                '<i class="fa-solid fa-bag-shopping" aria-hidden="true"></i>' +
                '<span class="floating-cart-btn__text">' +
                    '<strong id="floatingCartCount">0 items</strong>' +
                    '<span id="floatingCartTotal">$0.00</span>' +
                '</span>';
            floating.addEventListener("click", openCart);
            document.body.appendChild(floating);
        }
    }

    function renderDrawer() {
        var container = document.getElementById("cartItems");
        if (!container) return;
        var cart = load();
        var totalEl = document.getElementById("cartTotal");
        var sum = totals();
        if (totalEl) totalEl.textContent = "$" + sum.total.toFixed(2);
        if (cart.length === 0) {
            container.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
            return;
        }
        container.innerHTML = cart.map(function (item) {
            return '' +
                '<div class="cart-item">' +
                    '<div class="cart-item__info">' +
                        '<h4>' + item.name + '</h4>' +
                        '<p>$' + item.price.toFixed(2) + ' each</p>' +
                    '</div>' +
                    '<div class="cart-item__side">' +
                        stepperHTML(item.id, item.quantity, "sm") +
                        '<strong class="cart-item__total">$' + (item.price * item.quantity).toFixed(2) + '</strong>' +
                    '</div>' +
                '</div>';
        }).join("");
    }

    function updateFloatingButton() {
        var button = document.getElementById("floatingCartBtn");
        if (!button) return;
        var sum = totals();
        var countEl = document.getElementById("floatingCartCount");
        var totalEl = document.getElementById("floatingCartTotal");
        if (countEl) countEl.textContent = sum.count + (sum.count === 1 ? " item" : " items");
        if (totalEl) totalEl.textContent = "$" + sum.total.toFixed(2);
        button.classList.toggle("show", sum.count > 0);
    }

    function updateNavCount() {
        var countEl = document.getElementById("cartCount");
        if (countEl) countEl.textContent = totals().count;
    }

    function openCart() {
        var panel = document.getElementById("cartPanel");
        var overlay = document.getElementById("cartOverlay");
        if (!panel) return;
        renderDrawer();
        panel.classList.add("open");
        if (overlay) overlay.classList.add("open");
    }

    function closeCart() {
        var panel = document.getElementById("cartPanel");
        var overlay = document.getElementById("cartOverlay");
        if (panel) panel.classList.remove("open");
        if (overlay) overlay.classList.remove("open");
    }

    function subscribe(fn) {
        if (typeof fn === "function") listeners.push(fn);
    }

    /* Nav bag button (menu page) opens the drawer too. */
    document.addEventListener("click", function (event) {
        if (event.target.closest("#cartButton")) openCart();
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    function init() {
        ensureCartUI();
        renderDrawer();
        updateFloatingButton();
        updateNavCount();
    }

    window.MunchiesCart = {
        EXTRA_ITEMS: EXTRA_ITEMS,
        getCart: getCart,
        qtyOf: qtyOf,
        totals: totals,
        addItem: addItem,
        setQty: setQty,
        removeItem: removeItem,
        clearCart: clearCart,
        findItem: findItem,
        stepperHTML: stepperHTML,
        addButtonHTML: addButtonHTML,
        renderDrawer: renderDrawer,
        openCart: openCart,
        closeCart: closeCart,
        subscribe: subscribe
    };
})();
