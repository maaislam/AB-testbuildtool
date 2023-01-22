import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import deliveryBanner from './components/deliveryBanner';
import obsIntersection from './helpers/obsIntersection';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
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

  document.querySelector('.pr__btns.sm-hide > p').classList.add(`${ID}__hide`);

  const anchorElem = document.querySelector('.pr__prices');

  if (document.querySelector(`.${ID}__deliverybanner`)) return;
  if (VARIATION !== 'control') {
    anchorElem.insertAdjacentHTML('afterend', deliveryBanner(ID));
  }

  const intersectionCallback = (entry) => {
    //console.log(entry);
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      entry.target.classList.add(`${ID}__seen`);
      gaTracking('Conditions Met');
      gaTracking('Customer scrolls to the price on PDP');
      //console.log('Conditions Met');
    }
  };

  obsIntersection(anchorElem, 0.3, intersectionCallback);

  if (VARIATION === 'control') {
    return;
  }
  document.querySelector(`.${ID}__deliverybanner a`).addEventListener('click', () => {
    gaTracking('Customer clicks “learn more”');
  });
};
