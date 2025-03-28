import { getCartRugData, getUnderlay } from './utils';

export const cartUnderlay = (id) => {
    const allRugs = document.querySelectorAll('input[name="updates[]"]');
    const quantitySelectElem = document.querySelector('.quantity-box select');
    const { value: quantity } = quantitySelectElem;

    if (Number(quantity) > 1 || allRugs.length > 1) return;

    const originalBtn = document.querySelector('.btn-add-underlay');
  if (!originalBtn) return;

  const cartBtn = originalBtn.cloneNode(true);
  cartBtn.classList.add(`${id}__cartAtcBtn`);
  cartBtn.textContent = 'Add Underlay';

  originalBtn.style.display = 'none';
  originalBtn.insertAdjacentElement('afterend', cartBtn);

  const rug = getCartRugData();
  if (!rug) {
    console.warn('Cart rug size or price not found!');
    return;
  }

  const underlay = getUnderlay(rug.width, rug.length);
  if (!underlay) return;

  cartBtn.textContent = `Add underlay: £${underlay.price.toFixed(2)}`;
  cartBtn.dataset.variantId = underlay.variantId;
};
