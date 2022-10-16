/*eslint-disable no-param-reassign */

import addAllToCartHandler from './addAllToCartHandler';
import addToCartHandler from './addToCartHandler';
import deleteHandler from './deleteHandler';

const clickHandler = (id, target, fireEvent, shared) => {
  const targetMatched = (desiredMatch) => target.closest(desiredMatch);
  //console.log(target);

  const inputBox = target
    .closest(`.${id}__sampleupsell--row`)
    ?.querySelector('input[type="number"]');

  if (targetMatched(`.${id}__plus-btn`)) {
    inputBox.value = parseInt(inputBox.value) + 1;
    fireEvent('Interacts with quantity', shared);
  } else if (targetMatched(`.${id}__minus-btn`)) {
    inputBox.value = parseInt(inputBox.value <= 1 ? 2 : inputBox.value) - 1;
    fireEvent('Interacts with quantity', shared);
  } else if (targetMatched('[data-type="single-add"]')) {
    addToCartHandler(id, target, fireEvent, shared);
  } else if (targetMatched('[data-type="multi-add"]')) {
    addAllToCartHandler(id, target, fireEvent, shared);
  } else if (targetMatched(`.${id}__delete-btn`)) {
    deleteHandler(id, target, fireEvent, shared);
  } else if (targetMatched(`.${id}__pdp-link`)) {
    fireEvent('User visits PDP by clicking samples list', shared);
  } else if (targetMatched('.see-all-sample')) {
    fireEvent('User interacts with the view all samples CTA', shared);
  }
};

export default clickHandler;
