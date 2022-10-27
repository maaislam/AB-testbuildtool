const openMiniCart = (id) => {
  const showCart = document.querySelector('.minicart-wrapper');

  const overlay = document.createElement('div');
  overlay.classList.add(`${id}__overlay`);
  document.body.insertAdjacentElement('afterbegin', overlay);

  document.querySelector('.block-minicart').classList.add(`${id}__z-max`);

  showCart.querySelector('.mage-dropdown-dialog').removeAttribute('style');
  showCart.querySelector('.minicart-items-wrapper').removeAttribute('style');
};

export default openMiniCart;
