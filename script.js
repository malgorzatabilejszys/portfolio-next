let currentLang = "en"
let translations = {}

async function loadTranslations(lang) {
  const response = await fetch(`${lang}.json`)
  translations = await response.json()
}

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n")
    element.textContent = key.split(".").reduce((obj, i) => obj[i], translations)
  })
  document.documentElement.lang = currentLang
}

async function switchLanguage(lang) {
  currentLang = lang
  await loadTranslations(lang)
  updateContent()
}

document.addEventListener("DOMContentLoaded", async () => {
  const modeToggle = document.getElementById("mode-toggle")
  const body = document.body

  // Load initial translations
  await loadTranslations(currentLang)
  updateContent()

  // Language switcher
  document.querySelectorAll(".language").forEach((btn) => {
    btn.addEventListener("click", () => switchLanguage(btn.getAttribute("data-lang")))
  })

  // Mode toggle
  modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
    const key = body.classList.contains("dark-mode") ? "modeToggle.light" : "modeToggle.dark"
    modeToggle.textContent = key.split(".").reduce((obj, i) => obj[i], translations)
  })
})

