import { observeIntersection } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;
const intersectionAnchor = document.querySelector('#product-addtocart-button');
const anchorPoint = document.body;

const init = () => {
  const htmlStr = `<div class="${ID}__hide ${ID}__stickyATC">
    <div class="${ID}__area">
      <div class="fp-controls" data-bind="scope: 'fp-calculator'">
        <span class="fp-controls-label">Area: </span>
        <input type="number" inputmode="decimal" step="0.1" min="0" data-bind="textInput: input">
        <span class="fp-controls-m2">m²</span>
      </div>
    </div>
    <div class="${ID}__atcBtnWrapper">
      <button class="${ID}__atcBtn" type="button">Add to Basket</button>
    </div>
  </div>`;
  anchorPoint.insertAdjacentHTML('beforeend', htmlStr);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const stickySection = document.querySelector(`.${ID}__stickyATC`);
      let scrcrollTimer;
      clearTimeout(scrcrollTimer);
      if (entry.isIntersecting) {
        stickySection.classList.remove(`${ID}__show`);
        stickySection.classList.add('slide-out-bottom');
        scrcrollTimer = setTimeout(() => {
          stickySection.classList.add(`${ID}__hide`);
        }, 1000);
      } else {
        stickySection.classList.remove('slide-out-bottom');
        stickySection.classList.remove(`${ID}__hide`);
        stickySection.classList.add(`${ID}__show`);
      }
    });
  };

  const controlAreaInput = document.querySelector(`div:not(.${ID}__area) .fp-controls input`);
  const stickyAreaInput = document.querySelector(`.${ID}__area .fp-controls input`);

  const updateInputValues = (value) => {
    controlAreaInput.value = value;
    stickyAreaInput.value = value;
  };

  controlAreaInput.addEventListener('input', () => {
    updateInputValues(controlAreaInput.value);
  });

  stickyAreaInput.addEventListener('input', () => {
    updateInputValues(stickyAreaInput.value);
  });

  observeIntersection(intersectionAnchor, 0, handleIntersection);
};

export default () => {
  setup();
  init();

  anchorPoint.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__atcBtnWrapper`) && target.closest(`.${ID}__atcBtn`)) {
      intersectionAnchor.click();
    }
  });
};
