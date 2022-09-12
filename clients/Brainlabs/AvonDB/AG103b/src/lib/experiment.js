import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';

import slideCatalog from './components/slideCatalog';
import clickHandler from './helpers/clickHandler';
import getCatalog from './helpers/getCatalog';
import observeDOM from './helpers/observeDOM';
import { isMobile, removeExisting } from './helpers/utils';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = (catalogBtnData) => {
  //remove existing
  removeExisting(ID);
  if (
    window.location.hash !== '#page/1' ||
    document.getElementById('v7_vue_plp') ||
    sessionStorage.getItem(`${ID}__user-closed`) === 'true' ||
    window.location.href.includes(catalogBtnData.url)
  ) {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const getComputedStyle = (element) => element && window.getComputedStyle(element, null);

  const anchorElem = document.querySelector('[data-item-id="nextButGroup"]') || document.body;
  const anchorElemCss = anchorElem && getComputedStyle(anchorElem);
  const anchorElemPos = isMobile
    ? {
        top: '50%',
        left: '15px'
      }
    : {
        top: anchorElemCss.getPropertyValue('top'),
        left: anchorElemCss.getPropertyValue('left')
      };

  console.log(anchorElemPos);
  anchorElem.classList.add(`${ID}__anchorelem`);

  anchorElem.insertAdjacentHTML('beforebegin', slideCatalog(ID, catalogBtnData, anchorElemPos));
  clickHandler(fireEvent, shared);
};

export default async () => {
  setup('Experimentation', `AvonGlobal - ${ID}`, shared);
  if (window.location.hash !== '#page/1') return;
  fireEvent('Conditions Met', shared);
  fireEvent(`user views brocure with ID ${window.PDP_MANAGER.API_DATA.brochure_id}`, shared);
  document.body.addEventListener('click', (e) => {
    if (e.target.closest('[data-item-id="shareContainer"]')) {
      fireEvent('User interacts with the social media ctas', shared);
    }
  });

  if (VARIATION === 'control') {
    return;
  }
  const catalogs = await getCatalog();
  const saleCatalog = catalogs.filter(
    (catalog) => catalog.infos.publication.title.toLowerCase() === window.saleBrochureTitle
  )[0];

  const catalogBtnData =
    VARIATION === '2'
      ? {
          live_url:
            'https://online.shopwithmyrep.co.uk/c08_uk_2022/jckhtgruqyflsr4ghzld3yytro9yq45dygjt695z/index.html#plp',
          small_cover:
            'https://cdn-eu.dynamicyield.com/api/9878002/images/319cbb951b611__group_29.png',
          tiny_cover:
            'https://cdn-eu.dynamicyield.com/api/9877979/images/ad3eb4a5a289__group_29_3.png',
          infos: {
            publication: {
              title: 'Clearance Sale'
            }
          }
        }
      : saleCatalog;
  console.log(catalogBtnData);
  setTimeout(() => {
    init(catalogBtnData);
  }, 1000);
  const mutationCallback = (mutation, urlChanged) => {
    if (urlChanged) {
      setTimeout(() => {
        init(catalogBtnData);
      }, 1000);
    }
  };
  observeDOM('body', mutationCallback);
};
