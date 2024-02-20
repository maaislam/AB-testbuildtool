const progressBar = (id, progressWidth, deductedPrice, isThresholdMet) => {
  const message = isThresholdMet
    ? `$${deductedPrice} away from FREE Shipping`
    : 'Your order qualifies for FREE SHIPPING 🚚';
  const htmlStr = `
    <p class='${id}__shippingMessage'>${message}</p>
    <div class='${id}__discountProgress'>  
      <div class="${id}__discountProgress-bar" style='width:${progressWidth}%'></div>
    </div>
    
    `;

  return htmlStr;
};

export default progressBar;
