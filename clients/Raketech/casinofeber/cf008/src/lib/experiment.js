import setup from './services/setup';
import shared from './shared/shared';
import featureBoxes from './components/featureBoxes';
import bonusBox from './components/bonusBox';
import { observeDOM, setCasinoData } from './helpers/utils';
import gaTracking from './services/gaTracking';
import setLeoVegasJackpot from './helpers/setLeoVegasJackpot';

const { ID, VARIATION } = shared;
const linkType = VARIATION === 'Control' ? 'A Link' : 'B Link';

const init = () => {
  const isMobile = window.innerWidth < 768;

  const casinoData = window[`${ID}__data`];
  if (!casinoData) return;

  casinoData.forEach((casino) => {
    const domElems = document.querySelectorAll(
      `.toplist.casino .toplist-item a.title[href*="${casino.name}"]`
    );
    if (!domElems.length) return;
    const casinoElem = domElems[0].closest('.toplist-item');
    casinoElem.classList.add(`${ID}__casinoItem`);

    const ctrlFeaturesElem = casinoElem.querySelector('.toplist-pros');
    const bonusSection = casinoElem.querySelector('.toplist-bonus');

    if (!ctrlFeaturesElem && !casino) return;
    //const data = casinoData[casinoName];

    const featureHtmlStr = featureBoxes(ID, casino.features);
    const bonusHtmlStr = bonusBox(ID, casino, casinoElem);
    const featuresIconElem = casinoElem.querySelector(
      '.toplist-container .toplist-features'
    ).outerHTML;
    const termsElem = casinoElem.querySelector('.toplist-terms').outerHTML;
    const reviewElem = casinoElem.querySelector('.review');

    const casinoElemRef = casinoElem;
    if (VARIATION !== 'Control') {
      casinoElemRef.style.border = `2px solid ${casino.operatorColor}`;
    }

    setTimeout(() => {
      //set affiliate links
      reviewElem.classList.add(`${ID}__review`);
      const casinoCtaBtn = casinoElem.querySelector('.visit');
      const casinoLogo = casinoElem.querySelector('.img');
      if (casino[linkType]) {
        casinoLogo.setAttribute('data-affiliateLink', true);
        casinoCtaBtn.setAttribute('data-affiliateLink', true);
      }
      casinoCtaBtn.setAttribute('href', casino[linkType]);
      casinoCtaBtn.setAttribute('data-operator', casino.name);
      casinoLogo.setAttribute('href', casino[linkType]);
      casinoLogo.setAttribute('data-operator', casino.name);

      if (VARIATION === 'Control') return;

      if (casinoElem.querySelector(`.${ID}__featureBoxes`)) return;

      const featureAnchorPoint = isMobile ? casinoElem : ctrlFeaturesElem;
      featureAnchorPoint.insertAdjacentHTML('beforeend', featureHtmlStr);

      !isMobile && bonusSection.insertAdjacentHTML('beforeend', featuresIconElem);
      bonusSection.insertAdjacentHTML('beforeend', bonusHtmlStr);
      casinoElem.insertAdjacentHTML('afterend', termsElem);

      if (reviewElem) {
        const reviewTextContent = reviewElem.textContent;
        reviewElem.textContent = `Read ${reviewTextContent} review`;
      }

      setLeoVegasJackpot(ID, casinoElem, casino, isMobile);
    }, 1250);
  });
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.visit')) {
      const casinoNameElem = e.target.closest('a');
      let casinoName = casinoNameElem.dataset.operator;
      casinoName = casinoName.replace(/-/g, ' ');
      const hasAffiliateLink = casinoNameElem.dataset.affiliatelink;

      gaTracking(`${hasAffiliateLink ? linkType : 'Default Link'} | ${casinoName} CTA CTO (Button)`);
    } else if (e.target.closest('a.img') || e.target.closest('a.title')) {
      const casinoNameElem = e.target.closest('a');
      let casinoName = casinoNameElem.dataset.operator;
      casinoName = casinoName.replace(/-/g, ' ');
      const hasAffiliateLink = casinoNameElem.dataset.affiliatelink;

      gaTracking(`${hasAffiliateLink ? linkType : 'Default Link'} | ${casinoName} CTA CTO (Logo)`);
    } else if (e.target.closest(`.${ID}__review`) || e.target.closest('.review')) {
      const casinoNameElem = e.target.closest(`.${ID}__review`) || e.target.closest('.review');
      let casinoName = casinoNameElem.getAttribute('href').split('/')[2];
      casinoName = casinoName.replace(/-/g, ' ');

      gaTracking(`${casinoName} CTA CTR`);
    }
  });

  setCasinoData(ID)
    .then(() => {
      init();
    })
    .catch(() => {
      init();
    });

  observeDOM('.toplist.casino', init, {
    childList: true,
    subtree: false,
    attributes: false
  });
};
