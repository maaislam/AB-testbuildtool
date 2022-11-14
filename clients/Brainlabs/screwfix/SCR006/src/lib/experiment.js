import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import renderModal from './components/modal';
import getCompareCount from './helpers/getCompareCount';
import setCompare from './helpers/setCompare';

import { isValidCategory } from './helpers/utils';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  const { isValidPdp, categoryInfo } = isValidCategory();

  if (!isValidPdp && !window.location.pathname.includes('/p/')) return;
  sessionStorage.removeItem(`${ID}__selectedforcompare`);

  setup('Experimentation', `Screwfix - ${ID}`, shared);
  fireEvent('Conditions Met', shared);

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
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const compareBtnAnchor = document.getElementById('product_long_description_container');
  const compareButton = `<a title="Click here to add item to compare list" class="${ID}__compare-btn btn btn--lg fill">
      Compare our ${categoryInfo.category} product range
  </a>`;

  compareBtnAnchor.insertAdjacentHTML('beforebegin', compareButton);

  document.querySelector(`.${ID}__compare-btn`).addEventListener('click', () => {
    //check if compare slot is full
    const comparePageUrl = `${window.location.origin}${categoryInfo.url}?action=compare`;
    getCompareCount().then((data) => {
      if (parseInt(data) >= 4) {
        //render modal
        document.body.insertAdjacentHTML('afterbegin', renderModal(ID, comparePageUrl));
      } else {
        const productId = document.getElementById('productId').value;
        setCompare(productId).then((response) => {
          if (response.status === 200) {
            fireEvent('User clicks on compare CTA', shared);
            sessionStorage.setItem(`${ID}__selectedforcompare`, productId);
            window.location.href = comparePageUrl;
          }
        });
      }
    });
  });
};
