import setup from './services/setup';
import shared from './shared/shared';
import { setCasinoData } from './helpers/utils';
import initMobileSwiper from './helpers/initMobileSwiper';
import toplistItems from './components/toplistItems';
import gaTracking from './services/gaTracking';

const { ID, VARIATION } = shared;
const linkType = VARIATION === 'Control' ? 'A Link' : 'B Link';

const init = () => {
  const toplistSection = document.querySelector('.toplist.casino');

  const casinoData = window[`${ID}__data`];
  if (!casinoData) return;

  const allCasinos = document.querySelectorAll('.toplist.casino .toplist-item');
  const firstThreeCasinos = [...allCasinos].slice(0, 3);

  const htmlStr = `<div class='${ID}__toplistContainer swiper'>
    ${toplistItems(ID, firstThreeCasinos)}
  </div>`;
  toplistSection.insertAdjacentHTML('afterbegin', htmlStr);
};

export default () => {
  setup();
  setCasinoData(ID);

  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.visit')) {
      const casinoNameElem = e.target.closest('a');
      let casinoName = casinoNameElem.dataset.operator;
      if (!casinoName) return;
      casinoName = casinoName.replace(/-/g, ' ');
      const hasAffiliateLink = casinoNameElem.dataset.affiliatelink;

      gaTracking(
        `${hasAffiliateLink ? linkType : 'Default Link'} | ${casinoName} CTA CTO (Button)`
      );
    } else if (e.target.closest('a.img') || e.target.closest('a.title')) {
      const casinoNameElem = e.target.closest('a');
      let casinoName = casinoNameElem.dataset.operator;
      if (!casinoName) return;
      casinoName = casinoName.replace(/-/g, ' ');
      const hasAffiliateLink = casinoNameElem.dataset.affiliatelink;

      gaTracking(`${hasAffiliateLink ? linkType : 'Default Link'} | ${casinoName} CTA CTO (Logo)`);
    } else if (e.target.closest(`a.${ID}__review`)) {
      const casinoNameElem = e.target.closest(`.${ID}__review`);
      let casinoName = casinoNameElem.getAttribute('href').split('/')[2];
      casinoName = casinoName.replace(/-/g, ' ');

      gaTracking(`${casinoName} CTA CTR`);
    }
  });

  init();
  initMobileSwiper('.swiper');
};
