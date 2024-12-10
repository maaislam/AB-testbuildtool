const gallery = (id, data) => {
  const html = `
    <div class="${id}__gallery">
        <div class="swiper ${id}__sliderWraper">
            <div class="swiper-wrapper">
                ${data
                  .map((item) => {
                    return `
                    <div class="swiper-slide">
                        <img src="${item}" alt="gallery_image" loading="lazy">
                    </div>
                    `;
                  })
                  .join('\n')}
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <div class="swiper ${id}__thumbSliderWrapper">
            <div class="swiper-wrapper">
            ${data
              .map((item) => {
                return `
                  <div class="swiper-slide">
                      <img src="${item}" alt="gallery_image">
                  </div>
                  `;
              })
              .join('\n')}
            </div>
        </div>
    </div>
  
  `;
  return html.trim();
};

export default gallery;
