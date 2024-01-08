import { productCard } from './productCard';

export const cartUpsell = (ID, arr) => {
  const html = `
  <div class="swiper horizontal-product-list-carousel separate scroll-area bleed ${ID}__cartUpsell">
    <div class="swiper-wrapper horizontal-product-list separate ">
      ${arr.map((item) => productCard(item, ID)).join('')} 
    </div>
  </div>
    `;

  return html.trim();
};
