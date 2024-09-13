import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { fetchProducts, pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const formWrapper = document.querySelector('form.ntg-product-add-form');
  const productId = formWrapper.querySelector('input[name="id"]').value;
  const existingProductImageElem = document.querySelector('.main_gallery_container img');
  const imageSrc = existingProductImageElem.src;
  const existingProductTitle = document.querySelector('.product-single__title');
  const title = existingProductTitle.textContent.trim();
  const existingSellPriceElement = document.querySelector('#ProductPrice-');
  const existingComparePriceElement = document.querySelector(
    '.product__price-wrap- #ComparePrice-'
  );
  const sellPrice = existingSellPriceElement.textContent.trim();
  const ComparePrice = existingComparePriceElement.textContent.trim();

  fetchProducts(productId).then((result) => {
    if (result.data.length) {
      // eslint-disable-next-line object-curly-newline
      const allProducts = [{ title, imageSrc, sellPrice, ComparePrice }, ...result.data];
      console.log(allProducts);
    }
  });
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
