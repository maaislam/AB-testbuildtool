import { pollerLite } from '../../../../../../globalUtil/util';
import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
//helper
import obsIntersection from './helpers/obsIntersection';
import { removeAppBanner, testRemoveConditions } from './helpers/utils';
import { clickHandler } from './handlers/clickHandlers';
import setViewCount from './helpers/setViewCount';
//components
import appBanner from './components/appBanner';

let appInitDelay;

const { ID, VARIATION } = shared;

const init = () => {
  removeAppBanner(ID);
  setup('Experimentation', `TravisPerkins - ${ID}`, shared);

  if (testRemoveConditions(ID)) {
    return;
  }

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  fireEvent('Conditions Met', shared);

  if (VARIATION === 'control') {
    return;
  }
  //
  const appContainer =
    VARIATION === '1' ? document.querySelector('#app-container') : document.querySelector('footer');
  const header =
    VARIATION === '1'
      ? document.querySelector('[data-test-id="header-top-bar"]')
      : document.querySelector('footer');

  appContainer.insertAdjacentHTML(
    `${VARIATION === '1' ? 'afterbegin' : 'beforeend'}`,
    appBanner(ID)
  );

  const appBannerElm = document.querySelector(`.${ID}__appbanner-wrapper`);
  console.log(appBannerElm);
  const intersectionHandler = (entry) => {
    if (!entry.isIntersecting) {
      appBannerElm.classList.add(`${ID}__sticky--v${VARIATION}`);

      return;
    }
    appBannerElm.classList.remove(`${ID}__sticky--v${VARIATION}`);
  };
  obsIntersection(
    header,
    {
      threshold: VARIATION === '1' ? 1 : 0
    },
    intersectionHandler
  );

  setViewCount(ID);
};

export default () => {
  setup('Experimentation', `TravisPerkins - ${ID}`, shared);
  appInitDelay = setTimeout(
    () => {
      init();
    },
    VARIATION === '1' ? 2000 : 7000
  );
  pollerLite(['#app-container'], () => {
    const appContainer = document.querySelector('#app-container');
    if (!testRemoveConditions(ID)) {
      clickHandler(appContainer, shared, fireEvent);
    }

    let oldHref = window.location.href;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        if (oldHref !== window.location.href) {
          oldHref = window.location.href;
          removeAppBanner(ID);
          clearTimeout(appInitDelay);
          appInitDelay = setTimeout(
            () => {
              init();
            },
            VARIATION === '1' ? 2000 : 7000
          );
        }
      });
    });

    const config = {
      childList: true,
      subtree: true
    };

    observer.observe(appContainer, config);
  });
};
