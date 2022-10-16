/*eslint-disable no-param-reassign */
import { addToCart, emitDYAddToCart } from '../helpers/addToCart';

const addToCartHandler = async (id, target, fireEvent, shared) => {
  const inputBox = target
    .closest(`.${id}__sampleupsell--row`)
    ?.querySelector('input[type="number"]');
  const sampleUpsellContainer = target.closest(`.${id}__sampleupsell`);
  sampleUpsellContainer.classList.add('adding');

  target.innerHTML = 'adding';
  const addToCartPayload = {
    id: target.getAttribute('data-id'),
    quantity: parseInt(inputBox.value)
  };
  try {
    const response = await addToCart(addToCartPayload);
    target.innerHTML = 'Added';
    emitDYAddToCart(response, parseInt(inputBox.value));
    fireEvent('User adds a product from the Samples list', shared);
    setTimeout(() => {
      sampleUpsellContainer.classList.remove('adding');
      target.innerHTML = 'Add';
      window.location.reload();
    }, 1000);
  } catch (error) {
    //console.error(error);
    fireEvent(`add to cart failed: ${error}`, shared);
    window.location.reload();
  }
};

export default addToCartHandler;
