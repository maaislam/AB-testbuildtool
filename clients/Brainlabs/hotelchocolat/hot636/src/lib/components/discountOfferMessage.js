import { cartBagIcon } from '../assets/svg';

const discountOfferMessage = (id, isThresholdMet, deductedPrice) => {
    const message = isThresholdMet
        ? `<span>Spend £30, get 15% off</span> - You’re just <span>£${deductedPrice} away</span>`
        : `<span class='${id}__gotDiscountMessage'>Congrats! Your order qualifies for 15% off</span>`;
    const htmlStr = `
        <div class="${id}__discountOfferMessage">
            <span>${cartBagIcon}</span>
            <p class='${id}__discountOfferMessage-text'>${message}</p>
        </div>
    `;

    return htmlStr;
};

export default discountOfferMessage;
