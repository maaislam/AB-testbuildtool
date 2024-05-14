export const price = (id, sellPrice, comparePrice) => {
  const html = `
            <div class="${id}__availability">
                <span class="${id}__availability-text">In Stock</span>
            </div>
            <div class="${id}__priceBox">
                <span class="${id}__priceBox-price">${sellPrice}</span>
                <span class="${id}__priceBox-compare-price">${comparePrice || null}</span>
            </div>
    `;
  return html;
};
