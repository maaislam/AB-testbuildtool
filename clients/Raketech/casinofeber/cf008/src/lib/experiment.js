import setup from './services/setup';
import shared from './shared/shared';
import featureBoxes from './components/featureBoxes';
import bonusBox from './components/bonusBox';
import { observeDOM, setCasinoData } from './helpers/utils';
import gaTracking from './services/gaTracking';

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
    casinoElemRef.style.border = `2px solid ${casino.operatorColor}`;

    setTimeout(() => {
      if (casinoElem.querySelector(`.${ID}__featureBoxes`)) return;

      const featureAnchorPoint = isMobile ? casinoElem : ctrlFeaturesElem;
      featureAnchorPoint.insertAdjacentHTML('beforeend', featureHtmlStr);

      !isMobile && bonusSection.insertAdjacentHTML('beforeend', featuresIconElem);
      bonusSection.insertAdjacentHTML('beforeend', bonusHtmlStr);
      casinoElem.insertAdjacentHTML('afterend', termsElem);

      //set affiliate links
      const casinoCtaBtn = casinoElem.querySelector('.visit');
      const casinoLogo = casinoElem.querySelector('.img');
      casinoCtaBtn.setAttribute('href', casino[linkType]);
      casinoLogo.setAttribute('href', casino[linkType]);

      if (reviewElem) {
        reviewElem.classList.add(`${ID}__review`);
        const reviewTextContent = reviewElem.textContent;
        reviewElem.textContent = `Read ${reviewTextContent} review`;
      }
    }, 1000);
  });
};

export default () => {
  setup();

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

  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.visit')) {
      const casinoNameElem = e.target.closest('a');
      let casinoName = casinoNameElem.getAttribute('href').split('/')[2];
      casinoName = casinoName.replace(/-/g, ' ');

      gaTracking(`${linkType} | ${casinoName} CTA CTO (Button)`);
    } else if (e.target.closest('a.img') || e.target.closest('a.title')) {
      const casinoNameElem = e.target.closest('.a.img');
      let casinoName = casinoNameElem.getAttribute('href').split('/')[2];
      casinoName = casinoName.replace(/-/g, ' ');

      gaTracking(`${linkType} | ${casinoName} CTA CTO (Logo)`);
    } else if (e.target.closest(`.${ID}__review`)) {
      const casinoNameElem = e.target.closest(`.${ID}__review`);
      let casinoName = casinoNameElem.getAttribute('href').split('/')[2];
      casinoName = casinoName.replace(/-/g, ' ');

      gaTracking(`${linkType} | ${casinoName} CTA CTR`);
    }
  });
};
