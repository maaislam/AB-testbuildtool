//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import searchBar from './component/structure';
import { pollerLite } from '../../../../../../globalUtil/util';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  //-----------------------------
  //f control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //..

  const init = () => {
    setTimeout(() => {
      document
        .querySelector('[class="p-header-actions-icon p-header-actions-icon--search"]')
        .click();
    }, 100);
  };

  document.body.classList.add(`${ID}`);

  document.querySelector(`.${ID} #siteHeader`).insertAdjacentHTML('beforeend', searchBar(ID));

  document.querySelector(`.${ID}__searchBarContainer input`).addEventListener('focus', (e) => {
    init();
  });

  document.querySelector(`.${ID}__searchBarContainer span`).addEventListener('click', (e) => {
    init();
  });

  document.querySelector('body').addEventListener('click', (e) => {
    pollerLite(['body[class*="is-scroll-disabled"]:not(.mobile-search--active)'], () => {
      document.querySelector(
        'body #siteHeader .p-header-actions-item-inner .p-header-actions-icon--search .p-header-actions-icon-default'
      ).style.display = 'block';
    });

    pollerLite(['body:not([class*="is-scroll-disabled"])'], () => {
      document
        .querySelector(
          'body #siteHeader .p-header-actions-item-inner .p-header-actions-icon--search .p-header-actions-icon-default'
        )
        .removeAttribute('style');
    });
  });

  if (
    window.location.href.includes('/search?') &&
    window.location.href.includes('&originalphrase=')
  ) {
    const search = decodeURI(window.location.href).split('&originalphrase=')[1];
    document.querySelector(`.${ID}__searchBarContainer input`).value = search;
  }

  if (
    window.location.href.includes('/search?') &&
    !window.location.href.includes('&originalphrase=')
  ) {
    const search = decodeURI(window.location.href).split('/search?q=')[1];
    document.querySelector(`.${ID}__searchBarContainer input`).value = search;
  }
};
