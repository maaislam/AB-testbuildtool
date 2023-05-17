import { getOperatorFromUrl } from './helpers/utils';
import gaTracking from './services/gaTracking';
import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed

  document.body.addEventListener('click', (ev) => {
    const { target } = ev;

    if (target.closest('a[href*="/redirect"]')) {
      const href = target.closest('a').getAttribute('href');
      const clickedFromCarousel =
        target.closest(`.${ID}__bookmakercards`) && VARIATION !== 'control';
      gaTracking(`${clickedFromCarousel ? 'Carousel' : ''} ${getOperatorFromUrl(href)} cta Click`);
    }
  });

  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  if (VARIATION === 'control') {
    return;
  }
};
