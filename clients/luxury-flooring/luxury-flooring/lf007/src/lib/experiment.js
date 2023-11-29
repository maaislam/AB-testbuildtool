import combineBtn from './components/combineBtn';
import { observeIntersection } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const intersectionAnchor = document.querySelector('.fp-calculator');
  const anchorPoint = document.body;

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

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__atcBtn`)) {
      e.preventDefault();

      const element = document.querySelector('.product-info-price .flooring-price');
      element.scrollIntoView({
        behavior: 'smooth'
      });

      const areaInput = document.querySelector('.fp-calculator .fp-controls input');
      setTimeout(() => {
        areaInput.value = 1;
        areaInput.dispatchEvent(new Event('change'));
        areaInput.value = '';
        areaInput.focus();
      }, 500);
    } else if (target.closest(`.${ID}__orderSampleWrapper`) && target.closest(`.${ID}__orderSampleBtn`)) {
      document.querySelector('#sample_addtocart_form button.tocart').click();
    }
  });
};
