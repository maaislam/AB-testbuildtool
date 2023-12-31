import setup from './services/setup';
import shared from './shared/shared';
import casinoData from './data/casinoData';
import featureBoxes from './components/featureBoxes';
import bonusBox from './components/bonusBox';

const { ID, VARIATION } = shared;

const init = () => {
  const allCasinoElems = document.querySelectorAll('.toplist.casino .toplist-item');
  allCasinoElems.forEach((casinoElem, index) => {
    const ctrlFeaturesElem = casinoElem.querySelector('.toplist-pros');
    const bonusSection = casinoElem.querySelector('.toplist-bonus');
    if (!ctrlFeaturesElem) return;
    const casinoName = casinoElem.querySelector('a.title').textContent.toLowerCase();
    const data = casinoData[casinoName];
    if (!data) return;
    const featureHtmlStr = featureBoxes(ID, data.features, index);
    const bonusHtmlStr = bonusBox(ID, data, casinoElem);
    const featuresIconElem = casinoElem.querySelector('.toplist-container .toplist-features').outerHTML;
    const termsElem = casinoElem.querySelector('.toplist-terms').outerHTML;

    setTimeout(() => {
      ctrlFeaturesElem.insertAdjacentHTML('beforeend', featureHtmlStr);
      bonusSection.insertAdjacentHTML('beforeend', featuresIconElem);
      bonusSection.insertAdjacentHTML('beforeend', bonusHtmlStr);
      casinoElem.insertAdjacentHTML('afterend', termsElem);
    }, 1000);
  });
};

export default () => {
  setup(); //use if needed

  //gaTracking('Conditions Met'); //use if needed

  init();
};
