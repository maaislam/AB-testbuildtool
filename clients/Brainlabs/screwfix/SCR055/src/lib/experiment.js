import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import price from './components/price';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
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

  document.querySelectorAll(`.${ID}__perLitre`).forEach((item) => item && item.remove());

  const targetElement = document.querySelector('#container-main div[data-qaid="product-grid"]');
  targetElement.querySelectorAll('.HfYajj').forEach((item) => {
    const miliLitre = item.querySelector('a[data-qaid="product_description"] span').textContent;
    const actualPrice = item.querySelector('.EkX3Pq span[data-qaid="price"]').textContent;
    const miliLitreMatch = miliLitre.match(/\d+ml/gi);
    const miliLitreQuantity = miliLitreMatch ? parseInt(miliLitreMatch[0]) : null;
    const priceMatch = actualPrice.match(/[+-]?\d+(\.\d+)?/gi);
    const priceQuantity = priceMatch ? parseFloat(priceMatch[0]) : null;
    item
      .querySelector('.HfYajj .EkX3Pq')
      .insertAdjacentHTML('beforeend', price(ID, miliLitreQuantity, priceQuantity));
  });
};
