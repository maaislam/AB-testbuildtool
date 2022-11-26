const clickHandler = (shared, target, fireEvent) => {
         const { ID } = shared;

         if (target.closest('.dropdown-menu ul li')) {
            const targetElem = target.closest('.dropdown-menu ul li');
            document.querySelectorAll(`.${ID}__dropdown-container ul li.selected`).forEach((item) => {
                item.classList.remove('selected');
            });
            targetElem.classList.add('selected');
        }
};

export default clickHandler;
