import { applyDiscount } from '../helpers/utils';

export const promoBoxDesktop = (id, price) => {
  const html = `
        <div class="${id}__price-box">
            <p class="${id}__code-line">Price with: <strong>EARLY10</strong></p>
            <p class="${id}__price">£${applyDiscount(
    price,
    10
  )}<span class="${id}__unit">m²</span></p>
            <div class="${id}__extra-off">EXTRA 10% OFF</div>
        </div>
    `;
  return html.trim();
};
