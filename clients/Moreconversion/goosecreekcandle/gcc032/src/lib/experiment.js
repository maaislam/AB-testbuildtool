import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM, pollerLite } from './helpers/utils';
import scentWrapper from './components/scentWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  //Initialize experiment-specific code here
  //...
  //collection page
  pollerLite(['#boost-sd__filter-tree-wrapper div[data-filteroptionid="pf_t_scent"]'], () => {
    const scentElement =
      document.querySelector(
        '#boost-sd__filter-tree-wrapper div[data-filteroptionid="pf_t_scent"]'
      ) || document.querySelector('.boost-sd-right');
    console.log('first', scentElement);
    window.scenntData = [];

    const scentLists = document.querySelectorAll('ul[id="pf_t_scent"] > li');
    scentLists.forEach((list) => {
      const scentText = list.querySelector('button').ariaLabel;
      window.scenntData.push(scentText);
    });

    if (!document.querySelector(`.${ID}__scentWrapper`)) {
      document
        .querySelector('#boost-sd-filter-tree-column')
        .closest('.shopify-section')
        .insertAdjacentHTML('beforebegin', scentWrapper(ID, window.scenntData));
    }

    //console.log(scenntData, 'scentWrapper');

    //observeDOM('boost-sd__filter-product-list .boost-sd-container', (mutation) => {
    //console.log(mutation, 'mutation');
    //});
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__scentWrapper-item`)) {
      const clickedItem = target.closest(`.${ID}__scentWrapper-item`);
      const label = clickedItem.dataset.attr;
      const allItems = document.querySelectorAll(`.${ID}__scentWrapper-item`);
      allItems.forEach((item) => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');
      document.querySelector(`ul[id="pf_t_scent"] > li button[aria-label="${label}"]`)?.click();
    } else if (target.closest('#boost-sd__button--clear-all-filters')) {
      const allItems = document.querySelectorAll(`.${ID}__scentWrapper-item`);
      allItems.forEach((item) => {
        item.classList.remove('active');
      });
    }
  });

  init();
};
