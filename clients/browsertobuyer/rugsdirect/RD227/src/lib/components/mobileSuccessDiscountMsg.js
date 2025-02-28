const mobileSuccessDiscountMsg = (id) => {
  const html = `
       <div class="${id}__mobile-modal-content ${id}__successMsgMobile">
           <div class="${id}__successTitle">Here is your discount code:</div>
          <div class="${id}__copyCode">EVERYTHING10</div>
          <div class="${id}__copyWrapper">Click to copy the code</div>
          <p class="${id}__modal-right-heading">Enter this code in the basket for 10% off your order</p>
          <button class="${id}__modal-button ${id}__gap">Continue Shopping</button>
      </div>
    `;
  return html.trim();
};

export default mobileSuccessDiscountMsg;
