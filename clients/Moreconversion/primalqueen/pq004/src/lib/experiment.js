import setup from './services/setup';
import shared from './shared/shared';
import button from './components/button';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('.banner .comn_btn_box');

  if (document.querySelector(`.${ID}__button`)) {
    document.querySelector(`.${ID}__button`).remove();
  }

  if (VARIATION === '1') {
    targetPoint
      .querySelector('.button_outer')
      .insertAdjacentHTML('afterbegin', button(ID, 'Get Yours Today'));
  }

  if (VARIATION === '2') {
    targetPoint
      .querySelector('.button_outer')
      .insertAdjacentHTML('afterbegin', button(ID, 'Get Yours Now'));
  }

  if (VARIATION === '3') {
    targetPoint
      .querySelector('.button_outer')
      .insertAdjacentHTML('afterbegin', button(ID, 'Unleash Your Primal Queen'));
  }

  if (VARIATION === '4') {
    targetPoint
      .querySelector('.button_outer')
      .insertAdjacentHTML('afterbegin', button(ID, 'Boost my energy now'));
  }

  if (VARIATION === '5') {
    targetPoint
      .querySelector('.button_outer')
      .insertAdjacentHTML('afterbegin', button(ID, 'Step into Your Power'));
  }

  if (VARIATION === '6') {
    targetPoint
      .querySelector('.button_outer')
      .insertAdjacentHTML('afterbegin', button(ID, 'Unlock Your True Power'));
  }
  if (VARIATION === '7') {
    targetPoint
      .querySelector('.button_outer')
      .insertAdjacentHTML('afterbegin', button(ID, 'UNLOCK YOUR INNER QUEEN'));
  }
};

export default () => {
  setup(); //use if needed

  if (VARIATION === 'Control') return;
  init();
};
