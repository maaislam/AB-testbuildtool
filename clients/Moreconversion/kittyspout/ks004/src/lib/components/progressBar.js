const progressBar = (id, progressWidth, deductedPrice, isThresholdMet) => {
  const message = isThresholdMet
    ? `You are $${deductedPrice} away from FREE Shipping 🚚`
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

export default progressBar;
