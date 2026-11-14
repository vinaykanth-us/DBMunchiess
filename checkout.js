
/* ==========================================
   MUNCHIES ON MAPLE - CHECKOUT
   DEMO ONLY — no real orders, no payments,
   no card details. The demo order is saved in
   the browser's localStorage only.
========================================== */

const orderForm = document.getElementById("orderForm");

const checkoutItems = document.getElementById("checkoutItems");

/* Cart comes from the shared MunchiesCart (localStorage),
   so quantities changed here stay in sync with menu/home. */
let cart = MunchiesCart.getCart();


/* DISPLAY ORDER SUMMARY */

function displayOrderSummary() {

    cart = MunchiesCart.getCart();

    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
                <a href="menu.html">Explore our menu</a>
            </p>
        `;

        orderForm.querySelector("button").disabled = true;

        document.getElementById("subtotal").textContent = "$0.00";
        document.getElementById("grandTotal").textContent = "$0.00";
        return;
    }

    orderForm.querySelector("button").disabled = false;

    checkoutItems.innerHTML = cart.map(item => `

        <div class="checkout-item">

            <div>
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} each</p>
            </div>

            <div class="checkout-item__side">
                ${MunchiesCart.stepperHTML(item.id, item.quantity)}
                <strong>
                    $${(item.price * item.quantity).toFixed(2)}
                </strong>
            </div>

        </div>

    `).join("");

    const total = calculateTotal();

    document.getElementById("subtotal").textContent =
        `$${total.toFixed(2)}`;

    document.getElementById("grandTotal").textContent =
        `$${total.toFixed(2)}`;

}

/* Re-render when a quantity changes (stepper clicks are
   handled by the shared cart.js delegation). */
MunchiesCart.subscribe(displayOrderSummary);


/* CALCULATE TOTAL */

function calculateTotal() {

    return MunchiesCart.getCart().reduce((sum, item) => {

        return sum + (item.price * item.quantity);

    }, 0);

}


/* GENERATE DEMO ORDER NUMBER */

function generateOrderNumber() {

    let lastOrderNumber = Number(
        localStorage.getItem("dbmunchies_last_order_number") || 3000
    );

    lastOrderNumber++;

    localStorage.setItem(
        "dbmunchies_last_order_number",
        lastOrderNumber
    );

    return lastOrderNumber;

}


/* CHOOSE YOUR BUILDING — single-select cards + Skip */
const buildingPicker = document.getElementById("buildingPicker");
const buildingSkip = document.getElementById("buildingSkip");

function getBuildingType() {
    if (!buildingPicker) return "";
    const checked = buildingPicker.querySelector('input[name="buildingType"]:checked');
    return checked ? checked.value : "";
}

if (buildingPicker) {
    buildingPicker.addEventListener("click", event => {
        const option = event.target.closest(".building-option");
        if (!option) return;
        buildingPicker.querySelectorAll(".building-option").forEach(o => o.classList.remove("selected"));
        option.classList.add("selected");
        const radio = option.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
    });
}

if (buildingSkip) {
    buildingSkip.addEventListener("click", () => {
        if (!buildingPicker) return;
        buildingPicker.querySelectorAll(".building-option").forEach(o => o.classList.remove("selected"));
        buildingPicker.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
    });
}


/* CONFIRM ORDER */

orderForm.addEventListener("submit", event => {

    event.preventDefault();

    cart = MunchiesCart.getCart();

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const customer = {
        name: document.getElementById("customerName").value.trim(),
        phone: document.getElementById("customerPhone").value.trim(),
        address: document.getElementById("customerAddress").value.trim(),
        buildingType: getBuildingType(),
        notes: document.getElementById("orderNotes").value.trim()
    };

    const orderNumber = generateOrderNumber();

    const order = {
        order_id: orderNumber,
        customer: customer.name,
        phone: customer.phone,
        address: customer.address,
        building_type: customer.buildingType,
        notes: customer.notes,

        items: cart,

        total: calculateTotal(),

       status: "order received",

        eta: "To be confirmed",

        created_at: new Date().toISOString()
    };


    /* SAVE DEMO ORDER */

    const existingOrders = JSON.parse(
        localStorage.getItem("dbmunchies_orders") || "[]"
    );

    existingOrders.push(order);

    localStorage.setItem(
        "dbmunchies_orders",
        JSON.stringify(existingOrders)
    );

    localStorage.setItem(
        "dbmunchies_last_order",
        JSON.stringify(order)
    );

    MunchiesCart.clearCart();


    /* SHOW SUCCESS MESSAGE */

    document.getElementById("orderSuccessItems").innerHTML = order.items.map(item => `

        <div class="checkout-item">

            <div>
                <h4>${item.name}</h4>
                <p>${item.quantity} &times; $${item.price.toFixed(2)}</p>
            </div>

            <strong>
                $${(item.price * item.quantity).toFixed(2)}
            </strong>

        </div>

    `).join("");

    document.getElementById("orderSuccessTotal").textContent =
        `$${order.total.toFixed(2)}`;

    document.querySelector(".checkout-layout").style.display = "none";

    document.querySelector(".checkout-heading").style.display = "none";

    document.getElementById("orderSuccess").classList.add("show");

    document.getElementById("generatedOrderId").textContent =
        `#${orderNumber}`;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* INITIALIZE */

displayOrderSummary();

console.log("Checkout page initialized.");
