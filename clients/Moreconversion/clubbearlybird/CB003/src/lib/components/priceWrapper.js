const priceWrapper = (id, sellPrice, savingAmount) => {
  const html = `
        <div class="${id}__price-wrapper">
            <span class="old-price">${sellPrice}</span>
            <span class="save-badge">${savingAmount}</span>
        </div>
    `;

  return html;
};

export default priceWrapper;
