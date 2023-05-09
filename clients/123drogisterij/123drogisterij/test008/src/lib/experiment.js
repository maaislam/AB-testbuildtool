import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { addTitle } from './components/addTitle';
import { bulkMessage } from './components/bulkMessage';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  //start
  const collectData = [];
  let Highest_Number = 0;
  const bulkData = Array.from(document.querySelectorAll('ul.prices-tier.items > li'));
  const existingBulkOptions = Array.from(
    document.querySelectorAll('body label.custom-child-upsel-checkbox')
  );
  const mainProdPrice = parseFloat(
    document.querySelector('body .product-info-price span.price-wrapper').dataset.priceShow.trim()
  );

  //collect prce and quantity from dom and inject in dom
  const initMain = () => {
    bulkData.forEach((bulk) => {
      const qty = parseInt(bulk.dataset.item);
      const price = parseFloat(
        bulk.querySelector('span.price-container > span').dataset.priceShow.trim()
      );

      if (Highest_Number < qty) {
        Highest_Number = qty;
      }

      collectData.push({
        quantity: qty,
        actualPrice: price
      });
    });

    //individual bulk option  text change code
    //eslint-disable-next-line default-param-last
    existingBulkOptions.forEach((existingBulk) => {
      const quantity = parseInt(existingBulk.querySelector('input').value);
      //eslint-disable-next-line array-callback-return
      const modifiedData = [...collectData].find((data) => {
        return data.quantity === quantity;
      });

      if (modifiedData) {
        modifiedData.showPrice =
          (mainProdPrice - modifiedData.actualPrice) * modifiedData.quantity + 4.95;
        bulkMessage(existingBulk, ID, Highest_Number, modifiedData);
      }
    });
  };

  //action
  document.body.classList.add(`${ID}_bulk_test`);
  document.querySelector(`.${ID}_title`)?.remove();
  document.querySelector('body .product-add-form').insertAdjacentHTML('beforebegin', addTitle(ID));
  initMain();
};
