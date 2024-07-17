import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const leftPortion = document.querySelector('.productpage-left');
  const rightPortion = document.querySelector('.productpage-right');

  const bundleOptions = [];
  const purchaseOptions = [];

  const productImage = leftPortion.querySelector('.slick-slide.slick-active img').src;
  const productTitle = rightPortion
    .querySelector('.productpage-right-title .title-h2')
    .textContent.trim();

  const productPrice = rightPortion
    .querySelector('.productpage-right-title span.money')
    .textContent.trim();

  const bundleList = rightPortion.querySelector('.ast-container .ast-vd-options');
  bundleList.querySelectorAll('.ast-vd-option').forEach((option, index) => {
    const quantity = option
      .querySelector('.ast-vd-option-title')
      .textContent.split('save')[0]
      .trim();
    const price = option.querySelector('.ast-vd-option-price-wrapper .money.ast-price').textContent;
    const image =
      index === 0
        ? 'https://www.bakedbags.com/cdn/shop/files/badge-1.svg?v=1699302651'
        : index === '1'
        ? 'https://www.bakedbags.com/cdn/shop/files/badge-2.svg?v=1699302652'
        : 'https://www.bakedbags.com/cdn/shop/files/badge-3.svg?v=1699302652';
    const savings = option.querySelector('.discount-badge span.money')?.textContent || 0;

    const isActive = option.classList.contains('ast-vd-option-active');

    bundleOptions.push({
      quantity,
      price,
      image,
      savings,
      isActive
    });
  });

  const purchaseList = rightPortion.querySelector('.appstle_subscription_wrapper');
  purchaseList.querySelectorAll('.appstle_subscription_wrapper_option').forEach((item, index) => {
    let title;
    let price;
    if (!item.classList.contains('appstle_include_dropdown')) {
      title = item.querySelector('.appstle_one_time_text').textContent;
      price = item.querySelector('.appstle_subscription_amount').textContent;
      purchaseOptions.push({
        title,
        price,
        isActive: item.classList.contains('appstle-active-option')
      });
    } else {
      const radioItems = item.querySelector('.appstleRadioSellingPlanWrapper');
      radioItems.querySelectorAll('.appstle-radio-wrapper').forEach((option) => {
        title = option.innerText.split('\n').join(' ').trim();
        //eslint-disable-next-line prefer-destructuring
        price = `$${title.split('$')[1].split('/delivery')[0]}`;

        purchaseOptions.push({
          title,
          price,
          isActive: option.querySelector('input[type="radio"]')?.checked
        });
      });
    }
  });
  console.log('rightPortion', bundleOptions, purchaseOptions);
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'Control') return; //

  init(); //
};
