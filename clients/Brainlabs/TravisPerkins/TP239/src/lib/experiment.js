import { pollerLite } from '../../../../../../globalUtil/util';
import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { getUser } from './helpers/userUtil';
import { tradeUserConfig } from './data';
import searchWrapper from './components/searchWrapper';
import clickHandler from './helpers/clickHandler';

const { ID, VARIATION } = shared;

const init = (userData) => {
  setup('Experimentation', `TravisPerkins - ${ID}`, shared);

  if (!userData || location.pathname !== '/') return;

  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  fireEvent('Conditions Met', shared);
  if (VARIATION == 'control') {
    return;
  }

  // eslint-disable-next-line no-console

  const customerTradeType = userData.customerTradeType === '' ? '12B' : userData.customerTradeType;

  const traderInfo = {
    testBasedData: tradeUserConfig[customerTradeType],
    userData,
  };
  // eslint-disable-next-line no-console
  console.log(traderInfo);
  document.querySelector(`.${ID}__searchWrapper`)?.remove();

  const anchorElm = document.querySelector('[data-test-id="home-page-wrapper"]');
  anchorElm.insertAdjacentHTML('beforebegin', searchWrapper(ID, traderInfo));

  document.querySelector(`.${ID}__searchWrapper`).addEventListener('click', (e) => {
    clickHandler(e.target, shared, fireEvent);
  });
};

export default async () => {
  setup('Experimentation', `TravisPerkins - ${ID}`, shared);

  //get user Data
  const userData = await getUser();
  document.querySelector(`.${ID}__searchWrapper`)?.remove();
  setTimeout(() => {
    init(userData);
  }, 2000);

  pollerLite(['#app-container', '[data-test-id="home-page-wrapper"]'], () => {
    const appContainer = document.querySelector('#app-container');

    let oldHref = location.href;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        // console.log(mutation);

        if (oldHref != location.href) {
          oldHref = location.href;
          //clear old DOM
          document.querySelector(`.${ID}__searchWrapper`)?.remove();
          setTimeout(() => {
            init(userData);
          }, 2000);
        }
      });
    });

    const config = {
      childList: true,
      subtree: true,
    };

    observer.observe(appContainer, config);
  });
};
