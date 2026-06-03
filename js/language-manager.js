class LanguageManager {

    constructor() {

        this.selector = document.querySelector(".header__language-selector");
        this.initialize();
    }

    initialize() {

        const savedLanguage = localStorage.getItem("language") || "en";

        this.selector.value = savedLanguage;
        this.translate(savedLanguage);

        this.selector.addEventListener("change", event => {

            const language = event.target.value;
            localStorage.setItem("language", language);
            this.translate(language);
        });
    }

    translate(language) {

        document.querySelectorAll("[data-translate]")
            .forEach(element => {

                const key = element.dataset.translate;

                if (translations[language][key]) {
                    element.textContent = translations[language][key];
                }
            });
    }
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        new LanguageManager();
    }
);