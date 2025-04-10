import { applyDiscount } from '../helpers/utils';

export const promoBoxMobile = (id, price) => {
  const html = `
        <div class="${id}__discount-banner">
            <div class="${id}__price-line">
                <span>Price with code: <strong>EARLY10</strong></span>
                <span class="${id}__price">£${applyDiscount(price, 10)}m²</span>
            </div>
            <div class="${id}__extra-discount">EXTRA 10% OFF</div>
        </div>
    `;
  return html.trim();
};
