
/* ==========================================
   DB MART MUNCHIES - CHECKOUT
========================================== */

const orderForm = document.getElementById("orderForm");

const checkoutItems = document.getElementById("checkoutItems");

const savedCart = JSON.parse(
    localStorage.getItem("dbmunchies_cart") || "[]"
);


/* DISPLAY ORDER SUMMARY */

function displayOrderSummary() {

    if (savedCart.length === 0) {

        checkoutItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
                <a href="menu.html">Explore our menu</a>
            </p>
        `;

        orderForm.querySelector("button").disabled = true;
        return;
    }

    checkoutItems.innerHTML = savedCart.map(item => `

        <div class="checkout-item">

            <div>
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity}</p>
            </div>

            <strong>
                $${(item.price * item.quantity).toFixed(2)}
            </strong>

        </div>

    `).join("");

    const total = calculateTotal();

    document.getElementById("subtotal").textContent =
        `$${total.toFixed(2)}`;

    document.getElementById("grandTotal").textContent =
        `$${total.toFixed(2)}`;

}


/* CALCULATE TOTAL */

function calculateTotal() {

    return savedCart.reduce((sum, item) => {

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


/* CONFIRM ORDER */

orderForm.addEventListener("submit", event => {

    event.preventDefault();

    if (savedCart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    const customer = {
        name: document.getElementById("customerName").value.trim(),
        phone: document.getElementById("customerPhone").value.trim(),
        address: document.getElementById("customerAddress").value.trim(),
        notes: document.getElementById("orderNotes").value.trim()
    };

    const orderNumber = generateOrderNumber();

    const order = {
        order_id: orderNumber,
        customer: customer.name,
        phone: customer.phone,
        address: customer.address,
        notes: customer.notes,

        items: savedCart,

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

    localStorage.removeItem("dbmunchies_cart");


    /* SHOW SUCCESS MESSAGE */

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
