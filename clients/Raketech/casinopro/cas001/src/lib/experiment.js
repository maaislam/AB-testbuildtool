import casinoCards from './components/casinoCards';
import gaTracking from './services/gaTracking';
//import { casinoData } from './pageData';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = (casinoData) => {
  const anchorPoint = document.getElementById('alla-casinon');

  const rectangleCardsData = casinoData.filter((item) => item.badge !== 'top casino');

  const squareCardsData = casinoData.filter((item) => item.badge === 'top casino');

  if (document.getElementById(`${ID}__casinocards-container`)) return;

  const casinoCardsContainer = document.createElement('div');
  casinoCardsContainer.id = `${ID}__casinocards-container`;

  //casinoCardsContainer.classList.add('hide-sibling');
  anchorPoint.insertAdjacentElement('beforebegin', casinoCardsContainer);

  casinoCardsContainer.insertAdjacentHTML(
    'afterbegin',
    casinoCards(ID, rectangleCardsData, 'rectangle')
  );
  casinoCardsContainer.insertAdjacentHTML('afterbegin', casinoCards(ID, squareCardsData, 'square'));

  //place image and disclaimer
  const cards = document.querySelectorAll(`.${ID}__casinocard`);
  cards.forEach((card, i) => {
    const logoSrcElem = document.querySelector(`.${ID}__logo-${i}`);
    const disclaimerSrcElem = document.querySelector(`.${ID}__disclaimer-${i}`);
    const logoCopy = logoSrcElem.cloneNode(true);
    const disclaimerCopy = disclaimerSrcElem.cloneNode(true);
    const anchorElem = logoCopy.querySelector('a');
    const imgName = anchorElem.href.split('/svenska-casinon/')[1].split('/')[0];
    const newImage = `<img src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/casinopro/${imgName}.png" alt="logo" width="112" height="67" class="logo__vGhnn keep">`;
    logoCopy.querySelector('a').insertAdjacentHTML('afterbegin', newImage);
    card.querySelector(`.${ID}__casinocard-info`).insertAdjacentElement('afterbegin', logoCopy);
  });
  setTimeout(() => {
    document.body.classList.add('hide3');
    window.scrollTo(0, 0);
  }, 2000);
};

const getDomData = () => {
  const casinos = document.querySelectorAll('[class^="toplistOList"]>li');
  return [...casinos].slice(0, 3).map((casino, index) => {
    //set class to extract logo and rating later
    const logoWrapper = casino.querySelector('[class^="logoWrapper__"]');
    const offerElem = casino.querySelector('[class^="offers__"]');

    const btnElem = casino.querySelector('a[class^="cta__"]');

    const offers = offerElem.innerText;
    const btnText = btnElem.innerText;
    const btnLink = btnElem.getAttribute('href');
    const badge = index <= 2 ? 'top casino' : '';
    const disclaimerWrapper = casino.querySelector('ul[class^="tc__"]');

    logoWrapper.classList.add(`${ID}__logo-${index}`);
    disclaimerWrapper.classList.add(`${ID}__disclaimer-${index}`);
    return {
      offers,
      btnText,
      btnLink,
      badge
    };
  });
};

const operatorName = (url) => {
  const path = new URL(url).pathname;
  const pathSegments = path.split('/').filter((segment) => segment.trim() !== '');
  if (pathSegments.length > 0) {
    const lastWord = pathSegments[pathSegments.length - 1];
    return lastWord;
  }
  return null;
};
export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('a[href*="/till/"]')) {
      gaTracking(`${operatorName(target.closest('a').href)} | bet-intent CTA Click`);
    } else if (target.closest('a[href*="/svenska-casinon/"]')) {
      gaTracking(`${operatorName(target.closest('a').href)} | operator-detail CTA Click`);
    }
  });

  if (VARIATION === 'control') {
    return;
  }

  const casinoInfo = getDomData();
  init(casinoInfo);
  //window.scrollTo(500, 0);
};
