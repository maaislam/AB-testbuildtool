const modalContent = (id, data, sku) => {
  const html = `
          <div class="swiper ${id}__swiper__${sku} ${id}__mainSlider">
            <div class="swiper-wrapper">
                ${data
                  .map((item) => {
                    return `
                        <div class="swiper-slide">
                            <img src="${item}" />
                        </div>
                    `;
                  })
                  .join('\n')}
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <div thumbsSlider="" class="swiper ${id}__swiperThumb__${sku} ${id}__thumbSlider">
            <div class="swiper-wrapper">
                ${data
                  .map((item) => {
                    return `
                        <div class="swiper-slide">
                            <img src="${item}" />
                        </div>
                    `;
                  })
                  .join('\n')}
            </div>
        </div>
    `;
  return html.trim();
};

export default modalContent;
