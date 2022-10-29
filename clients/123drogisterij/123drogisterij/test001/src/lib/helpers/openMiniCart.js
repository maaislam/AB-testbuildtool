import waitForElm from './waitForElem';

const openMiniCart = (id) => {
  const showCart = document.querySelector('.minicart-wrapper');

  const overlay = document.createElement('div');
  overlay.classList.add(`${id}__overlay`);
  document.body.insertAdjacentElement('afterbegin', overlay);

  document.querySelector('.block-minicart').classList.add(`${id}__z-max`);
  waitForElm('.minicart-items-wrapper').then(() => {
    showCart.querySelector('.mage-dropdown-dialog').removeAttribute('style');
    showCart.querySelector('.minicart-items-wrapper').removeAttribute('style');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
};

export default openMiniCart;
