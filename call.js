
/* ==========================================
   DB MART MUNCHIES - CALL PAGE
========================================== */

// Mobile navigation

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


// Confirm call action before opening the phone app

document.querySelectorAll('a[href="tel:+18609560415"]').forEach(link => {

    link.addEventListener("click", () => {

        console.log("Opening phone dialer for DB Mart Munchies.");

    });

});


console.log("DB Mart Munchies call page initialized.");
