export const fpCalculator = (id) => {
  const html = `
        <div class="${id}__fpCalculator">
            <div class="${id}__fpCalculator-input">
                <p>Number of m² required</p>
                <a href="#">How much do I need?</a>
            </div>
            <div class="${id}__divider"></div>
            <div class="${id}__fpCalculator-calculation">
                <p>Total</p>
            </div>
        </div>
    `;
  return html;
};
