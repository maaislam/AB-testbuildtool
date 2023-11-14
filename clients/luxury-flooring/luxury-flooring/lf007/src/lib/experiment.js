import combineBtn from './components/combineBtn';
import scrollToQuantity from './helpers/scrollToQuantity';
import { observeIntersection } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;
const intersectionAnchor = document.querySelector('#product-addtocart-button');
const anchorPoint = document.body;

const init = () => {
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const stickySection = document.querySelector(`.${ID}__stickyATC`);
      let scrollTimer;
      clearTimeout(scrollTimer);
      if (entry.isIntersecting) {
        stickySection.classList.remove(`${ID}__show`);
        stickySection.classList.add('slide-out-bottom');
        scrollTimer = setTimeout(() => {
          stickySection.classList.add(`${ID}__hide`);
        }, 250);
      } else {
        stickySection.classList.remove('slide-out-bottom');
        stickySection.classList.remove(`${ID}__hide`);
        stickySection.classList.add(`${ID}__show`);
      }
    });
  };

  anchorPoint.insertAdjacentHTML('beforeend', combineBtn(ID));

  observeIntersection(intersectionAnchor, 0, handleIntersection);
};

export default () => {
  setup();
  init();

  anchorPoint.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__atcBtnWrapper`) && target.closest(`.${ID}__atcBtn`)) {
      const areaInput = document.querySelector('.fp-calculator .fp-controls input');
      scrollToQuantity(areaInput);
      setTimeout(() => {
        areaInput.focus();
      }, 1500);
    } else if (target.closest(`.${ID}__orderSampleWrapper`) && target.closest(`.${ID}__orderSampleBtn`)) {
      document.querySelector('#sample_addtocart_form button.tocart').click();
    }
  });
};
