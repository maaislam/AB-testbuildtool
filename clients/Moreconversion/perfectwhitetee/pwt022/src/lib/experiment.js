import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import { colorWrapper } from './components/colorWrapper';

const { ID, VARIATION } = shared;
const init = () => {
  const colorWrapperElem = document.querySelector('[data-handle="color"]');

  if (!document.querySelector(`.${ID}__colorWrapper`)) {
    colorWrapperElem.insertAdjacentHTML('beforeend', colorWrapper(ID));
  }

  const mainElem = document.querySelector('.variant__label.variant_color_label.seasonal-label');
  const wrapper = document.querySelector(`.${ID}__colorWrapper`);
  wrapper.querySelector('.selectedcolor').innerText = '- fresh mint';
  pollerLite(
    [
      () => mainElem,
      () => mainElem.querySelector('.selectedcolor')?.innerText.includes('fresh mint')
    ],
    () => {
      mainElem.querySelector('.selectedcolor').style.display = 'none';
      wrapper.classList.add('active');
    }
  );
};
export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__fresh-mint`)) {
      const clickedItem = target.closest(`.${ID}__fresh-mint`);
      const wrapper = clickedItem.closest(`.${ID}__colorWrapper`);

      document.querySelector(`.color-swatch--fresh-mint:not(.${ID}__fresh-mint)`).click();
      const mainElem = document.querySelector('.variant__label.variant_color_label.seasonal-label');
      wrapper.querySelector('.selectedcolor').innerText = '- fresh mint';
      pollerLite(
        [
          () => mainElem,
          () => mainElem.querySelector('.selectedcolor')?.innerText.includes('fresh mint')
        ],
        () => {
          mainElem.querySelector('.selectedcolor').style.display = 'none';
          wrapper.classList.add('active');
        }
      );
    } else if (
      target.closest('[data-handle="color"] .variant-input') &&
      !target.closest(`.${ID}__colorWrapper`) &&
      !target.closest(`.color-swatch--fresh-mint:not(.${ID}__fresh-mint)`)
    ) {
      const wrapper = document.querySelector(`.${ID}__colorWrapper`);
      wrapper.querySelector('.selectedcolor').innerText = '';

      const mainElem = document.querySelector('.variant__label.variant_color_label.seasonal-label');
      pollerLite(
        [
          () => mainElem,
          () => !mainElem.querySelector('.selectedcolor')?.innerText.includes('fresh mint')
        ],
        () => {
          mainElem.querySelector('.selectedcolor').removeAttribute('style');
          wrapper.classList.remove('active');
        }
      );
    }
  });

  init();
};
