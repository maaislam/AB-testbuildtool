import setup from './services/setup';
import shared from './shared/shared';
import variant from './components/varaiant';

const { ID, VARIATION } = shared;

const init = () => {
  const { pathname } = window.location;
  if (pathname !== '/products/crystal-hair-eraser') {
    return;
  }

  setup();

  if (!document.querySelector(`.${ID}__block-swatch`)) {
    document.querySelector('.block-swatch-list').insertAdjacentHTML('afterbegin', variant(ID));
  }
};

export default () => {
  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__block-swatch`)) {
      e.preventDefault();
      const clickedItem = target.closest(`.${ID}__block-swatch`);
      const inputElement = clickedItem.querySelector('input');
      const blockSwatches = document.querySelectorAll(
        `.block-swatch-list .block-swatch:not(.${ID}__block-swatch)`
      );

      blockSwatches.forEach((blockSwatch) => {
        blockSwatch.querySelector('input').checked = false;
      });
      if (inputElement) {
        inputElement.checked = true;
        const atcForm = document.querySelector(
          'form[id*="product-form-template"] input[name="id"]'
        );

        if (atcForm) {
          atcForm.value = '44839584497839';
        }
      }
    } else if (target.closest(`.block-swatch:not(.${ID}__block-swatch)`)) {
      const inputElement = document.querySelector(`.${ID}__block-swatch input`);
      if (inputElement) inputElement.checked = false;
    }
  });
  init(); //
};
