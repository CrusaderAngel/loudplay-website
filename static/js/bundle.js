/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./static/js/BurgerManipulator.js":
/*!****************************************!*\
  !*** ./static/js/BurgerManipulator.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BurgerManipulator; });\nclass BurgerManipulator {\n   static  openMenu() {\n        let menu = document.querySelectorAll('.menu-mobile');\n        document.querySelector('.burger-icon').classList.toggle('inactive');\n        document.querySelector('.burger-cross').classList.toggle('inactive');\n        document.querySelector('.burger-cross').classList.toggle('active');\n        menu.forEach(item => {\n            item.classList.toggle('unpressed');\n            item.classList.toggle('pressed')\n        })\n    }\n    \n    static  closeMenu() {\n        let menu = document.querySelectorAll('.menu-mobile');\n        document.querySelector('.burger-icon').classList.toggle('inactive');\n        document.querySelector('.burger-icon').classList.toggle('active');\n        document.querySelector('.burger-cross').classList.toggle('active');\n        document.querySelector('.burger-cross').classList.toggle('inactive');\n        menu.forEach(item => {\n            item.classList.toggle('pressed');\n            item.classList.toggle('unpressed')\n        })\n    }\n}\n\n//# sourceURL=webpack:///./static/js/BurgerManipulator.js?");

/***/ }),

/***/ "./static/js/LanguageManipulator.js":
/*!******************************************!*\
  !*** ./static/js/LanguageManipulator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LanguageManipulator; });\n/* harmony import */ var _lang_lang_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../lang/lang.json */ \"./static/lang/lang.json\");\nvar _lang_lang_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../lang/lang.json */ \"./static/lang/lang.json\", 1);\n\n\nclass LanguageManipulator {\n\n        static setDefaultLanguage() {\n            if(!this.getCurrentLanguage()) {\n                localStorage.setItem('lang', 'ru')\n            }\n        }\n\n        static getCurrentLanguage() {\n            return localStorage.getItem('lang')\n        }\n\n        static setNewLanguage() {\n            let lang = this.getCurrentLanguage();\n            if (lang == 'ru') {\n                localStorage.setItem('lang', 'en');\n                lang = 'en';\n                return lang\n\n            } else {\n                localStorage.setItem('lang', 'ru');\n                lang = 'ru';\n                return lang\n            }\n        }\n\n        static getPagename() {\n            let pageName = window.location.pathname.split('/').pop().replace('/', '').replace('.html', '');\n            return pageName;\n        }\n\n        static getElementsToTranslate(pageName) {\n            switch (pageName) {\n                case 'main':\n                    return ['.navbar-link', '#navbar-download-link-content', \"#main-header\", \".logos-element-header\", \".page-content-subheader\", \"#page-content-header-left\",\"#page-content-header-right\",\".page-content-subheader-left\", \".page-content-subheader-right\", \"#download-link-content\", \".skeleton-button-text\", \"#questions\", \".question-text-desktop\", \".questions-text-mobile\", \".answer-text\", \"#illidan-speaks-header\", \"#footer-download-link-content\"];\n                    break;\n                case 'technology':\n                    return [\".navbar-link\", \"#navbar-download-link-content\", \"#page-1-rectangle-element-header\", \".page-1-text-content\", \"#navbar-download-link-content-mobile\", \".page-1-rectangle-element-text\", \".page-container-text-header\", \".page-container-text-paragraph\", \".mobile-header\", \".rectangle-text-mobile\", \".rectangle-outside-text\", \".page-2-header\", \".mobile-page-bigpicture-header\", \".mobile-bigpicture-text\"];\n                    break;\n                case 'download':\n                    return [\".navbar-link\", \"#download-header\", \"#download-subheader\", \".download-option-element-text\"];\n                    break;\n                case 'about':\n                    return [\".navbar-link\", \"#navbar-download-link-content\", \".about-main-page-title\", \"about-main-page-text\", \".radiant-title\", \".heroes-left-text\", '.heroes-right-text', \".dire-title\", \".process-title\", \".pratnership-title\", \".partner-text\"];\n                    break;\n            }\n        }\n\n        static translateTo(lang, pageName, elementsToTranslate) {\n            console.log(elementsToTranslate)\n\n        elementsToTranslate.forEach(element => {\n            let elementsArray = document.querySelectorAll(`${element}`);\n            console.log(elementsArray)\n            let translationArray = _lang_lang_json__WEBPACK_IMPORTED_MODULE_0__[pageName][lang][`${element}`];\n            console.log(translationArray)\n            let counter = 0;\n\n            elementsArray.forEach(item => {\n                console.log(item)\n                item.innerHTML = JSON.stringify(translationArray[counter]).replace(/\"/g, '');\n                counter++;\n            });\n        });\n    }\n\n}\n\n//# sourceURL=webpack:///./static/js/LanguageManipulator.js?");

/***/ }),

/***/ "./static/js/index.js":
/*!****************************!*\
  !*** ./static/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LanguageManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LanguageManipulator */ \"./static/js/LanguageManipulator.js\");\n/* harmony import */ var _BurgerManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BurgerManipulator */ \"./static/js/BurgerManipulator.js\");\n\n\n\n\ndocument.addEventListener('load', switchLang);\ndocument.getElementById('globe').addEventListener('click', switchLang);\ndocument.querySelector('.burger-icon').addEventListener('click', _BurgerManipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].openMenu);\ndocument.querySelector('.burger-cross').addEventListener('click', _BurgerManipulator__WEBPACK_IMPORTED_MODULE_1__[\"default\"].closeMenu);\ndocument.querySelector('#headset').addEventListener('click', switchLang)\ndocument.addEventListener('load', _LanguageManipulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setDefaultLanguage);\n\nconst CURRENTLANGUAGE = _LanguageManipulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentLanguage();\nconst PAGENAME = _LanguageManipulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPagename();\nconst ELEMENTS = _LanguageManipulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getElementsToTranslate(PAGENAME);\nfunction switchLang() {\n    const NEWLANG = _LanguageManipulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setNewLanguage();\n    _LanguageManipulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"].translateTo(NEWLANG, PAGENAME, ELEMENTS);\n\n}\n\nlet classNameArray = ['first', 'second', 'third', 'fourth', 'fifth'];\n\nfunction addEvent() {\n    classNameArray.forEach(name => {\n        document.querySelectorAll(`.${name}`).forEach(item => {\n            item.addEventListener('click', openAnswer)\n        });\n    });\n};\n\naddEvent();\n\nfunction openAnswer() {\n    classNameArray.forEach(item => {\n        if (event.target.classList.contains(item)) {\n            document.getElementById(item).style.display = 'flex';\n        } else {\n            document.getElementById(item).style.display = 'none';\n        }\n    });\n};\n\n\n\n//# sourceURL=webpack:///./static/js/index.js?");

/***/ }),

/***/ "./static/lang/lang.json":
/*!*******************************!*\
  !*** ./static/lang/lang.json ***!
  \*******************************/
/*! exports provided: main, about, technology, download, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"main\\\":{\\\"ru\\\":{\\\".navbar-link\\\":[\\\"КАК ЭТО РАБОТАЕТ\\\",\\\"КТО МЫ ТАКИЕ\\\",\\\"КАК ЭТО РАБОТАЕТ\\\",\\\"КТО МЫ ТАКИЕ\\\"],\\\"#navbar-download-link-content\\\":[\\\"ИГРАТЬ СЕЙЧАС\\\"],\\\"#main-header\\\":[\\\"ИГРОВОЙ КОМПЬЮТЕР<br>ДЛЯ ИЗБРАННЫХ\\\"],\\\".logos-element-header\\\":[\\\"Являемся резидентами\\\",\\\"Работаем на технологии\\\",\\\"Доступно на\\\"],\\\".page-content-subheader\\\":[\\\"С облачным геймингом<br>любую игру запустить сможешь ты!\\\"],\\\"#page-content-header-left\\\":[\\\"ПРОКАЧАЙ<br>СВОЮ ТАЧКУ\\\",\\\"НЕ ПЕРЕПЛАЧИВАЙ<br>ЗА НЕИЗВЕСТНОЕ\\\"],\\\"#page-content-header-right\\\":[\\\"НЕ ЗАЦИКЛИВАЙСЯ<br>НА ОДНОЙ\\\",\\\"ПОБЕЖДАЙ НА ЛЮБОЙ<br>ТЕРРИТОРИИ\\\"],\\\".page-content-subheader-left\\\":[\\\"Отложи навсегда покупку мощного компа,<br>твой тоже может выдавать максимум\\\",\\\"Начни играть в облаке бесплатно<br>уже через пару минут\\\"],\\\".page-content-subheader-right\\\":[\\\"Любая игра может стать доступной<br>в нашем открытом мире\\\",\\\"Получи неограниченный доступ к игровому ПК <br id='page-5-br'> и продолжай играть в любом месте\\\"],\\\"#download-link-content\\\":[\\\"ДА ПРЕБУДЕТ СО МНОЙ СИЛА\\\",\\\"РАЗГОНИСЬ ДО ПРЕДЕЛА\\\",\\\"ПОРАДУЙ ЛЮБИМУЮ\\\",\\\"ВРЫВАЙСЯ К НАМ\\\",\\\"НЕ БРОСАЙ СВОИХ\\\"],\\\".skeleton-button-text\\\":[\\\"ТЫ ВТИРАЕШЬ МНЕ КАКУЮ-ТО ДИЧЬ\\\"],\\\"#questions\\\":[\\\"ЕСТЬ ВОПРОСЫ?\\\"],\\\".question-text-desktop\\\":[\\\"Loudplay - это облачный гейминг. Или нет?\\\",\\\"Есть ли системные требования для облачного ПК?\\\",\\\"Какие игры я могу запустить в облаке?\\\",\\\"Сколько это стоит? Cloud Gaming - это бесплатно?\\\",\\\"Как мне начать играть?\\\"],\\\".questions-text-mobile\\\":[\\\"Что такое Loudplay?\\\",\\\"Какие требования к моему компьютеру?\\\",\\\"Какие игры доступны?\\\",\\\"Сколько это стоит?\\\",\\\"Как мне начать играть?\\\"],\\\".answer-text\\\":[\\\"С нами ты можешь превратить любой девайс в современный игровой компьютер. В отличие от других сервисов облачного гейминга, Loudplay – это мощный ПК без ограничений: тебе доступен рабочий стол Windows, можно самому устанавливать игры и приложения для работы и не переживать о сохранении данных.\\\",\\\"Приложение Loudplay работает на любых девайсах с Windows, MacOS и Android. Если компьютер или телефон способен воспроизвести видео на Youtube в нужном тебе качестве – мощности будет достаточно для запуска облачного ПК.<br>Для комфортной игры с облачного ПК нужен стабильный интернет скоростью не менее 10 Мбит/c. Для получения максимального качества мы рекомендуем пользоваться соединением от 30 Мбит/с и подключить свой девайс по проводу или к Wi-Fi сети 5Ghz. Узнать свою скорость ты можешь здесь: https://www.speedtest.net/\\\",\\\"Игровой компьютер Loudplay даёт возможность выбирать абсолютно любую игру для установки. После запуска облачного ПК ты можешь самостоятельно скачать игру из любого магазина или торрент-трекера. Если ранее ты уже купил игру в Steam/Origin, то платить за неё второй раз НЕ НУЖНО.<br>Облачный компьютер подключен к интернету 1 Гбит/c, поэтому загрузка пройдёт очень быстро. Кроме этого, мы специально сделали игровые компьютеры, на которых уже установлена лицензия популярной игры. Если не терпится поиграть – этот вариант подойдет!\\\",\\\"Один час игры стоит от 40 до 49 рублей. Цена зависит от того, сколько игрового времени ты хочешь приобрести за один раз. Кроме того, первый час будет бесплатным – сможешь установить нужную игру, подобрать оптимальные настройки и проконсультироваться с поддержкой.<br>Если хочешь поиграть бесплатно подольше или получить сочные скидки, то прими участие в конкурсах и розыгрышах в нашей группе ВКонтакте или приводи друзей через реферальную программу.\\\",\\\"Выполни несколько простых шагов:<br><br>1. Установи наше приложение на свой девайс;<br>2. Регистрируйся;<br>3. Активируй тестовое время;<br>4. Запускай облачный компьютер и начинай играть;<br><br>Подробный гайд ты можешь найти здесь: https://clck.ru/QYu6G\\\"],\\\"#illidan-speaks-header\\\":[\\\"Теперь ты готов!\\\"],\\\"#footer-download-link-content\\\":[\\\"НАЧАТЬ ИГРАТЬ\\\"]},\\\"en\\\":{\\\".navbar-link\\\":[\\\"HOW IT WORKS\\\",\\\"WHO WE ARE\\\",\\\"HOW IT WORKS\\\",\\\"WHO WE ARE\\\"],\\\"#navbar-download-link-content\\\":[\\\"PLAY NOW\\\"],\\\"#main-header\\\":[\\\"GAMING PC<br>FOR CHOSEN\\\"],\\\".logos-element-header\\\":[\\\"Skolkovo residents\\\",\\\"We work on\\\",\\\"Available for\\\"],\\\".page-content-subheader\\\":[\\\"Like a hero in your favorite game<br>with a cloud gaming feel!\\\"],\\\"#page-content-header-left\\\":[\\\"BOOST UP<br>YOUR GEAR\\\",\\\"NEVER OVERPAY<br>FOR THE UNKNOWN\\\"],\\\"#page-content-header-right\\\":[\\\"DON'T STUCK<br>ON ONE\\\",\\\"WINNER IN<br>ANY AREA\\\"],\\\".page-content-subheader-left\\\":[\\\"Delay buying a powerful PC forever,<br> yours can max out too\\\",\\\"Get started on Cloud Platform<br>for free in a minute\\\"],\\\".page-content-subheader-right\\\":[\\\"Any game is available <br>in our open world\\\",\\\"Get unlimited access to your gaming PC <br id='page-5-br'> and keep playing wherever you are\\\"],\\\"#download-link-content\\\":[\\\"MAY THE FORCE BE WITH ME\\\",\\\"SPEED UP TO THE LIMIT\\\",\\\"PLEASE YOUR BELOVED\\\",\\\"BREAK INTO US\\\",\\\"DON'T LEAVE PEOPLE BEHIND\\\"],\\\".skeleton-button-text\\\":[\\\"YOU ARE BULLSHITTING ME\\\"],\\\"#questions\\\":[\\\"ANY QUESTIONS?\\\"],\\\".question-text-desktop\\\":[\\\"Is Loudplay Cloud Gaming? Or not?\\\",\\\"Are there any system requirements for a cloud PC?\\\",\\\"What games can I run in the cloud?\\\",\\\"How much is it? Is Cloud Gaming Free?\\\",\\\"How can I start playing?\\\"],\\\".questions-text-mobile\\\":[\\\"What is Loudplay?\\\",\\\"What are the requirements for my PC?\\\",\\\"What games are available?\\\",\\\"How much is it?\\\",\\\"How can I start playing?\\\"],\\\".answer-text\\\":[\\\"With us you can turn any device into a modern gaming computer. Unlike other cloud gaming services, Loudplay is a powerful PC without limits: you have access to the Windows desktop, you can install games and applications for work yourself, and not worry about saving data.\\\",\\\"The Loudplay app works on any device with Windows, MacOS and Android. If your computer or phone is able to play videos on Youtube in the quality you need, there will be enough power to run a cloud PC.<br>To play comfortably from a cloud PC, you need a stable Internet speed of at least 10 Mbps. For maximum quality, we recommend using a connection of at least 30 Mbps and connecting your device via a Landline or to a 5Ghz Wi-Fi network. You can find out your speed here: https://www.speedtest.net/\\\",\\\"The Loudplay gaming computer makes it possible to choose absolutely any game for installation. After starting the cloud PC, you can download the game from any store or torrent tracker. If you have previously bought the game on Steam / Origin, then you DO NOT NEED to pay for it a second time.<br>The cloud computer is connected to the Internet at 1 Gbps, so the download will be very fast. In addition, we have specific gaming computers which have licensed games already installed.If you want to play NOW , this is your best option.\\\",\\\"One hour of play costs from 40 to 49 rubles. The price depends on how much game time you want to purchase at one time. In addition, the first hour will be free - you can install the game you want, choose the optimal settings and consult with support if you need it.<br>If you want to play for free longer or get juicy discounts, then take part in contests and sweepstakes in our VKontakte group or bring your friends through the referral program.\\\",\\\" Follow a few simple steps:<br><br>1. Install our application on your device;<br>2. Create an account;<br>3. Activate your Free period or buy a specific bundle;<br>4. Launch your cloud computer and start playing;<br><br>You can find a detailed guide here: https://clck.ru/QYu6G\\\"],\\\"#illidan-speaks-header\\\":[\\\"You are ready now!\\\"],\\\"#footer-download-link-content\\\":[\\\"GET STARTED\\\"]}},\\\"about\\\":{\\\"ru\\\":{\\\".navbar-link\\\":[\\\"КАК ЭТО РАБОТАЕТ\\\",\\\"КТО МЫ ТАКИЕ\\\"],\\\"#navbar-download-link-content\\\":[\\\"ИГРАТЬ СЕЙЧАС\\\"],\\\".about-main-page-title\\\":[\\\"Мы в Loudplay<br />все заядлые геймеры\\\"],\\\".about-main-page-text\\\":[\\\"Любим поиграть ночами после работы, и поэтому нам нравится представлять себя<br />героями игр с разными крутыми способностями\\\"],\\\".radiant-title\\\":[\\\"Ты всегда можешь положиться на <span>силы света,</span> надежных <br /> союзников в битве с врагами\\\"],\\\".heroes-left-text\\\":[\\\"Мы готовы помочь тебе победить врагов в <br /> любом месте, как это делает Zeus\\\",\\\"Или разогнать твой ПК <br /> до фантастической скорости как Io\\\",\\\"И с нами любой игровой контент начинает <br /> играть новыми красками, как в руках <br /> мастерского Rubick\\\",\\\"Bounty Hunter не прочь поживиться твоими <br /> деньгами и скрыться в невидимости\\\",\\\"А если ты решишь поиграть вечером, то встреча <br /> с Night Stalker заставит бронировать место в <br /> очереди (в таверну)\\\"],\\\".heroes-right-text\\\":[\\\"Важный для нас принцип – всегда быть <br /> гибкими и адаптироваться под ситуацию, <br /> на что способен грамотный Morphling\\\",\\\"Мы готовы принять на себя удар первыми <br /> как Bristleback, чтобы тиммейты смогли <br />проявить свои лучшие качества\\\",\\\"Коварный Rikimaru готов в любой момент скрыть <br /> тебя в облаке нанести удар в спину и разрушить <br /> ощущение безопасности до конца игры\\\",\\\"Faceless Void остановит время – и картинку <br /> на твоём экране в критические секунды битвы\\\",\\\"И потом Venomancer замедлит твою прокачку <br /> постоянным ядовитым спамом\\\"],\\\".dire-title\\\":[\\\"Но есть <span>силы тьмы</span> — воплощения страхов и опасностей,<br /> которые нам предстоит победить на совместном пути\\\"],\\\".process-title\\\":[\\\"Ай-ай-ай-ай-ай, что сейчас произошло!\\\"],\\\".partnership-title\\\":[\\\"Боже, ты посмотри вокруг, что происходит!\\\"],\\\".partner-text\\\":[\\\".. российский Loudplay <br /> фокусируется на развитии <br /> технологии без создания своей <br /> инфраструктуры ...\\\",\\\"... Задержка составила всего 70 <br />  мс, чего достаточно для <br /> большинства онлайн-игр <br /> включая шутеры ...\\\",\\\"... Преимущества 5G <br /> продемонстрировали в <br /> Иннополисе на примере сервиса <br /> для геймеров – LoudPlay ...\\\",\\\"... партнерство с LoudPlay станет <br /> возможностью охватить <br /> сегмент мобильных и <br /> десктопных игроков ...\\\"]},\\\"en\\\":{\\\".navbar-link\\\":[\\\"HOW IT WORKS\\\",\\\"WHO WE ARE\\\"],\\\"#navbar-download-link-content\\\":[\\\"PLAY NOW\\\"],\\\".about-main-page-title\\\":[\\\"We are ALL <br> real avid gamers in Loudplay\\\"],\\\".about-main-page-text\\\":[\\\"Love playing nights out after work, performing ourselves as heroes of games with different cool features.\\\"],\\\".radiant-title\\\":[\\\"Always rely on the forces of light, credible allies in the battle against enemies.\\\"],\\\".heroes-left-text\\\":[\\\"We're here to help you defeat any enemy wherever you are, just like Zeus.\\\",\\\"Drive your PC to a fantastic speed like Io.\\\",\\\"With us any game content begins to play with new colors, as in the hands of the master Rubick\\\",\\\"Bounty Hunter is eager to profit by your wealth and hide in the dark.\\\",\\\"And if you decide to play in the evening, then meeting the Night Stalker will force you to book a place in the queue \\\"],\\\".heroes-right-text\\\":[\\\"Our most important principle is to always be flexible and adapt to the situation, that’s what a competent Morphling can help you with.\\\",\\\"We are ready to take the hit first as Bristleback so that our teammates can show their best qualities.\\\",\\\"The cunning Rikimaru is ready to hide you in the cloud at any time, stab you in the back and destroy your sense of security for the rest of the game.\\\",\\\"Faceless Void will stop the Time - and the picture on your screen in the critical seconds of the battle...\\\",\\\"And then the Venomancer will slow you down with constant poisonous spam.\\\"],\\\".dire-title\\\":[\\\"But there are dark forces - the embodiment of fears and dangers, which we have to overcome together.\\\"],\\\".partnership-title\\\":[\\\"OMG what just happened!\\\"],\\\".partner-text\\\":[\\\"... Russian Loudplay focuses on technology <br> development without building  <br>its own infrastructure ...\\\",\\\"...The delay is only 70 ms,<br> which is enough for most online<br> games including shooters ...\\\",\\\"... The 5G advantages ( of 5G)<br> were performed in Innopolis <br> on the the LoudPlay Gaming service - ...\\\",\\\"... a partnership with LoudPlay<br> will be an opportunity to access<br>  the mobile and desktop market ...\\\"]}},\\\"technology\\\":{\\\"ru\\\":{\\\".navbar-link\\\":[\\\"КАК ЭТО РАБОТАЕТ\\\",\\\"КТО МЫ ТАКИЕ\\\",\\\"КАК ЭТО РАБОТАЕТ\\\",\\\"КТО МЫ ТАКИЕ\\\"],\\\"#navbar-download-link-content\\\":[\\\"ИГРАТЬ СЕЙЧАС\\\"],\\\"#navbar-download-link-content-mobile\\\":[\\\"ИГРАТЬ СЕЙЧАС\\\"],\\\"#page-1-rectangle-element-header\\\":[\\\"Облачный ПК - это\\\"],\\\".page-1-rectangle-element-text\\\":[\\\"Твой новый способ играть и работать, который не требует серьезных средств для покупки и модернизации комплектующих\\\",\\\"Нужно лишь интернет-соединение и компьютер, соответствующий нашим минимальным рекомендациям.\\\"],\\\".page-1-text-content\\\":[\\\"Наши сервера выделяют пространство для твоего облачного ПК\\\",\\\"Экран облачного компьютера транслируется в лаунчер, который ты запускаешь на своем устройстве\\\",\\\"Сигналы с устройства уходят на сервер, благодаря чему ты удаленно управляешь облачным ПК\\\"],\\\".page-container-text-header\\\":[\\\"Не меняй ничего,<br> получи всё\\\",\\\"Улетное оборудование\\\",\\\"Кодирование<br>и нулевая задержка\\\",\\\"Битрейт по ситуации\\\",\\\"Загрузки и обновления\\\",\\\"Система хранения данных\\\"],\\\".page-container-text-paragraph\\\":[\\\"Loudplay – это облачный потоковый сервис, который транслирует изображение удаленного рабочего стола с наших серверов на твоё устройство.\\\",\\\"Удаленный рабочий стол – это полноценный ПК, на который можно установить игры и программы с любых источников. Начиная от аккаунтов из твоих личных библиотек и заканчивая всем, что вообще можно скачать и установить.\\\",\\\"Сервера Loudplay оборудованы последними процессорами Intel Xeon, оперативной памятью до 512 ГБ, графическими процессорами NVIDIA Tesla и SSD массивами.\\\",\\\"Это позволяет предоставить пользователю опыт любой игры в 60+ FPS на ультра настройках и полноценный облачный ПК в распоряжение, с мощностью эквивалентной настольному с 32 ОЗУ, 6 гб GPU, 400 ГБ SSD и Intel Xeon 2,6 ГГц\\\",\\\"Технология сервиса подразумевает кодирования видеопотока в отдельном аппаратном ускорителе на серверной видеокарте.\\\",\\\"Такой подход позволяет не только разгрузить все остальные мощности и направить их на передачу сигнала,но и добиться полного отсутствия задержки изображения со стороны Loudplay.\\\",\\\" Сервис в реальном времени отслеживает состояние сети и регулирует качество видео, если это необходимо. Благодаря этому мы предоставляем пользователю лучший опыт из тех, что вообще можно передать с учетом его конфигурации.\\\",\\\"Обрати внимание: использование сети Wi-Fi 5 ГГц в зоне прямой видимости или проводное подключение существенно улучшает качество картинки.\\\",\\\"Каждый облачный ПК имеет выделенное интернет-соединение со скоростью до 1 Гбит/с, что позволяет скачивать большинство игры за считанные минуты. При этом если игра уже была загружена ранее, то с помощью кэш-серверов мы увеличим скорость её загрузки до 10 Гбит/с!\\\",\\\"За обновлениями мы тоже следим, регулярно обновляя игры из нашего каталога до актуального состояния, чтобы ты не тратил время на дозагрузки\\\",\\\"Скачанные тобой игры и приложения хранятся на наших серверах и будут доступны при следующем входе.Однако, время хранения данных ограничено и варьируется в зависимости от количества активных пользователей которым нужно выделять пространство.\\\",\\\"Но не беспокойся: до удаления данных мы пришлем уведомление, чтобы ты успел среагировать.Всё, что нужно будет сделать – запустить свой облачный ПК, чтобы время хранения продлилось автоматически.\\\"],\\\".mobile-header\\\":[\\\"Облачный ПК - это\\\"],\\\".rectangle-text-mobile\\\":[\\\"Твой новый способ играть и работать, который не требует серьезных средств для покупки и модернизации комплектующих.\\\"],\\\".rectangle-outside-text\\\":[\\\"Нужно лишь интернет-соединение и компьютер, соответствующий нашим минимальным рекомендациям.\\\"],\\\".page-2-header\\\":[\\\"Наши сервера выделяют пространство для твоего облачного ПК\\\",\\\"Экран облачного компьютера транслируется в лаунчер, который ты запускаешь на своем устройстве\\\",\\\"Сигналы с устройства уходят на сервер, благодаря чему ты удаленно управляешь облачным ПК\\\"],\\\".mobile-page-bigpicture-header\\\":[\\\"Не меняй ничего,<br> получи всё\\\",\\\"Улетное оборудование\\\",\\\"Кодирование<br>и нулевая задержка\\\",\\\"Битрейт по ситуации\\\",\\\"Загрузки и обновления\\\",\\\"Система хранения данных\\\"],\\\".mobile-bigpicture-text\\\":[\\\"Loudplay – это облачный потоковый сервис, который транслирует изображение удаленного рабочего стола с наших серверов на твоё устройство.\\\",\\\"Удаленный рабочий стол – это полноценный ПК, на который можно установить игры и программы с любых источников. Начиная от аккаунтов из твоих личных библиотек и заканчивая всем, что вообще можно скачать и установить.\\\",\\\"Сервера Loudplay оборудованы последними процессорами Intel Xeon, оперативной памятью до 512 ГБ, графическими процессорами NVIDIA Tesla и SSD массивами.\\\",\\\"Это позволяет предоставить пользователю опыт любой игры в 60+ FPS на ультра настройках и полноценный облачный ПК в распоряжение, с мощностью эквивалентной настольному с 32 ОЗУ, 6 гб GPU, 400 ГБ SSD и Intel Xeon 2,6 ГГц\\\",\\\"Технология сервиса подразумевает кодирования видеопотока в отдельном аппаратном ускорителе на серверной видеокарте.\\\",\\\"Такой подход позволяет не только разгрузить все остальные мощности и направить их на передачу сигнала,но и добиться полного отсутствия задержки изображения со стороны Loudplay.\\\",\\\" Сервис в реальном времени отслеживает состояние сети и регулирует качество видео, если это необходимо. Благодаря этому мы предоставляем пользователю лучший опыт из тех, что вообще можно передать с учетом его конфигурации.\\\",\\\"Обрати внимание: использование сети Wi-Fi 5 ГГц в зоне прямой видимости или проводное подключение существенно улучшает качество картинки.\\\",\\\"Каждый облачный ПК имеет выделенное интернет-соединение со скоростью до 1 Гбит/с, что позволяет скачивать большинство игры за считанные минуты. При этом если игра уже была загружена ранее, то с помощью кэш-серверов мы увеличим скорость её загрузки до 10 Гбит/с!\\\",\\\"За обновлениями мы тоже следим, регулярно обновляя игры из нашего каталога до актуального состояния, чтобы ты не тратил время на дозагрузки\\\",\\\"Скачанные тобой игры и приложения хранятся на наших серверах и будут доступны при следующем входе.Однако, время хранения данных ограничено и варьируется в зависимости от количества активных пользователей которым нужно выделять пространство.\\\",\\\"Но не беспокойся: до удаления данных мы пришлем уведомление, чтобы ты успел среагировать.Всё, что нужно будет сделать – запустить свой облачный ПК, чтобы время хранения продлилось автоматически.\\\"]},\\\"en\\\":{\\\".navbar-link\\\":[\\\"HOW IT WORKS\\\",\\\"WHO WE ARE\\\",\\\"HOW IT WORKS\\\",\\\"WHO WE ARE\\\"],\\\"#navbar-download-link-content\\\":[\\\"PLAY NOW\\\"],\\\"#navbar-download-link-content-mobile\\\":[\\\"PLAY NOW\\\"],\\\"#page-1-rectangle-element-header\\\":[\\\"Cloud PC is\\\"],\\\".page-1-rectangle-element-text\\\":[\\\"Your new way to play and work that does not require any serious funds to buy and upgrade the components.\\\",\\\"All you need is an Internet and a computer that meets our minimum recommendations.\\\"],\\\".page-1-text-content\\\":[\\\"Our servers provide space for your cloud PC\\\",\\\"The cloud computer screen is being broadcast to the launcher you run on your device.\\\",\\\"Signals from the device are sent to the server, allowing you to remotely manage your cloud PC.\\\"],\\\".page-container-text-header\\\":[\\\"Don't change anything,<br> get everything.\\\",\\\"Awesome equipment\\\",\\\"Encoding and zero delay\\\",\\\"Situation bitrate\\\",\\\"Downloads and updates\\\",\\\"Data storage system\\\"],\\\".page-container-text-paragraph\\\":[\\\"Loudplay is a cloud-based streaming service that broadcasts the remote desktop image from our servers to your device.\\\",\\\"The Remote Desktop is a full-fledged PC on which you can install games and programs from any source. Accounts, your personal libraries,…, everything that you can download and install.\\\",\\\"Loudplay servers are equipped with the latest Intel Xeon processors, up to 512GB of RAM, NVIDIA Tesla GPUs and SSD arrays.\\\",\\\"Giving the user the experience of any game in 60+ FPS on the ultra-settings and a full cloud PC, with the equivalent power of a desktop with 32 RAM, 6 GB GPU, 400 GB SSD and Intel Xeon 2.6 GHz.\\\",\\\"The service technology implies encoding the video stream in a separate hardware accelerator on the server video card.\\\",\\\"This approach allows you to not only re-direct all other power and send it to the signal transmission, but also to achieve a complete absence of image delay on the Loudplay platform.\\\",\\\"Real-time service monitors the network status and adjusts video quality if necessary. As a result, we provide users with the best possible experience available based on their configuration.\\\",\\\"Please note, using a 5 GHz Wi-Fi network in the line-of-sight area or a wired connection significantly improves the picture quality.\\\",\\\"Each cloud PC has a dedicated Internet connection up to 1 Gbps, allowing most games to be downloaded in minutes. At the same time, if the game has already been downloaded earlier, with the help of cache servers we will increase the download speed up to 10 Gbit / s!\\\",\\\"We also keep an eye on game updates, regularly upgrading games from our catalogue to the current state, so you don't waste time on reboots.\\\",\\\"The downloaded games and applications are stored on our servers and will be available the next time you login. However, data retention times are limited and vary, depending on the number of active users who need to be allocated space.\\\",\\\"Don't worry, we'll send you a notice before we delete the data so you can react. All you have to do is run your cloud PC so that the storage time will be automatically extended.\\\"],\\\".mobile-header\\\":[\\\"Cloud PC is\\\"],\\\".rectangle-text-mobile\\\":[\\\"Your new way to play and work that does not require any serious funds to buy and upgrade the components.\\\"],\\\".rectangle-outside-text\\\":[\\\"All you need is an Internet and a computer that meets our minimum recommendations.\\\"],\\\".page-2-header\\\":[\\\"Our servers provide space for your cloud PC\\\",\\\"The cloud computer screen is being broadcast to the launcher you run on your device.\\\",\\\"Signals from the device are sent to the server, allowing you to remotely manage your cloud PC.\\\"],\\\".mobile-page-bigpicture-header\\\":[\\\"Don't change anything,<br> get everything.\\\",\\\"Awesome equipment\\\",\\\"Encoding and zero delay\\\",\\\"Situation bitrate\\\",\\\"Downloads and updates\\\",\\\"Data storage system\\\"],\\\".mobile-bigpicture-text\\\":[\\\"Loudplay is a cloud-based streaming service that broadcasts the remote desktop image from our servers to your device.\\\",\\\"The Remote Desktop is a full-fledged PC on which you can install games and programs from any source. Accounts, your personal libraries,…, everything that you can download and install.\\\",\\\"Loudplay servers are equipped with the latest Intel Xeon processors, up to 512GB of RAM, NVIDIA Tesla GPUs and SSD arrays.\\\",\\\"Giving the user the experience of any game in 60+ FPS on the ultra-settings and a full cloud PC, with the equivalent power of a desktop with 32 RAM, 6 GB GPU, 400 GB SSD and Intel Xeon 2.6 GHz.\\\",\\\"The service technology implies encoding the video stream in a separate hardware accelerator on the server video card.\\\",\\\"This approach allows you to not only re-direct all other power and send it to the signal transmission, but also to achieve a complete absence of image delay on the Loudplay platform.\\\",\\\"Real-time service monitors the network status and adjusts video quality if necessary. As a result, we provide users with the best possible experience available based on their configuration.\\\",\\\"Please note, using a 5 GHz Wi-Fi network in the line-of-sight area or a wired connection significantly improves the picture quality.\\\",\\\"Each cloud PC has a dedicated Internet connection up to 1 Gbps, allowing most games to be downloaded in minutes. At the same time, if the game has already been downloaded earlier, with the help of cache servers we will increase the download speed up to 10 Gbit / s!\\\",\\\"We also keep an eye on game updates, regularly upgrading games from our catalogue to the current state, so you don't waste time on reboots.\\\",\\\"The downloaded games and applications are stored on our servers and will be available the next time you login. However, data retention times are limited and vary, depending on the number of active users who need to be allocated space.\\\",\\\"Don't worry, we'll send you a notice before we delete the data so you can react. All you have to do is run your cloud PC so that the storage time will be automatically extended.\\\"]}},\\\"download\\\":{\\\"ru\\\":{\\\".navbar-link\\\":[\\\"КАК ЭТО РАБОТАЕТ\\\",\\\"КТО МЫ ТАКИЕ\\\",\\\"КАК ЭТО РАБОТАЕТ\\\",\\\"КТО МЫ ТАКИЕ\\\"],\\\"#download-header\\\":[\\\"Запусти любые компьютерный игры на своем девайсе\\\"],\\\"#download-subheader\\\":[\\\"Для начала игры необходимо установить приложение\\\"],\\\".download-option-element-text\\\":[\\\"Скачать на WINDOWS\\\",\\\"Скачать на MAC\\\",\\\"Cкачать на Android\\\"]},\\\"en\\\":{\\\".navbar-link\\\":[\\\"HOW IT WORKS\\\",\\\"WHO WE ARE\\\",\\\"HOW IT WORKS\\\",\\\"WHO WE ARE\\\"],\\\"#download-header\\\":[\\\"Run any computer games on your device\\\"],\\\"#download-subheader\\\":[\\\"Install the application to start the game\\\"],\\\".download-option-element-text\\\":[\\\"Download to Windows\\\",\\\"Download to MAC\\\",\\\"Download on Android\\\"]}}}\");\n\n//# sourceURL=webpack:///./static/lang/lang.json?");

/***/ })

/******/ });