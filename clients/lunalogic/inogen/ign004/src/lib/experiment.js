import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { addToCart, pollerLite } from './helpers/utils';
import fakeButton from './components/fakeButton';

const { ID, VARIATION } = shared;

const renderFakeButton = (targetElement) => {
  if (!document.querySelector(`.${ID}__fakeAtb`)) {
    targetElement.insertAdjacentHTML('beforebegin', fakeButton(ID));
  }
};

const initVariationHandler = () => {
  const form = document.querySelector('.variations_form');

  if (!form) return;

  form.addEventListener('change', (event) => {
    const select = event.target;
    if (select.tagName.toLowerCase() === 'select') {
      //Delay to allow DOM update
      setTimeout(() => {
        const { value } = select;
        const addToCartBtn = document.querySelector('.post--pdp__cta--add-to-cart');
        const { display } = window.getComputedStyle(addToCartBtn);

        if (value && display === 'inline-block') {
          console.log('Value selected and Add to Cart button is now visible');
          //Trigger your logic here (tracking, enabling next step, etc.)
          renderFakeButton(addToCartBtn);
        }
      }, 50); //adjust delay if needed
    }
  });
};

const init = () => {
  pollerLite(['form.variations_form'], () => {
    initVariationHandler();
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  document.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__fakeAtb`)) {
      const clickedItem = target.closest(`.${ID}__fakeAtb`);
      const wrapper = clickedItem.closest('div');
      const productIdElement = wrapper.querySelector('input[name="add-to-cart"]');
      const productId = productIdElement.value;
      console.log(productIdElement, 'productIdElement', productId);
      addToCart(1, productId).then((doc) => {
        if (doc) {
          console.log(doc, 'doc');
        }
      });
    }
  });

  init();
};
