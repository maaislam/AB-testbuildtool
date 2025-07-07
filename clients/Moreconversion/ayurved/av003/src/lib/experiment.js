import setup from './services/setup';
import shared from './shared/shared';
import { fetchCartData, formatPriceUSD, getCompareAtPrices } from './helpers/utils';

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
      console.log('🚀 ~ fetchAndComparePrices ~ items:', items);

      const results = await getCompareAtPrices(items);
      console.log('🚀 ~ fetchAndComparePrices ~ results:', results);
      if (results.length > 0) {
        console.log(results, 'results');
        insertPrice(results);

        if (VARIATION === '2') {
          const targetElement = document.querySelector('.subtotal');
          const totalPriceHtmlPlacement = targetElement.querySelector('.right');
          const savingsPriceHtmlPlacement = targetElement.querySelector('.cart_subtotal');

          const parsePrice = (priceStr) => {
            if (typeof priceStr !== 'string') return NaN;
            const cleaned = priceStr.replace(/[^\d.,-]/g, '').trim();
            const normalized =
              cleaned.includes(',') && !cleaned.includes('.')
                ? cleaned.replace(',', '.')
                : cleaned.replace(/,/g, '');
            return parseFloat(normalized);
          };

          const getCurrencySymbol = (str) => {
            const match = str.trim().match(/^[^\d.,\s]+/);
            return match ? match[0] : '';
          };

          let totalSavings = 0;
          let currencySymbol = '';

          //Step 1: Get total savings from all .price_total blocks
          document.querySelectorAll('.price_total').forEach((priceBlock) => {
            const wasEl = priceBlock.querySelector('.money.was_price');
            if (!wasEl) return;

            const wasText = wasEl.textContent.trim();
            const was = parsePrice(wasText);
            if (!currencySymbol) currencySymbol = getCurrencySymbol(wasText);

            let sale = 0;
            const saleEl = priceBlock.querySelector('.money.sale');
            if (saleEl) {
              sale = parsePrice(saleEl.textContent.trim());
            }

            const saving = was - sale;
            if (!isNaN(saving) && saving >= 0) {
              totalSavings += saving;
            }
          });

          //Step 2: Get subtotal from cart_subtotal
          const subtotalEl = document.querySelector('.cart_subtotal .money');
          const subtotalRaw = subtotalEl?.textContent.trim() ?? '';
          const subtotal = parsePrice(subtotalRaw);
          if (!currencySymbol && subtotalRaw) {
            currencySymbol = getCurrencySymbol(subtotalRaw);
          }

          //Step 3: Calculate total possible price
          const totalPossible = subtotal + totalSavings;

          //✅ Output
          console.log(`You save: ${currencySymbol}${totalSavings.toFixed(2)}`);
          console.log(`Total possible price: ${currencySymbol}${totalPossible.toFixed(2)}`);

          if (totalSavings > 0) {
            console.log(`You save: ${currencySymbol}${totalSavings.toFixed(2)}`);

            totalPriceHtmlPlacement.insertAdjacentHTML(
              'beforeend',
              `<span class="money was_price ${ID}__totalPrice">${currencySymbol}${totalPossible.toFixed(
                2
              )}</span>`
            );

            savingsPriceHtmlPlacement.insertAdjacentHTML(
              'afterend',
              `<div class="money ${ID}__savingsPriceWrapper">
                <span class="text">Amount saved</span>
                <span class="amount">${currencySymbol}${totalSavings.toFixed(2)}</span>
              </div>`
            );
          } else {
            console.log('No savings found.');
          }
        }
      }
    } catch (error) {
      console.log('🚀 Error:', error);
    }
  };

  fetchAndComparePrices();
};

export default () => {
  setup();

  init();
};
