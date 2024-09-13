const updateMenus = () => {
    const redeemListHtml = `<li>
        <a id="HeaderDrawer-redeem-offer" class="menu-drawer__menu-item list-menu__item link link--text focus-inset">
            Redeem Special Offer
        </a>
    </li>`;
    const ingredientsListHtml = `<li>
        <a id="HeaderDrawer-ingredients" class="menu-drawer__menu-item list-menu__item link link--text focus-inset">
            Ingredients
        </a>
    </li>`;
    const ourStoryListElem = document.querySelector('#HeaderDrawer-our-story').closest('li');
    const reviewsListElem = document.querySelector('#HeaderDrawer-reviews').closest('li');
    const reviewsElem = document.querySelector('#HeaderDrawer-contact');

    if (!document.querySelector('#HeaderDrawer-redeem-offer')) {
        ourStoryListElem.insertAdjacentHTML('beforebegin', redeemListHtml);
    }

    if (!document.querySelector('#HeaderDrawer-ingredients')) {
        reviewsListElem.insertAdjacentHTML('afterend', ingredientsListHtml);
    }

    reviewsElem.innerText = 'Contact Us';
};
export default updateMenus;
