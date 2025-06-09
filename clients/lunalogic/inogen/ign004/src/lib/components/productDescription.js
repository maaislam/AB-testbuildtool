const productDescription = (id, mainProductObj, selections) => {
  const { title, image, price } = mainProductObj;
  const html = `
        <div class="item-added-container">
            <h2>Item added to bag</h2>
            <div class="product-info">
                <div class="product-image">
                  <img src="${image}" alt="product title">
                </div>
                <div class="product-details">
                <div class="prod-title">${title.outerHTML}</div>
                <p class="price">$${price}</p>
                ${
                  selections && selections.length > 0
                    ? `
                    ${selections
                      .map((selection) => {
                        return `
                        <p class="selection-item">${selection.label}: ${selection.value}</p>
                      `;
                      })
                      .join('\n')}
                  `
                    : ''
                }    
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default productDescription;
