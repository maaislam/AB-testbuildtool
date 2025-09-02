/*eslint-disable object-curly-newline */
import setup from './services/setup';

import shared from './shared/shared';
import initSwiper from './helpers/initSwiper';

import mainWrapper from './components/mainWrapper';
import {
  addToCart,
  formatPrice,
  getOption2WithPrice,
  getPackCount,
  getProduct,
  pollerLite,
  uniqOpts
} from './helpers/utils';

const { ID } = shared;
const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const priceDomUpdate = (plan, findVariant) => {
  const { compare_at_price, price } = plan;
  const targetPoint = document.querySelector('label[for="auto-ship"]');
  const oneTimeOption = document.querySelector('.oneTime-option');
  const totalPriceElement = document.querySelector(`.${ID}__total-price`);
  const stockOutButton = document.querySelector(`.${ID}__out-of-stock`);
  const addToCartButton = document.querySelector(`.${ID}__addtocart`);
  const mainPrice = document.querySelector(`.${ID}__mainPrice`);
  const itemElement = document.querySelector(`.${ID}__addtocart .btn-items`);

  const packCount = getPackCount(findVariant.option2);
  const chooseOption = document.querySelector('input[name="pricing-option"]:checked');

  //console.log(packCount, 'packCount');

  oneTimeOption.querySelector('.price').innerHTML = formatPrice(compare_at_price);
  itemElement.innerHTML = `${packCount} ITEM${packCount > 1 ? 'S' : ''}`;

  if (targetPoint) {
    targetPoint.querySelector('.price').innerHTML = `<strike>${formatPrice(
      compare_at_price
    )}</strike> ${formatPrice(price)}`;
  }

  if (chooseOption.id === 'auto-ship') {
    totalPriceElement.innerHTML = `<span class="line-through" style="display: none">${formatPrice(
      compare_at_price,
      packCount
    )}</span> ${formatPrice(price, packCount)}`;

    mainPrice.innerHTML = formatPrice(price, packCount);

    window.packQuantity = packCount;
    window.prodId = findVariant.id;
    window.sellingPlanId = plan.selling_plan_id;
  } else if (chooseOption.id === 'buy-once') {
    totalPriceElement.innerHTML = `<span class="line-through" style="display: none"></span>${formatPrice(
      compare_at_price || price,
      packCount
    )}`;

    mainPrice.innerHTML = formatPrice(compare_at_price || price, packCount);

    window.packQuantity = packCount;
    window.prodId = findVariant.id;
    window.sellingPlanId = null;
  }

  if (findVariant.available) {
    stockOutButton.style.display = 'none';
    addToCartButton.style.display = 'inline-block';
  } else {
    stockOutButton.style.display = 'block';
    addToCartButton.style.display = 'none';
  }
};

const priceCalculation = () => {
  const activeFalvorElement = isMobile()
    ? document.querySelector('.active-flavor')
    : document.querySelector('.flavor-active');

  //console.log(activeFalvorElement, 'activeFalvorElement');
  const activePackElement = document.querySelector('.pack-active');
  const flavor = activeFalvorElement ? activeFalvorElement.dataset.key : null;
  const pack = activePackElement ? activePackElement.dataset.key : null;

  const activeDeliveryOption = document.querySelector('.active-option');
  const { id } = activeDeliveryOption.dataset;

  const findVariant = window[`${ID}__variants`].find((variant) => {
    if (variant.options[0].includes(flavor) && variant.options[1].includes(pack)) {
      return variant;
    }
  });

  if (findVariant) {
    const { selling_plan_allocations } = findVariant;
    const findSellingPlan = selling_plan_allocations.find(
      (plan) => plan.selling_plan_id === Number(id)
    );

    //console.log('selecting plan', findSellingPlan, findVariant);
    priceDomUpdate(findSellingPlan, findVariant);
  }
};

const init = () => {
  const targetPoint = document.querySelector('.js-cluster-wrapper[id="16477143"]');

  //usage
  getProduct('https://clubearlybird.com/products/earlybird-morning-cocktail-copy.js')
    .then((data) => {
      //console.log(data, 'data');
      //data = your big array
      const { variants, price_max, selling_plan_groups, images } = data;

      const flavoursArray = uniqOpts(variants, 'option1');
      const packArray = getOption2WithPrice(variants);

      window[`${ID}__variants`] = variants;

      console.log(data, 'data');
      if (!document.querySelector(`.${ID}__product-selection`)) {
        targetPoint.insertAdjacentHTML(
          'beforebegin',
          mainWrapper(ID, price_max, flavoursArray, packArray, selling_plan_groups, images)
        );

        pollerLite([() => window.Swiper !== undefined], () => {
          initSwiper();
        });
        priceCalculation();
      }
    })
    .catch(console.error);
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('.active-option')) {
      const clickedItem = target.closest('.active-option');
      const wrapper = clickedItem.closest('.delivery-options');
      wrapper.classList.toggle('active');

      const flavorWrapper = document.querySelector('.flavor-mobile');
      if (flavorWrapper) flavorWrapper.classList.remove('active');
    } else if (target.closest('.option-item')) {
      const wrapper = document.querySelector('.delivery-options');
      const clickedItem = target.closest('.option-item');
      const { id } = clickedItem.dataset;
      const text = clickedItem.textContent;
      const targetPoint = document.querySelector('.active-option');
      if (targetPoint) {
        targetPoint.querySelector('span:first-child').textContent = text;
        targetPoint.dataset.id = id;
      }
      if (wrapper) wrapper.classList.remove('active');
      priceCalculation();
    } else if (target.closest('.pack-option')) {
      const clickedItem = target.closest('.pack-option');
      const activeItems = document.querySelectorAll('.pack-option.pack-active');
      activeItems.forEach((item) => {
        item.classList.remove('pack-active');
      });
      clickedItem.classList.add('pack-active');
      priceCalculation();
    } else if (target.closest('.flavor-option') && target.closest('.flavor-desktop')) {
      const clickedItem = target.closest('.flavor-option');
      const activeItems = document.querySelectorAll('.flavor-option.flavor-active');
      activeItems.forEach((item) => {
        item.classList.remove('flavor-active');
      });
      clickedItem.classList.add('flavor-active');
      priceCalculation();
    } else if (target.closest('.active-flavor') && target.closest('.flavor-mobile')) {
      const clickedItem = target.closest('.active-flavor');
      const wrapper = clickedItem.closest('.flavor-mobile');
      wrapper.classList.toggle('active');

      const subscribeWrapper = document.querySelector('.delivery-options');
      if (subscribeWrapper) subscribeWrapper.classList.remove('active');
      //priceCalculation();
    } else if (target.closest('.flavor-option') && target.closest('.flavor-options-hidden')) {
      const wrapper = document.querySelector('.flavor-mobile');
      const clickedItem = target.closest('.flavor-option');
      const { key } = clickedItem.dataset;
      const text = clickedItem.querySelector('span:last-child').textContent;
      const icon = clickedItem.querySelector('span:first-child').innerHTML;

      const targetPoint = document.querySelector('.active-flavor');
      if (targetPoint) {
        targetPoint.dataset.key = key;
        targetPoint.querySelector('span:nth-child(2)').textContent = text;
        targetPoint.querySelector('span:first-child').innerHTML = icon;
      }
      if (wrapper) wrapper.classList.remove('active');
      priceCalculation();
    } else if (target.closest('.first-option') && !target.closest('.active-flavor')) {
      document.querySelector('input#auto-ship').click();
      priceCalculation();
    } else if (target.closest('.second-option')) {
      document.querySelector('input#buy-once').click();
      priceCalculation();
    } else if (target.closest(`.${ID}__addtocart`)) {
      target.closest(`.${ID}__addtocart`).disabled = true;
      addToCart(window.prodId, window.packQuantity, window.sellingPlanId)
        .then((cartItem) => {
          //console.log('Added:', cartItem);
          target.closest(`.${ID}__addtocart`).disabled = false;
          window.location.pathname = '/checkout';
        })
        .catch((err) => {
          target.closest(`.${ID}__addtocart`).disabled = false;
          console.error(err);
        });
    } else if (
      target.closest('.tabs-accordion-title') &&
      target.closest(`.${ID}__tabs-accordion`)
    ) {
      const parentItem = target.closest('.tabs-accordion-item');
      const content = parentItem.querySelector('.tabs-accordion-content');

      //Toggle active class to open/close accordion
      parentItem.classList.toggle('active');

      //If the content is open, slide it up, otherwise slide it down
      if (parentItem.classList.contains('active')) {
        content.style.maxHeight = `${content.scrollHeight}px`; //Expand content
      } else {
        content.style.maxHeight = '0'; //Collapse content
      }
    } else if (!target.matches('.active-option') || !target.matches('.active-flavor')) {
      const wrapper = document.querySelector('.delivery-options');
      if (wrapper) wrapper.classList.remove('active');

      const flavorWrapper = document.querySelector('.flavor-mobile');
      if (flavorWrapper) flavorWrapper.classList.remove('active');
    }
  });
  init();
};
