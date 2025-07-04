import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import {
  calculateTotalPrice,
  fetchCartData,
  formatPriceUSD,
  getCompareAtPrices,
  pollerLite
} from './helpers/utils';

const { ID, VARIATION } = shared;

const insertPrice = (data) => {
  const cartItems = document.querySelectorAll('.cart__item');
  cartItems.forEach((item) => {
    const { variantId } = item.dataset;
    const targetElement = item.querySelector('.price_total');
    const wasPrice = targetElement.querySelector('.money.was_price');
    const hasProduct = data.find((product) => product.id === Number(variantId));
    if (
      hasProduct &&
      hasProduct.compareAtPrice &&
      !wasPrice &&
      !item.querySelector(`.${ID}__wasPrice`)
    ) {
      const priceHTML = `<span class="money was_price ${ID}__wasPrice">${formatPriceUSD(
        hasProduct.compareAtPrice,
        hasProduct.quantity
      )}</span>`;

      targetElement.insertAdjacentHTML('beforeend', priceHTML);
    }
  });
};

const init = () => {
  //eslint-disable-next-line consistent-return
  const fetchAndComparePrices = async () => {
    try {
      const { items, items_subtotal_price } = await fetchCartData();
      if (!items.length) return console.log('Cart is empty.');

      const results = await getCompareAtPrices(items);
      if (results.length > 0) {
        console.log(results, 'items');
        insertPrice(results);

        if (VARIATION === '2') {
          const { raw: totalRaw, formatted: totalFormatted } = calculateTotalPrice(results);
          const subtotal = items_subtotal_price / 100;

          //Ensure non-negative savings
          const rawSavings = Math.max(0, totalRaw - subtotal);

          const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });

          const savingsFormatted = formatter.format(rawSavings);

          const targetElement = document.querySelector('.subtotal');
          const totalPriceHtmlPlacement = targetElement.querySelector('.right');
          const savingsPriceHtmlPlacement = targetElement.querySelector('.cart_subtotal');

          if (totalFormatted && !document.querySelector(`.${ID}__totalPrice`)) {
            totalPriceHtmlPlacement.insertAdjacentHTML(
              'beforeend',
              `<span class="money was_price ${ID}__totalPrice">${totalFormatted}</span>`
            );
          }

          if (savingsFormatted && !document.querySelector(`.${ID}__savingsPriceWrapper`)) {
            savingsPriceHtmlPlacement.insertAdjacentHTML(
              'afterend',
              `<div class="money ${ID}__savingsPriceWrapper">
                <span class="text">Amount saved</span>
                <span class="amount">${savingsFormatted}</span>
              </div>`
            );
          }
          console.log('Total:', totalFormatted);
          console.log('Savings:', savingsFormatted);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchAndComparePrices();
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();
};
