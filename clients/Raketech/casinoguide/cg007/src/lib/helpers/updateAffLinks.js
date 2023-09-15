/*eslint-disable no-useless-escape */
import affiliateLinksConfig from '../affiliateLinksConfig';
import shared from '../shared/shared';
import { setCroStorage } from './utils';

const updateAffLinks = (linkset) => {
  const validLinkset = linkset || 'A Link';
  const { ID } = shared;
  const casinoToplistItems = document.querySelectorAll('[data-toplist-item]');
  casinoToplistItems.forEach((casinoToplistItem) => {
    const casinoNameElem = casinoToplistItem.querySelector('[data-toplist-brand]');

    if (!casinoNameElem) return;
    const casinoHrefElem = casinoToplistItem.querySelector('[data-toplist-item-link]');
    const casinoHref = casinoHrefElem.href;
    const casinoName = casinoNameElem.dataset.toplistBrand.replace(/[\/\-_ ]/g, '').toLowerCase();
    const newUrl = affiliateLinksConfig[validLinkset][casinoName];
    //console.log('🚀 ', newUrl, casinoName);
    casinoNameElem.setAttribute('data-oldhref', casinoHref);
    casinoNameElem.classList.add(`${ID}__affiliate`);

    setCroStorage(`${ID}__afflinkset`, linkset);

    if (newUrl) {
      casinoHrefElem.href = newUrl;
    }
    //console.log('🚀casinoName:', casinoName);
  });
};

export default updateAffLinks;
