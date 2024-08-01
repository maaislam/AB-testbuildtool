import initialProductsFetch from './helpers/initialProductsFetch';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const cartItems = document.querySelectorAll('.cart.item .item-info');

  const fetchPromises = Array.from(cartItems).map((cartItem) => {
    cartItem.classList.add(`${ID}__cartItem`);
    const url = cartItem.querySelector('a').getAttribute('href');
    return initialProductsFetch(url);
  });

  Promise.all(fetchPromises)
    .then((docs) => {
      docs.forEach((doc, index) => {
        const upsellOptions = doc.querySelectorAll('.custom-child-upsel-checkbox input');
        const rowItem = document.querySelectorAll(`.${ID}__cartItem`)[index];
        upsellOptions.forEach((upsellOption, upsellIndex) => {
          const inputValue = upsellOption.value;
          if (inputValue > 1) rowItem.setAttribute(`data-bulkby-option-${upsellIndex + 1}`, inputValue);
        });
      });
    })
    .catch((error) => {
      console.log('An error occurred during Promise.all:', error);
    });
};

export default () => {
  setup(); //use if needed

  init();
};
