import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { fetchProducts, pollerLite } from './helpers/utils';
import wrapper from './components/wrapper';
import handleCheckboxChanges from './helpers/handleCheckboxChanges';
import addToCart from './helpers/addToCart';

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

      handleCheckboxChanges(ID);
    }
  });
};

export default () => {
  setup();

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__button`)) {
      const button = target.closest(`.${ID}__button`);
      const productIds = button.dataset.addedProductIds;

      if (productIds.length > 0) {
        const productsData = productIds?.split(',').map((id) => ({
          id,
          quantity: 1
        }));

        addToCart(productsData);
      }
    }
  });
};
