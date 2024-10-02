import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { parseHTML, parseJSON, pollerLite } from './helpers/utils';
import wrapper from './components/wrapper';

const { ID, VARIATION } = shared;

const getLocalStorageCookie = (cookieName) => {
  const cookie = localStorage.getItem(cookieName);
  if (cookie) {
    return JSON.parse(cookie);
  }
  console.log(`Cookie with name "${cookieName}" not found in local storage.`);
  return null;
};

const init = () => {
  //Add your experiment specific code here
  const cookieData = getLocalStorageCookie('__kla_viewed');
  if (!cookieData.length) return;

  const mainContent = document.querySelector('#MainContent');
  const targetPoint = mainContent.querySelectorAll('.shopify-section')[1];

  if (!document.querySelector(`.${ID}__recentlyViewed`)) {
    targetPoint.insertAdjacentHTML('afterend', wrapper(ID, cookieData));
  }

  const getAllUrls = cookieData.map((item) => item[0].Url);
  parseHTML(ID, getAllUrls);
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
    if (target.closest('.custom-label') && target.closest('.variant-input')) {
      e.preventDefault();
      const clickedItem = target.closest('.variant-input');
      const productId = clickedItem.querySelector('input').dataset.variantId;
      const mainUrl = clickedItem.closest('.grid-product__link').href;
      const newUrl = `${mainUrl}?variant=${productId}`;
      window.location.href = newUrl;
    }
  });

  init();
};
