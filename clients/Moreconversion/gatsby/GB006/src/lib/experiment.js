import stripe from './components/stripe';
import getSelectedItems from './helpers/getSelectedItems';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const urls = {
  //brown
  '/products/oxford-lisse-orthopedic-dress-shoe-2': {
    stripe: '/products/oxford-lisse-orthopedic-dress-shoe-2',
    nonStripe: '/products/oxford-no-stripe-lisse-orthopedic-dress-shoe'
  },
  '/products/oxford-lisse': {
    stripe: '/products/oxford-lisse',
    nonStripe: '/products/oxford-no-stripe-lisse-orthopedic-dress-shoe'
  },
  '/products/oxford-no-stripe-lisse-orthopedic-dress-shoe': {
    stripe: '/products/oxford-lisse',
    nonStripe: '/products/oxford-no-stripe-lisse-orthopedic-dress-shoe'
  },
  '/collections/our-shoes/products/oxford-lisse-orthopedic-dress-shoe-2': {
    stripe: '/products/oxford-lisse-orthopedic-dress-shoe-2',
    nonStripe: '/products/oxford-no-stripe-lisse-orthopedic-dress-shoe'
  },
  '/collections/our-shoes/products/oxford-lisse': {
    stripe: '/collections/our-shoes/products/oxford-lisse',
    nonStripe: '/collections/our-shoes/products/oxford-no-stripe-lisse-orthopedic-dress-shoe'
  },
  '/collections/our-shoes/products/oxford-no-stripe-lisse-orthopedic-dress-shoe': {
    stripe: '/collections/our-shoes/products/oxford-lisse',
    nonStripe: '/collections/our-shoes/products/oxford-no-stripe-lisse-orthopedic-dress-shoe'
  },
  //black color
  '/products/genuine-leather-men-casual-shoes-breathable-lace-up-oxfords-dress-business-formal': {
    stripe: '/products/genuine-leather-men-casual-shoes-breathable-lace-up-oxfords-dress-business-formal',
    nonStripe: '/products/oxford-derby-no-stripe'
  },
  '/products/oxford-derby-no-stripe': {
    stripe: '/products/genuine-leather-men-casual-shoes-breathable-lace-up-oxfords-dress-business-formal',
    nonStripe: '/products/oxford-derby-no-stripe'
  },
  '/collections/our-shoes/products/genuine-leather-men-casual-shoes-breathable-lace-up-oxfords-dress-business-formal': {
    stripe: '/collections/our-shoes/products/genuine-leather-men-casual-shoes-breathable-lace-up-oxfords-dress-business-formal',
    nonStripe: '/collections/our-shoes/products/oxford-derby-no-stripe'
  },
  '/collections/our-shoes/products/oxford-derby-no-stripe': {
    stripe: '/collections/our-shoes/products/genuine-leather-men-casual-shoes-breathable-lace-up-oxfords-dress-business-formal',
    nonStripe: '/collections/our-shoes/products/oxford-derby-no-stripe'
  }
};

const init = () => {
  const selectedData = JSON.parse(localStorage.getItem(`${ID}-selectedData`));

  const attachPoint = document.querySelector('.variant-wrapper .grid__item');
  if (!document.querySelector(`.${ID}__stripedContainer`)) {
    attachPoint.insertAdjacentHTML('beforeend', stripe(ID));
  }

  if (selectedData) {
    const { color, size, width, selectedStripe } = selectedData;

    const colorElem = document.querySelector(`[name="color"] > input[value="${color}"]`);
    const sizeElem = document.querySelector(`[name="mens-shoe-size-us"] > input[value="${size}"]`);
    const widthElem = document.querySelector(`[name="width"] > input[value="${width}"]`);
    const stripeElem = document.querySelector(`.${ID}__stripeButtons > button[data-name="${selectedStripe}"]`);

    colorElem && colorElem.nextElementSibling.click();
    sizeElem && sizeElem.nextElementSibling.click();
    widthElem && widthElem.nextElementSibling.click();

    if (stripeElem) stripeElem.classList.add('active');
  }

  localStorage.removeItem(`${ID}-selectedData`);
};

export default () => {
  setup();
  init();

  const { pathname } = window.location;

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    const stripBtn = document.querySelector(`.${ID}__stripeButton`);
    const nonStripBtn = document.querySelector(`.${ID}__nonStripeButton`);

    const urlMatch = urls[pathname];

    if (target.closest(`.${ID}__stripeButton`) && urlMatch && pathname !== urlMatch.stripe) {
      nonStripBtn.classList.remove('active');
      stripBtn.classList.add('active');

      const selectedData = getSelectedItems(ID);
      localStorage.setItem(`${ID}-selectedData`, JSON.stringify(selectedData));

      window.location.href = urlMatch.stripe;
    } else if (target.closest(`.${ID}__nonStripeButton`) && urlMatch && pathname !== urlMatch.nonStripe) {
      stripBtn.classList.remove('active');
      nonStripBtn.classList.add('active');

      const selectedData = getSelectedItems(ID);
      localStorage.setItem(`${ID}-selectedData`, JSON.stringify(selectedData));

      window.location.href = urlMatch.nonStripe;
    }
  });
};
