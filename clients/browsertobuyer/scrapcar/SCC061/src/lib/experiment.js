import setup from './services/setup';
import shared from './shared/shared';
import banner from './components/banner';
import { features, featuresV2 } from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  const targetElement = document.querySelector('.offerform-wrapper');
  if (!document.querySelector(`.${ID}__banner`)) {
    targetElement.insertAdjacentHTML(
      'afterbegin',
      banner(ID, VARIATION === '1' ? features : featuresV2)
    );
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  const trackGA4Event = (category, action, label) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'gaCustomEvent',
      eventCategory: category,
      eventAction: action,
      eventLabel: label
    });
    console.log('event tracked', category, action, label);
  };

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__dropdown-header`)) {
      const clickedItem = target.closest(`.${ID}__dropdown-header`);
      const dropdown = clickedItem.closest(`.${ID}__dropdown`);
      dropdown.classList.toggle('open');
      trackGA4Event('SCC 061', '');
    }
  });
  if (VARIATION === 'control') return; //

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();
};
