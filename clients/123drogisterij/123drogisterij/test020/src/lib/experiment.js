import setup from './services/setup';
import shared from './shared/shared';
import initialProductsFetch from './helpers/initialProductsFetch';
import notification from '../components/notification';

const { ID } = shared;

const freeShipping = 4.95;

const textToURL = (text) => {
  return text
    .toLowerCase() //Convert to lowercase
    .replace(/[^a-z0-9]+/g, '-') //Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ''); //Remove leading and trailing hyphens
};

const formatPrice = (amount, code = 'en-GB', currency = 'EUR') =>
  new Intl.NumberFormat(code, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);

const init = () => {
  const summaryTitleElem = document.querySelector('.items-in-cart .title');
  const ariaSelected = summaryTitleElem.getAttribute('aria-selected');
  const cartItems = document.querySelectorAll('.content.minicart-items .product-item');

  if (ariaSelected === 'false') {
    summaryTitleElem.click();
  }

  const fetchPromises = Array.from(cartItems).map((cartItem) => {
    cartItem.classList.add(`${ID}__cartItem`);
    const productTitle = cartItem.querySelector('.product-item-name');
    const productTitleText = productTitle.textContent.trim();
    const pathname = textToURL(productTitleText);

    return initialProductsFetch(`https://www.123drogisterij.nl/${pathname}`);
  });

  Promise.all(fetchPromises)
    .then((docs) => {
      const totalSavings = docs.reduce((accumulatedSavings, doc, index) => {
        const finalPriceElement = doc.querySelector('span[data-price-type="finalPrice"]');
        let orginalPrice = finalPriceElement.dataset.priceAmount;

        const { base_price_incl_tax, qty } = window.checkoutConfig.totalsData.items[index];

        const basePrice = Number(base_price_incl_tax) * qty;
        orginalPrice = Number(orginalPrice) * qty;

        const itemSavings = parseFloat((orginalPrice - basePrice).toFixed(2));

        return accumulatedSavings + itemSavings;
      }, 0);

      const roundedTotalSavings = parseFloat(totalSavings.toFixed(2));

      if (
        formatPrice(roundedTotalSavings) &&
        formatPrice(roundedTotalSavings) !== '€0.00' &&
        !document.querySelector(`.${ID}__upsell-notification`)
      ) {
        const cartSummary = document.querySelector('.items-in-cart');
        cartSummary.insertAdjacentHTML(
          'afterend',
          notification(ID, formatPrice(totalSavings + freeShipping), 'active')
        );
      }
    })
    .catch((error) => {
      console.log('An error occurred during Promise.all:', error);
    });
};

export default () => {
  setup();

  init();
};
