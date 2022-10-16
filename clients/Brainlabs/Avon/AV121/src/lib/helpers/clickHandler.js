/*eslint-disable no-param-reassign */
import checkmark from '../components/checkmarck';
import { addToCart, emitDYAddToCart } from './addToCart';

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
    const sampleUpsellContainer = target.closest(`.${id}__sampleupsell`);
    sampleUpsellContainer.classList.add('adding');
    //const target = sampleUpsellContainer.querySelectorAll('.add-to-cart')[isMobile ? 1 : 0];
    target.innerHTML = 'adding';
    const addToCartPayload = {
      id: target.getAttribute('data-id'),
      quantity: parseInt(inputBox.value)
    };
    addToCart(addToCartPayload)
      .then((res) => {
        target.innerHTML = 'Added';
        return res;
      })
      .then((res) => {
        emitDYAddToCart(res, parseInt(inputBox.value));
        fireEvent('User adds a product from the Samples list', shared);
        setTimeout(() => {
          sampleUpsellContainer.classList.remove('adding');
          target.innerHTML = 'Add';
          window.location.reload();
        }, 1000);
      })
      .catch((err) => console.error(err));
  } else if (targetMatched('[data-type="multi-add"]')) {
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
    addToCart(addAllPayloads)
      .then((res) => {
        fireEvent('', shared);
        target.innerHTML = 'Added';
        return res;
      })
      .then(({ items }) => {
        items.forEach((item) => emitDYAddToCart(item, 1));
        fireEvent(`User adds ${items.length} products using the top CTA`, shared);
        setTimeout(() => {
          sampleContainer.classList.remove('adding');
          target.innerHTML = `${checkmark} Offer complete`;
          window.location.reload();
        }, 1000);
      })
      .catch((err) => console.error(err));
  } else if (targetMatched(`.${id}__delete-btn`)) {
    //get currently deleted items
    const delItem = target
      .closest(`.${id}__sampleupsell--row`)
      .dataset.title.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    const deletedItems = JSON.parse(sessionStorage.getItem(`${id}__delList`));
    const newEvent = new CustomEvent('rerender');
    fireEvent('User removes a product from the sample list', shared);
    if (!deletedItems) {
      const arr = JSON.stringify([delItem]);
      sessionStorage.setItem(`${id}__delList`, arr);
      document.body.dispatchEvent(newEvent);
      return;
    }

    deletedItems.push(delItem);
    sessionStorage.setItem(`${id}__delList`, JSON.stringify(deletedItems));

    document.body.dispatchEvent(newEvent);
  } else if (targetMatched(`.${id}__pdp-link`)) {
    fireEvent(
      'User interacts with a product from the Samples list and is taken to the PDP of the product',
      shared
    );
  } else if (targetMatched('.see-all-sample')) {
    fireEvent('User interacts with the view all samples CTA', shared);
  }
};

export default clickHandler;
