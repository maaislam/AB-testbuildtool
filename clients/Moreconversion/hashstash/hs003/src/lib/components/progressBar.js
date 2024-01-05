const progressBar = (id, progressWidth, deductedPrice, isThresholdMet) => {
  const message = isThresholdMet ? `$${deductedPrice} away from FREE Shipping` : "Congratulations! You've Unlocked Free Shipping";
  const htmlStr = `<div class='${id}__discountProgress'>
      <p class='${id}__shippingMessage'>${message}</p>
      <div class="${id}__discountProgress-bar" style='width:${progressWidth}%'></div>
    </div>
    <p class='${id}__shippingMessage'>${message}</p>
    `;

  return htmlStr;
};

export default progressBar;
