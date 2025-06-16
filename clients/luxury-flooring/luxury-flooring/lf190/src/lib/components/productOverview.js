const productOverview = (id, finalArray, tag) => {
  const html = `
        <div class="product-overview ${id}__productOverview ${id}__${tag}">
            <h2 class="product-overview-title">Product Overview</h2>
            <div class="product-overview-grid">
            ${finalArray
              .map((item) => {
                return `
                <div class="${id}__overview-item">
                    <div class="${id}__image-wrapper">
                        <img src="${item.imageUrl}" alt="${item.icon}">
                    </div>
                    <div class="${id}__overview-label">${item.value}</div>
                </div>
                `;
              })
              .join('\n')}
                
            </div>
            
        </div>

    `;

  return html.trim();
};

export default productOverview;
