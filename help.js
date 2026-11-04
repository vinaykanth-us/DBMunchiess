
/* ==========================================
   DB MART MUNCHIES - CUSTOMER SUPPORT
========================================== */

const supportForm = document.getElementById("supportForm");

const helpFormCard = document.getElementById("helpFormCard");

const ticketSuccess = document.getElementById("ticketSuccess");


/* ==========================================
   GENERATE TICKET NUMBER
========================================== */

function generateTicketNumber() {

    let lastTicket = Number(
        localStorage.getItem("dbmunchies_last_ticket") || 1000
    );

    lastTicket++;

    localStorage.setItem(
        "dbmunchies_last_ticket",
        lastTicket
    );

    return `TKT-${lastTicket}`;

}


/* ==========================================
   SUBMIT SUPPORT REQUEST
========================================== */

supportForm.addEventListener("submit", event => {

    event.preventDefault();

    const customer = document
        .getElementById("supportName")
        .value.trim();

    const phone = document
        .getElementById("supportPhone")
        .value.trim();

    const orderNumber = document
        .getElementById("supportOrder")
        .value.trim();

    const category = document
        .getElementById("supportCategory")
        .value;

    const description = document
        .getElementById("supportIssue")
        .value.trim();


    if (!customer || !phone || !category || !description) {
        alert("Please complete all required fields.");
        return;
    }


    // Match the client's create_ticket(customer, issue) structure.

    const issue = `
Category: ${category}
Order Number: ${orderNumber || "Not provided"}
Phone: ${phone}
Description: ${description}
    `.trim();


    const ticketNumber = generateTicketNumber();


    const ticket = {

        ticket_id: ticketNumber,

        customer: customer,

        phone: phone,

        order_id: orderNumber || null,

        issue: issue,

        category: category,

        status: "created",

        created_at: new Date().toISOString()

    };


    // Save support request locally for the frontend demo.

    const existingTickets = JSON.parse(
        localStorage.getItem("dbmunchies_tickets") || "[]"
    );

    existingTickets.push(ticket);

    localStorage.setItem(
        "dbmunchies_tickets",
        JSON.stringify(existingTickets)
    );


    // Display confirmation.

    document.getElementById("ticketNumber").textContent =
        `#${ticketNumber}`;

    document.getElementById("ticketDemoNote").textContent =
        "Demo ticket: saved in this browser only. It has not yet been sent to restaurant support.";


    helpFormCard.style.display = "none";

    ticketSuccess.classList.add("show");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   COPY TICKET NUMBER
========================================== */

document.getElementById("copyTicket").addEventListener("click", async () => {

    const ticketNumber = document
        .getElementById("ticketNumber")
        .textContent.replace("#", "");

    try {

        await navigator.clipboard.writeText(ticketNumber);

        document.getElementById("copyTicket").innerHTML =
            '<i class="fa-solid fa-check"></i> Copied!';

    } catch (error) {

        alert("Please copy your ticket number: " + ticketNumber);

    }

});


/* ==========================================
   SUBMIT ANOTHER REQUEST
========================================== */

document.getElementById("newRequest").addEventListener("click", () => {

    supportForm.reset();

    ticketSuccess.classList.remove("show");

    helpFormCard.style.display = "block";

    document.getElementById("copyTicket").innerHTML =
        '<i class="fa-regular fa-copy"></i> Copy Ticket Number';

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

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

console.log("DB Mart Munchies support page initialized.");
