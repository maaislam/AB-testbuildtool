//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { pollerLite } from '../../../../../../globalUtil/util';
import observeDOM from './helpers/observeDOM';
import { deviceType, isCartPg, isPDP, isPLP, isSale } from './helpers/pageTypes';
import saleProducts from './helpers/saleProducts';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = (oldHref) => {
  const preExistingClasses = [...document.body.classList].filter((classname) => classname.includes(`${ID}`));
  // console.log(preExistingClasses);
  preExistingClasses.forEach((item) => {
  // console.log(item);
  // setTimeout(() => {
    document.body.classList.remove(item);
  // }, 500);
  });

  if (deviceType() === 'desktop') {
    document.documentElement.classList.add(`${ID}__desktop`);
  } else if (deviceType() === 'mobile') {
    document.documentElement.classList.add(`${ID}__handheld`);
  }

  // saleProducts(ID);
  // console.log('sale items named');

  if (isSale() && isPLP()) {
    document.body.classList.add(`${ID}__sale-collection`);
  } else if (isPLP()) {
    // console.log('in plp');
    document.body.classList.add(`${ID}__collections`);
    // saleProducts(ID);
    //document.body.classList.add(`${ID}__collections`);
  } else if (isPDP()) {
    // console.log('in pdp');
    document.body.classList.add(`${ID}__product`);
    //document.body.classList.add(`${ID}__product`);
  } else if (isCartPg()) {
      document.body.classList.add(`${ID}__cart-pg`);
  }
};

export default () => {
  init();
  // saleProducts(ID);

  const mutationCallback = (mutation, urlChanged, oldHref) => {
    if (!urlChanged) return;
    if (urlChanged) {
    // saleProducts(ID);
    }
    const prevURL = new URL(oldHref);
    const regionSelected = document.querySelector('html').getAttribute('lang') === 'en' ? '1' : '2';
    // console.log(regionSelected);
    // console.log(window.location.pathname?.includes(prevURL.pathname.split('/')[regionSelected]), prevURL.pathname.split('/'), window.location.pathname);
    if (prevURL.pathname === '') return;
    if (prevURL.pathname !== '/' && window.location.pathname.includes(prevURL.pathname.split('/')[regionSelected])) return;
    // console.log('url has changed', urlChanged);
    // console.log('oldhref', oldHref);
    init();
    // saleProducts(ID);
  };

  observeDOM('body', mutationCallback);
};
