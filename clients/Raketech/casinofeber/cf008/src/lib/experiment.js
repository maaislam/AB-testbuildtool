import setup from './services/setup';
import shared from './shared/shared';
//import casinoData from './data/casinoData';
import featureBoxes from './components/featureBoxes';
import bonusBox from './components/bonusBox';
import { observeDOM, setCasinoData } from './helpers/utils';
import getData from './helpers/getData';
import modifyData from './helpers/modifyData';
import { casinoFeberData } from './data/casinoFeberData';

const { ID } = shared;

const init = () => {
  const isMobile = window.innerWidth < 768;

  const casinoData = window[`${ID}__data`];
  if (!casinoData) return;

  casinoData.forEach((casino) => {
    const domElems = document.querySelectorAll(`.toplist.casino .toplist-item a.title[href*="${casino.name}"]`);
    if (!domElems.length) return;
    const casinoElem = domElems[0].closest('.toplist-item');
    casinoElem.classList.add(`${ID}__casinoItem`);

    const ctrlFeaturesElem = casinoElem.querySelector('.toplist-pros');
    const bonusSection = casinoElem.querySelector('.toplist-bonus');

    if (!ctrlFeaturesElem && !casino) return;
    //const data = casinoData[casinoName];

    const featureHtmlStr = featureBoxes(ID, casino.features);
    const bonusHtmlStr = bonusBox(ID, casino, casinoElem);
    const featuresIconElem = casinoElem.querySelector('.toplist-container .toplist-features').outerHTML;
    const termsElem = casinoElem.querySelector('.toplist-terms').outerHTML;
    const reviewElem = casinoElem.querySelector('.review');

    setTimeout(() => {
      if (casinoElem.querySelector(`.${ID}__featureBoxes`)) return;

      const featureAnchorPoint = isMobile ? casinoElem : ctrlFeaturesElem;
      featureAnchorPoint.insertAdjacentHTML('beforeend', featureHtmlStr);

      !isMobile && bonusSection.insertAdjacentHTML('beforeend', featuresIconElem);
      bonusSection.insertAdjacentHTML('beforeend', bonusHtmlStr);
      casinoElem.insertAdjacentHTML('afterend', termsElem);

      if (reviewElem) {
        reviewElem.classList.add(`${ID}__review`);
        const reviewTextContent = reviewElem.textContent;
        reviewElem.textContent = `Read ${reviewTextContent} review`;
      }

      const bonusElem = casinoElem.querySelector('.toplist-bonus');
      //console.log('bonusElem: ', bonusElem);
      const cssObj = window.getComputedStyle(bonusElem, null);
      //console.log('cssObj: ', cssObj);
      const colorValue = cssObj.getPropertyValue('background-color');
      //console.log('colorValue: ', colorValue);
      const casinoElemRef = casinoElem;
      casinoElemRef.style.border = `2px solid ${colorValue}`;
    }, 1000);
  });
};

export default () => {
  setup();

  setCasinoData(ID).then(() => {
    init();
  }).catch(() => {
    init();
  });

  observeDOM('.toplist.casino', init, {
    childList: true,
    subtree: false,
    attributes: false
  });
};
