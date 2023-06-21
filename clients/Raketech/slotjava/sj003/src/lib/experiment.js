import setup from './services/setup';

import shared from './shared/shared';

import filterData from './filterData';
import filterWrapper from './components/filterWrapper';
import piwikTrack from './services/gaTracking';
import { getStringBetween } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const anchorPoint = document.querySelector('main section:nth-child(1)');

  if (document.querySelector(`.${ID}__filters`)) {
    return;
  }

  anchorPoint.insertAdjacentHTML('afterend', filterWrapper(ID, filterData));
};
export default () => {
  setup(); //use if needed

  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  let selectedFilters;
  const initailFilterState = () => {
    return {
      themes: [],
      rewards: [],
      difficulty: 'medium',
      mobFriendly: 'false'
    };
  };

  const trackingConfig = {
    themes: 'Game Theme',
    rewards: 'Game Type',
    difficulty: 'Game Difficulty',
    mobFriendly: 'Mobile Friendly'
  };
  selectedFilters = initailFilterState();

  const updateFilters = (action, val, filterName, filterType = 'checkbox') => {
    if (action === 'add' && filterType === 'checkbox') {
      selectedFilters[filterName].push(val);
      piwikTrack(`${trackingConfig[filterName]}: ${val} | Clicks on Filter`);
    } else if (action === 'remove' && filterType === 'checkbox') {
      selectedFilters[filterName].splice(selectedFilters[filterName].indexOf(val), 1);
    } else if (action === 'change') {
      selectedFilters[filterName] = val;
      piwikTrack(
        `${trackingConfig[filterName]}: ${
          typeof val === 'boolean' && val ? 'Yes' : !val ? 'No' : val
        } | Clicks on Filter`
      );
    }
  };

  document.querySelector('main').addEventListener('change', (e) => {
    const { target } = e;

    //check if already selected, if selected remove from array else add
    const val = target.value;
    const filterName = target.dataset.filter;

    if (target.type === 'checkbox' && filterName !== 'mobFriendly') {
      const action = selectedFilters[filterName].includes(val) ? 'remove' : 'add';
      updateFilters(action, val, filterName);
    } else if (target.type === 'radio' || target.type === 'range' || filterName === 'mobFriendly') {
      const { type } = target;
      const rangeValConfig = {
        1: 'easy',
        2: 'medium',
        3: 'hard'
      };

      const sliderValue = rangeValConfig[val];
      const value =
        type === 'range' ? sliderValue : filterName === 'mobFriendly' ? target.checked : val;
      updateFilters('change', value, filterName);

      if (type === 'range') {
        target.classList.remove('hard');
        target.classList.remove('medium');
        target.classList.remove('easy');
        target.classList.add(sliderValue);
      }
    }

    console.log(selectedFilters);
  });

  document.querySelector('main').addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__clearall`)) {
      const currentFilterElem = document.querySelector(`.${ID}__filters`);
      currentFilterElem.remove();

      selectedFilters = initailFilterState();

      init();
      piwikTrack('Clear All | Clicks on Filter');
      console.log(selectedFilters);
    } else if (target.closest(`.${ID}__filtersubmit`)) {
      piwikTrack('Show Games | CTA Clicks on Filter');
      window.location.href = 'https://www.slotjava.es/tragamonedas-gratis/';
    } else if (target.closest('[href*="/tragamonedas-gratis/"]')) {
      piwikTrack('Clicks to Free to Play Slots');
    } else if (target.closest('[href*="/nuevos-casinos-online/"]')) {
      piwikTrack('Clicks to Real Money Slots Slots');
    } else if (target.closest('[href*="/slot/"]')) {
      const url = target.closest('a').href;
      piwikTrack(`${getStringBetween(url, '/slot/', '/')} | Clicks to Slot Reviews`);
    } else if (target.closest('[href*="/visitar/"]') && target.closest('.section_dark')) {
      const opName = target.closest('a').dataset.operator;
      piwikTrack(`${opName} | CTA Clicks to Operator (Bonus Intent)`);
    }
    //else if (target.closest('[href*="/visita/"]') && target.closest('.casino-table')) {
    //const opName = target.closest('a').dataset.operator;
    //piwikTrack(`${opName} | CTA Clicks to Operator (Bonus Intent) | Toplist`);
    //} else if (target.closest('[href*="/visita/"]') && target.closest('.casino-table-widget')) {
    //const opName = target.closest('a').dataset.operator;
    //piwikTrack(`${opName} | CTA Clicks to Operator (Bonus Intent) | Sidebar`);
    //}
  });

  if (VARIATION === 'Control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  init();
};
