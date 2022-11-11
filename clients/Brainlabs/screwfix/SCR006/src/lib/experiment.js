import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import setCompare from './helpers/setCompare';

import { isValidCategory } from './helpers/utils';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  const { isValidPdp, categoryInfo } = isValidCategory();
  console.log('isValidPdp', isValidPdp);
  if (!isValidPdp && !window.location.pathname.includes('/p/')) return;
  sessionStorage.removeItem(`${ID}__selectedforcompare`);
  console.log(ID);
  setup('Experimentation', `Screwfix - ${ID}`, shared);
  fireEvent('Conditions Met', shared);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

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
    const productId = document.getElementById('productId').value;
    setCompare(productId).then((response) => {
      if (response.status === 200) {
        fireEvent('User clicks on compare CTA', shared);
        sessionStorage.setItem(`${ID}__selectedforcompare`, productId);
        window.location.href = `${window.location.origin}${categoryInfo.url}?action=compare`;
      }
    });
  });
};
