import setup from './services/setup';
import shared from './shared/shared';
import casinoData from './data/casinoData';
import featureBoxes from './components/featureBoxes';
import bonusBox from './components/bonusBox';
import { observeDOM } from './helpers/utils';

const { ID } = shared;

const init = () => {
  const allCasinoElems = document.querySelectorAll('.toplist.casino .toplist-item');
  allCasinoElems.forEach((casinoElem) => {
    const ctrlFeaturesElem = casinoElem.querySelector('.toplist-pros');
    const bonusSection = casinoElem.querySelector('.toplist-bonus');

    if (!ctrlFeaturesElem) return;

    const casinoName = casinoElem.querySelector('a.title').textContent.toLowerCase();
    const data = casinoData[casinoName];

    if (!data) return;

    const featureHtmlStr = featureBoxes(ID, data.features);
    const bonusHtmlStr = bonusBox(ID, data, casinoElem);
    const featuresIconElem = casinoElem.querySelector('.toplist-container .toplist-features').outerHTML;
    const termsElem = casinoElem.querySelector('.toplist-terms').outerHTML;
    const reviewElem = casinoElem.querySelector('.toplist-review');

    setTimeout(() => {
      if (ctrlFeaturesElem.querySelector(`.${ID}__featureBoxes`)) return;

      casinoElem.classList.add(`${ID}__casinoItem`);

      ctrlFeaturesElem.insertAdjacentHTML('beforeend', featureHtmlStr);
      bonusSection.insertAdjacentHTML('beforeend', featuresIconElem);
      bonusSection.insertAdjacentHTML('beforeend', bonusHtmlStr);
      casinoElem.insertAdjacentHTML('afterend', termsElem);

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
  init();

  observeDOM('.toplist.casino', init, {
    childList: true,
    subtree: false,
    attributes: false
  });
};
