import casinoCards from './components/casinoCards';
import gaTracking from './services/gaTracking';
//import { casinoData } from './pageData';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = (casinoData) => {
  console.log('🚀 ~ file: experiment.js:10 ~ init ~ casinoData:', casinoData);
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
    //const disclaimerSrcElem = document.querySelector(`.${ID}__disclaimer-${i}`);
    const logoCopy = logoSrcElem.cloneNode(true);
    //const disclaimerCopy = disclaimerSrcElem.cloneNode(true);
    const anchorElem = logoCopy.querySelector('a');
    const imgName = anchorElem.href.split('/svenska-casinon/')[1].split('/')[0];
    const newImage = `<img src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/casinopro/${imgName}.png" alt="logo" width="112" height="67" class="logo__vGhnn keep">`;
    logoCopy.querySelector('a').insertAdjacentHTML('afterbegin', newImage);
    card.querySelector(`.${ID}__casinocard-info`).insertAdjacentElement('afterbegin', logoCopy);
  });
  const testContainer = document
    .querySelector(`#${ID}__casinocards-container`)
    .closest('.container');

  //content update
  const contentWrap = document.querySelector(
    '#page-wrap > div.container > div.row > div.col-md-8.col-sm-12 > div.whitebg > div:nth-child(3) > p'
  );
  contentWrap.innerText =
    'Letar du efter säkra och pålitliga Svenska casino på nätet? Då har du hamnat helt rätt! Här listar vi alla Svenska casinon med godkänd licens från Spelinspektionen. Du kan också läsa allt du behöver känna till om Svenska casino online.';

  testContainer.classList.add(`${ID}__container`);
  setTimeout(() => {
    document.body.classList.add('hide3');
    //window.scrollTo(0, 0);
  }, 2000);

  const topList = document.querySelectorAll('.toplistOList__ES0A0 li');
  topList.forEach((item) => {
    const highlighted = item.querySelector('[alt="Toplist Sash"]');
    if (!highlighted) return;
    item.classList.add('blue-highlight');
    //const sashText = item.querySelector('.sashText__2fH3C').innerText;
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

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    const positionName = target.closest(`.${ID}__casinocard`) ? '| Featured Boxes' : '';
    if (target.closest('a[href*="/till/"]')) {
      //[Operator_Name] | CTA Clicks to Operator (Bonus Intent) | Featured Boxes
      gaTracking(
        `${operatorName(
          target.closest('a').href
        )} | CTA Clicks to Operator (Bonus Intent) ${positionName}`
      );
    } else if (target.closest('a[href*="/svenska-casinon/"]')) {
      gaTracking(`${operatorName(target.closest('a').href)} | Clicks to Review ${positionName}`);
    } else if (target.closest('.collapseButton__1kKwD')) {
      gaTracking("Clicks on Toplist 'Load More'");
    } else if (target.closest('a[href*="/tc/"]')) {
      gaTracking(
        `${operatorName(target.closest('a').href)} | CTA Clicks to Operator T&Cs 'Villkor gäller'`
      );
    } else if (target.closest('a[href*="stodlingen"]') || target.closest('a[href*="spelpaus"]')) {
      const parentCard = target.closest(`.${ID}__casinocard`) || target.closest('li');
      const opUrl = parentCard.querySelector('a').href;
      gaTracking(`${operatorName(opUrl)} | Clicks to Compliance Links '${target.innerText}`);
    }
  });

  if (VARIATION === 'Control') {
    return;
  }

  const casinoInfo = getDomData();
  init(casinoInfo);
  const figures = document.querySelectorAll('figure');
  figures.forEach((figure, i) => {
    figure.classList.add(`${ID}__hide`);
    if (i === 0) {
      figure.classList.add('hide-sibling-paragraph');
    }
  });
};
