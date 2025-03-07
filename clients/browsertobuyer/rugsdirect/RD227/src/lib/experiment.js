import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite, setCookie, setTextCopy, trackGAEvent } from './helpers/utils';
import discountBanner from './components/discountBanner';
import discountProd from './components/discountProd';
import discountModal from './components/discountModal';
import showEmailError from './helpers/showEmailError';
import hideEmailError from './helpers/hideEmailError';
import subscribeToRust from './helpers/subscribeToRust';
import mainObject from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  const exitingDiscountCodeWrapper = document.querySelector('.discount-code__wrapper');
  if (!document.querySelector(`.${ID}__discount-banner`)) {
    exitingDiscountCodeWrapper.insertAdjacentHTML(
      'beforebegin',
      discountBanner(ID, mainObject[VARIATION], VARIATION)
    );
  }

  pollerLite(
    ['.template-collection', '.productgrid--wrapper', '.productgrid--item .discount-code__btn'],
    () => {
      const productsWrapper = document.querySelector('.productgrid--wrapper');
      const targetProduct = productsWrapper.querySelector(
        '.productgrid--item.imagestyle--no-image .tag-2'
      );
      if (!document.querySelector(`.${ID}__tag-2`)) {
        targetProduct.insertAdjacentHTML('beforebegin', discountProd(ID, mainObject[VARIATION], VARIATION));
      }
    }
  );

  if (!document.querySelector(`.${ID}__modal`)) {
    document.body.insertAdjacentHTML(
      'beforeend',
      discountModal(ID, mainObject[VARIATION], VARIATION)
    );
  }

  const varEmailElems = document.querySelectorAll(`.${ID}__input`);
  const emailRegex = /^[^@]+@[^@]+\.[^@.]{2,}$/;

  if (varEmailElems.length > 0) {
    const handleInputChange = (elem) => {
      const { value } = elem;
      if (value.length === 0) {
        showEmailError(ID, elem, 'Please fill out this field.');
      } else if (!emailRegex.test(value)) {
        showEmailError(ID, elem, 'Please enter a valid email address.');
      } else {
        hideEmailError(ID, elem);
      }
    };

    varEmailElems.forEach((elem) => {
      elem.value = '';
      elem.addEventListener('input', (e) => {
        handleInputChange(e.target);
      });

      elem.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const modalBody = e.target.closest(`.${ID}__modal-body`);
          const claimBtn = modalBody.querySelector(`.${ID}__claimDiscountBtn`);
          modalBody.classList.contains(`${ID}__emailValid`)
            ? claimBtn.click()
            : handleInputChange(e.target, true);
        }
      });
    });
  }
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__plpClaimBtn`) || target.closest(`.${ID}__claimBtn`)) {
      trackGAEvent('RD 227', 'claim_discount');
      const modal = document.querySelector(`.${ID}__modal`);
      if (modal) {
        modal.classList.remove(`${ID}__closing`);
        modal.classList.add(`${ID}__open`);
      }
    } else if (
      target.closest(`.${ID}__modal-close`) ||
      target.closest(`.${ID}__modal-overlay`) ||
      target.closest(`.${ID}__modal-no-thanks`) ||
      target.closest(`.${ID}__modal-no-thanks-mobile`) ||
      target.closest(`.${ID}__continueShoppingBtn`)
    ) {
      const modal = document.querySelector(`.${ID}__modal`);
      const modalContent = modal.querySelector(`.${ID}__modal-content`);

      if (modal) {
        modal.classList.remove(`${ID}__open`);
        modal.classList.add(`${ID}__closing`);
      }

      if (modalContent && !modalContent.classList.contains(`${ID}__success`)) {
        trackGAEvent('RD 227', 'closed_without_submission');
      }
    } else if (target.closest(`.${ID}__copyWrapper`)) {
      const clickedItem = target.closest(`.${ID}__copyWrapper`);
      setTextCopy(VARIATION);
      clickedItem.textContent = 'Copied';
    } else if (
      target.closest(`.${ID}__modal-mobile-button`) ||
      target.closest(`.${ID}__modal-button`)
    ) {
      const clickedItem =
        target.closest(`.${ID}__modal-mobile-button`) || target.closest(`.${ID}__modal-button`);

      const bodyWrapper = clickedItem.closest(`.${ID}__modal-body`);
      const inputElement = bodyWrapper.querySelector(`.${ID}__input`);
      const isEmailValid = bodyWrapper.classList.contains(`${ID}__emailValid`);

      if (isEmailValid) {
        subscribeToRust(inputElement.value, VARIATION)
          .then((res) => {
            if (res?.status === 'success') {
              setCookie(`${ID}__emailSubmitted`, 'true');
              trackGAEvent('RD 227', 'submit_email');

              const smallDiscountBanner = document.querySelector(`.${ID}__discount-banner`);
              const plpDiscountBanner = document.querySelector(`.${ID}__tag-2`);
              const contentWrapper = bodyWrapper.closest(`.${ID}__modal-content`);

              if (contentWrapper) contentWrapper.classList.add(`${ID}__success`);
              if (smallDiscountBanner) smallDiscountBanner.classList.add(`${ID}__emailSubmited`);
              if (plpDiscountBanner) plpDiscountBanner.classList.add(`${ID}__emailSubmited`);
            } else {
              console.error('Failed to subscribe:', res);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      } else {
        showEmailError(ID, inputElement, 'Please fill out this field.');
      }
    } else if (target.closest('.discount-code__btn')) {
      trackGAEvent('RD 227', 'claim_discount');
    }
  });

  if (VARIATION === 'control') return;

  init();
};
