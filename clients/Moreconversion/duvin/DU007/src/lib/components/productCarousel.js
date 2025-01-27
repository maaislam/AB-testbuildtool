const productCarousel = (id, data) => {
  const html = `
    <div class="${id}__productCarouselWrapper">
        <div class="${id}__productCarouselContainer">
            <h1>SHOP THE LOOK</h1>
            <div class="swiper ${id}__swiper">
                <div class="swiper-wrapper">
                    ${data.map((item) => item.outerHTML).join('\n')}
                </div>
            </div>
        </div>
    </div>
  `;
  return html.trim();
};

export default productCarousel;
