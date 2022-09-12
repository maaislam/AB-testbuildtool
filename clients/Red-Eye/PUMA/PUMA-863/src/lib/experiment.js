import shared from './shared/shared';
import { pollerLite } from '../../../../../../globalUtil/util';
import { searchStructureDesktop, searchStructureMobile } from './component/structure';
import clickHandler from './helper/clickHandler';
import inputFocused from './helper/inputFocused';
import getCountryName from './helper/getCountryName';
import { popularProducts, suggestedProducts, updatedSuggestedProds } from './static/data';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

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
  document.body.classList.add(`${ID}`);
  document.querySelector(`.${ID}__searchStructure`)?.remove();
  let countryName = getCountryName();
  if (window.location.href.includes('/en_PT/')) {
    countryName = '/pt/';
  } else if (window.location.href.includes('/en_IE/')) {
    countryName = '/ie/';
  } else if (window.location.href.includes('/en_SE/')) {
    countryName = '/se/';
  } else if (window.location.href.includes('/en_DK/')) {
    countryName = '/dk/';
  } else if (window.location.href.includes('/en_GR/')) {
    countryName = '/gr/';
  } else if (window.location.href.includes('/en_CH/')) {
    countryName = '/ch/';
  }

  const modifiedCountryName = countryName.split('/')[1];
  //setup desktop structure

  pollerLite(['#siteHeader .p-header-spacer .js-cmp-search-bar-dropdown-target'], () => {
    document
      .querySelector('#siteHeader .p-header-spacer .js-cmp-search-bar-dropdown-target')
      .insertAdjacentHTML(
        'beforebegin',
        //eslint-disable-next-line max-len
        searchStructureDesktop(
          ID,
          popularProducts,
          updatedSuggestedProds[modifiedCountryName],
          countryName
        )
      );
  });

  pollerLite(['#siteHeader #mobileSearch .js-cmp-search-bar-dropdown-target'], () => {
    document
      .querySelector('#siteHeader #mobileSearch .js-cmp-search-bar-dropdown-target')
      .insertAdjacentHTML(
        'beforebegin',
        //eslint-disable-next-line max-len
        searchStructureMobile(
          ID,
          popularProducts,
          updatedSuggestedProds[modifiedCountryName],
          countryName
        )
      );
  });

  pollerLite(
    [
      '#siteHeader .p-header-spacer .js-cmp-search-bar-dropdown-target',
      '#siteHeader #mobileSearch .js-cmp-search-bar-dropdown-target'
    ],
    () => {
      clickHandler(ID);
      inputFocused(ID);
    }
  );
};
