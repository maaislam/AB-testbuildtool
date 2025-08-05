import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import { translationData } from './data/data';
import cardWrapper from './components/cardWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  //A) Hide the top hero <p> that wraps the first image via CSS class
  const heroP = document.querySelector('.entry-content > p');
  if (heroP && heroP.querySelector('img')) {
    heroP.classList.add(`${ID}__hidden`);
  }

  const listItems = document.querySelectorAll('.entry-content > ol > li');

  [...listItems].slice(0, 3).forEach((li) => {
    console.log(li.textContent); //or your logic here
    li.classList.add(`${ID}__hidde`, `${ID}__item`);
  });

  const topThreeListItems = document.querySelectorAll(`.${ID}__item`);
  const collectData = [...topThreeListItems].map((li) => {
    const linkElement = li.querySelector('a.go-link');
    const link = linkElement ? linkElement.getAttribute('href') : '';
    const text = linkElement ? linkElement.textContent.trim() : '';
    const badge = li.querySelector('.badge');
    return {
      link,
      text,
      badge: !!badge
    };
  });

  console.log(collectData);

  const language = document.documentElement.lang || 'en'; //Default to English if no lang attribute is found

  const filteredProviders = collectData
    .filter((p) => translationData[language][p.text]) //only include if translation exists
    .map((p) => ({
      name: p.text,
      link: p.link,
      badge: p.badge,
      ...translationData[language][p.text]
    }));

  console.log(filteredProviders);

  if (filteredProviders.length > 0 && !document.querySelector(`.${ID}__cardWrapper`)) {
    document
      .querySelector('.entry-content > ol')
      .insertAdjacentHTML('beforebegin', cardWrapper(ID, filteredProviders, language));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();
};
