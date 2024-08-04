/*eslint-disable no-param-reassign */
import setup from './services/setup';
import shared from './shared/shared';

const { VARIATION } = shared;

const init = () => {
  //javascript:bookmarkscroll.scrollTo('join_pkg')

  const primaryCtas = document.querySelectorAll(
    '.common_btn.shadow-pulse[href*="javascript:bookmarkscroll.scrollTo(\'join_pkg\')"]'
  );

  const btnTextConfig = {
    1: 'Get Yours Today',
    2: 'Get Yours Now',
    3: 'Unleash Your Primal Queen',
    4: 'Boost my energy now',
    5: 'Step into Your Power',
    6: 'Unlock Your True Power',
    7: 'UNLOCK YOUR INNER QUEEN'
  };

  primaryCtas.forEach((cta) => {
    cta.childNodes[0].nodeValue = btnTextConfig[VARIATION];
  });
};

export default () => {
  setup();

  if (VARIATION === 'Control') return;
  init();
};
