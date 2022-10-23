import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import pagebanner from './components/pagebanner';
import clickHandler from './helpers/clickHandler';
import triggerEvent from './helpers/triggerEvent';
import waitForElm from './helpers/waitForElm';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup('Experimentation', `AvonGlobal - ${ID}`, shared);

  const pagesBtn = document.querySelector('[data-item-id="diaporamaBtn"]');
  const scrollshop =
    document.querySelector('[data-item-id="menuBtn"]') ||
    document.querySelector('[data-item-id="scrollshopBtn"]');

  document.body.addEventListener('pointerup', (event) => {
    clickHandler(ID, event, fireEvent);
  });
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    fireEvent('Conditions Met', shared);
    return;
  }

  VARIATION === '2' ? triggerEvent(scrollshop) : triggerEvent(pagesBtn);
  fireEvent(
    `User interacts with a digital brochure - ${window.PDP_MANAGER.API_DATA.brochure_id}`,
    shared
  );
  fireEvent('Conditions Met', shared);

  window.addEventListener('hashchange', ({ newURL, oldURL }) => {
    if (newURL.includes('#pages')) {
      waitForElm('#v7_vue_pages').then((anchorElem) => {
        //const isClosed = sessionStorage.getItem(`${ID}__pages-navtextclosed`);
        anchorElem.insertAdjacentHTML('afterbegin', pagebanner(ID, 'pages'));
      });
    } else if (newURL.includes('#plp')) {
      waitForElm('#v7_vue_plp').then((anchorElem) => {
        //const isClosed = sessionStorage.getItem(`${ID}__scrollshop-navtextclosed`);
        anchorElem.insertAdjacentHTML('afterbegin', pagebanner(ID, 'scrollshop'));
      });
    } else if (newURL.includes('#page/1') && !oldURL.includes('#')) {
      triggerEvent(pagesBtn);
    }
  });
};
