import { couponCode } from './assets/icons';
import offerEnd from './components/offerEnd';
import offerEndCountdown from './helpers/offerEndCountdown';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const offerEndElem = document.querySelector('.promo_image .offer_end');
  const designedIconElem = document.querySelector('.promo_image .item_designed');
  const shopBtnElem = document.querySelector('.item_designed .actions');

  designedIconElem.insertAdjacentHTML('afterbegin', `<div class="roundel style10">
      ${couponCode}
    </div>`);

  shopBtnElem.innerHTML = `<a href="https://www.luxuryflooringandfurnishings.co.uk/sale.html" title="Shop the sale >">
                                <span class="shop-sale-btn">
                                    <span class="shop-sale-btn-text">Shop the sale</span>
                                    <span class="shop-sale-btn-icon">
                                        <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1F1F1F" stroke-width="0.00024000000000000003">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.5859 6.34314L12.0002 4.92892L19.0712 12L12.0002 19.0711L10.5859 17.6568L16.2428 12L10.5859 6.34314Z" fill="#000000"></path> 
                                            </g>
                                        </svg>
                                    </span>
                                </span>
                            </a>`;

  if (!document.querySelector(`.${ID}__offerEnd`)) {
    offerEndElem.insertAdjacentHTML('afterend', offerEnd(ID));
    offerEndElem.remove();

    offerEndCountdown();
  }
};

export default () => {
  setup();

  //QA purpose remove - lf306 banners - start
  if (document.querySelector('.lf306__bannerV2')) document.querySelector('.lf306__bannerV2').remove();
  if (document.querySelector('.lf306__banner')) document.querySelector('.lf306__banner').remove();
  //QA purpose remove - lf306 banners - end

  window._conv_q = window._conv_q || [];

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('[href*="/sale.html"]')) {
      _conv_q.push(['triggerConversion', '100462022']);
    }
  });
};
