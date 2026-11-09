
/* ==========================================
   MUNCHIES ON MAPLE - ORDER TRACKING
========================================== */

// Client-provided sample orders
const demoOrders = {

    2001: {
        order_id: 2001,
        customer: "Alice",
        item: "Chicken Gyro Over Rice",
        status: "out for delivery",
        eta: "2026-11-02 19:30"
    },

    2002: {
        order_id: 2002,
        customer: "Bob",
        item: "Lamb Gyro Over Rice",
        status: "preparing",
        eta: "2026-11-02 20:00"
    },

    2003: {
        order_id: 2003,
        customer: "Alice",
        item: "Chicken Gyro",
        status: "delivered",
        eta: "2026-11-01 19:15"
    }

};


/* ==========================================
   STATUS CONFIGURATION
========================================== */

const statusConfig = {

    "order received": {
        step: 0,
        message: "Your order has been received!"
    },

    "preparing": {
        step: 1,
        message: "Your delicious food is being prepared!"
    },

    "out for delivery": {
        step: 2,
        message: "Your order is on its way!"
    },

    "delivered": {
        step: 3,
        message: "Your order has been delivered. Enjoy your meal!"
    }

};


/* ==========================================
   ELEMENTS
========================================== */

const trackingForm = document.getElementById("trackingForm");

const orderInput = document.getElementById("orderNumber");

const trackingResult = document.getElementById("trackingResult");

const trackingError = document.getElementById("trackingError");


/* ==========================================
   FIND ORDER
========================================== */

function findOrder(orderId) {

    // Check client-provided demo orders first
    if (demoOrders[orderId]) {
        return {
            ...demoOrders[orderId],
            source: "demo"
        };
    }

    // Check orders generated through checkout
    const savedOrders = JSON.parse(
        localStorage.getItem("dbmunchies_orders") || "[]"
    );

    const localOrder = savedOrders.find(
        order => String(order.order_id) === String(orderId)
    );

    if (localOrder) {
        return {
            ...localOrder,
            source: "local"
        };
    }

    return null;

}


/* ==========================================
   DISPLAY ORDER
========================================== */

function displayOrder(order) {

    trackingError.classList.remove("show");

    trackingResult.classList.remove("show");

    const status = String(order.status).toLowerCase();

    const config = statusConfig[status];

    if (!config) {
        trackingError.classList.add("show");
        return;
    }


    // Order information

    document.getElementById("displayOrderId").textContent =
        `#${order.order_id}`;

    document.getElementById("displayCustomer").textContent =
        order.customer;

    const itemDescription = order.items
        ? order.items.map(item =>
            `${item.name} × ${item.quantity}`
          ).join(", ")
        : order.item;

    document.getElementById("displayItem").textContent =
        itemDescription;

    document.getElementById("displayEta").textContent =
        order.eta || "To be confirmed";


    // Status badge

    const statusBadge = document.getElementById("statusBadge");

    statusBadge.textContent =
        status.charAt(0).toUpperCase() + status.slice(1);

    statusBadge.className = "status-badge";

    if (status === "preparing") {
        statusBadge.classList.add("preparing");
    }

    if (status === "delivered") {
        statusBadge.classList.add("delivered");
    }


    // Timeline

    const timelineSteps = document.querySelectorAll(".timeline-step");

    timelineSteps.forEach((step, index) => {

        step.classList.remove("completed", "current");

        if (index < config.step) {
            step.classList.add("completed");
        }

        if (index === config.step) {
            step.classList.add("current");
        }

        if (index === config.step && status === "delivered") {
            step.classList.add("completed");
        }

    });


    // Footer message

    document.getElementById("trackingFooterMessage").textContent =
        config.message;


    // Data source notice

    const demoNotice = document.getElementById("demoNotice");

    if (order.source === "demo") {

        demoNotice.textContent =
            "Demo order: this is sample tracking data from the supplied project database, not a live delivery update.";

    } else {

        demoNotice.textContent =
            "This is a locally saved demo order. Live restaurant tracking will be available after backend integration.";

    }


    trackingResult.classList.add("show");

    trackingResult.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* ==========================================
   TRACKING FORM SUBMISSION
========================================== */

trackingForm.addEventListener("submit", event => {

    event.preventDefault();

    const orderId = orderInput.value.trim().replace(/^#/, "");

    trackingResult.classList.remove("show");

    if (!/^\d+$/.test(orderId)) {
        trackingError.classList.add("show");
        return;
    }

    const order = findOrder(orderId);

    if (!order) {

        trackingError.classList.add("show");

        return;
    }

    displayOrder(order);

});


/* ==========================================
   MOBILE NAVIGATION
========================================== */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.toggle("fa-bars");

        icon.classList.toggle("fa-xmark");

    });

}


/* ==========================================
   INITIALIZE
========================================== */

console.log("Munchies on Maple tracking initialized.");
