/*eslint-disable max-len */
import initialProductsFetch from './helpers/initialProductsFetch';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const cartItems = document.querySelectorAll('.cart.item .item-info');

  const textMsgHtml = (nextPossibleUpgrades) => {
    return `<div class="${ID}__textMsg" data-nextpossibleupgrades="${nextPossibleUpgrades}">Kies ${nextPossibleUpgrades} stuks en krijg extra korting</div>`;
  };

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
        const qtyInputElem = rowItem.querySelector('.input-text.qty');
        const prdItemDetailsElem = rowItem.querySelector(`.${ID}__cartItem .product-item-details`);
        const qtyValue = qtyInputElem.value;
        const options = [];

        upsellOptions.forEach((upsellOption, upsellIndex) => {
          const inputValue = upsellOption.value;
          if (inputValue > 1) {
            rowItem.setAttribute(`data-bulkby-option-${upsellIndex + 1}`, inputValue);
            options.push(inputValue);
          }
        });

        const possibleUpgrades = options.reduce((acc, option) => {
          if (Number(option) > qtyValue) {
            acc.push(Number(option));
          }
          return acc;
        }, []);

        const nextPossibleUpgrades = possibleUpgrades && possibleUpgrades.length > 0 ? Math.min(...possibleUpgrades) : null;

        if (nextPossibleUpgrades && !rowItem.querySelector(`.${ID}__textMsg`)) {
          prdItemDetailsElem.insertAdjacentHTML('beforeend', textMsgHtml(nextPossibleUpgrades));
        }
        // qtyInputElem.addEventListener('change', (e) => {
        //   const { target } = e;
        //   const qtyValue = target.value;
        //   console.log('qtyValue: ', qtyValue);
        // });
      });
    })
    .catch((error) => {
      console.log('An error occurred during Promise.all:', error);
    });
};

export default () => {
  setup(); //use if needed

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__textMsg`)) {
      const updateCartElem = document.querySelector('.action.update');
      const itemRow = target.closest(`.${ID}__cartItem`);
      const qtyInputElem = itemRow.querySelector('.input-text.qty');
      const nextPossibleUpgrade = target.closest(`.${ID}__textMsg`).dataset.nextpossibleupgrades;

      qtyInputElem.value = Number(nextPossibleUpgrade);

      updateCartElem.click();
    }
  });
};
