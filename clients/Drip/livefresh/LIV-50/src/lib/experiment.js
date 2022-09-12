/*eslint-disable max-len */
import { observeDOM, pollerLite } from '../../../../../../globalUtil/util';
import { cartPage, checkoutPage, collectionPage, infoPage, productPage } from './helpers/pageTypes';
import { homePageFunc } from './helpers/homePageFunc';
import shared from './shared/shared';
import { prodPageFunc } from './helpers/prodPageFunc';
import { collectionPageFunc } from './helpers/collectionPageFunc';
import { minicartImages } from './helpers/minicartImages';
import { checkoutsImage } from './helpers/checkoutsImage';
import { cartPageFunc } from './helpers/cartPageFunc';
import reviewsImages from './helpers/reviewsImages';

const { ID, VARIATION } = shared;

const init = () => {
  minicartImages();
    homePageFunc(ID);

  if (infoPage) {
    homePageFunc(ID);
    reviewsImages();
  }

  if (productPage) {
    prodPageFunc(ID);
  }

  if (collectionPage) {
    collectionPageFunc(ID);
  }
  //if (checkoutPage) {
  //document.querySelector('.content').classList.add(`${ID}__opacity`);
  //checkoutsImage(ID);
  //// document.querySelector('.content').classList.remove(`${ID}__opacity`);
  //}
  if (cartPage) {
    cartPageFunc();
  }
};

export default () => {
  //document.querySelector('body').classList.add(`${ID}__opacity`);
  if (checkoutPage) {
    pollerLite(['.sidebar #order-summary'], () => {
      checkoutsImage(ID);
      document.querySelector('.sidebar #order-summary').classList.add('test-opacity');
    });
  }

  window.onload = () => {
    //document.querySelector('body').classList.add(`${ID}__opacity`);
    console.log('variation');
    init();
    document.querySelector('body').classList.add(`${ID}__opacity`);
  };
  const mutObsConfig = {
    childList: true,
    attributes: true,
    attributeFilter: ['aria-hidden'],
    attributeOldValue: true
  };

  observeDOM(`[data-section-type="cart"] ${cartPage ? '.PageContent' : ''}`, minicartImages, mutObsConfig);
if (cartPage) {
  pollerLite(['[data-section-type="cart"] .PageContent'], () => {
    observeDOM('[data-section-type="cart"] .PageContent', cartPageFunc, {
      attributes: true, childList: true
    });
  });
}

//const targetNode = document.querySelector('.PageContent');

////Options for the observer (which mutations to observe)
//const config = {
//attributes: true, childList: true
//};

////Create an observer instance linked to the callback function
//const observer = new MutationObserver(cartPageFunc);

////Start observing the target node for configured mutations
//observer.observe(targetNode, config);

  if (checkoutPage) {
    pollerLite(['.sidebar__content'], () => {
      observeDOM('.sidebar__content', checkoutsImage, {
        childList: true,
        attributes: true
      });
    });
  }
};
