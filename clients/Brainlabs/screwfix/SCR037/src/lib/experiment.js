import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import banner from './components/banner';

const { ID, VARIATION } = shared;

export default () => {
  setup();
  gaTracking('Conditions Met');
  console.log(ID);

  const anchorPoint = document.querySelector('header div[data-qaid="header-bottom-merchArea-0"]');
  if (!document.querySelector(`.${ID}__banner`)) {
    anchorPoint.insertAdjacentHTML('beforebegin', banner(ID));
  }

  document.addEventListener('click', ({ target }) => {
    if (target.closest(`.${ID}__banner-link`)) {
      gaTracking('Customer clicks the New In banner');
    }
  });
};
