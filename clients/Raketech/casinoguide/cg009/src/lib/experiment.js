import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { stickyBanner } from './components/stickyBanner';
import { obsIntersection, observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  setup(); //use if needed
  const targetElem = document.querySelector(
    'main .MuiBox-root:first-child > .MuiContainer-root a.MuiButtonBase-root + .MuiBox-root'
  );

  if (!document.querySelector(`.${ID}__stickBanner`)) {
    document.querySelector('main').insertAdjacentHTML('afterend', stickyBanner(ID));
  }

  const callback = (entry) => {
    if (!entry.isIntersecting) {
      document.querySelector(`.${ID}__stickBanner`).classList.add(`${ID}__visible`);
    }

    if (entry.isIntersecting) {
      document.querySelector(`.${ID}__stickBanner`).classList.remove(`${ID}__visible`);
    }

    console.log(entry, 'entry');
  };
  obsIntersection(targetElem, 0, callback);
};
export default () => {
  //gaTracking('Conditions Met'); //use if needed
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
  init();
  observeDOM('html', init);
};
