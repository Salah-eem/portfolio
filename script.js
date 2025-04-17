
function switchLang(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = lang === "fr" ? el.getAttribute("data-fr") : el.getAttribute("data-en");
  });
}
window.onload = () => switchLang('en');
