import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import button from './components/button';

const { ID, VARIATION } = shared;

const textChange = (element, text) => {
  const buttonElem = element.querySelector(`.${ID}__button span.${ID}__text`);
  buttonElem.textContent = text;
};

const init = () => {
  //Initialize experiment-specific code here
  if (VARIATION === '2') {
    const bettingSite = document.querySelector('table.betting-sites-table > tbody');
    const bettingSites = bettingSite.querySelectorAll('.betting-site');
    bettingSites.forEach((site) => {
      const logo = site.querySelector('.logo a');
      const operatorName = logo.title;
      if (!site.querySelector(`.${ID}__button`)) {
        site.insertAdjacentHTML('beforeend', button(ID, operatorName));
      }
    });
  }
};

export default () => {
  setup();

  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__button`)) {
      const clickedItem = target.closest(`.${ID}__button`);
      const operatorName = clickedItem.dataset.name;
      const site = clickedItem.closest('.betting-site');
      if (!site.classList.contains('active')) {
        site.classList.add('active');
        textChange(site, 'HIDE details');
        gaTracking(`${operatorName} Show Details`);
      } else {
        site.classList.remove('active');
        textChange(site, 'Show details');
        gaTracking(`${operatorName} Hide Details`);
      }
    } else if (target.closest('.betting-site .logo > a')) {
      const clickedItem = target.closest('.betting-site .logo > a');
      const operatorName = clickedItem.title;
      gaTracking(`${operatorName} CTA CTR | Logo`);
    } else if (target.closest('.betting-site .visit-holder > a')) {
      const clickedItem = target.closest('.betting-site .visit-holder > a');
      const operatorName = clickedItem.href.split('/go/')[1].split('/')[0];
      gaTracking(`${operatorName} CTA CTO | Green Button`);
    } else if (target.closest('.betting-site .review-holder > a')) {
      const clickedItem = target.closest('.betting-site .review-holder > a');
      const operatorName = clickedItem.href.split('/betting-sites/')[1].split('/')[0];
      gaTracking(`${operatorName} CTA CTR | Text`);
    } else if (target.closest('.betting-site .why a.guide')) {
      const clickedItem = target.closest('.betting-site .why a.guide');
      const operatorName = clickedItem.href.split('/go/')[1].split('/')[0];
      gaTracking(`${operatorName} CTA CTO | Grey Button`);
    } else if (target.closest('.betting-site .name a')) {
      const clickedItem = target.closest('.betting-site .name a');
      const operatorName = clickedItem.href.split('/betting-sites/')[1].split('/')[0];
      gaTracking(`${operatorName} CTA CTR | Star`);
    }
  });
  if (VARIATION === 'Control') return; //

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();
};
