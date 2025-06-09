import setup from './services/setup';
import shared from './shared/shared';
import { addToSampleCart, fetchProductDetails, getCookie, pollerLite } from './helpers/utils';
import buttonElem from './components/button';
import pressFeatures from './components/pressFeatures';
import modal from './components/modal';
import openModal from './helpers/openModal';
import closeModal from './helpers/closeModal';
import modalContent from './components/modalContent';

const { ID } = shared;

const getDOMFromURL = async (url) => {
  try {
    const res = await fetch(url, {
      mode: 'cors'
    });
    const html = await res.text();
    const parser = new DOMParser();
    return parser.parseFromString(html, 'text/html');
  } catch (err) {
    console.error('Failed to fetch or parse:', err);
    return null;
  }
};

const hideElement = () => {
  const girdConatinerItems = document.querySelectorAll(
    `.${ID}__photoGalarySection .grid-container:not(.${ID}__fakeGallery) .grid-item`
  );

  girdConatinerItems.forEach((item, index) => {
    if (index < 8 && !item.classList.contains('last-header-image')) {
      item.classList.add(`${ID}__show`);
    } else {
      item.classList.add(`${ID}__hidden`);
    }
  });
};

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

const init = () => {
  const targetPoint = document.querySelector('.usps-main.usps-main-new-design + .widget.block');
  getDOMFromURL('https://luxuryflooring.co.uk/customer-gallery').then((doc) => {
    if (doc) {
      const mainContent = doc.querySelector('.column.main');
      mainContent.classList.add(`${ID}__photoGalarySection`);
      if (mainContent && !document.querySelector(`.${ID}__photoGalarySection`)) {
        targetPoint.insertAdjacentElement('afterend', mainContent);
      }

      const gallerySection = document.querySelector(`.${ID}__photoGalarySection`);

      if (!document.querySelector(`.${ID}__btnWrapper`)) {
        gallerySection.insertAdjacentHTML('beforeend', buttonElem(ID));
      }
      hideElement();
    }
  });

  pollerLite(['.about_us_main'], () => {
    const aboutUsWrapper = document.querySelector('.about_us_main');
    const targetPoint2 = document.querySelector('.columns .column.main');

    if (!document.querySelector(`.${ID}__aboutUsWrapper`)) {
      targetPoint2.insertAdjacentElement('beforeend', aboutUsWrapper);
      aboutUsWrapper.classList.add(`${ID}__aboutUsWrapper`);
    }

    const aboutUsImage = aboutUsWrapper.querySelector('.about_img > img');
    const mainTitle = aboutUsWrapper.querySelector('h2');
    const subTitle = aboutUsWrapper.querySelector('p + p');
    const footerTitle = subTitle.nextElementSibling;
    const button = aboutUsWrapper.querySelector('a');
    mainTitle.textContent = 'Luxury Made Affordable Since 2012';
    subTitle.textContent =
      'With more than 10 years’ experience in the flooring industry we’ve provided new floors to 165,000 happy homes (and counting!)';
    footerTitle.textContent =
      'We’re proud to offer over 200 floors in a variety of styles, colours and materials. From beautifully rustic solid wood to super durable vinyls; no matter what your style you’re sure to find a floor to suit your home.';
    button.textContent = 'About Luxury Flooring';
    aboutUsImage.src = 'https://luxuryflooring.co.uk/media/wysiwyg/ab_tests/test191/aboutus.jpg';
    aboutUsImage.dataset.amsrc =
      'https://luxuryflooring.co.uk/media/wysiwyg/ab_tests/test191/aboutus.jpg';
  });

  pollerLite(['.press-features'], () => {
    const pressFeaturesElem = document.querySelector('.press-features');
    if (!document.querySelector(`.${ID}__press-features`)) {
      pressFeaturesElem.insertAdjacentHTML('beforebegin', pressFeatures(ID));
    }
  });

  if (!document.querySelector(`.${ID}__modal`)) {
    document.body.insertAdjacentHTML('beforeend', modal(ID));
  }
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__photoGalarySection`) && target.closest('.grid-item')) {
      const clickedItem = target.closest('.grid-item');
      const imageElem = clickedItem.querySelector('img');
      const modalElem = document.querySelector(`.${ID}__modal`);
      const modalInnerContent = modalElem.querySelector('.modal-inner-content');
      modalInnerContent.innerHTML = '';
      modalInnerContent.innerHTML = modalContent(ID, imageElem.dataset);
      fetchProductDetails(imageElem.dataset.link)
        .then((results) => {
          const { productValue, itemValue, formKeyValue, formAction } = results;
          modalElem.dataset.itemValue = itemValue;
          modalElem.dataset.formKey = formKeyValue;
          modalElem.dataset.formAction = formAction;
          modalElem.dataset.sku = imageElem.dataset.sku;
          modalElem.dataset.productValue = productValue;
          openModal(ID);
        })
        .catch((error) => {
          console.error('Error fetching product details:', error);
        });
    } else if (
      (target.closest('.action-close') || target.closest('.modals-overlay')) &&
      target.closest(`.${ID}__modal`)
    ) {
      closeModal(ID);
    } else if (target.closest(`.${ID}__sampleBtn`)) {
      e.preventDefault();
      const clickedItem = target.closest(`.${ID}__sampleBtn`);
      const buttonElement = clickedItem.querySelector('button');
      const modalElem = clickedItem.closest(`.${ID}__modal`);
      const formKey = getCookie('form_key');
      const { sku, productValue, itemValue, formAction } = modalElem.dataset;
      modalElem.dataset &&
        addToSampleCart(productValue, formKey, itemValue, formAction)
          .then((response) => {
            if (!response.success) {
              buttonElement.textContent = 'Sample limit reached';
              buttonElement.classList.add(`${ID}__disabled`);
              showErrorNotification();
              removeErrorNotification();
            }
            if (response.length === 0) {
              buttonElement.textContent = 'Added to basket';
              buttonElement.classList.add(`${ID}__disabled`);
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
                    buttonElement.textContent = 'Sample limit reached';
                    buttonElement.classList.add(`${ID}__disabled`);
                  } else {
                    buttonElement.textContent = 'Order a free sample';
                    buttonElement.classList.remove(`${ID}__disabled`);
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
};
