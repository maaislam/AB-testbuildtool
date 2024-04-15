import setup from './services/setup';
//import shared from './shared/shared';

//const { ID, VARIATION } = shared;

const init = () => {
  const anchorPoint = document.querySelector('#overview');

  const faqSection = document.querySelector('.sec8.flt');

  anchorPoint.insertAdjacentElement('beforebegin', faqSection);
};

export default () => {
  setup();

  init();
};
