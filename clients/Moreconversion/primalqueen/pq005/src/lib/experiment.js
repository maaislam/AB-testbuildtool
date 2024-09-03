/*eslint-disable radix */
import quantity from './components/quantity';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const updateHref = (qty) => {
  const addToCartElem = VARIATION === '1' ? document.querySelector('.package2 .packge_button_outer a') : document.querySelector('.package1 .packge_button_outer a');
  const addToCartHref = addToCartElem.getAttribute('href');
  const newHref = addToCartHref.replace(/items\[\]\[quantity\]=\d+/, `items[][quantity]=${qty}`);
  addToCartElem.setAttribute('href', newHref);
};

const init = () => {
  if (document.querySelector(`.${ID}__quantity`)) return;
  const priceElem = VARIATION === '1' ? document.querySelector('.package2 .price_text2') : document.querySelector('.package1 .price_text2');
  priceElem.insertAdjacentHTML('beforebegin', `<div class='${ID}__qtyTitle'>Quantity</div>`);
  priceElem.insertAdjacentHTML('afterbegin', quantity(ID));
};

export default () => {
  setup();

  init();

  document.body.addEventListener('click', (e) => {
    const input = document.querySelector(`#${ID}__input`);

    if (e.target.closest(`.${ID}__minus`)) {
      if (input.value > 1) {
        input.value = parseInt(input.value, 10) - 1;
        updateHref(input.value);
      }
    } else if (e.target.closest(`.${ID}__plus`)) {
      input.value = parseInt(input.value, 10) + 1;
      updateHref(input.value);
    }
  });

  const input = document.querySelector(`#${ID}__input`);
  input.addEventListener('input', () => {
    let qty = parseInt(input.value, 10);

    if (input.value === '') {
      input.value = '';
    } else if (Number.isNaN(qty) || qty <= 0) {
      qty = 1;
      input.value = qty;
    }

    //set new quantity in href and update add to cart button href
    if (!Number.isNaN(qty) && qty > 0) {
      const addToCartElem = VARIATION === '1' ? document.querySelector('.package2 .packge_button_outer a') : document.querySelector('.package1 .packge_button_outer a');
      const addToCartHref = addToCartElem.getAttribute('href');
      const newHref = addToCartHref.replace(/items\[\]\[quantity\]=\d+/, `items[][quantity]=${qty}`);
      addToCartElem.setAttribute('href', newHref);
    }
  });
};
