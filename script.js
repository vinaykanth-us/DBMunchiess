

// const revealElements = document.querySelectorAll(".reveal");

// const observer = new IntersectionObserver((entries, observer) => {

//     entries.forEach(entry => {

//         if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//             observer.unobserve(entry.target);
//         }

//     });

// }, {
//     threshold: 0.15
// });

// revealElements.forEach((element, index) => {
//     element.style.transitionDelay = `${(index % 3) * 100}ms`;
//     observer.observe(element);
// });




// const menuToggle = document.getElementById("menuToggle");
// const navLinks = document.getElementById("navLinks");

// if (menuToggle && navLinks) {

//     menuToggle.addEventListener("click", () => {

//         navLinks.classList.toggle("open");

//         const icon = menuToggle.querySelector("i");

//         icon.classList.toggle("fa-bars");
//         icon.classList.toggle("fa-xmark");

//     });

//     navLinks.querySelectorAll("a").forEach(link => {

//         link.addEventListener("click", () => {

//             navLinks.classList.remove("open");

//             const icon = menuToggle.querySelector("i");

//             icon.classList.add("fa-bars");
//             icon.classList.remove("fa-xmark");

//         });

//     });

// }




// const newsletterForm = document.getElementById("newsletterForm");

// if (newsletterForm) {

//     newsletterForm.addEventListener("submit", event => {

//         event.preventDefault();

//         document.getElementById("formMessage").textContent =
//             "Thank you! You're subscribed successfully.";

//         newsletterForm.reset();

//     });

// }

// console.log("Munchies on Maple homepage loaded.");


// const reviews = document.querySelectorAll(".review");

// let currentReview = 0;

// if (reviews.length > 0) {
//     setInterval(() => {
//         reviews[currentReview].classList.remove("active");

//         currentReview = (currentReview + 1) % reviews.length;

//         reviews[currentReview].classList.add("active");
//     }, 4500);
// }



// const reviewBanner = document.querySelector(".review-banner");

// if (reviewBanner) {
//     const reviewObserver = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     reviewBanner.classList.add("is-visible");
//                     reviewObserver.unobserve(reviewBanner);
//                 }
//             });
//         },
//         {
//             threshold: 0.2
//         }
//     );

//     reviewObserver.observe(reviewBanner);
// }
// const reviewBanner = document.querySelector(".review-banner");

// if (reviewBanner) {
//     const reviewObserver = new IntersectionObserver(
//         (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     reviewBanner.classList.add("is-visible");
//                     reviewObserver.unobserve(reviewBanner);
//                 }
//             });
//         },
//         { threshold: 0.2 }
//     );

//     reviewObserver.observe(reviewBanner);
// }


/* ==========================================
   MUNCHIES ON MAPLE - HOME PAGE
========================================== */

// 1. SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${(index % 3) * 100}ms`;
    observer.observe(element);
});


// 2. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-xmark");
            }
        });
    });
}


// 3. REVIEW BANNER - BOOK OPENING ANIMATION

const reviewBanner = document.querySelector(".review-banner");

if (reviewBanner) {
    const reviewObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                reviewBanner.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    reviewObserver.observe(reviewBanner);
}

console.log("Munchies on Maple homepage loaded successfully.");
