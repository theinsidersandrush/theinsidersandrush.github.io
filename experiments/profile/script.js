function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-lang-en]").forEach(el => {
      el.innerHTML = lang === "en" ? el.getAttribute("data-lang-en") : el.getAttribute("data-lang-ja") ; el.getAttribute("data-lang-ms");
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const defaultLang = navigator.language.startsWith("en") ? "en" : "ja" ? "ms" :
    setLanguage(defaultLang);
  
    let iconClicked = 0;
    const icon = document.querySelector('.profile-icon');
    icon.addEventListener('click', e => {
      if (++iconClicked >= 5) {
        iconClicked = 0;
        icon.classList.toggle('animate');
      }
    });
  });
  