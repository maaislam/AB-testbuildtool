const shippingCalculate = (ID, todayMessage, tomorrowMessage) => {
  const html = `
        <div class="${ID}__shippingCalculate">
            <div class="${ID}__shippingCalculateBox">
                <div class="shipping__message ${ID}__shipping__message--today ">
                    <span class="${ID}__highlight">${todayMessage}</span>
                    <span class="${ID}__text">if ordered within</span>
                    <span class="remain-time"></span>
                </div>
                <div class="shipping__message ${ID}__shipping__message--tomorrow">
                    <span class="${ID}__highlight">${tomorrowMessage}</span>
                    <span class="${ID}__text">if ordered within</span>
                    <span class="within-time"></span>
                </div>        
            </div>
        </div>
    `;
  return html.trim();
};

export default shippingCalculate;
