function switchLang(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = lang === "fr" ? el.getAttribute("data-fr") : el.getAttribute("data-en");
  });
}
window.onload = () => {
  switchLang('en');

  // Animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
};

function typeWriterEffect(text, speed = 100) {
  const target = document.getElementById("typewriter");
  let i = 0;
  function type() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

window.addEventListener("load", () => {
  const phrase = "Salaheddine El Mokhtari";
  typeWriterEffect(phrase, 100);
});

