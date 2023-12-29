import setup from './services/setup';
import shared from './shared/shared';
import casinoData from './data/casinoData';
import featureBoxes from './components/featureBoxes';

const { ID, VARIATION } = shared;

const init = () => {
  const allCasinoElems = document.querySelectorAll('.toplist.casino .toplist-item');
  allCasinoElems.forEach((casinoElem, index) => {
    const ctrlFeaturesElem = casinoElem.querySelector('.toplist-pros');
    if (!ctrlFeaturesElem) return;
    const casinoName = casinoElem.querySelector('a.title').textContent.toLowerCase();
    const isMatch = casinoData[casinoName];
    if (!isMatch) return;
    console.log('isMatch: ', isMatch);
    const featureHtmlStr = featureBoxes(ID, isMatch.features, index);

    setTimeout(() => {
      ctrlFeaturesElem.insertAdjacentHTML('beforeend', featureHtmlStr);
    }, 1000);
  });
};

export default () => {
  setup(); //use if needed

  //gaTracking('Conditions Met'); //use if needed

  init();
};
