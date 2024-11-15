import setup from './services/setup';
import shared from './shared/shared';
import ratingsContainer from './components/ratingsContainer';

const { ID, VARIATION } = shared;

const init = () => {
  const targetElement = document.querySelector('.baby__product-price');
  const wrapper = document.createElement('div');
  wrapper.classList.add(`${ID}__wrapper`);
  if (!document.querySelector(`.${ID}__wrapper`)) {
    targetElement.insertAdjacentElement('beforebegin', wrapper);
    wrapper.appendChild(targetElement);
  }

  if (!document.querySelector(`.${ID}__ratingsWrapper`)) {
    wrapper.insertAdjacentHTML('beforeend', ratingsContainer(ID));
  }
};
export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__ratings`)) {
      const ratingsWraper = target.closest(`.${ID}__ratingsContainer`);
      ratingsWraper.classList.toggle(`${ID}__show`);
    }
  });

  if (VARIATION === 'Control') {
    return;
  }

  init();
};
