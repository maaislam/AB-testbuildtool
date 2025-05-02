import setup from './services/setup';
import shared from './shared/shared';
import {
  addCssToPage,
  addJsToPage,
  addToSampleCart,
  moveNonImageChildren,
  observeDOM,
  pollerLite
} from './helpers/utils';
import fetchProductImagesData from './helpers/fetchProductData';
import initSwiper from './helpers/initSwiper';
import { swiperConfig5 } from './helpers/swiperConfigs';
import productImages from './components/productImages';
import { overlayButton } from './components/overlayButton';
import modal from './components/modal';
import openModal from './helpers/openModal';
import closeModal from './helpers/closeModal';
import modalContent from './components/modalContent';
import initSwiperv2 from './helpers/initSwiperv2';
import productDescription from './components/productDescription';
import buttons from './components/buttons';

const { ID, VARIATION } = shared;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';

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

//Intersection Observer setup
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.001
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const productCard = entry.target;
      fetchProductImagesData(productCard).then((data) => {
        const targetPoint = productCard.querySelector('a.product-item-photo');
        if (
          data.images &&
          data.images.length > 1 &&
          !productCard.querySelector(`.${ID}__productSwiper`) &&
          VARIATION === '1'
        ) {
          targetPoint.insertAdjacentHTML('beforebegin', productImages(ID, data.images, data.sku));
          moveNonImageChildren(
            targetPoint,
            document.querySelector(`.${ID}__productSwiper_${data.sku}`)
          );
          pollerLite([() => window.Swiper !== undefined], () => {
            initSwiper(`.${ID}__productSwiper_${data.sku}`, swiperConfig5);
          });
        }
      });
      observer.unobserve(productCard);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

const paginationHandler = () => {
  const productCards = document.querySelectorAll(`.item.product.plp:not(.${ID}__loaded-product)`);

  productCards.forEach((card) => {
    const productLinkElement = card.querySelector('a.product-item-photo');
    const productLink = productLinkElement.href;
    card.classList.add(`${ID}__loaded-product`);
    if (VARIATION === '2' && !card.querySelector(`.${ID}__overlay`)) {
      const newWElement = document.createElement('div');
      newWElement.classList.add(`${ID}__newWrapper`);
      if (!card.querySelector(`.${ID}__newWrapper`)) {
        productLinkElement.insertAdjacentElement('beforebegin', newWElement);
        newWElement.appendChild(productLinkElement);
      }
      card
        .querySelector(`.${ID}__newWrapper`)
        .insertAdjacentHTML('beforeend', overlayButton(ID, productLink));
    }
    observer.observe(card);
  });
};

const init = () => {
  if (VARIATION === '2') {
    if (!document.querySelector(`.${ID}__modal`)) {
      document.body.insertAdjacentHTML('beforeend', modal(ID));
    }
  }
};

export default () => {
  setup();

  if (VARIATION === 'control') return;

  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    console.log(target, 'target');
    if (target.closest(`.${ID}__quick-view-btn`)) {
      e.preventDefault();
      const clickedItem = target.closest('.product-item-info');
      const productCard = clickedItem.closest('.item.product');
      const productReviews = productCard.querySelector('.product-reviews-summary')?.cloneNode(true);
      const productName = productCard.querySelector('.product-item-link').cloneNode(true);
      const productLink = productName.href;
      const isSampleButton = productCard.querySelector('.action.sample');
      const productFormElement = productCard.querySelector('form');
      const formAction = productFormElement?.action;
      const productValueElement = productFormElement?.querySelector('input[name="product"]');
      const productValue = productValueElement ? productValueElement.value : '';
      const formKeyElement = productFormElement?.querySelector('[name="form_key"]');
      const formKey = formKeyElement ? formKeyElement.value : '';
      const uencElement = productFormElement?.querySelector('[name="uenc"]');
      const uencValue = uencElement ? uencElement.value : '';
      const modalElem = document.querySelector(`.${ID}__modal`);
      const modalInnerContent = modalElem.querySelector('.modal-inner-content');
      const modalInnerDescription = modalElem.querySelector('.modal-inner-description');
      const modalInnerButton = modalElem.querySelector('.modal-inner-button');
      modalInnerContent.innerHTML = '';
      modalInnerDescription.innerHTML = '';
      modalInnerButton.innerHTML = '';
      if (clickedItem.dataset.array && clickedItem.dataset.sku) {
        const images = JSON.parse(clickedItem.dataset.array);
        const { sku } = clickedItem.dataset;
        modalInnerDescription.innerHTML = productDescription(ID, productReviews, productName);
        modalInnerContent.innerHTML = modalContent(ID, images, sku, productReviews, productName);
        modalInnerButton.innerHTML = buttons(ID, productLink, !!isSampleButton);

        modalInnerButton.dataset.productValue = productValue;
        modalInnerButton.dataset.formKey = formKey;
        modalInnerButton.dataset.uencValue = uencValue;
        modalInnerButton.dataset.formAction = formAction;
        modalInnerButton.dataset.sku = clickedItem.dataset.sku;
        pollerLite([() => window.Swiper !== undefined], () => {
          initSwiperv2(`.${ID}__swiper__${sku}`, `.${ID}__swiperThumb__${sku}`);
        });

        pollerLite([`.${ID}__swiper__${sku}.swiper-initialized`], () => {
          openModal(ID);
        });

        return;
      }
      fetchProductImagesData(productCard).then((data) => {
        if (data.images && data.images.length >= 1) {
          modalInnerDescription.innerHTML = productDescription(ID, productReviews, productName);
          modalInnerContent.innerHTML = modalContent(ID, data.images, data.sku);
          modalInnerButton.innerHTML = buttons(ID, productLink, !!isSampleButton);

          modalInnerButton.dataset.productValue = productValue;
          modalInnerButton.dataset.formKey = formKey;
          modalInnerButton.dataset.uencValue = uencValue;
          modalInnerButton.dataset.formAction = formAction;
          modalInnerButton.dataset.sku = data.sku;
          pollerLite([() => window.Swiper !== undefined], () => {
            initSwiperv2(`.${ID}__swiper__${data.sku}`, `.${ID}__swiperThumb__${data.sku}`);
            openModal(ID);
          });
          pollerLite([`.${ID}__swiper__${data.sku}.swiper-initialized`], () => {
            openModal(ID);
          });
          clickedItem.dataset.array = JSON.stringify(data.images);
          clickedItem.dataset.sku = data.sku;
        }
      });
    } else if (target.closest(`.${ID}__productLink`)) {
      e.preventDefault();
      window.location.href = target.closest(`.${ID}__productLink`).dataset.href;
    } else if (target.closest('a.product-item-photo')) {
      e.preventDefault();
    } else if (
      (target.closest('.action-close') ||
        target.closest('.modals-overlay') ||
        target.matches('.modal-popup.modal-slide')) &&
      target.closest(`.${ID}__modal`)
    ) {
      closeModal(ID);
    } else if (target.closest(`.${ID}__sampleBtn`)) {
      const clickedItem = target.closest(`.${ID}__sampleBtn`);
      const buttonsWrapper = clickedItem.closest('.modal-inner-button');
      const { sku, productValue, formKey, uencValue, formAction } = buttonsWrapper.dataset;
      buttonsWrapper.dataset &&
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
                    clickedItem.textContent = 'Order a free sample';
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
    }
  });

  init();

  observeDOM('.column.main', paginationHandler);
};
