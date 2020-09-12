import LanguageManipulator from './LanguageManipulator';
import BurgerManipulator from './BurgerManipulator';


window.addEventListener('DOMContentLoaded', LanguageManipulator.setDefaultLanguage);
window.addEventListener('DOMContentLoaded', renderDefaultText);
document.querySelectorAll('#globe').forEach(item => item.addEventListener('click', switchLang));
window.addEventListener('load', getRoistatId);
window.addEventListener('DOMContentLoaded', initGTM);




const CURRENTLANGUAGE = LanguageManipulator.getCurrentLanguage();
const PAGENAME = LanguageManipulator.getPagename();
const ELEMENTS = LanguageManipulator.getElementsToTranslate(PAGENAME);


if (CURRENTLANGUAGE == 'en' && PAGENAME != 'download') {
    document.querySelector('#globe').src = '/assets/misc/globe-en.svg'
} else {
    if (PAGENAME != 'download') {
        document.querySelector('#globe').src = '/assets/misc/globe.svg'
    }
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
    if (CURRENTLANGUAGE == 'en' && PAGENAME == 'technology') {
        document.getElementById('page-1-left').src = '/assets/pages/technology/pc-left-en.png';
        document.getElementById('page-1-right').src = '/assets/pages/technology/cs-right-en.png';
        document.querySelector('.img-left').src = '/assets/pages/technology/pc-left-mobile-en.png';
        document.querySelector('.img-right').src = '/assets/pages/technology/cs-right-mobile-en.png';
    }
};

function switchLang() {
    const NEWLANG = LanguageManipulator.setNewLanguage();
    if (NEWLANG == 'en') {
        document.querySelectorAll('#globe').forEach(item => item.src = '/assets/misc/globe-en.svg')
        document.querySelector('#navbar-download-link-mobile').style = 'margin-left: 0em';
    } else {
        document.querySelectorAll('#globe').forEach(item => item.src = '/assets/misc/globe.svg')
        document.querySelector('#navbar-download-link-mobile').style = 'margin-left: 0em'
    }
    LanguageManipulator.translateTo(NEWLANG, PAGENAME, ELEMENTS);

}

let classNameArray = ['first', 'second', 'third', 'fourth', 'fifth'];

function addEvent() {
    document.querySelectorAll('.question-inner').forEach(elem => {
        elem.addEventListener('click', openAnswer);
        elem.addEventListener('mouseover', highlight);
        elem.addEventListener('mouseout', darken);
    });
};



addEvent();

function highlight() {
    let itemName = event.target.classList['1'];
    if (!document.querySelector(`#${itemName}`).classList['1']) {
        document.querySelector(`.${itemName}`).style.background = '#000f1c';
        document.querySelector(`#arrow-${itemName}`).style.color = '#A0B4CB';
    } else {
        document.querySelector(`.${itemName}`).style.background = 'linear-gradient(180deg, #ff2f01 0%, #ff055f 100%)';
        document.querySelector(`#arrow-${itemName}`).style.color = '#FFF'
    }
};

function darken() {
    let itemName = event.target.classList['1'];
    document.querySelector(`.${itemName}`).style.background = '#000f1c';
    document.querySelector(`#arrow-${itemName}`).style.color = '#A0B4CB';
}

function openAnswer() {

    let itemNumberAsString = event.target.classList['1'];
    document.querySelector(`#${itemNumberAsString}`).classList.toggle('inactive');
    document.querySelector(`.${itemNumberAsString}`).style.background = '#000f1c'
    if (!document.querySelector(`#${itemNumberAsString}`).classList['1']) {
        document.querySelector(`#arrow-${itemNumberAsString}`).innerHTML = '&#8963';
        document.querySelector(`#arrow-${itemNumberAsString}`).style = 'top: 0.7em';
    } else {
        document.querySelector(`#arrow-${itemNumberAsString}`).innerHTML = '&#8964';
        document.querySelector(`#arrow-${itemNumberAsString}`).style = 'top: 0.3em';
    }
};


if (PAGENAME != 'download') {
    document.querySelector('.burger-icon').addEventListener('click', BurgerManipulator.openMenu);
    document.querySelector('.burger-cross').addEventListener('click', BurgerManipulator.closeMenu);
} else {
    document.querySelectorAll('#cross').forEach(item => item.addEventListener('click', redirectBack));
}

function redirectBack() {
    window.history.back();
}

function getRoistatId() {

    let roistatVisit = document.cookie.slice(
        document.cookie.indexOf('roistat_visit=') + 14,
        document.cookie.indexOf(
            ';',
            document.cookie.indexOf('roistat_visit=') + 14
        )
    )

    if (roistatVisit == 'null') roistatVisit = '';
    return roistatVisit
}

document.querySelectorAll('.download_win').forEach(function (el) {
    el.onclick = function () {

        window.location.replace(`https://dl.loudplay.ru/l/loudplay/win/loudplay-latest.exe${getRoistatId() ? '?id=' + getRoistatId() : ''}`);
        dataLayer.push({ event: 'Download_Launcher' })
        return false;
    };
});

document.querySelectorAll('.download_mac').forEach(function (el) {
    el.onclick = function () {

        window.location.replace(`https://dl.loudplay.ru/l/loudplay/mac/loudplay-latest.dmg${getRoistatId() ? '?id=' + getRoistatId() : ''}`);
        dataLayer.push({ event: 'Download_Launcher' })
        return false;
    };
});

document.querySelectorAll('.download_android').forEach(function (el) {
    el.onclick = function () {
        window.location.replace(`https://dl.loudplay.ru/l/loudplay/android/apk/loudplay.apk${getRoistatId() ? '?id=' + getRoistatId() : ''}`);
        dataLayer.push({ event: 'Download_Launcher' })
        return false;
    };
});



