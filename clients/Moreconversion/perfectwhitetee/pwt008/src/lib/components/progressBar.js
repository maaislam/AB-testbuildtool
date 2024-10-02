const formatPrice = (amount, code = 'en-US', currency = 'USD') => {
  return new Intl.NumberFormat(code, {
    style: 'currency',
    currency
  }).format(amount);
};

const progressBar = (id, progressWidth, status, extraPrice, data) => {
  const message =
    extraPrice !== 0
      ? `<span>Add more ${formatPrice(extraPrice)}</span> items to <span>${status}</span> ${
          status.includes('Free') ? '' : 'extra'
        }`
      : "Congratulations! You've Unlocked <span>Get 10% OFF</span> extra";

  const htmlStr = `<div class='${id}__discountProgressContainer' data-status="${status}">
                      <div class="${id}__imageBoxContainer">
                        ${data
                          .map((item) => {
                            return `
                                <div class="${id}__item">
                                  <div class="${id}__icon">
                                    <img src="${item.activeImg}" class="active-img"/>
                                  </div>
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
