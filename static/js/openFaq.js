export function openFaq() {

    let classNameArray = ['first', 'second', 'third', 'fourth', 'fifth'];

    classNameArray.forEach(name => {
        document.querySelectorAll(`.${name}`).forEach(item => {
            item.addEventListener('click', openAnswer)
        });
    });

    function openAnswer() {
        this.classNameArray.forEach(item => {
            if (event.target.classList.contains(item)) {
                document.getElementById(item).style.display = 'flex';
            } else {
                document.getElementById(item).style.display = 'none';
            }
        });
    };

}