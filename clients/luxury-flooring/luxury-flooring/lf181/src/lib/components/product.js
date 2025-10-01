export const product = (id, data) => {
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
                        <div>${data.details.flooringtype || ''}</div>
                        <div>${data.details['Thickness:'] || ''}</div>

                        ${
                          data?.details?.flooringtype?.toLowerCase().includes('vinyl') ||
                          data?.details?.flooringtype?.toLowerCase().includes('laminate')
                            ? `
                                <div>${data.details.shade || ''}</div>       
                            `
                            : `
                            <div>${data.details['Width:'] || ''}</div>
                            <div>${data.details.finish_select || ''}</div>
                            <div>${data.details.solid_wood_surface || ''}</div>
                            `
                        }
                    </div>   
                    <div class="${id}__buttonWrapper"> 
                        ${
                          data.isAvailableForSample
                            ? `
                              <div class="${id}__add-to-basket ${isActiveDisabled}" data-sku="${data.sku}">${selectButtonText}</div>
                          `
                            : `
                              <div class="${id}__add-to-basket ${id}__disabled">Samples coming soon</div>
                            `
                        }
                    </div>
                </div>
                
            </div>
        </div>
  
  `;
  return html.trim();
};

export const productMobile = (id, data, tagName) => {
  const isActiveDisabled = data.instock ? '' : `${id}__disabled`;
  const selectButtonText = data.instock ? 'Get free sample' : 'Sample limit reached';
  const classNames = tagName === 'swipe' ? 'swiper-slide' : '';

  const html = `
       <div class="${id}__product ${classNames}">
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
                          <div>
                          <strong>Flooring Type</strong>
                          ${data.details.flooringtype || ''}
                          </div>
                          <div>
                          <strong>Thickness</strong>
                          ${data.details['Thickness:'] || ''}
                          </div>
  
                          ${
                            data?.details?.flooringtype?.toLowerCase().includes('vinyl') ||
                            data?.details?.flooringtype?.toLowerCase().includes('laminate')
                              ? `
                                  <div>
                                  <strong>Colour</strong>
                                  ${data.details.shade || ''}
                                  </div>       
                              `
                              : `
                              <div>
                              <strong>Width</strong>
                              ${data.details['Width:'] || ''}</div>
                              <div>
                              <strong>Finish</strong>
                              ${data.details.finish_select || ''}</div>
                              <div>
                              <strong>Surface</strong>
                              ${data.details.solid_wood_surface || ''}</div>
                              `
                          }
                      </div>   
                      <div class="${id}__buttonWrapper">    
                      ${
                        data.isAvailableForSample
                          ? `
                            <div class="${id}__add-to-basket ${isActiveDisabled}" data-sku="${data.sku}">${selectButtonText}</div>
                        `
                          : `
                            <div class="${id}__add-to-basket ${id}__disabled">Samples coming soon</div>
                          `
                      }
                      </div>
                  </div>
                  
              </div>
          </div>
    
    `;
  return html.trim();
};
