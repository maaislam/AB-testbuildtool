/*eslint-disable no-param-reassign */
import setup from './services/setup';
import shared from './shared/shared';
import { observeIntersection } from './helpers/utils';
import { atcWrapper } from './components/atcWrapper';
import { activeBundleOption } from './components/activeBundleOption';
import { activePurchaseOption } from './components/activePurchaseOption';

const { ID, VARIATION } = shared;
const bundleOptions = [];
const purchaseOptions = [];

const init = () => {
  const leftPortion = document.querySelector('.productpage-left');
  const rightPortion = document.querySelector('.productpage-right');
  const intersectionAnchor = document.querySelector('#AddToCart');

  const productImage = leftPortion.querySelector('.slick-slide.slick-active img').src;
  const productTitle = rightPortion
    .querySelector('.productpage-right-title .title-h2')
    .textContent.trim();

  const productPrice = rightPortion
    .querySelector('.productpage-right-title span.money')
    .textContent.trim();

  const productObj = {
    productImage,
    productTitle,
    productPrice
  };

  const bundleList = rightPortion.querySelector('.ast-container .ast-vd-options');
  bundleList.querySelectorAll('.ast-vd-option').forEach((option, index) => {
    const quantity = option
      .querySelector('.ast-vd-option-title')
      .textContent.split('save')[0]
      .trim();
    const price = option.querySelector('.ast-vd-option-price-wrapper .money.ast-price').textContent;
    const image =
      index === 0
        ? '/cdn/shop/files/badge-1.svg?v=1699302651'
        : index === '1'
        ? '/cdn/shop/files/badge-2.svg?v=1699302652'
        : '/cdn/shop/files/badge-3.svg?v=1699302652';
    const savings = option.querySelector('.discount-badge span.money')?.textContent || 0;

    const isActive = option.classList.contains('ast-vd-option-active');

    bundleOptions.push({
      id: option.querySelector('input[type="radio"]').id,
      quantity,
      price,
      image,
      savings,
      isActive
    });
  });

  const purchaseList = rightPortion.querySelector('.appstle_subscription_wrapper');
  purchaseList.querySelectorAll('.appstle_subscription_wrapper_option').forEach((item) => {
    let title;
    let price;
    if (!item.classList.contains('appstle_include_dropdown')) {
      title = item.querySelector('.appstle_one_time_text').textContent;
      price = item.querySelector('.appstle_subscription_amount').textContent;
      purchaseOptions.push({
        title,
        price,
        isActive: item.classList.contains('appstle-active-option'),
        id: item.querySelector('input[type="radio"]').id
      });
    } else {
      const radioItems = item.querySelector('.appstleRadioSellingPlanWrapper');
      radioItems
        .querySelectorAll('.appstle-radio-wrapper .appstle-radio-input-wrapper')
        .forEach((option) => {
          title = option.innerText.split('\n').join(' ').trim();
          //eslint-disable-next-line prefer-destructuring
          price = `$${title.split('$')[1].split('/delivery')[0]}`;

          purchaseOptions.push({
            title,
            price,
            isActive: option.querySelector('input[type="radio"]')?.checked,
            id: option.querySelector('input[type="radio"]').id
          });
        });
    }
  });

  console.log('rightPortion', bundleOptions, purchaseOptions);

  if (!document.querySelector(`.${ID}__atcWrapper`)) {
    document.body.insertAdjacentHTML(
      'beforeend',
      atcWrapper(ID, productObj, bundleOptions, purchaseOptions)
    );
  }

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      console.log('🚀 ~ entries.forEach ~ entry:', entry);
      const stickySection = document.querySelector(`.${ID}__atcWrapper`);
      let scrollTimer;
      clearTimeout(scrollTimer);
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        stickySection.classList.remove('slide-out-bottom');
        stickySection.classList.remove(`${ID}__hide`);
        stickySection.classList.add(`${ID}__show`);
      } else {
        stickySection.classList.remove(`${ID}__show`);
        stickySection.classList.add('slide-out-bottom');
        scrollTimer = setTimeout(() => {
          stickySection.classList.add(`${ID}__hide`);
        }, 250);
      }
    });
  };

  observeIntersection(intersectionAnchor, 0, handleIntersection);
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__bundleOptionsContainer .${ID}__activeBundleOption`)) {
      const parentElement = target.closest(`.${ID}__bundleOptionsContainer`);
      parentElement.classList.toggle('active');
    } else if (target.closest(`.${ID}__purchaseOptionsContainer .${ID}__activeBundleOption`)) {
      const parentElement = target.closest(`.${ID}__purchaseOptionsContainer`);
      parentElement.classList.toggle('active');
    } else if (target.closest(`.${ID}__bundleOptionsContainer .bundleOptionLists .bundleOption`)) {
      const parentElement = target.closest(`.${ID}__bundleOptionsContainer`);
      const { id } = target.closest(
        `.${ID}__bundleOptionsContainer .bundleOptionLists .bundleOption`
      );

      const activeBundle = bundleOptions.find((item) => item.id === id);

      document.querySelector(
        `.${ID}__bundleOptionsContainer .${ID}__activeBundleOption`
      ).innerHTML = activeBundleOption(activeBundle);
      parentElement.classList.remove('active');

      document.querySelector(`.productpage-right #${id}`).click();

      document.querySelector(
        `.${ID}__purchaseOptionsContainer .${ID}__activeBundleOption`
      ).innerHTML = activePurchaseOption(purchaseOptions[0], 0);
      document.querySelector(`.productpage-right #${purchaseOptions[0].id}`).click();
    } else if (
      target.closest(`.${ID}__purchaseOptionsContainer .bundleOptionLists .bundleOption`)
    ) {
      const parentElement = target.closest(`.${ID}__purchaseOptionsContainer`);
      const { id } = target.closest(
        `.${ID}__purchaseOptionsContainer .bundleOptionLists .bundleOption`
      );

      const activeBundle = purchaseOptions.find((item) => item.id === id);
      const isActiveIndex = purchaseOptions.findIndex((item) => item.id === id);
      document.querySelector(
        `.${ID}__purchaseOptionsContainer .${ID}__activeBundleOption`
      ).innerHTML = activePurchaseOption(activeBundle, isActiveIndex);

      document.querySelector(
        `.${ID}__bundleOptionsContainer .${ID}__activeBundleOption`
      ).innerHTML = activeBundleOption(bundleOptions[0]);
      parentElement.classList.remove('active');

      const atcBtns = document.querySelectorAll('[class*="__atcButtonContainer"]');

      if (id.includes('appstle_subscription')) {
        document
          .querySelector('.appstle_include_dropdown .appstle_subscription_radio_wrapper input')
          .click();
      }

      setTimeout(() => {
        document
          .querySelector(`.productpage-right .appstle_subscription_wrapper_option #${id}`)
          .click();
      }, 100);
    } else if (target.closest('.ast-vd-options .ast-vd-option')) {
      const clickcedItem = target.closest('.ast-vd-options .ast-vd-option').querySelector('input');
      const { id } = clickcedItem;
      document.querySelector(`.${ID}__bundleOptionsContainer .bundleOptionLists #${id}`).click();
    } else if (target.closest('.appstle_sub_widget')) {
      const clickcedItem = target.closest('.appstle_subscription_wrapper_option');

      setTimeout(() => {
        if (clickcedItem.classList.contains('appstle_include_dropdown')) {
          const inputs = document.querySelectorAll('.appstleRadioSellingPlanWrapper input');
          const activeInput = Array.from(inputs).find((item) => item.checked);
          const { id } = activeInput;

          const activeBundle = purchaseOptions.find((item) => item.id === id);
          const isActiveIndex = purchaseOptions.findIndex((item) => item.id === id);
          document.querySelector(
            `.${ID}__purchaseOptionsContainer .${ID}__activeBundleOption`
          ).innerHTML = activePurchaseOption(activeBundle, isActiveIndex);
          //document.querySelector(
          //`.${ID}__bundleOptionsContainer .${ID}__activeBundleOption`
          //).innerHTML = activeBundleOption(bundleOptions[0]);
        } else {
          const activeItem = clickcedItem.querySelector(
            '.appstle_subscription_wrapper_option input'
          );
          const { id } = activeItem;
          const activeBundle = purchaseOptions.find((item) => item.id === id);
          const isActiveIndex = purchaseOptions.findIndex((item) => item.id === id);
          document.querySelector(
            `.${ID}__purchaseOptionsContainer .${ID}__activeBundleOption`
          ).innerHTML = activePurchaseOption(activeBundle, isActiveIndex);
          //document.querySelector(
          //`.${ID}__bundleOptionsContainer .${ID}__activeBundleOption`
          //).innerHTML = activeBundleOption(bundleOptions[0]);
        }
      }, 500);
    } else if (
      target.closest(`.${ID}__atcButtonContainer`) ||
      target.closest(`.${ID}__atcButtonContainer-mobile`)
    ) {
      const atcBtn = document.querySelector('#AddToCart');

      atcBtn.click();
    } else if (target.closest(`.${ID}__atcWrapper-container`)) {
      const activeEl = target.closest(`.${ID}__atcWrapper-container`).querySelectorAll('.active');
      activeEl.forEach((el) => el.classList.remove('active'));
    } else if (target.closest(`.${ID}__crossIcon`)) {
      const parentElement = document.querySelector(`.${ID}__atcWrapper`);
      parentElement.classList.remove(`${ID}__show`);
      parentElement.classList.add('slide-out-bottom');
      setTimeout(() => {
        parentElement.classList.add(`${ID}__hide`);
      }, 250);
    }
  });
  if (VARIATION === 'Control') return; //

  init(); //
};
