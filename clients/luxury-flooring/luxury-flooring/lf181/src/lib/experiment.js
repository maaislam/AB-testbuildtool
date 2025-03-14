import setup from './services/setup';
import shared from './shared/shared';
import {
  addCssToHead,
  addScriptToHead,
  addToSampleCart,
  fetchProductDetails,
  pollerLite
} from './helpers/utils';
import { comparisonWrapper, comparisonWrapperMobile } from './components/comparisonWrapper';
import slimilarProdsTag from './components/slimilarProdsTag';
import initSwiper from './helpers/initSwiper';

const { ID } = shared;
const isMobile = window.matchMedia('(max-width: 992px)').matches;
const removeSuccessNotification = () => {
  const cloneNotificationElement = document.querySelector(`${ID}__showSuccessNotification`);
  setTimeout(() => {
    if (cloneNotificationElement) {
      cloneNotificationElement.remove();
    }
  }, 2000);
};

const removeErrorNotification = () => {
  const cloneNotificationElement = document.querySelector(`${ID}__showErrorNotification`);
  setTimeout(() => {
    if (cloneNotificationElement) {
      cloneNotificationElement.remove();
    }
  }, 2000);
};
const showSuccessNotification = () => {
  pollerLite(
    [`.page.messages:not(.${ID}__showSuccessNotification) .messages .message-success`],
    () => {
      const controlNotificationElement = document.querySelector(
        `.page.messages:not(.${ID}__showSuccessNotification)`
      );
      const cloneNotificationElement = controlNotificationElement.cloneNode(true);
      if (!document.querySelector(`${ID}__showSuccessNotification`)) {
        document.body.insertAdjacentElement('beforeend', cloneNotificationElement);
        cloneNotificationElement.classList.add(`${ID}__showSuccessNotification`);
      }
    }
  );
};

const showErrorNotification = () => {
  pollerLite([`.page.messages:not(.${ID}__showErrorNotification) .messages .message-error`], () => {
    const controlNotificationElement = document.querySelector(
      `.page.messages:not(.${ID}__showErrorNotification)`
    );
    const cloneNotificationElement = controlNotificationElement.cloneNode(true);
    if (!document.querySelector(`${ID}__showErrorNotification`)) {
      document.body.insertAdjacentElement('beforeend', cloneNotificationElement);
      cloneNotificationElement.classList.add(`${ID}__showErrorNotification`);
    }
  });
};

const swiperInit = () => {
  pollerLite([`.${ID}__comparisonWrapperMobile`, () => typeof window.Swiper === 'function'], () => {
    initSwiper(`.${ID}__swiper`);
  });
};

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

          if (!document.querySelector(`.${ID}__slimilarProdsTag`)) {
            document
              .querySelector('.fp-calculator')
              .insertAdjacentHTML('afterend', slimilarProdsTag(ID));
          }

          //desktop
          if (!document.querySelector(`.${ID}__comparisonWrapper`)) {
            document
              .querySelector('.product-section.details')
              .insertAdjacentHTML('afterend', comparisonWrapper(ID, modifiedResults));
          }

          //mobile
          if (!document.querySelector(`.${ID}__comparisonWrapperMobile`)) {
            document
              .querySelector('.product-section.details')
              .insertAdjacentHTML('afterend', comparisonWrapperMobile(ID, modifiedResults));
          }
        }
      );

      swiperInit();
    })
    .catch((error) => {
      targetPoint.classList.remove(`${ID}__hidden`);
      sliderTitleElem.classList.remove(`${ID}__hidden`);
      console.error('Error fetching product details:', error);
    });
};

export default () => {
  setup(); //use if needed

  addCssToHead('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
  addScriptToHead('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');

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
      const uencElement = existingFreeSampleForm.querySelector('[name="uenc"]');
      const uencValue = uencElement ? uencElement.value : '';

      addToSampleCart(productValue, formKey, uencValue, formAction)
        .then((response) => {
          if (!response.success) {
            clickedItem.textContent = 'Sample limit reached';
            clickedItem.classList.add(`${ID}__disabled`);
            showErrorNotification();
            removeErrorNotification();
          }
          if (response.length === 0) {
            clickedItem.textContent = 'Added to basket';
            clickedItem.classList.add(`${ID}__disabled`);
            pollerLite(
              [
                () => window.localStorage.getItem('mage-cache-storage'),
                () => JSON.parse(window.localStorage.getItem('mage-cache-storage')),
                () => JSON.parse(window.localStorage.getItem('mage-cache-storage')).cart
              ],
              () => {
                const storageData = window.localStorage.getItem('mage-cache-storage');
                const { cart } = JSON.parse(storageData);
                const isSampleReached = cart.items.find((cartItem) => {
                  return cartItem.product_sku === sku && cartItem.sample_individual_limit_reached;
                });

                if (isSampleReached) {
                  clickedItem.textContent = 'Sample limit reached';
                  clickedItem.classList.add(`${ID}__disabled`);
                } else {
                  clickedItem.textContent = isMobile ? 'Get free sample' : 'Order a free sample';
                  clickedItem.classList.remove(`${ID}__disabled`);
                }

                showSuccessNotification();
                removeSuccessNotification();
              }
            );
          }
        })
        .catch((err) => {
          console.error('Error:', err);
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
