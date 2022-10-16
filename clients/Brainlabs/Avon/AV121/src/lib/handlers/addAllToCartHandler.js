/*eslint-disable no-param-reassign */

import checkmark from '../components/checkmarck';

import { addToCart, emitDYAddToCart } from '../helpers/addToCart';

const addAllToCartHandler = async (id, target, fireEvent, shared) => {
  if (!target.dataset.id) return;
  const payloads = target.dataset.id.split(',').map((item) => {
    return {
      id: item,
      quantity: 1
    };
  });
  const addAllPayloads = {
    items: payloads
  };
  const sampleContainer = target.closest(`.${id}__sampleupsell`);
  sampleContainer.classList.add('adding');
  target.innerHTML = 'adding';

  try {
    const response = await addToCart(addAllPayloads);
    target.innerHTML = 'Added';
    const { items } = response;
    items.forEach((item) => emitDYAddToCart(item, 1));
    fireEvent(`User adds ${items.length} products using the top CTA`, shared);
    setTimeout(() => {
      sampleContainer.classList.remove('adding');
      target.innerHTML = `${checkmark} Offer complete`;
      window.location.reload();
    }, 1000);
  } catch (error) {
    fireEvent(`Add all to cart failed: ${error}`, shared);
    window.location.reload();
  }
};

export default addAllToCartHandler;
