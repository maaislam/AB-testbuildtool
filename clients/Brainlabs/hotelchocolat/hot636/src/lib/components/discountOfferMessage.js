import { cartBagIcon } from '../assets/svg';

const discountOfferMessage = (id, isThresholdMet, deductedPrice) => {
    const message = isThresholdMet ? `Spend £30, get 15% off - You’re just £${deductedPrice} away` : 'Congrats! Your order qualifies for 15% off';
    const htmlStr = `
        <div class="${id}__discountOfferMessage">
            <span>${cartBagIcon}</span>
            <p>${message}</p>
        </div>
    `;

    return htmlStr;
};

export default discountOfferMessage;
