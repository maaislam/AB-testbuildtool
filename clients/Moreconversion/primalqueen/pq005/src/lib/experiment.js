/*eslint-disable radix */
import quantity from './components/quantity';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  if (document.querySelector(`.${ID}__quantity`)) return;
  const priceElem = document.querySelector('.package2 .price_text2');
  priceElem.insertAdjacentHTML('beforebegin', `<div class='${ID}__qtyTitle'>Quantity</div>`);
  priceElem.insertAdjacentHTML('afterbegin', quantity(ID));
};

export default () => {
  setup();

  init();

  document.body.addEventListener('click', (e) => {
    const input = document.querySelector(`#${ID}__input`);
    const addToCartElem = document.querySelector('.package2 .packge_button_outer a');
    const addToCartHref = addToCartElem.getAttribute('href'); //https://primalqueen.com/cart/clear?return_to=/cart/add?items[][id]=46296750096661%26items[][quantity]=1%26return_to=/checkout

    const updateHref = (qty) => {
      const newHref = addToCartHref.replace(/items\[\]\[quantity\]=\d+/, `items[][quantity]=${qty}`);
      addToCartElem.setAttribute('href', newHref);
      console.log('Updated addToCartHref: ', newHref);
    };

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
      const addToCartElem = document.querySelector('.package2 .packge_button_outer a');
      const addToCartHref = addToCartElem.getAttribute('href');
      const newHref = addToCartHref.replace(/items\[\]\[quantity\]=\d+/, `items[][quantity]=${qty}`);
      addToCartElem.setAttribute('href', newHref);
    }
  });
};
