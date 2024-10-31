import { shippingIcon } from '../assets/icons';

export const progressBar = (id, progressWidth, deductedPrice, isThresholdMet) => {
  const message = isThresholdMet
    ? `You are <strong>$${deductedPrice}</strong> away from <strong>Free Shipping!</strong>`
    : "Congratulations! You've Unlocked Free Shipping";

  const htmlStr = `<div class='${id}__discountProgressContainer'>
                          <p class='${id}__shippingMessage'>${message}</p>
                      <div class='${id}__discountProgress'>
                          <div class="${id}__discountProgress-bar" style='width:${progressWidth}%'></div>
                      </div>
                      
                   </div>
      `;

  return htmlStr;
};

export const progressBarV2 = (id, progressWidth, deductedPrice, isThresholdMet) => {
  const message = isThresholdMet
    ? `You are <strong>$${deductedPrice}</strong> away`
    : "Congratulations! You've Unlocked Free Shipping";

  const htmlStr = `<div class='${id}__discountProgressContainerV2'>
                      ${isThresholdMet ? `<span>${shippingIcon}</span>` : ''}
                      <p class='${id}__shippingMessage'>${message}</p>
                      ${
                        isThresholdMet
                          ? `<div class='${id}__discountProgress'>
                                <div class="${id}__discountProgress-bar" style='width:${progressWidth}%'></div>
                            </div>`
                          : ''
                      }

                      ${isThresholdMet ? '<p>Get <strong>Free Shipping!</strong></p>' : ''}         
                   </div>
      `;

  return htmlStr;
};
