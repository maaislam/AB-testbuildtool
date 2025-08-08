const productOverview = (id, flooring, tag, isExistingSku) => {
  const html = `
        <div class="product-overview ${id}__productOverview ${id}__${tag}">
            <h2 class="product-overview-title">Overview</h2>
            <div class="product-overview-grid">
            ${
              isExistingSku
                ? `
              <div class="${id}__overview-item">
                    <div class="${id}__image-wrapper">
                        <img src="https://luxuryflooring.co.uk/media/wysiwyg/ab_tests/test190/icon_lac.png" alt="Lacquered Finish">
                    </div>
                    <div class="${id}__overview-label">Lacquered Finish</div>
                </div>
              `
                : ''
            }
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
