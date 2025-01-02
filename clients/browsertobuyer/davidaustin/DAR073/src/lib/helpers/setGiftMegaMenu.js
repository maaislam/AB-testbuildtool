import desktopMenuWrapper from '../components/desktopMenuWrapper';
import mobileMenuWrapper from '../components/mobileMenuWrapper';
import menuData from '../data/data';
import { pollerLite } from './utils';

const setGiftMegaMenu = (ID) => {
    const firstItemOfDesktop = document.querySelector('label[for="mega-menu-shop-toggle"]');
    const firstItemListElem = firstItemOfDesktop.parentElement;
    const firstItemRadioInputElem = document.querySelector('#mega-menu-shop-toggle.peer');

    //clone first radio input for second radio input
    const giftAndAccessoriesRadioInputElem = firstItemRadioInputElem.cloneNode(true);
    giftAndAccessoriesRadioInputElem.id = 'mega-menu-gifts-and-accessories-toggle';
    //set radio input for gift and accessories
    if (!document.querySelector('#mega-menu-gifts-and-accessories-toggle')) {
        firstItemRadioInputElem.insertAdjacentElement('afterend', giftAndAccessoriesRadioInputElem);
    }

    //clone first nav label for second nav label
    const giftAndAccessoriesLabelElem = firstItemOfDesktop.cloneNode(true);
    giftAndAccessoriesLabelElem.innerText = 'Gifts & Accessories';
    giftAndAccessoriesLabelElem.setAttribute('for', 'mega-menu-gifts-and-accessories-toggle');

    const giftAndAccessoriesListHTML = `<li class="giftAndAccessoriesList h-full min-h-header">
        ${giftAndAccessoriesLabelElem.outerHTML}
    </li>`;
    //insert gift and accessories list after first item of
    if (!document.querySelector('.giftAndAccessoriesList')) {
        firstItemListElem.insertAdjacentHTML('afterend', giftAndAccessoriesListHTML);
    }

    //set desktop menus overlay for gift and accessories
    const firstMegaMenuElem = document.querySelector('#mega-menu-shop');
    //clone first mega menu for second mega menu
    const giftAndAccessoriesMegaMenuElem = firstMegaMenuElem.cloneNode(true);
    giftAndAccessoriesMegaMenuElem.id = 'mega-menu-gifts-and-accessories';
    firstMegaMenuElem.insertAdjacentElement('afterend', giftAndAccessoriesMegaMenuElem);

    if (!document.querySelector(`.${ID}__desktopMenuWrapper-Gifts-Accessories`)) {
        const newClasses = `${ID}__desktopMenuWrapper-Gifts-Accessories px-offset pt-lg pb-xl flex gap-gutter max-h-visual`;
        giftAndAccessoriesMegaMenuElem.insertAdjacentHTML('afterbegin', desktopMenuWrapper(ID, menuData['Gifts & Accessories'], newClasses));
    }

    if (!document.querySelector(`.${ID}__mobileMenuWrapper-gifts-and-accessories`)) {
        const mobileRosesWrapperElem = document.querySelector(`.${ID}__mobileMenuWrapper-Roses`);
        const newClasses = `${ID}__mobileMenuWrapper-gifts-and-accessories`;
        mobileRosesWrapperElem.insertAdjacentHTML('afterend', mobileMenuWrapper(ID, menuData['Gifts & Accessories'], newClasses));
    }
};
export default setGiftMegaMenu;
