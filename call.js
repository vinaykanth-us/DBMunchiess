
/* ==========================================
   MUNCHIES ON MAPLE - CALL PAGE
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

        console.log("Opening phone dialer for Munchies on Maple.");

    });

});


console.log("Munchies on Maple call page initialized.");
