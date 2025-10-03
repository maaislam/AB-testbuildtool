const packageStr = (id, data) => {
  const html = `
        <div class="${id}__packageContainer">
            <div class="${id}__packageContainer-inner">
                <div class="${id}__packageContainer-info">
                    <h2>${data.title}</h2>
                    <p>${data.subtitle}</p>
                </div>
                <div class="${id}__productsTable">
                    <div class="${id}__productsWrapper ${id}__sticky">
                        <div class="swiper-slide">
                            <div class="item">
                                <div class="${id}__list">
                                    ${data.stickyInfo
                                      .map((item) => {
                                        return `<span>${item.title}</span>`;
                                      })
                                      .join('\n')}
                                </div>
                                <p style="opacity:0;">$3,900</p>
                                <button style="opacity:0;">Add to Cart</button>
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
                                            ${item.heading ? `<span>${item.heading}</span>` : ''}
                                            ${
                                              item.standard_value
                                                ? `<span>${item.standard_value}</span>`
                                                : ''
                                            }
                                            ${
                                              item.intermediate_value
                                                ? `<span>${item.intermediate_value}</span>`
                                                : ''
                                            }
                                            ${
                                              item.extended_batteries
                                                ? `<span>${item.extended_batteries}</span>`
                                                : ''
                                            }
                                            ${
                                              item.connector ? `<span>${item.connector}</span>` : ''
                                            }
                                            ${item.warranty ? `<span>${item.warranty}</span>` : ''}
                                            ${
                                              item.power_supplies
                                                ? `<span>${item.power_supplies}</span>`
                                                : ''
                                            }
                                            ${
                                              item.user_manual
                                                ? `<span>${item.user_manual}</span>`
                                                : ''
                                            }
                                            ${
                                              item.bluetooth ? `<span>${item.bluetooth}</span>` : ''
                                            }
                                            ${item.app ? `<span>${item.app}</span>` : ''}
                                        </div>
                                        ${
                                          item.price
                                            ? `<p class="package-price">${item.price}</p>`
                                            : ''
                                        }
                                        ${
                                          item.atc
                                            ? `<button class="package-btn" id="${item.id}">${item.atc}</button>`
                                            : ''
                                        }
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

export default packageStr;
