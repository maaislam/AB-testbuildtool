import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const mainWrapper = document.querySelector('#MainContent .overflow');
  if (VARIATION === '1') {
    mainWrapper
      .querySelector('.section_1')
      .insertAdjacentElement('beforebegin', mainWrapper.querySelector('.section_4'));
  }

  if (VARIATION === '2') {
    mainWrapper
      .querySelector('.section_1')
      .insertAdjacentElement('beforebegin', mainWrapper.querySelector('.section_4'));

    mainWrapper
      .querySelector('.section_1')
      .insertAdjacentElement('beforebegin', mainWrapper.querySelector('.section_5'));
  }

  if (VARIATION === '3') {
    mainWrapper
      .querySelector('.section_1')
      .insertAdjacentElement('beforebegin', mainWrapper.querySelector('.section_10'));
  }

  if (VARIATION === '4') {
    mainWrapper
      .querySelector('.section_1')
      .insertAdjacentElement('beforebegin', mainWrapper.querySelector('.queen_promise_section'));
    mainWrapper
      .querySelector('.section_1')
      .insertAdjacentElement('beforebegin', mainWrapper.querySelector('.section_4'));

    mainWrapper
      .querySelector('.section_1')
      .insertAdjacentElement('beforebegin', mainWrapper.querySelector('.section_2'));
  }
};

export default () => {
  setup();

  if (VARIATION === 'Control') return;

  init();
};
