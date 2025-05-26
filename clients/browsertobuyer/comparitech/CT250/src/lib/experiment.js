import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import header from './components/header';
import rightSideBanner from './components/rightSideBanner';
import { sidebarObj } from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  const headerElement = document.querySelector('.home-nav header');
  const softwareTitleElement = headerElement.querySelector('.software-title');
  const softwareTitle = softwareTitleElement ? softwareTitleElement.textContent.trim() : '';
  const softwareDescriptionElement = headerElement.querySelector('.software-excerpt');
  const softwareDescription = softwareDescriptionElement
    ? softwareDescriptionElement.textContent.trim()
    : '';

  const mainContainer = document.querySelector('.main-container');
  const disclaimerElement = document.querySelector('.row.disclaimer');
  const wrapper = document.querySelector('.main.wrapper');

  if (!document.querySelector(`.${ID}__disclaimer`)) {
    mainContainer.insertAdjacentElement('beforebegin', disclaimerElement);
    disclaimerElement.classList.add(`${ID}__disclaimer`);
  }
  if (!document.querySelector(`.${ID}__header`)) {
    disclaimerElement.insertAdjacentHTML(
      'afterend',
      header(ID, softwareTitle, softwareDescription)
    );
  }

  //Extract the arrays
  const articles = sidebarObj[`${window.location.pathname}`];
  if (articles) {
    console.log(articles, 'articles');
    const mustReadArray = articles
      .filter((item) => item.location === 'mustread')
      .sort((a, b) => a.position - b.position);

    const reviewsArray = articles
      .filter((item) => item.location === 'review')
      .sort((a, b) => a.position - b.position);

    if (!document.querySelector(`.${ID}__rightSideContainer`)) {
      wrapper.insertAdjacentHTML('afterend', rightSideBanner(ID, mustReadArray, reviewsArray));
    }
  }
};

export default () => {
  setup(); //use if needed

  init();
};
