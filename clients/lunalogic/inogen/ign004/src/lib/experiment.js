/*eslint-disable no-param-reassign */
/*eslint-disable no-restricted-globals */
/*eslint-disable radix */
import setup from './services/setup';
import shared from './shared/shared';
import {
  addToCart,
  extractCartTotals,
  fetchCartTotals,
  getVariationSelections,
  parseHTML,
  pollerLite
} from './helpers/utils';
import fakeButton from './components/fakeButton';
import modal from './components/modal';
import contentWrapper from './components/contentWrapper';
import cartDescription from './components/cartDescription';

const { ID } = shared;

const openModal = (id) => {
  const modalElem = document.querySelector(`.${id}__modal`);

  modalElem.classList.add(`${id}__open`);
  modalElem.classList.remove(`${id}__closing`);
};

export const closeModal = () => {
  const modalElem = document.querySelector(`.${ID}__modal`);

  modalElem.classList.add(`${ID}__closing`);
  modalElem.classList.remove(`${ID}__open`);
};

const renderFakeButton = (targetElement) => {
  if (!document.querySelector(`.${ID}__fakeAtb`)) {
    targetElement.insertAdjacentHTML('beforebegin', fakeButton(ID));
  }
};

const initVariationHandler = () => {
  const form = document.querySelector('.variations_form');

  if (!form) return;

  form.addEventListener('change', (event) => {
    const select = event.target;
    if (select.tagName.toLowerCase() === 'select') {
      //Delay to allow DOM update
      setTimeout(() => {
        const { value } = select;
        const addToCartBtn = document.querySelector('.post--pdp__cta--add-to-cart');
        const { display } = window.getComputedStyle(addToCartBtn);

        if (value && display === 'inline-block') {
          renderFakeButton(addToCartBtn);
        }
      }, 50);
    }
  });
};

const renderModalContent = (mainProductObj, cartInfoObj, totalQuantity, selections) => {
  const accessoriesWrapper = document.querySelector('.accessories__wrapper');
  const varaitionAccessoriesWrapper = accessoriesWrapper.cloneNode(true);
  varaitionAccessoriesWrapper?.classList.add(`${ID}__accessoriesWrapper`);
  const modalContentWrapper = document.querySelector(`.${ID}__modal-content`);
  modalContentWrapper.innerHTML = '';
  modalContentWrapper.innerHTML = contentWrapper(
    ID,
    mainProductObj,
    cartInfoObj,
    totalQuantity,
    selections
  );

  const contentWrapperElem = document.querySelector(`.${ID}__contentWrapper`);
  if (!contentWrapperElem.querySelector(`.${ID}__accessoriesWrapper`)) {
    contentWrapperElem.insertAdjacentElement('beforeend', varaitionAccessoriesWrapper);
  }

  const accessoriesImages = document.querySelectorAll(`.${ID}__modal .accessory__image img`);
  accessoriesImages.forEach((image) => {
    const { src } = image.dataset;
    image.src = src;
  });
  const links = [];
  const allButtons = document.querySelectorAll(`.${ID}__modal .accessory__cta`);
  allButtons.forEach((button) => {
    button.innerText = 'ADD TO CART';
    button.classList.add(`${ID}__atcCTA`);
    if (!button.href.includes('&p=')) {
      links.push({
        link: button.href
      });
    }
  });

  if (links.length > 0) {
    parseHTML(links)
      .then((response) => {
        const accessoriesButtons = document.querySelectorAll(`.${ID}__modal .accessory__cta`);
        accessoriesButtons.forEach((button) => {
          const productLink = button.href;
          const hasItem = response.find((item) => productLink.includes(item.link));
          if (hasItem) button.setAttribute('data-id', hasItem.id);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //openModal(ID);
};

const init = () => {
  pollerLite(['form.variations_form'], () => {
    initVariationHandler();
  });

  if (!document.querySelector(`.${ID}__modal`)) {
    document.body.insertAdjacentHTML('beforeend', modal(ID));
  }
};

export default () => {
  setup();

  document.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__fakeAtb`)) {
      const clickedItem = target.closest(`.${ID}__fakeAtb`);
      const wrapper = clickedItem.closest('div');
      const productIdElement = wrapper.querySelector('input[name="add-to-cart"]');
      const productId = productIdElement.value;
      const selections = getVariationSelections();
      const productTitle = document.querySelector('.post__title')?.cloneNode(true);
      const mainImageElement = document.querySelector('.woocommerce-main-image img');
      const productImage = mainImageElement.src;
      const priceElement = document.querySelector('.woocommerce-Price-amount.amount');
      const childNodes = Array.from(priceElement.childNodes);
      const lastTextNode = childNodes
        .reverse()
        .find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      const finalPrice = lastTextNode?.textContent.trim() || '';

      const mainProductObj = {
        title: productTitle,
        image: productImage,
        price: finalPrice
      };
      clickedItem.disabled = true;
      openModal(ID);
      const modalContainer = document.querySelector(`.${ID}__modal-content`);
      modalContainer.innerHTML = '';
      if (!modalContainer.querySelector('.spinner')) {
        modalContainer.insertAdjacentHTML(
          'beforeend',
          ' <div class="spinner" aria-label="Loading" role="status"></div>'
        );
      }
      addToCart(1, productId)
        .then((doc) => {
          const cartTotalElement = doc;
          const cartInfoObj = extractCartTotals(cartTotalElement);
          const totalCartItemElems = doc.querySelectorAll('.quantity');
          const totalQuantity = Array.from(totalCartItemElems).reduce((sum, el) => {
            const match = el.textContent.match(/^(\d+)/);
            return sum + (match ? parseInt(match[1], 10) : 0);
          }, 0);

          if (cartInfoObj && totalQuantity) {
            renderModalContent(mainProductObj, cartInfoObj, totalQuantity, selections);
            //get cart and get extra data
            fetchCartTotals()
              .then((cartInfoObject) => {
                const contentContainer = document.querySelector(`.${ID}__contentContainer`);
                const cartDescriptionElem = contentContainer.querySelector(`.${ID}__bag-summary`);

                if (cartDescriptionElem) cartDescriptionElem.remove();
                if (cartInfoObject && totalQuantity) {
                  contentContainer.insertAdjacentHTML(
                    'beforeend',
                    cartDescription(ID, cartInfoObject, totalQuantity)
                  );
                }
              })
              .catch((error) => {
                console.error('Error fetching cart document:', error);
              });
          }
          clickedItem.disabled = false;
        })
        .catch(() => {
          clickedItem.disabled = false;
        });
    } else if (
      target.closest(`.${ID}__modal-overlay`) ||
      (target.closest(`.${ID}__closeWrapper`) && target.closest('svg'))
    ) {
      closeModal();
    } else if (target.closest(`.${ID}__atcCTA`)) {
      e.preventDefault();
      const clickedItem = target.closest(`.${ID}__atcCTA`);
      const productId = clickedItem.href.includes('&p=')
        ? clickedItem.href.split('&p=')[1]
        : clickedItem.dataset.id;
      clickedItem.classList.add('disabled-link');
      clickedItem.innerText = 'Adding...';
      addToCart(1, productId)
        .then((doc) => {
          //const cartInfoObj = extractCartTotals(cartTotalElement);
          const totalCartItemElems = doc.querySelectorAll('.quantity');
          const totalQuantity = Array.from(totalCartItemElems).reduce((sum, el) => {
            const match = el.textContent.match(/^(\d+)/);
            return sum + (match ? parseInt(match[1], 10) : 0);
          }, 0);
          //get cart and get extra data
          fetchCartTotals()
            .then((cartInfoObject) => {
              const contentContainer = document.querySelector(`.${ID}__contentContainer`);
              const cartDescriptionElem = contentContainer.querySelector(`.${ID}__bag-summary`);

              if (cartDescriptionElem) cartDescriptionElem.remove();
              if (cartInfoObject && totalQuantity) {
                contentContainer.insertAdjacentHTML(
                  'beforeend',
                  cartDescription(ID, cartInfoObject, totalQuantity)
                );
              }
            })
            .catch((error) => {
              console.error('Error fetching cart document:', error);
            });
          clickedItem.innerText = 'Added to cart';
          setTimeout(() => {
            clickedItem.innerText = 'ADD TO CART';
            clickedItem.classList.remove('disabled-link');
          }, 2000);
        })
        .catch(() => {
          clickedItem.innerText = 'ADD TO CART';
          clickedItem.classList.remove('disabled-link');
        });
    }
  });

  init();
};
