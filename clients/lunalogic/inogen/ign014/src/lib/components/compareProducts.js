const compareProducts = (id, data) => {
  const html = `
        <div class="${id}__compareProducts">
            <div class="${id}__packageContainer-inner">
                <div class="${id}__productsTable">
                    <div class="${id}__productsWrapper ${id}__sticky">
                        <div class="swiper-slide">
                            <div class="item">
                                <div class="${id}__list">
                                    <div class="product-info">
                                        <div class="sticky-prod-title">${
                                          data.stickyInfo.title
                                        }</div>
                                    </div>
                                    ${data.stickyInfo.items
                                      .map((item) => {
                                        return `<span>${item.title}</span>`;
                                      })
                                      .join('\n')}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="${id}__productsWrapper swiper">
                        <div class="swiper-wrapper">
                            ${data.productsInfo
                              .map((item) => {
                                return `
                                <div class="swiper-slide">
                                    <div class="item">
                                        <div class="${id}__list" style="--bg-color:${item.bgColor}">
                                            <div class="product-info" style="--set-bg-color:${
                                              item.bgColor
                                            }">
                                                <div class="product-content" >
                                                    <h3 class="product-title">${item.prodName}</h3>
                                                    <p class="product-price">${item.prodPrice}</p>
                                                    ${
                                                      item.ctaText
                                                        ? `<a class="product-link" href="${item.ctaLink}">${item.ctaText}</a>`
                                                        : ''
                                                    }
                                                </div>
                                                ${
                                                  item.imageLink
                                                    ? `
                                                        <div class="product-image" style="--set-bg:url(${item.imageLink})">
                                            
                                                        </div>
                                                    
                                                    `
                                                    : ''
                                                }
                                            </div>
                                            ${
                                              item.weightInfo
                                                ? `<span>${item.weightInfo}</span>`
                                                : ''
                                            }
                                            ${
                                              item.batteryInfo
                                                ? `<span>${item.batteryInfo}</span>`
                                                : ''
                                            }
                                            ${
                                              item.probability
                                                ? `<span>${item.probability}</span>`
                                                : ''
                                            }
                                            ${
                                              item.noiseLavel
                                                ? `<span>${item.noiseLavel}</span>`
                                                : ''
                                            }
                                            ${item.warranty ? `<span>${item.warranty}</span>` : ''}
                                            ${item.faaValue ? `<span>${item.faaValue}</span>` : ''}
                                            ${
                                              item.assembledValue
                                                ? `<span>${item.assembledValue}</span>`
                                                : ''
                                            }
                                            ${
                                              item.availability
                                                ? `<span>${item.availability}</span>`
                                                : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                                `;
                              })
                              .join('\n')}
                            <!-- More swiper-slide items here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default compareProducts;
