import { observeDOM } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

//import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const priceBox = document.querySelectorAll('[data-role="priceBox"]');

  priceBox.forEach((box) => {
    //const formatNumberGermanStyle = (number) => {
    //return number.toLocaleString('de-DE', {
    //minimumFractionDigits: 2,
    //maximumFractionDigits: 2
    //});
    //};
    const priceElm = box.querySelector('[id*="product-price-"]');
    //const { priceAmount } = priceElm.dataset;

    //const pricetext = formatNumberGermanStyle(Number(priceAmount));
    const priceText = priceElm.innerText.split('€')[1].trim();
    const priceContainer = priceElm.querySelector('.price');
    priceContainer.style.color = 'red';

    const mainPrice = priceText.split(',')[0];
    const subPrice = priceText.split(',')[1];

    const priceStr = `<div class="${ID}__pricing">
        <span class="${ID}__price">
          ${mainPrice},<span class="${ID}__friction">${subPrice}</span>
        </span>
      </div>`;
    priceElm.querySelector('.price').innerHTML = priceStr;

    //priceElm.querySelector('.price').textContent = pricetext;
  });
};

export default () => {
  setup();

  init();

  observeDOM('[data-role="priceBox"]', init);
};
