import { freeShippingIcon } from '../assets/icons';

const promoShippingBanner = (id) => {
  const html = `
    <div class="${id}__wrapper">
        <div class="${id}__promo-banner">
        <div class="promo-content">
            <div class="promo-icon">
              <span>${freeShippingIcon}</span>
            </div>
            <div class="promo-text">
            <span class="promo-text-bold">FREE SHIPPING</span>
            <span class="promo-text-normal"> UNLOCKED WITH </span>
            <span class="promo-text-bold">45 SERVING </span>
            <span class="promo-text-normal"> STARTER KIT PURCHASE</span>
            </div>
        </div>
        </div>
    </div>
    `;
  return html.trim();
};

export default promoShippingBanner;
