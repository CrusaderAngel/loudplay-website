import LanguageManipulator from './LanguageManipulator';
import BurgerManipulator from './BurgerManipulator';


window.addEventListener('load', LanguageManipulator.setDefaultLanguage);
window.addEventListener('load', renderDefaultText);
document.querySelectorAll('#globe').forEach(item => item.addEventListener('click', switchLang));
window.addEventListener('load', initGTM)



const CURRENTLANGUAGE = LanguageManipulator.getCurrentLanguage();
const PAGENAME = LanguageManipulator.getPagename();
const ELEMENTS = LanguageManipulator.getElementsToTranslate(PAGENAME);

if (CURRENTLANGUAGE == 'en') {
    document.querySelector('#globe').src = '/assets/misc/globe-en.svg'
} else {
    document.querySelector('#globe').src = '/assets/misc/globe.svg'
}

//GTM Initialization

function initGTM() {
    window.dataLayer = [];
    if (PAGENAME != 'download') {
        document.querySelectorAll('.play-button').forEach(function (el) {
            el.onclick = function () {
                window.dataLayer.push({ event: 'ClickCTA' });
            }
        });
    } else {
        document.querySelectorAll('.play-button').forEach(function (el) {
            el.onclick = function () {
                window.dataLayer.push({ event: 'Download_Launcher' });
            };
        });
    };
};


function renderDefaultText() {
    LanguageManipulator.translateTo(CURRENTLANGUAGE, PAGENAME, ELEMENTS);
}

function switchLang() {
    const NEWLANG = LanguageManipulator.setNewLanguage();
    if (NEWLANG == 'en') {
        document.querySelectorAll('#globe').forEach(item => item.src = '/assets/misc/globe-en.svg')
        document.querySelector('#navbar-download-link-mobile').style = 'margin-left: 0.5em';
    } else {
        document.querySelectorAll('#globe').forEach(item => item.src = '/assets/misc/globe.svg')
        document.querySelector('#navbar-download-link-mobile').style = 'margin-left: 0em'
    }
    LanguageManipulator.translateTo(NEWLANG, PAGENAME, ELEMENTS);

}

let classNameArray = ['first', 'second', 'third', 'fourth', 'fifth'];

function addEvent() {
    classNameArray.forEach(name => {
        document.querySelectorAll(`.${name}`).forEach(item => {
            item.addEventListener('click', openAnswer)
        });
    });
};

addEvent();

function openAnswer() {
    classNameArray.forEach(item => {
        if (event.target.classList.contains(item)) {
            document.getElementById(item).style.display = 'flex';
        } else {
            document.getElementById(item).style.display = 'none';
        }
    });
};


if (PAGENAME != 'download') {
    document.querySelector('.burger-icon').addEventListener('click', BurgerManipulator.openMenu);
    document.querySelector('.burger-cross').addEventListener('click', BurgerManipulator.closeMenu);
} else {
    document.querySelector('.burger-cross').addEventListener('click', redirectBack);
}

function redirectBack() {
    window.history.back();
}