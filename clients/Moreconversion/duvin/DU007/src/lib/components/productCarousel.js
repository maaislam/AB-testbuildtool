import productWrapper from './productWrapper';

const productCarousel = (id, data) => {
  const html = `
    <div class="${id}__productCarouselWrapper">
        <div class="${id}__productCarouselContainer">
            <h1>SHOP THE LOOK</h1>
            <div class="swiper ${id}__swiper">
              ${productWrapper(id, data)}
            </div>
        </div>
    </div>
  `;
  return html.trim();
};

export default productCarousel;
