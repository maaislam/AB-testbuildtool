import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import banner from './components/banner';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
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
