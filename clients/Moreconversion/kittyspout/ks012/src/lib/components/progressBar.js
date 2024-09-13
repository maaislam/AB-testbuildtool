const progressBar = (id, progressWidth, deductedPrice, isThresholdMet, localthreshold) => {
  //console.log('🚀 ~ progressBar ~ deductedPrice:', typeof deductedPrice);
  const formattedAmount = (amount, round = 2) => {
    const { active: storeCurrency } = window.Shopify.currency;
    const { moneyFormat } = window.theme.settings;
    const stringToReplace = moneyFormat.includes('{{amount}}')
      ? '{{amount}}'
      : '{{amount_with_comma_separator}}';
    let formattedAmt = moneyFormat.replace(stringToReplace, amount.toFixed(round));

    if (storeCurrency === 'EUR') {
      formattedAmt = formattedAmt.replace('.', ',');
    }
    return formattedAmt;
  };

  const message = isThresholdMet
    ? `You are ${formattedAmount(deductedPrice)} away from FREE Shipping`
    : "Congratulations! You've Unlocked Free Shipping";

  const htmlStr = `<div class='${id}__discountProgressContainer'>
        <p class='${id}__shippingMessage'>${message}</p>
        <div class='${id}__discountProgress-container'>
          <span class="${id}__first">${formattedAmount(0, 0)}</span>
          <div class='${id}__discountProgress'>
            <div class="${id}__discountProgress-bar" style='width:${progressWidth}%'></div>
          </div>
          <span class="${id}__last">${localthreshold}</span>
        </div>
        
      </div>
      `;

  return htmlStr;
};

export default progressBar;
