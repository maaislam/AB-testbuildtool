export const subscriptionElement = (id, savingMoney, monthlyMoney) => {
  const html = `
        <div class="${id}__subscription">
            <div class="${id}__subscription-switch">
                <label class="switch">
                    <input type="checkbox" id="togBtn" >
                    <div class="slider round v2"></div>
                </label>
            </div>
            <div class="${id}__subscription-info">
                <div class="${id}__subscription-info-title">
                    <span class="${id}__monthlyAmount">${monthlyMoney} /month </span>
                    <span class="${id}__savingAmount ${id}__hide">(${savingMoney})</span>
                </div>
                <div class="${id}__subscription-info-subtext">One Time Purchase</div>
            </div>
        </div>
    `;
  return html;
};
