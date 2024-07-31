import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

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
  console.log(ID);

  if (VARIATION === 'Control') return;

  init();
};
