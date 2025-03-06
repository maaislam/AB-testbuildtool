import { getCookie } from '../helpers/utils';

const discountBanner = (id, data) => {
  const isEmailSubmited = getCookie(`${id}__emailSubmitted`);

  const html = `
        <div class="discount-code__wrapper ${id}__discount-banner ${isEmailSubmited ? `${id}__emailSubmited` : ''}">
            <div class="${id}__discount-code__label">10% <br> OFF</div>
            <div class="${id}__discount-code__label-point"></div>
            <div class="${id}__discountText">
              <div class="${id}__discount-code__text" data-discount-text="">Get an extra 10% off ${data.mainText}</div>
              <div class="${id}__discountCodeText" >Enter EVERYTHING10 at Checkout</div>
              <button class="${id}__claimBtn">Claim Discount</button>
            </div>
            
            <div class="${id}__discount-code__border"></div>
        </div>
    `;
  return html.trim();
};
export default discountBanner;
