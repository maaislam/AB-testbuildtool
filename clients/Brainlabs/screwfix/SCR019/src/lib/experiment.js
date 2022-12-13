import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import obsIntersection from './helpers/observeIntersection';

const { ID, VARIATION } = shared;
const INTERSECTING_RATIO = VARIATION === '1' ? 0.1 : 1;
export default () => {
  setup(); //use if needed
  //console.log(ID);

  const energyRatingElem = document.querySelector('.energyLabelArrow');
  const energyRating = energyRatingElem.getAttribute('alt');

  const isMobile = () => window.matchMedia('(max-width: 640px)').matches;
  const compareBtnAnchor =
    VARIATION === '1'
      ? isMobile()
        ? document.querySelector('#product_description')
        : document.querySelector('.pr__tabbed-content')
      : document.querySelector('#product_specification_list');
  const intersectionCallback = (entry) => {
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      entry.target.classList.add(`${ID}__seen`);
      gaTracking('Conditions Met'); //use if needed
      isMobile() && gaTracking('Customer scrolls far enough to see the energy rating image.');
      gaTracking(`user sees ${energyRating}`, true);
    }
  };

  obsIntersection(compareBtnAnchor, INTERSECTING_RATIO, intersectionCallback);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const clonedRatingElem = energyRatingElem.cloneNode(true);
  energyRatingElem.classList.add(`${ID}__hide`);
  clonedRatingElem.classList.add(`${ID}__clonedRatingElem`);
  document.getElementById('pr__media').insertAdjacentElement('afterend', clonedRatingElem);
  document.querySelector(`.${ID}__clonedRatingElem`).addEventListener('click', () => {
    energyRatingElem.click();
  });
};
