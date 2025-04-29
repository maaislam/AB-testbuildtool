const modalContent = (id, data) => {
  const { sku, type, title, link, customername, amsrc, thumbnail } = data;
  const html = `
         <div class="${id}__modalContent product-modal-left"><a href="${link}.html"><img
                class="modal-image"
                src="${amsrc}"></a>
        <div class="customer-review">
            <p><span>${customername}</span></p>
        </div>
    </div>
    <div class="product-modal-right">
        <div class="product-details">
            <h2>${title}</h2>
            <p style="margin-bottom:5px;">Flooring type: ${type} ${
    !type.includes('Wood') ? 'Wood' : ''
  }</p>
            <p>${sku}</p>
        </div>
        <div class="thumbnail-wrapper"><a href="${link}.html"><img class="modal-thumbnail"
                    src="${thumbnail}" loading="lazy"></a></div>
        <div class="button-container">
            <div class="modal-button secondary"><a
                href="${link}.html"><button>View Product</button></a>
            </div>
            <div class="modal-button primary"><a
                href="${link}.html?gallery=true" class="${id}__sampleBtn"><button>Order a Free
                        Sample</button></a></div>
        </div>
    </div>
    `;
  return html.trim();
};

export default modalContent;
