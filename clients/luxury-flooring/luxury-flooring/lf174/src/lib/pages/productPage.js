import { pollerLite } from '../helpers/utils';

const productPage = (ID) => {
    document.body.classList.add(`${ID}__loggedInPdp`);

    pollerLite(['.final-price'], () => {
        const priceWrapper = document.querySelector('.final-price');
        const tradePriceTextElem = `<span class="${ID}__tradePriceText only-price">Trade Price</span>`;

        if (!priceWrapper.querySelector(`.${ID}__tradePriceText`)) {
            priceWrapper.insertAdjacentHTML('afterbegin', tradePriceTextElem);
        }
    });
};
export default productPage;
