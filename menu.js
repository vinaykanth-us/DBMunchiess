
/* ==========================================
   MUNCHIES ON MAPLE - MENU DATA
========================================== */

const menuItems = [
    // PLATTERS
    { id: 1, name: "Chicken Gyro Over Rice", price: 11.99, category: "Platters", image: "chicken-over-rice", desc: "Grilled chicken over seasoned rice with salad and white sauce.", badges: ["Halal"] },
    { id: 2, name: "Lamb Gyro Over Rice", price: 11.99, category: "Platters", image: "lamb-over-rice", desc: "Grilled lamb over seasoned rice with salad and white sauce.", badges: ["Halal"] },
    { id: 3, name: "Combo (Chicken And Lamb)", price: 11.97, category: "Platters", image: "combo-over-rice", desc: "Chicken and lamb over seasoned rice with salad and white sauce.", badges: ["Halal"] },
    { id: 4, name: "Falafel Over Rice", price: 11.99, category: "Platters", image: "falafel-over-rice", desc: "Crispy falafel over seasoned rice with salad and tahini.", badges: ["Veg"] },

    // GYROS
    { id: 5, name: "Chicken Gyro", price: 9.99, category: "Gyros", image: "chicken-gyro", desc: "Grilled chicken wrapped in warm pita with salad and sauce.", badges: ["Halal"] },
    { id: 6, name: "Lamb Gyro", price: 9.99, category: "Gyros", image: "lamb-gyro", desc: "Grilled lamb wrapped in warm pita with salad and sauce.", badges: ["Halal"] },
    { id: 7, name: "Munchies Special Falafel Gyro", price: 9.99, category: "Gyros", image: "falafel-gyro", desc: "Crispy falafel wrapped in warm pita with salad and sauce.", badges: ["Veg"] },

    // FILL A PITA
    { id: 8, name: "Munchies Special Falafel Pita", price: 9.99, category: "Fill a Pita", image: "falafel-pita", desc: "Crispy falafel in a warm pita with salad and sauce.", badges: ["Veg"] },
    { id: 9, name: "Munchies Special Lamb Pita", price: 9.99, category: "Fill a Pita", image: "lamb-pita", desc: "Grilled lamb in a warm pita with salad and sauce.", badges: ["Halal"] },

    // HANDHELDS
    { id: 10, name: "South Side Handheld", price: 10.00, category: "Handhelds", image: "south-side-handheld", desc: "Our South Side handheld, grilled and served warm.", badges: [] },
    { id: 11, name: "Cali Style Handheld", price: 10.00, category: "Handhelds", image: "cali-handheld", desc: "California-style handheld, grilled and served warm.", badges: [] },
    { id: 12, name: "USA Handhelds", price: 10.00, category: "Handhelds", image: "usa-handheld", desc: "Classic American-style handheld, grilled and served warm.", badges: [] },
    { id: 13, name: "The Warrior Handheld", price: 10.00, category: "Handhelds", image: "warrior-handheld", desc: "A big, bold handheld, grilled and served warm.", badges: [] },
    { id: 14, name: "The Philly Handheld", price: 10.00, category: "Handhelds", image: "philly-handheld", desc: "Philly-style handheld, grilled and served warm.", badges: [] },

    // BREAKFAST
    { id: 15, name: "Bacon And Egg Sandwich", price: 5.00, category: "Breakfast Sandwiches", image: "bacon-egg-sandwich", desc: "Bacon and egg on toasted bread, made to order.", badges: [] },
    { id: 16, name: "Sausage And Egg Sandwich", price: 5.00, category: "Breakfast Sandwiches", image: "sausage-egg-sandwich", desc: "Sausage and egg on toasted bread, made to order.", badges: [] },
    { id: 17, name: "Egg And Cheese Sandwich", price: 4.50, category: "Breakfast Sandwiches", image: "egg-cheese-sandwich", desc: "Egg and melted cheese on toasted bread, made to order.", badges: ["Veg"] },

    // APPETIZERS
    { id: 18, name: "Hummus With Pita Bread With Chicken", price: 8.99, category: "Appetizers", image: "hummus-pita-chicken", desc: "Creamy hummus with warm pita bread and grilled chicken.", badges: ["Halal"] },
    { id: 19, name: "Hummus With Pita Chips With Chicken", price: 8.99, category: "Appetizers", image: "hummus-chips-chicken", desc: "Creamy hummus with crispy pita chips and grilled chicken.", badges: ["Halal"] },
    { id: 20, name: "Hummus With Pita Bread", price: 6.49, category: "Appetizers", image: "hummus-pita", desc: "Creamy hummus with warm pita bread.", badges: ["Veg"] },
    { id: 21, name: "Grape Leaves", price: 3.99, category: "Appetizers", image: "grape-leaves", desc: "Stuffed grape leaves, a light appetizer.", badges: ["Veg"] },
    { id: 22, name: "Falafel", price: 3.99, category: "Appetizers", image: "falafel-plate", desc: "Crispy falafel, golden outside and soft inside.", badges: ["Veg"] },

    // SALADS
    { id: 23, name: "Fattoush Salad", price: 8.99, category: "Munchies Special Salads", image: "fattoush-salad", desc: "Crisp chopped salad with toasted pita and a bright dressing.", badges: ["Veg"] },
    { id: 24, name: "Tabouli Salad", price: 8.99, category: "Munchies Special Salads", image: "tabouli-salad", desc: "Fresh parsley salad with tomato and cracked wheat.", badges: ["Veg"] },

    // SIDES
    { id: 25, name: "Jamaican Beef Patty", price: 3.89, category: "Sides", image: "jamaican-beef-patty", desc: "Flaky pastry filled with seasoned Jamaican beef.", badges: ["Halal"] },
    { id: 26, name: "Fries", price: 2.89, category: "Sides", image: "fries", desc: "Golden fries, crisp and lightly salted.", badges: ["Veg"] },
    { id: 27, name: "Falafel 1 Piece", price: 0.75, category: "Sides", image: "falafel-1-piece", desc: "One crispy falafel piece — a quick bite.", badges: ["Veg"] },
    { id: 28, name: "Fresh Salad", price: 2.99, category: "Sides", image: "fresh-salad", desc: "A small fresh salad, crisp and light.", badges: ["Veg"] },
    { id: 29, name: "Rice", price: 2.99, category: "Sides", image: "plain-rice", desc: "Seasoned rice, served as a side.", badges: ["Veg"] },
    { id: 30, name: "Tahini Sauce", price: 0.65, category: "Sides", image: "tahini-sauce", desc: "Smooth tahini sauce, made for drizzling.", badges: ["Veg"] },
    { id: 31, name: "Munchies Special White Sauce", price: 0.65, category: "Sides", image: "white-sauce", desc: "Our signature white sauce, creamy and mild.", badges: ["Veg"] },
    { id: 32, name: "Munchies Special Hot Sauce", price: 0.65, category: "Sides", image: "hot-sauce", desc: "Spicy hot sauce for an extra kick.", badges: ["Spicy"] },
    { id: 33, name: "Onion Rings", price: 4.49, category: "Sides", image: "onion-rings", desc: "Crispy golden onion rings.", badges: ["Veg"] },
{ id: 34, name: "Jojo Potatoes", price: 4.99, category: "Sides", image: "jojo-potatoes", desc: "Crispy potato wedges with herbs.", badges: ["Veg"], available: false },

    // DRINKS
    { id: 35, name: "Soda (Can)", price: 2.49, category: "Drinks", image: "coca-cola", desc: "A chilled can of soda.", badges: [] },
    { id: 36, name: "Water Bottle", price: 1.99, category: "Drinks", image: "water-bottle", desc: "A chilled bottle of water.", badges: [] },
    { id: 37, name: "Snapple Apple", price: 2.99, category: "Drinks", image: "snapple-apple", desc: "Snapple Apple, chilled and ready to drink.", badges: [] },

    // DESSERTS
    { id: 38, name: "Cheese Cake", price: 5.99, category: "Desserts", image: "cheese-cake", desc: "Creamy cheesecake with a sweet topping.", badges: ["Veg"] }
];


/* ==========================================
   IMAGE PLACEHOLDERS
   Replace these URLs with client photographs later.
========================================== */

const foodImages = {
    "falafel": "assets/images/menu/falafel.webp?v=1",
    "onion-rings": "assets/images/menu/onion-rings.webp?v=1",
    "snapple-apple": "assets/images/menu/snapple-apple.webp?v=1",
    "coca-cola": "assets/images/menu/coca-cola-can.webp?v=1",
    "water-bottle": "assets/images/menu/water-bottle.webp?v=1",
    "jojo-potatoes": "assets/images/menu/jojo-potatoes.webp?v=1",
    "jamaican-beef-patty": "assets/images/menu/jamaican-beef-patty.webp?v=1",
    "bacon-egg-sandwich": "assets/images/menu/bacon-egg-sandwich.webp?v=1",
    "cali-handheld": "assets/images/menu/cali-handheld.webp?v=1",
    "cheese-cake": "assets/images/menu/cheese-cake.webp?v=1",
    "chicken-gyro": "assets/images/menu/chicken-gyro.webp?v=1",
    "chicken-over-rice": "assets/images/menu/chicken-over-rice.webp?v=2",
    "combo-over-rice": "assets/images/menu/combo-over-rice.webp?v=1",
    "egg-cheese-sandwich": "assets/images/menu/egg-cheese-sandwich.webp?v=2",
    "falafel-1-piece": "assets/images/menu/falafel-1-piece.webp?v=1",
    "falafel-gyro": "assets/images/menu/falafel-gyro.webp?v=1",
    "falafel-over-rice": "assets/images/menu/falafel-over-rice.webp?v=1",
    "falafel-pita": "assets/images/menu/falafel-pita.webp?v=1",
    "falafel-plate": "assets/images/menu/falafel-plate.webp?v=1",
    "fattoush-salad": "assets/images/menu/fattoush-salad.webp?v=1",
    "fresh-salad": "assets/images/menu/fresh-salad.webp?v=1",
    "fries": "assets/images/menu/fries.webp?v=1",
    "grape-leaves": "assets/images/menu/grape-leaves.webp?v=1",
    "hot-sauce": "assets/images/menu/hot-sauce.webp?v=1",
    "hummus-chips-chicken": "assets/images/menu/hummus-chips-chicken.webp?v=1",
    "hummus-pita": "assets/images/menu/hummus-pita.webp?v=1",
    "hummus-pita-chicken": "assets/images/menu/hummus-pita-chicken.webp?v=1",
    "lamb-gyro": "assets/images/menu/lamb-gyro.webp?v=1",
    "lamb-over-rice": "assets/images/menu/lamb-over-rice.webp?v=1",
    "lamb-pita": "assets/images/menu/lamb-pita.webp?v=1",
    "philly-handheld": "assets/images/menu/philly-handheld.webp?v=1",
    "plain-rice": "assets/images/menu/plain-rice.webp?v=1",
    "sausage-egg-sandwich": "assets/images/menu/sausage-egg-sandwich.webp?v=1",
    "south-side-handheld": "assets/images/menu/south-side-handheld.webp?v=1",
    "tabouli-salad": "assets/images/menu/tabouli-salad.webp?v=1",
    "tahini-sauce": "assets/images/menu/tahini-sauce.webp?v=1",
    "usa-handheld": "assets/images/menu/usa-handheld.webp?v=1",
    "warrior-handheld": "assets/images/menu/warrior-handheld.webp?v=1",
    "white-sauce": "assets/images/menu/white-sauce.webp?v=1",
};


/* ==========================================
   CATEGORY FILTERS
========================================== */

const categories = [
    "All",
    "Platters",
    "Gyros",
    "Fill a Pita",
    "Handhelds",
    "Breakfast Sandwiches",
    "Appetizers",
    "Munchies Special Salads",
    "Sides",
    "Drinks",
    "Desserts"
];

let activeCategory = "All";
let cart = [];

const menuGrid = document.getElementById("menuGrid");
const categoryFilters = document.getElementById("categoryFilters");
const menuSearch = document.getElementById("menuSearch");


/* ==========================================
   DISPLAY CATEGORY BUTTONS
========================================== */

function renderCategories() {

    categoryFilters.innerHTML = categories.map(category => `
        <button
            class="category-btn ${activeCategory === category ? "active" : ""}"
            data-category="${category}">
            ${category}
        </button>
    `).join("");

}

categoryFilters.addEventListener("click", event => {

    const button = event.target.closest(".category-btn");

    if (!button) return;

    activeCategory = button.dataset.category;

    renderCategories();
    renderMenu();

});



/* ==========================================
   BADGES — Halal / Veg / Spicy, from the dish name only.
   Jojo Potatoes stays unavailable (available: false).
========================================== */

function badgesFor(item) {
    const out = (item.badges || []).map(b =>
        `<span class="menu-badge menu-badge--${b.toLowerCase()}">${b}</span>`
    );
    if (item.available === false) {
        out.push('<span class="menu-badge menu-badge--unavailable">Temporarily unavailable</span>');
    }
    return out.join("");
}

/* ==========================================
   DISPLAY MENU ITEMS
========================================== */

function renderMenu() {

    const searchValue = menuSearch.value.toLowerCase().trim();

    const filteredItems = menuItems.filter(item => {

        const matchesCategory =
            activeCategory === "All" ||
            item.category === activeCategory;

        const matchesSearch =
            item.name.toLowerCase().includes(searchValue) ||
            item.category.toLowerCase().includes(searchValue);

        return matchesCategory && matchesSearch;

    });

    document.getElementById("resultCount").textContent =
        `Showing ${filteredItems.length} of ${menuItems.length} items`;

    document.getElementById("noResults").style.display =
        filteredItems.length ? "none" : "block";

    menuGrid.innerHTML = filteredItems.map((item, index) => `

        <article class="menu-card${item.available === false ? " unavailable" : ""}" style="animation-delay:${(index % 6) * 60}ms">

            <div class="menu-card-image">
                <img
                    src="${foodImages[item.image]}"
                    alt="${item.name}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='assets/images/hero-american-grill.webp';"
                >

                <span class="menu-category-tag">${item.category}</span>
            </div>

            <div class="menu-card-content">

                <h3>${item.name}</h3>

                <p class="menu-desc">${item.desc}</p>

                <div class="menu-badges">${badgesFor(item)}</div>

                <div class="menu-card-bottom">

                    <span class="menu-price">
                        $${item.price.toFixed(2)}
                    </span>

                    <button
  class="menu-add-btn"
  data-id="${item.id}"
  aria-label="Add ${item.name} to cart"
  ${item.available === false ? 'disabled' : ''}>
  ${item.available === false ? 'Unavailable' : '<i class="fa-solid fa-plus"></i>'}
</button>


                </div>

            </div>

        </article>

    `).join("");

}

menuSearch.addEventListener("input", () => {

    document.getElementById("clearSearch").style.display =
        menuSearch.value ? "block" : "none";

    renderMenu();

});

document.getElementById("clearSearch").addEventListener("click", () => {

    menuSearch.value = "";
    document.getElementById("clearSearch").style.display = "none";
    renderMenu();

});


/* ==========================================
   ADD ITEMS TO CART
========================================== */

menuGrid.addEventListener("click", event => {

    const button = event.target.closest(".menu-add-btn");

    if (!button) return;

    const id = Number(button.dataset.id);

    const selectedItem = menuItems.find(item => item.id === id);

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...selectedItem,
            quantity: 1
        });
    }

    updateCart();

    button.innerHTML = '<i class="fa-solid fa-check"></i>';

    setTimeout(() => {
        button.innerHTML = '<i class="fa-solid fa-plus"></i>';
    }, 700);

});


/* ==========================================
   CART CALCULATIONS
========================================== */

function updateCart() {

    const totalQuantity = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    document.getElementById("cartCount").textContent = totalQuantity;

    document.getElementById("cartTotal").textContent =
        `$${totalPrice.toFixed(2)}`;

    const cartItems = document.getElementById("cartItems");

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
        return;
    }

    cartItems.innerHTML = cart.map(item => `

        <div class="cart-item">

            <div>
                <h4>${item.name}</h4>
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
            </div>

            <div class="cart-quantity">

                <button data-action="decrease" data-id="${item.id}">−</button>

                <span>${item.quantity}</span>

                <button data-action="increase" data-id="${item.id}">+</button>

            </div>

        </div>

    `).join("");

}


/* ==========================================
   CHANGE CART QUANTITY
========================================== */

document.getElementById("cartItems").addEventListener("click", event => {

    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const id = Number(button.dataset.id);

    const item = cart.find(product => product.id === id);

    if (!item) return;

    if (button.dataset.action === "increase") {
        item.quantity++;
    }

    if (button.dataset.action === "decrease") {
        item.quantity--;

        if (item.quantity <= 0) {
            cart = cart.filter(product => product.id !== id);
        }
    }

    updateCart();

});


/* ==========================================
   CART PANEL
========================================== */

const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");

function openCart() {
    cartPanel.classList.add("open");
    cartOverlay.classList.add("open");
}

function closeCart() {
    cartPanel.classList.remove("open");
    cartOverlay.classList.remove("open");
}

document.getElementById("cartButton").addEventListener("click", openCart);

document.getElementById("closeCart").addEventListener("click", closeCart);

cartOverlay.addEventListener("click", closeCart);


/* ==========================================
   CHECKOUT - NEXT DEVELOPMENT STEP
========================================== */


document.getElementById("checkoutButton").addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Please add items to your cart first.");
        return;
    }

    // Preserve cart when navigating to checkout
    localStorage.setItem("dbmunchies_cart", JSON.stringify(cart));

    window.location.href = "checkout.html";

});



/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});


/* ==========================================
   INITIALIZE
========================================== */

renderCategories();
renderMenu();
updateCart();

console.log("Munchies on Maple menu loaded:", menuItems.length);

/* MENU PAGE SCROLL REVEAL */

const menuObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            menuObserver.unobserve(entry.target);
        }

    });

}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => {
    menuObserver.observe(element);
});