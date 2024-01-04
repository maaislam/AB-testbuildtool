import { productCardMobile } from './productCardMobile';

export const cartUpsellMobile = (ID, arr) => {
  const html = `
    <scroll-carousel selector=".horizontal-product" id="cart-drawer-recommendations" class="horizontal-product-list-carousel separate scroll-area bleed ${ID}__cartUpsellMobile">
      <div class="horizontal-product-list separate">
        ${arr.map((item) => productCardMobile(item, ID)).join('')} 
      </div>
    </scroll-carousel>
      `;

  return html.trim();
};
