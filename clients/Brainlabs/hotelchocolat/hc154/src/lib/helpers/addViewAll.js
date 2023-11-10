const addViewAll = (anchorPointSelectors, htmlStr, id) => {
    anchorPointSelectors.forEach((anchorPointSelector, index) => {
        const anchorPoint = document.querySelector(`${anchorPointSelector} .has-sub-menu[href*="/christmas"] + .content-asset ul.sub-level`);
        anchorPoint.insertAdjacentHTML('afterbegin', htmlStr);

        const viewAll = document.querySelector(`${anchorPointSelector} .${id}__viewAll`);
        const christmasNav = document.querySelector(`${anchorPointSelector} .${id}__viewAll + li`);

        const isViewAllClicked = sessionStorage.getItem('isViewAllClicked');
        if (window.location.pathname.includes('/shop/christmas/') && isViewAllClicked === 'true') {
            viewAll.classList.add('current');
            christmasNav.classList.remove('current');
            index === 1 && sessionStorage.removeItem('isViewAllClicked');
        }
    });
};
export default addViewAll;
