const mobileSuccessDiscountMsg = (id, data, VARIATION) => {
  const html = `
       <div class="${id}__mobile-modal-content ${id}__successMsgMobile">
           <div class="${id}__successTitle">Here is your discount code:</div>
          <div class="${id}__copyCode">${data.discountCode}</div>
          <div class="${id}__copyWrapper">Tap to copy the code</div>
          <p class="${id}__modal-right-heading">${data.condition}</p>
          <button class="${id}__modal-button ${id}__gap ${id}__continueShoppingBtn">Continue Shopping</button>
           ${
             VARIATION === '2'
               ? ` <p class="${id}__modal-right-heading ${id}__nogap">${data.additionalMsg}</p>`
               : ''
           }
      </div>
    `;
  return html.trim();
};

export default mobileSuccessDiscountMsg;
