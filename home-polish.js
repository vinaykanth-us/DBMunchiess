/* Glass navbar: once the page moves past 40px the bar becomes a fixed frosted pill. */
(function () {
  var nav = document.querySelector(".navbar");
  if (!nav) return;
  var spacer = document.createElement("div");
  spacer.className = "nav-spacer";
  nav.parentNode.insertBefore(spacer, nav.nextSibling);
  var ticking = false;
  function update() {
    var on = window.scrollY > 40;
    if (on && !nav.classList.contains("is-scrolled")) {
      spacer.style.height = nav.offsetHeight + "px";
    }
    spacer.classList.toggle("on", on);
    nav.classList.toggle("is-scrolled", on);
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();
