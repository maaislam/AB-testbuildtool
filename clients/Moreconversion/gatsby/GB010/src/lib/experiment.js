import setup from './services/setup';
import shared from './shared/shared';
import percentage from './components/percentage';
import badge from './components/badge';

const { ID, VARIATION } = shared;

const calculateDiscountPercentage = (comparePrice, sellPrice) => {
  const discountPercentage = ((comparePrice - sellPrice) / comparePrice) * 100;
  return Math.round(discountPercentage); //Returns a rounded whole number
};

const init = () => {
  //Experiment specific initialization code here
  const photoContainer = document.querySelector('.product-single__photos');
  const priceWrapper = document.querySelector('.price-wrapper');
  const comparePriceWrapper =
    priceWrapper.querySelector('#ComparePrice .money') ||
    priceWrapper.querySelector('#ComparePrice');
  const comparePrice = comparePriceWrapper.textContent.trim();
  const sellPriceWrapper =
    priceWrapper.querySelector('#ProductPrice .money') ||
    priceWrapper.querySelector('#ProductPrice');
  const sellPrice = sellPriceWrapper.textContent.trim();

  if (comparePrice && sellPrice) {
    const comparepriceNumber = parseFloat(comparePrice.replace(/[^0-9.]/g, '')).toFixed(2);
    const sellpriceNumber = parseFloat(sellPrice.replace(/[^0-9.]/g, '')).toFixed(2);
    const getPercentageNumber = calculateDiscountPercentage(comparepriceNumber, sellpriceNumber);
    if (!document.querySelector(`.${ID}__percentage`)) {
      priceWrapper.insertAdjacentHTML('beforeend', percentage(ID, getPercentageNumber));
    }

    if (!document.querySelector(`.${ID}__badge`) && VARIATION === '1') {
      priceWrapper.insertAdjacentHTML('beforeend', badge(ID));
    }

    if (!document.querySelector(`.${ID}__badge`) && VARIATION === '2') {
      photoContainer.insertAdjacentHTML('beforeend', badge(ID));
    }
  }
};

export default () => {
  setup();

  init();
};
