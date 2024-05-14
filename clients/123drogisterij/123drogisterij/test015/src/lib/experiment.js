import { observeDOM } from './helpers/utils';
import setup from './services/setup';

//import shared from './shared/shared';

//const { ID, VARIATION } = shared;

const init = () => {
  const priceBox = document.querySelectorAll('[data-role="priceBox"]');

  priceBox.forEach((box) => {
    const formatNumberGermanStyle = (number) => {
      return number.toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    };
    const priceElm = box.querySelector('[id*="product-price-"]');
    const { priceAmount } = priceElm.dataset;
    const pricetext = formatNumberGermanStyle(priceAmount);
    //console.log('🚀 ~ priceBox.forEach ~ pricetext:', pricetext);
    const priceContainer = priceElm.querySelector('.price');
    priceContainer.style.color = 'red';
    priceElm.querySelector('.price').textContent = pricetext;
  });
};

export default () => {
  setup();

  init();

  observeDOM('[data-role="priceBox"]', init);
};
