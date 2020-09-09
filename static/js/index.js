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
    if (CURRENTLANGUAGE == 'en' && screen.width > screen.height && PAGENAME == '/') {
        document.getElementById('download-link-content').style.padding = '1.2em 5.3em';
    };
};

function switchLang() {
    const NEWLANG = LanguageManipulator.setNewLanguage();
    if (NEWLANG == 'en') {
        document.querySelectorAll('#globe').forEach(item => item.src = '/assets/misc/globe-en.svg')
        document.querySelector('#navbar-download-link-mobile').style = 'margin-left: 0.5em';
        if (screen.width > screen.height && PAGENAME == '/') {
            document.getElementById('download-link-content').style.padding = '1.2em 5.3em';
        };
    } else {
        document.querySelectorAll('#globe').forEach(item => item.src = '/assets/misc/globe.svg')
        document.querySelector('#navbar-download-link-mobile').style = 'margin-left: 0em'
        if (screen.width < screen.height && PAGENAME == '/') {
            document.getElementById('download-link-content').style.padding = '1.2em 4.6em !important';
        };
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
