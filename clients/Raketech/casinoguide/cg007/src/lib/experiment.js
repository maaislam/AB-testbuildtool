/*eslint-disable no-param-reassign */
import setup from './services/setup';
import shared from './shared/shared';

import modal from './components/modal';
import modifyTopList from './helpers/modifyTopList';

import searchHandler from './handlers/searchHandler';
import clickHandler from './handlers/clickHandler';
import { getCroStorage } from './helpers/utils';
import updateAffLinks from './helpers/updateAffLinks';
import changeHandler from './handlers/changeHandler';
import gaTracking from './services/gaTracking';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed

  if (VARIATION === 'Control') {
    document.body.addEventListener('click', (ev) => {
      const { target } = ev;

      if (target.closest('a[href*="/go/"]')) {
        const operatorName = target.closest('a').href.split('/go/')[1];
        const insideToplist = target.closest('[data-toplist-item]');
        gaTracking(
          `${operatorName} | Clicks on Operator (bonus intent)${insideToplist ? ' | Toplist' : ''}`
        );
      } else if (
        target.closest('.campaignsWrapper__1X4H0') &&
        (target.closest('.logoContainer__2kEvL') || target.closest('[class^="logoContainer__"]'))
      ) {
        const operatorName = target.closest('a').href.split('/').pop();
        gaTracking(`${operatorName} | Clicks on Review | Sidebar`);
      }
    });
    return;
  }

  window.selectedCasinos = [];

  //place affiliate links if returning visitor
  document.body.addEventListener('click', clickHandler);

  document.body.addEventListener('change', changeHandler);
  const affiliateLinkSet = getCroStorage(`${ID}__afflinkset`);
  updateAffLinks(affiliateLinkSet);
  if (affiliateLinkSet) {
    modifyTopList();
    return;
  }

  //render modal
  if (!document.querySelector(`.${ID}__modal`)) {
    document.body.insertAdjacentHTML('afterbegin', modal(ID));
  }

  const stagetwoSearchbar = document.querySelector(`#${ID}__search-input`);
  stagetwoSearchbar.addEventListener('keyup', searchHandler);

  modifyTopList();
};
