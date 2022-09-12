import { isMobile } from './utils';

const clickHandler = (target, fireEvent, shared) => {
  const { ID } = shared;
  const clickedElm = (selector) => target.closest(selector);
  if (clickedElm(`.${ID}__deliverydate`)) {
    //remove already selected
    document.querySelectorAll(`.${ID}__deliverydate`).forEach((elm) => {
      elm.classList.remove('selected-date');
    });
    const clickElement = clickedElm(`.${ID}__deliverydate`);
    const clickedDateIndex = clickElement.dataset.dateindex;

    clickedElm(`.${ID}__deliverydate`).classList.add('selected-date');
    sessionStorage.setItem(`${ID}__selected-delivery-date`, clickedDateIndex);
    sessionStorage.removeItem(`${ID}__date-selected-at-checkout`);
    fireEvent('User chooses a date at PDP', shared);
  } else if (clickedElm('[data-test-id="add-to-delivery-btn"]')) {
    fireEvent('User interacts with Delivery CTA', shared);
  } else if (clickedElm('[data-test-id="add-to-collection-btn"]')) {
    fireEvent('User interacts with Collection CTA', shared);
  } else if (clickedElm('[data-test-id="slot"]') && window.location.pathname === '/checkout') {
    const dateSelected = target
      .closest('[data-test-id="slot"]')
      .querySelector(`[data-test-id=${isMobile() ? 'delivery-date' : 'item-date'}]`).innerText;
    sessionStorage.setItem(`${ID}__date-selected-at-checkout`, dateSelected);
    sessionStorage.removeItem(`${ID}__selected-delivery-date`);
    fireEvent('User chooses a date at checkout', shared);
  } else if (
    clickedElm('[data-test-id="right-icon"]') ||
    clickedElm('[data-test-id="left-icon"]')
  ) {
    fireEvent('User interact with arrows at checkout', shared);
  } else if (clickedElm('[data-test-id="related-products-widget"]')) {
    fireEvent('User interact with similar products carousel', shared);
  }
};

export default clickHandler;
