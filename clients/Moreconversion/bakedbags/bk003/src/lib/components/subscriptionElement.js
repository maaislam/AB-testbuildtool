export const subscriptionElement = (id, savingMoney, monthlyMoney) => {
  const html = `
        <div class="${id}__subscription">
            <div class="${id}__subscription-switch">
                <label class="switch">
                    <input type="checkbox" id="togBtn" checked>
                    <div class="slider round"></div>
                </label>
            </div>
            <div class="${id}__subscription-info">
                <div class="${id}__subscription-info-title">
                    <span class="${id}__monthlyAmount">${monthlyMoney} /month </span>
                    <span class="${id}__savingAmount">(${savingMoney})</span>
                </div>
                <div class="${id}__subscription-info-subtext">Modify Skip or cancel anytime!</div>
            </div>
        </div>
    `;
  return html;
};
