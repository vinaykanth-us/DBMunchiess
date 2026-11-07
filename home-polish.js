/* Glass navbar: add .is-scrolled once the page moves past 40px. */
(function () {
  var nav = document.querySelector(".navbar");
  if (!nav) return;
  var ticking = false;
  function update() {
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();
