// Theme toggle — flips the `.dark` class on <html> and persists the choice.
// The anti-flash default is set by an inline snippet in each page's <head>.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", function () {
    var isDark = root.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {}
  });
})();
