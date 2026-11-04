
/* ==========================================
   DB MART MUNCHIES - MENU DATA
========================================== */

const menuItems = [
    // PLATTERS
    { id: 1, name: "Chicken Gyro Over Rice", price: 11.99, category: "Platters", image: "rice" },
    { id: 2, name: "Lamb Gyro Over Rice", price: 11.99, category: "Platters", image: "rice" },
    { id: 3, name: "Combo (Chicken And Lamb)", price: 11.97, category: "Platters", image: "rice" },
    { id: 4, name: "Falafel Over Rice", price: 11.99, category: "Platters", image: "falafel" },

    // GYROS
    { id: 5, name: "Chicken Gyro", price: 9.99, category: "Gyros", image: "gyro" },
    { id: 6, name: "Lamb Gyro", price: 9.99, category: "Gyros", image: "gyro" },
    { id: 7, name: "Munchies Special Falafel Gyro", price: 9.99, category: "Gyros", image: "falafel" },

    // FILL A PITA
    { id: 8, name: "Munchies Special Falafel Pita", price: 9.99, category: "Fill a Pita", image: "falafel" },
    { id: 9, name: "Munchies Special Lamb Pita", price: 9.99, category: "Fill a Pita", image: "gyro" },

    // HANDHELDS
    { id: 10, name: "South Side Handheld", price: 10.00, category: "Handhelds", image: "burger" },
    { id: 11, name: "Cali Style Handheld", price: 10.00, category: "Handhelds", image: "burger" },
    { id: 12, name: "USA Handhelds", price: 10.00, category: "Handhelds", image: "burger" },
    { id: 13, name: "The Warrior Handheld", price: 10.00, category: "Handhelds", image: "burger" },
    { id: 14, name: "The Philly Handheld", price: 10.00, category: "Handhelds", image: "burger" },

    // BREAKFAST
    { id: 15, name: "Bacon And Egg Sandwich", price: 5.00, category: "Breakfast Sandwiches", image: "sandwich" },
    { id: 16, name: "Sausage And Egg Sandwich", price: 5.00, category: "Breakfast Sandwiches", image: "sandwich" },
    { id: 17, name: "Egg And Cheese Sandwich", price: 4.50, category: "Breakfast Sandwiches", image: "sandwich" },

    // APPETIZERS
    { id: 18, name: "Hummus With Pita Bread With Chicken", price: 8.99, category: "Appetizers", image: "hummus" },
    { id: 19, name: "Hummus With Pita Chips With Chicken", price: 8.99, category: "Appetizers", image: "hummus" },
    { id: 20, name: "Hummus With Pita Bread", price: 6.49, category: "Appetizers", image: "hummus" },
    { id: 21, name: "Grape Leaves", price: 3.99, category: "Appetizers", image: "salad" },
    { id: 22, name: "Falafel", price: 3.99, category: "Appetizers", image: "falafel" },

    // SALADS
    { id: 23, name: "Fattoush Salad", price: 8.99, category: "Munchies Special Salads", image: "salad" },
    { id: 24, name: "Tabouli Salad", price: 8.99, category: "Munchies Special Salads", image: "salad" },

    // SIDES
    { id: 25, name: "Jamaican Beef Patty", price: 3.89, category: "Just side", image: "snack" },
    { id: 26, name: "Fries", price: 2.89, category: "Just side", image: "fries" },
    { id: 27, name: "Falafel 1 Piece", price: 0.75, category: "Just side", image: "falafel" },
    { id: 28, name: "Fresh Salad", price: 2.99, category: "Just side", image: "salad" },
    { id: 29, name: "Rice", price: 2.99, category: "Just side", image: "rice" },
    { id: 30, name: "Tahini Sauce", price: 0.65, category: "Just side", image: "sauce" },
    { id: 31, name: "Munchies Special White Sauce", price: 0.65, category: "Just side", image: "sauce" },
    { id: 32, name: "Munchies Special Hot Sauce", price: 0.65, category: "Just side", image: "sauce" },
    { id: 33, name: "Onion Rings", price: 4.49, category: "Just side", image: "snack" },
{ id: 34, name: "Jojo Potatoes", price: 4.99, category: "Just side", image: "fries", available: false },

    // DRINKS
    { id: 35, name: "Soda (Can)", price: 2.49, category: "Drinks", image: "drink" },
    { id: 36, name: "Water Bottle", price: 1.99, category: "Drinks", image: "drink" },
    { id: 37, name: "Snapple Apple", price: 2.99, category: "Drinks", image: "drink" },

    // DESSERTS
    { id: 38, name: "Cheese Cake", price: 5.99, category: "Desserts", image: "dessert" }
];


/* ==========================================
   IMAGE PLACEHOLDERS
   Replace these URLs with client photographs later.
========================================== */

const foodImages = {
    rice: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=85",
    gyro: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=85",
    falafel: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb5?w=600&q=85",
    burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85",
    sandwich: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=85",
    hummus: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=600&q=85",
    salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=85",
    snack: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=85",
    fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=85",
    sauce: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=600&q=85",
    drink: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=85",
    dessert: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=85"
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
    "Just side",
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

        <article class="menu-card" style="animation-delay:${(index % 6) * 60}ms">

            <div class="menu-card-image">
                <img
                    src="${foodImages[item.image]}"
                    alt="${item.name}"
                    loading="lazy"
                >

                <span class="menu-category-tag">${item.category}</span>
            </div>

            <div class="menu-card-content">

                <h3>${item.name}</h3>

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

console.log("DB Mart Munchies menu loaded:", menuItems.length);

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