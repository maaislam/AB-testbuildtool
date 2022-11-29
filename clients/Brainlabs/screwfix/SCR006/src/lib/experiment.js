import { pollerLite } from '../../../../../../globalUtil/util';
import setup from './helpers/setup';
import fireEvent from './helpers/gaTracking';
import renderModal from './components/modal';
import getCompareCount from './helpers/getCompareCount';
import obsIntersection from './helpers/observeIntersection';
import setCompare from './helpers/setCompare';

import { isValidCategory } from './helpers/utils';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  if (!isValidCategory()) return;
  const { isValidPdp, categoryInfo } = isValidCategory();
  //console.log('i am in');
  //fireEvent('Conditions Met');
  if (!isValidPdp && !window.location.pathname.includes('/p/')) return;

  setup();

  document.body.addEventListener('click', ({ target }) => {
    if (
      target.closest('.js--close-Lightbox') ||
      (target.closest('.lb-DataHolder ') && !target.closest('.wrp__modal--error')) ||
      target.closest('.lb-btn-cancel')
    ) {
      document.querySelector(`.${ID}__overlay`).remove();
      document.querySelector(`.${ID}__DataHolder-Wrap`).remove();
    }
  });
  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  const compareBtnAnchor = document.getElementById('product_long_description_container');

  const intersectionCallback = (entry) => {
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      entry.target.classList.add(`${ID}__seen`);

      fireEvent('Conditions Met');
    }
  };

  obsIntersection(compareBtnAnchor, 0.5, intersectionCallback);

  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  //const compareBtnAnchor = document.getElementById('product_long_description_container');
  const compareButton = `<a title="Click here to add item to compare list" class="${ID}__compare-btn btn btn--lg fill">
      Compare our ${categoryInfo.category} product range
  </a>`;

  compareBtnAnchor.insertAdjacentHTML('beforebegin', compareButton);

  document.querySelector(`.${ID}__compare-btn`).addEventListener('click', ({ target }) => {
    target.classList.add('loading');
    //check if compare slot is full
    const comparePageUrl = `${window.location.origin}${categoryInfo.url}?action=compare`;
    getCompareCount().then((data) => {
      if (parseInt(data) >= 4) {
        //render modal
        document.body.insertAdjacentHTML('afterbegin', renderModal(ID, comparePageUrl));
        target.classList.remove('loading');
      } else {
        const productId = document.getElementById('productId').value;
        setCompare(productId).then((response) => {
          if (response.status === 200) {
            fireEvent('User clicks on compare CTA', shared);
            const lastBreadcrumb = document.querySelector('.bc__sm >a').getAttribute('href');
            sessionStorage.setItem(`${ID}__selectedforcompare`, comparePageUrl);

            //window.history()
            window.location.replace(lastBreadcrumb);
          }
        });
      }
    });
  });
};

export default () => {
  pollerLite(['#product_long_description_container'], init);
};
