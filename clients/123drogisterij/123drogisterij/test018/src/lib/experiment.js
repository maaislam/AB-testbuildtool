import setup from './services/setup';
import shared from './shared/shared';
import initialProductsFetch from './helpers/initialProductsFetch';
import notification from './components/notification';

const { ID, VARIATION } = shared;
const freeShipping = 4.95;

const formatPrice = (amount, code = 'en-GB', currency = 'EUR') =>
  new Intl.NumberFormat(code, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);

const init = () => {
  const cartItems = document.querySelectorAll('.cart.item .item-info');

  const fetchPromises = Array.from(cartItems).map((cartItem) => {
    cartItem.classList.add(`${ID}__cartItem`);
    const url = cartItem.querySelector('a').getAttribute('href');
    return initialProductsFetch(url);
  });

  Promise.all(fetchPromises)
    .then((docs) => {
      const totalSavings = docs.reduce((accumulatedSavings, doc, index) => {
        const upsellOptions = doc.querySelectorAll('.custom-child-upsel-checkbox input');
        const finalPriceElement = doc.querySelector('span[data-price-type="finalPrice"]');
        const mainPrice = finalPriceElement.dataset.priceAmount;
        const rowItem = document.querySelectorAll(`.${ID}__cartItem`)[index];
        const mainTable = rowItem.closest('#shopping-cart-table');
        const priceTag = mainTable.querySelector('thead th.col.price:not(.main-price-tag)');
        const priceValueElement = rowItem.querySelector('td.col.price');
        const qtyInputElem = rowItem.querySelector('.input-text.qty');
        const subTotal = rowItem
          .querySelector('td.col.subtotal span.price')
          .innerText.replace(/[^\d,.-]/g, '')
          .replace(',', '.')
          .trim();

        const qtyValue = qtyInputElem.value;

        upsellOptions.forEach((upsellOption, upsellIndex) => {
          const inputValue = upsellOption.value;
          if (inputValue > 1) {
            rowItem.setAttribute(`data-bulk-option-${upsellIndex + 1}`, inputValue);
            parseInt(qtyValue) !== 1 &&
              parseInt(qtyValue) >= parseInt(inputValue) &&
              rowItem.setAttribute('data-multipack', true);
          }
        });

        let itemSavings = 0;

        if (rowItem.getAttribute('data-multipack')) {
          itemSavings = parseFloat(mainPrice) * qtyValue - parseFloat(subTotal);
          priceTag.querySelector('span').innerText = 'Actie Prijs';
          if (!mainTable.querySelector('.main-price-tag')) {
            priceTag.insertAdjacentHTML(
              'beforebegin',
              '<th class="col price main-price-tag" scope="col"><span>Prijs</span></th>'
            );
          }

          priceValueElement.setAttribute('data-th', 'Actie Prijs');

          if (!rowItem.querySelector('.main-price')) {
            priceValueElement.insertAdjacentHTML(
              'beforebegin',
              `<td class="col price main-price has-multipack" data-th="Prijs" >
              <span class="price-including-tax" data-label="Incl. BTW">
                <span class="cart-price">
                  <span class="price">${formatPrice(mainPrice).replace('.', ',')}</span>
                </span>
              </span>
            </td>`
            );
          }
        } else {
          const price = priceValueElement.querySelector('span.price').innerText;
          if (!rowItem.querySelector('.main-price')) {
            priceValueElement.insertAdjacentHTML(
              'beforebegin',
              `<td class="col price main-price" data-th="Prijs">
          <span class="price-including-tax" data-label="Incl. BTW">
          <span class="cart-price">
          <span class="price">${price}</span>
          </span>
          </span>
          </td>`
            );
          }
        }

        //Add the item's savings to the accumulated total
        return accumulatedSavings + itemSavings;
      }, 0);

      //Log the total savings for all cart items
      if (
        formatPrice(totalSavings) &&
        formatPrice(totalSavings) !== '€0.00' &&
        !document.querySelector(`.${ID}__upsell-notification`)
      ) {
        const cartSummary = document.querySelector('.cart-summary');
        cartSummary.insertAdjacentHTML(
          'beforeend',
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
