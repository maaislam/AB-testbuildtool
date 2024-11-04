import { shippingIcon } from '../assets/icons';

const message = (id, isThresholdMet, deductedPrice) => {
  const text = isThresholdMet
    ? `You are <strong>$${deductedPrice}</strong> away from <strong>Free Shipping!</strong>`
    : "Congratulations! You've Unlocked Free Shipping";

  const html = `
    <div class="${id}__message">
        ${isThresholdMet ? `<span>${shippingIcon}</span>` : ''}
        <p>${text}</p>
    </div>
  `;
  return html.trim();
};

export default message;
