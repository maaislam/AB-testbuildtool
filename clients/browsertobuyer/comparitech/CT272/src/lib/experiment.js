import setup from './services/setup';

import shared from './shared/shared';

import cardWrapper from './components/cardWrapper';
import trackGA4Event from './services/gaTracking';
import translationData from './data/data';
import { obsIntersection } from './helpers/utils';

const { ID } = shared;

const init = () => {
  //A) Hide the top hero <p> that wraps the first image via CSS class
  const heroP = document.querySelector('.entry-content > p');
  if (heroP && heroP.querySelector('img')) {
    heroP.classList.add(`${ID}__hidden`);
  }

  const listItems = document.querySelectorAll('.entry-content > ol:first-of-type > li');

  listItems.forEach((li, i) => {
    li.classList.add(`${ID}__hidden`); //Hide all items initially
    if (i < 3) {
      li.classList.add(`${ID}__item`);
    }
  });

  const renderShowMore = () => {
    const html = `
      <div class="${ID}__showMore">See ${listItems.length - 3} more</div>`;

    const attachPoint = document.querySelector('.entry-content > ol');
    if (document.querySelector(`.${ID}__showMore`)) {
      document.querySelector(`.${ID}__showMore`).remove(); //Remove existing show more if present
    }
    attachPoint.insertAdjacentHTML('afterend', html);
    document.querySelector(`.${ID}__showMore`).addEventListener('click', () => {
      listItems.forEach((li, i) => {
        if (i < 3) return; //Skip the first three items
        li.classList.remove(`${ID}__hidden`);
        trackGA4Event('See More Clicks', 'See More Clicks');
      });
      document.querySelector(`.${ID}__showMore`).remove();
    });
  };

  renderShowMore();

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

  const language = document.documentElement.lang || 'en'; //Default to English if no lang attribute is found

  const filteredProviders = collectData
    .filter((p) => translationData[language][p.text]) //only include if translation exists
    .map((p) => ({
      name: p.text,
      link: p.link,
      badge: p.badge,
      ...translationData[language][p.text]
    }));

  if (filteredProviders.length > 0 && !document.querySelector(`.${ID}__cardWrapper`)) {
    document
      .querySelector('.entry-content > ol')
      .insertAdjacentHTML('beforebegin', cardWrapper(ID, filteredProviders, language));
  }

  const handIntersection = (entry) => {
    if (entry.isIntersecting) {
      document.querySelector('#toc-widget-2 .vpn')?.classList.add(`${ID}__hidden`);
    } else {
      document.querySelector('#toc-widget-2 .vpn')?.classList.remove(`${ID}__hidden`);
    }
  };

  if (document.querySelector(`.${ID}__cardWrapper`)) {
    obsIntersection(document.querySelector(`.${ID}__cardWrapper`), 0.2, handIntersection);
  }
};

export default () => {
  setup(); //use if needed

  init();
};
