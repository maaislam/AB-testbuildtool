import setup from './services/setup';
import shared from './shared/shared';
import { addFreeSample, fetchCartData, fetchProductDetails, pollerLite } from './helpers/utils';
import comparisonWrapper from './components/comparisonWrapper';
import slimilarProdsTag from './components/slimilarProdsTag';

const { ID } = shared;

const init = () => {
  const targetPoint = document.querySelector('.products.wrapper.products-grid');
  const sliderTitleElem = targetPoint.previousElementSibling;
  targetPoint.classList.add(`${ID}__hidden`);
  sliderTitleElem.classList.add(`${ID}__hidden`);
  const allProducts = targetPoint.querySelectorAll('.product.product-item');

  const collectUrls = [];

  Array.from(allProducts)
    .slice(0, 3)
    .forEach((product) => {
      const productLinkElement = product.querySelector('.product-item-photo');
      const productLink = productLinkElement.getAttribute('href');
      const formElement = product.querySelector('[data-role="tocart-form"]');
      const { productSku } = formElement.dataset;

      collectUrls.push({
        sku: productSku || '',
        link: productLink
      });
    });

  //insert current product info
  const currentProductSkuElement = document.querySelector('.sample-add-form form');
  const currentProductSku = currentProductSkuElement.dataset.productSku;
  const currentProductLink = window.location.href;

  collectUrls.unshift({
    sku: currentProductSku,
    link: currentProductLink
  });

  const productTypeElement = document.querySelector('.breadcrumbs ul > li:nth-child(2) a');
  const productType = productTypeElement ? productTypeElement.textContent : '';
  //Usage example:
  fetchProductDetails(collectUrls)
    .then((results) => {
      if (results.length === 0) return;

      pollerLite(
        [
          () => window.localStorage.getItem('mage-cache-storage'),
          () => JSON.parse(window.localStorage.getItem('mage-cache-storage')),
          () => JSON.parse(window.localStorage.getItem('mage-cache-storage')).cart
        ],
        () => {
          const storageData = window.localStorage.getItem('mage-cache-storage');
          const { cart } = JSON.parse(storageData);

          const modifiedResults = results.map((result) => {
            const { sku } = result;
            const isSampleReached =
              cart.items.length > 0 &&
              cart.items.find((cartItem) => {
                return cartItem.product_sku === sku && cartItem.sample_individual_limit_reached;
              });

            if (isSampleReached) {
              return {
                ...result,
                instock: false
              };
            }

            return {
              ...result,
              instock: true
            };
          });

          console.log(modifiedResults, 'modifiedResults');

          if (!document.querySelector(`.${ID}__slimilarProdsTag`)) {
            document
              .querySelector('.fp-calculator')
              .insertAdjacentHTML('afterend', slimilarProdsTag(ID));
          }

          if (!document.querySelector(`.${ID}__comparisonWrapper`)) {
            document
              .querySelector('.product-section.details')
              .insertAdjacentHTML('afterend', comparisonWrapper(ID, modifiedResults, productType));
          }
        }
      );
    })
    .catch((error) => {
      targetPoint.classList.remove(`${ID}__hidden`);
      sliderTitleElem.classList.remove(`${ID}__hidden`);
      console.error('Error fetching product details:', error);
    });
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (event) => {
    const { target } = event;
    if (target.closest(`.${ID}__add-to-basket`)) {
      const clickedItem = target.closest(`.${ID}__add-to-basket`);
      clickedItem.classList.add(`${ID}__disabled`);
      clickedItem.textContent = 'Adding';
      const { sku } = clickedItem.dataset;
      const existingFreeSampleForm =
        document.querySelector(`.product-item form[data-product-sku="${sku}"]`) ||
        document.querySelector(`#sample_addtocart_form[data-product-sku="${sku}"]`);
      const formAction = existingFreeSampleForm.action;
      const productValueElement = existingFreeSampleForm.querySelector('input[name="product"]');
      const productValue = productValueElement.value;
      const formKeyElement = existingFreeSampleForm.querySelector('[name="form_key"]');
      const formKey = formKeyElement.value;

      //Example usage:
      addFreeSample(formAction, {
        product: productValue,
        is_sample: '1',
        form_key: formKey
      })
        .then((data) => {
          if (data.length === 0) {
            clickedItem.textContent = 'Added to basket';
            fetchCartData([
              'cart',
              'directory-data',
              'you-save',
              'gtm',
              'messages',
              'apptrian_metapixelapi_matching_section',
              'apptrian_pinteresttagapi_matching_section',
              'apptrian_tiktokpixelapi_matching_section'
            ])
              .then((res) => {
                const { cart } = res;
                const isSampleReached = cart.items.find((cartItem) => {
                  return cartItem.product_sku === sku && cartItem.sample_individual_limit_reached;
                });

                if (isSampleReached) {
                  clickedItem.textContent = 'Sample limit reached';
                } else {
                  clickedItem.textContent = 'Order a free sample';
                  clickedItem.classList.remove(`${ID}__disabled`);
                }
              })
              .catch((err) => {
                clickedItem.textContent = 'Order a free sample';
                clickedItem.classList.remove(`${ID}__disabled`);
                console.error(err);
              });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else if (target.closest(`.${ID}__slimilarProdsTag`)) {
      const wrapper = document.querySelector(`.${ID}__comparisonWrapper`);
      wrapper.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
  });
  init();
};
