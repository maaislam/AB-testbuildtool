import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import casinoData from './data/casinoData';
import featureBoxes from './components/featureBoxes';

const { ID, VARIATION } = shared;

const init = () => {
  const allCasinoElems = document.querySelectorAll('.toplist.casino .toplist-item');
  allCasinoElems.forEach((casinoElem) => {
    const casinoName = casinoElem.querySelector('a.title').textContent.toLowerCase();
    const isMatch = casinoData[casinoName];
    if (!isMatch) return;
    console.log('isMatch: ', isMatch);
    const featureHtmlStr = featureBoxes(ID, isMatch.features);
  });
};

export default () => {
  setup(); //use if needed

  gaTracking('Conditions Met'); //use if needed

  init();
};
