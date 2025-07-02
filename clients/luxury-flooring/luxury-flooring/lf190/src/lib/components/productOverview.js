const productOverview = (id, flooring, tag) => {
  const html = `
        <div class="product-overview ${id}__productOverview ${id}__${tag}">
            <h2 class="product-overview-title">Overview</h2>
            <div class="product-overview-grid">
            ${flooring.option
              .map((item) => {
                return `
                <div class="${id}__overview-item">
                    <div class="${id}__image-wrapper">
                        <img src="${item.icon}" alt="${item.title}">
                    </div>
                    <div class="${id}__overview-label">${item.title}</div>
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
