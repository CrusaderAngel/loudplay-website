export default class BurgerManipulator {
   static  openMenu() {
        let menu = document.querySelectorAll('.menu-mobile');
        document.querySelector('.burger-icon').classList.toggle('inactive');
        document.querySelector('.burger-cross').classList.toggle('inactive');
        document.querySelector('.burger-cross').classList.toggle('active');
        document.querySelector('#navbar-download-link-content-mobile').style.display = "none";
        menu.forEach(item => {
            item.classList.toggle('unpressed');
            item.classList.toggle('pressed')
        })
    }
    
    static  closeMenu() {
        let menu = document.querySelectorAll('.menu-mobile');
        document.querySelector('.burger-icon').classList.toggle('inactive');
        document.querySelector('.burger-icon').classList.toggle('active');
        document.querySelector('.burger-cross').classList.toggle('active');
        document.querySelector('.burger-cross').classList.toggle('inactive');
        document.querySelector('#navbar-download-link-content-mobile').style.display = "flex";
        menu.forEach(item => {
            item.classList.toggle('pressed');
            item.classList.toggle('unpressed')
        })
    }
}