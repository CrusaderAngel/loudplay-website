import LanguageManipulator from './LanguageManipulator';
import BurgerManipulator from './BurgerManipulator';


document.addEventListener('load', switchLang);
document.getElementById('globe').addEventListener('click', switchLang);
document.querySelector('.burger-icon').addEventListener('click', BurgerManipulator.openMenu);
document.querySelector('.burger-cross').addEventListener('click', BurgerManipulator.closeMenu);
document.querySelector('#headset').addEventListener('click', switchLang)
document.addEventListener('load', LanguageManipulator.setDefaultLanguage);

const CURRENTLANGUAGE = LanguageManipulator.getCurrentLanguage();
const PAGENAME = LanguageManipulator.getPagename();
const ELEMENTS = LanguageManipulator.getElementsToTranslate(PAGENAME);
function switchLang() {
    const NEWLANG = LanguageManipulator.setNewLanguage();
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





