import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { fetchProducts, pollerLite } from './helpers/utils';
import wrapper from './components/wrapper';

const { ID, VARIATION } = shared;

const init = () => {
  const formWrapper = document.querySelector('form.ntg-product-add-form');
  const benefitElement = document.querySelector('.custom-product-benefits');
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
  const comparePrice = existingComparePriceElement?.textContent.trim();

  fetchProducts(productId).then((result) => {
    if (result.data.length) {
      //eslint-disable-next-line object-curly-newline
      console.log(result.data);
      const allProducts = [
        {
          title,
          imageSrc,
          sellPrice,
          comparePrice,
          id: productId
        },
        ...result.data
      ];
      if (!document.querySelector(`.${ID}__wrapper`)) {
        benefitElement.insertAdjacentHTML('beforebegin', wrapper(ID, allProducts));
      }
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
