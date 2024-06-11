export const fpCalculator = (id) => {
  const html = `
        <div class="${id}__fpCalculator">
            <div class="${id}__fpCalculator-input">
                <p>Number of m² required</p>
                <div class='${id}__calculator-openner'>How much do I need?</div>
            </div>
            <div class="${id}__divider"></div>
            <div class="${id}__fpCalculator-calculation">
                <p>Total</p>
            </div>
        </div>
    `;
  return html;
};
