const progressBar = (id, progressWidth, deductedPrice, isThresholdMet, data) => {
  const message = isThresholdMet
    ? `Spend <strong>$${deductedPrice}</strong> more to get <strong>FREE</strong> shipping`
    : "Congratulations! You've Unlocked Free Shipping";

  const htmlStr = `<div class='${id}__discountProgressContainer'>
                      <div class="${id}__imageBoxContainer">
                        ${data
                          .map((item) => {
                            return `
                                <div class="${id}__item">
                                  <div class="${id}__icon">${item.icon}</div>
                                  <div class="${id}__text">${item.title}</div>
                                </div>
                          `;
                          })
                          .join('\n')}
                      </div>
                      <div class='${id}__discountProgress'>
                          <div class="${id}__discountProgress-bar" style='width:${progressWidth}%'></div>
                      </div>
                      <p class='${id}__shippingMessage'>${message}</p>
                   </div>
      `;

  return htmlStr;
};

export default progressBar;
