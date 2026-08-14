const root = document.documentElement;
const languageButton = document.querySelector("[data-language-toggle]");

const applyLanguage = (language) => {
  const isEnglish = language === "en";
  root.dataset.language = isEnglish ? "en" : "zh";
  root.lang = isEnglish ? "en" : "zh-CN";

  if (languageButton) {
    languageButton.textContent = isEnglish ? "中" : "EN";
    languageButton.setAttribute("aria-label", isEnglish ? "切换到中文" : "Switch to English");
  }
};

let savedLanguage = null;

try {
  savedLanguage = window.localStorage.getItem("microspotlight-language");
} catch {
  savedLanguage = null;
}

applyLanguage(savedLanguage === "en" ? "en" : "zh");

languageButton?.addEventListener("click", () => {
  const nextLanguage = root.dataset.language === "en" ? "zh" : "en";
  applyLanguage(nextLanguage);

  try {
    window.localStorage.setItem("microspotlight-language", nextLanguage);
  } catch {
    // The language still switches when storage is unavailable.
  }
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
