const clickHandler = (id) => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('.dropdown-toggle')) {
            console.log('dropdown open');
            document.querySelector(`.${id}__dropdown-container`).classList.add('dropdown-open');
            document.querySelector(`.${id}__dropdown-container .dropdown-menu`).classList.add('dropdown-active');
        } else if (e.target.closest('.dropdown-menu ul li')) {
            const targetElem = e.target.closest('.dropdown-menu ul li');
            document.querySelectorAll(`.${id}__dropdown-container ul li a.selected`).forEach((item) => {
                item.classList.remove('selected');
            });
            targetElem.querySelector('a').classList.add('selected');
            const size = targetElem.querySelector('a').innerText.trim();
            document.querySelector('.dropdown-toggle').innerText = size;

            document.querySelector(`.${id}__dropdown-container.dropdown-open`).classList.remove('dropdown-open');
            document.querySelector(`.${id}__dropdown-container .dropdown-menu.dropdown-active`).classList.remove('dropdown-active');
        } else {
            document.querySelector(`.${id}__dropdown-container.dropdown-open`).classList.remove('dropdown-open');
            document.querySelector(`.${id}__dropdown-container .dropdown-menu.dropdown-active`).classList.remove('dropdown-active');
        }
});
};

export default clickHandler;
