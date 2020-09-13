import langDB from './../lang/lang.json';

export default class LanguageManipulator {

    static setDefaultLanguage() { //To set  add new language change this method. Don't forget to add all text to /static/lang/lang.json
        if (!localStorage.getItem('lang')) {
            if (navigator.language == 'ru-RU') {
                localStorage.setItem('lang', 'ru');
                document.querySelector('#globe').src = '/assets/misc/globe.svg'
            } else {
                localStorage.setItem('lang', 'en');
                document.querySelector('#globe').src = '/assets/misc/globe-en.svg'
            };
        };
    };

    static getCurrentLanguage() {
        return localStorage.getItem('lang')
    };

    static setNewLanguage() {
        let lang = this.getCurrentLanguage();
        if (lang == 'ru') {
            localStorage.setItem('lang', 'en');
            lang = 'en';
            return lang

        } else {
            localStorage.setItem('lang', 'ru');
            lang = 'ru';
            return lang
        }
    };

    static getPagename() {
        let pageName;
        if (window.location.pathname == '/' || window.location.pathname == '/index') {
            pageName = '/'
        } else {
            pageName = window.location.pathname.split('/').pop().replace('/', '');
        }
        return pageName;
    };

    static getElementsToTranslate(pageName) {
        switch (pageName) {
            case 'technology':
                return [".navbar-link", "#navbar-download-link-content", "#page-1-rectangle-element-header", "#page-1-rectangle-element-header-empty", ".page-1-text-content", "#navbar-download-link-content-mobile", ".page-1-rectangle-element-text", ".page-container-text-header", ".page-container-text-paragraph", ".mobile-header", ".rectangle-text-mobile", ".rectangle-outside-text", ".page-2-header", ".mobile-page-bigpicture-header", ".mobile-bigpicture-text"];
                break;
            case 'download':
                return [".navbar-link", "#download-header", "#download-subheader", ".download-option-element-text"];
                break;
            case 'about':
                return [".navbar-link", "#navbar-download-link-content", "#navbar-download-link-content-mobile", ".about-main-page-title", ".about-main-page-text", ".radiant-title", ".heroes-left-text", '.heroes-right-text', ".dire-title", ".process-title", ".partnership-title", ".partner-text"];
                break;
            case '/':
                return ['.navbar-link', '#navbar-download-link-content', "#navbar-download-link-content-mobile", "#main-header", ".logos-element-header", ".page-content-subheader", "#page-content-header-left", "#page-content-header-right", ".page-content-subheader-left", ".page-content-subheader-right", "#download-link-content", ".skeleton-button-text", "#questions", ".question-text-desktop", ".question-text-mobile", ".answer-text", "#illidan-speaks-header", "#footer-download-link-content"];
                break;
        };
    };

    static translateTo(lang, pageName, elementsToTranslate) {
        elementsToTranslate.forEach(element => {
            let elementsArray = document.querySelectorAll(`${element}`);
            let translationArray = langDB[pageName][lang][`${element}`];
            let counter = 0;

            elementsArray.forEach(item => {
                item.innerHTML = JSON.stringify(translationArray[counter]).replace(/"/g, '');
                counter++;
            });
        });
    };

};