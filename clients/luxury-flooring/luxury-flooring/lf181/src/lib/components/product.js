const product = (id, data) => {
  const isActiveDisabled = data.instock ? '' : `${id}__disabled`;
  const selectButtonText = data.instock ? 'Order a free sample' : 'Sample limit reached';

  const html = `
     <div class="${id}__product">
            <div class="${id}__currentProductTag">Current Product</div>
            <div class="${id}__product-container">
                ${
                  data.productImage
                    ? `<a href="${data.url.link}" class="${id}__imageWrapper"><img src="${data.productImage}"/></a>`
                    : ''
                }
                <div class="${id}__productContent">
                    ${data.reviews ? data.reviews.outerHTML : ''}
                    <a href="${data.url.link}">${data.title ? data.title.outerHTML : ''}</a>
                    <div class="${id}__tableContent">
                        <div>
                            ${data.price.outerHTML}
                        </div>
                        <div>${data.productType}</div>
                        <div>${data.details['Thickness:'] || ''}</div>
                        <div>${data.details['Width:'] || ''}</div>
                        <div>${data.details.finish_select}</div>
                        <div>${data.details.solid_wood_surface}</div>
                    </div>   
                    <div class="${id}__buttonWrapper"> 
                        <div class="${id}__add-to-basket ${isActiveDisabled}" data-sku="${
    data.sku
  }">${selectButtonText}</div>
                    </div>
                </div>
                
            </div>
        </div>
  
  `;
  return html.trim();
};

export default product;
