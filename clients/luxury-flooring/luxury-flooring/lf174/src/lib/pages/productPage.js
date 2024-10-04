import { pdpDeliveryIcon, pdpFlexiblePaymentIcon, pdpPriceMatchPromiseIcon, pdpStockIcon } from '../assets/icons';
import { pollerLite } from '../helpers/utils';

const dropdownData = [
    {
        title: 'Next-Day Delivery to Site',
        icon: pdpDeliveryIcon,
        content: '<p>Found your dream flooring but not quite ready to take it? We’ve got you.</p>'
    },
    {
        title: 'Next-Day Delivery to Site',
        icon: pdpStockIcon,
        content: '<p>Found your dream flooring but not quite ready to take it? We’ve got you.</p>'
    },
    {
        title: 'Next-Day Delivery to Site',
        icon: pdpPriceMatchPromiseIcon,
        content: '<p>Found your dream flooring but not quite ready to take it? We’ve got you.</p>'
    },
    {
        title: 'Next-Day Delivery to Site',
        icon: pdpFlexiblePaymentIcon,
        content: '<p>Found your dream flooring but not quite ready to take it? We’ve got you.</p>'
    }
];

const productPage = (ID) => {
    document.body.classList.add(`${ID}__loggedInPdp`);

    pollerLite(['.final-price'], () => {
        const priceWrapper = document.querySelector('.final-price');
        const tradePriceTextElem = `<span class="${ID}__tradePriceText only-price">Trade Price</span>`;

        if (!priceWrapper.querySelector(`.${ID}__tradePriceText`)) {
            priceWrapper.insertAdjacentHTML('afterbegin', tradePriceTextElem);
        }

        if (!priceWrapper.querySelector(`.${ID}__accordion`)) {
            const spAccordion = document.querySelector('#sp_accordion');
            spAccordion.classList.add(`${ID}__accordion`);
            const accordionHeaderElems = document.querySelectorAll('#sp_accordion .collapsible');
            const accordionContentElems = document.querySelectorAll('#sp_accordion .content');

            accordionHeaderElems.forEach((header, index) => {
                const iconElem = header.querySelector('h4 .icon svg');
                const content = header.querySelector('h4 em');

                const { title, icon } = dropdownData[index];

                iconElem.classList.add(`${ID}__hide`);
                content.textContent = title;
                iconElem.insertAdjacentHTML('afterend', icon);
            });

            accordionContentElems.forEach((content) => {
                content.innerHTML = dropdownData[0].content;
            });
        }
    });
};
export default productPage;
