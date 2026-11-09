/* ============================================================
   MUNCHIES ON MAPLE — PREMIUM REDESIGN HELPERS (local only)
   1. Broken local photos: assets/images/ does not exist in the
      repo, so a missing hero/offer photo is swapped for a generic
      Unsplash food placeholder — the same placeholder pattern
      menu.js already uses. These are NOT the restaurant's photos;
      the owner's real photos still need to be added later.
   2. Highlights today's Everyday Deal card.
   Does not touch prices, menu data, orders, or the AI-call script.
   ============================================================ */
(function () {
  var FALLBACKS = {
    img1: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=900&q=85",
    img2: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900&q=85",
    img3: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85",
    img4: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=900&q=85",
    img5: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900&q=85"
  };

  document.querySelectorAll('img[src^="assets/images/"]').forEach(function (img) {
    var key = img.getAttribute("src").split("/").pop().split(".")[0];
    img.addEventListener("error", function onErr() {
      img.removeEventListener("error", onErr);
      if (FALLBACKS[key]) {
        img.src = FALLBACKS[key];
        img.setAttribute("data-placeholder", "true");
        img.alt = img.alt + " (photo placeholder — owner's photo to come)";
      }
    });
    // If the image already failed before this script ran:
    if (img.complete && img.naturalWidth === 0 && FALLBACKS[key]) {
      img.src = FALLBACKS[key];
      img.setAttribute("data-placeholder", "true");
    }
  });

  // Highlight today's deal (Sunday=0 … Saturday=6)
  var today = document.querySelector('.deal-card[data-day="' + new Date().getDay() + '"]');
  if (today) {
    today.classList.add("is-today");
    var badge = document.createElement("span");
    badge.className = "today-badge";
    badge.textContent = "TODAY'S DEAL";
    var dayLabel = today.querySelector(".deal-day");
    if (dayLabel) { today.insertBefore(badge, dayLabel); } else { today.prepend(badge); }
  }
})();
