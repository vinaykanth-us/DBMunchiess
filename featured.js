/* ==========================================
   MUNCHIES ON MAPLE — FEATURED DISHES + INDIAN COMBO
   Adds the Add → stepper control to the two featured
   dishes ($9.99 each) and the Indian Combo ($12.99)
   on the home page. Uses the shared MunchiesCart.
   DEMO ONLY — no real orders, no payments.
========================================== */

(function () {
    "use strict";

    /* Which combo variant is picked on the combo card.
       Default: Kodi Pulao (id 103). Biryani is id 104. */
    var comboChoice = 103;

    function controlHTML(id) {
        var item = MunchiesCart.findItem(id);
        if (!item) return "";
        var qty = MunchiesCart.qtyOf(id);
        if (qty > 0) return MunchiesCart.stepperHTML(id, qty);
        return MunchiesCart.addButtonHTML(id, item.name);
    }

    function renderFeaturedControls() {
        document.querySelectorAll("[data-featured]").forEach(function (slot) {
            var id = Number(slot.dataset.featured);
            if (slot.dataset.featured === "combo") {
                slot.innerHTML = controlHTML(comboChoice);
            } else {
                slot.innerHTML = controlHTML(id);
            }
        });
    }

    function init() {
        if (!window.MunchiesCart) return;

        /* Combo choice pills: Kodi Pulao / Chicken Fry Piece Biryani. */
        document.querySelectorAll("[data-combo-choice]").forEach(function (button) {
            button.addEventListener("click", function () {
                comboChoice = Number(button.dataset.comboChoice);
                document.querySelectorAll("[data-combo-choice]").forEach(function (other) {
                    other.classList.toggle("active", other === button);
                });
                renderFeaturedControls();
            });
        });

        MunchiesCart.subscribe(renderFeaturedControls);
        renderFeaturedControls();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
