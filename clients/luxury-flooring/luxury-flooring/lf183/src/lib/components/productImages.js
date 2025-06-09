const productImages = (id, data, sku) => {
  const html = `
         <div class="swiper ${id}__swiper ${id}__productSwiper_${sku}">
            <div class="swiper-wrapper">
                ${data
                  .map((item) => `<div class="swiper-slide"><img src="${item}"/></div>`)
                  .join('\n')}
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    `;
  return html.trim();
};

export default productImages;
