import setup from './services/setup';

import shared from './shared/shared';

import cardWrapper from './components/cardWrapper';
import trackGA4Event from './services/gaTracking';
import { data, translationData } from './data/data';
import { obsIntersection } from './helpers/utils';
import { arrow } from './assets/icons';

const { ID } = shared;

const init = () => {
  const { pathname } = window.location;
  const hasPageData = data[pathname];
  //A) Hide the top hero <p> that wraps the first image via CSS class
  const heroP = document.querySelector('.entry-content > p');
  if (heroP && heroP.querySelector('img')) {
    heroP.classList.add(`${ID}__hidden`);
  }

  const listItems = document.querySelector('.highlight-box')
    ? document.querySelectorAll(
        '.entry-content .highlight-box .list-item, .entry-content .also-considering .list-item'
      )
    : document.querySelectorAll('.entry-content > ol > li');

  const providerArray = [];
  console.log(listItems, 'listItems');
  listItems.forEach((li) => {
    if (!li.querySelector('a.go-link')) {
      li.classList.add(`${ID}__initial-hidden`);
    }
    providerArray.push({
      name:
        li.querySelector('a.go-link') &&
        li.querySelector('a.go-link').childNodes[1]?.textContent &&
        li.querySelector('a.go-link .serial')
          ? li.querySelector('a.go-link').childNodes[1].textContent.trim()
          : li.querySelector('a.go-link')
          ? li.querySelector('a.go-link').textContent.trim()
          : li.querySelector('b').textContent.trim(),
      shown: !!li.querySelector('a.go-link'),
      linkElement: li.querySelector('a.go-link')
        ? li.querySelector('a.go-link').cloneNode(true)
        : null
    });
  });

  console.log(providerArray, 'providerArray');
  const renderShowMore = (count) => {
    const html = `
      <div class="${ID}__showMore">See ${count} more</div>`;

    const attachPoint = document.querySelector(`.${ID}__cardWrapper`);
    if (document.querySelector(`.${ID}__showMore`)) {
      document.querySelector(`.${ID}__showMore`).remove(); //Remove existing show more if present
    }
    attachPoint.insertAdjacentHTML('beforeend', html);
    document.querySelector(`.${ID}__showMore`).addEventListener('click', () => {
      trackGA4Event('See More Clicks', 'See More Clicks');
      const initialHiddenItems = document.querySelectorAll(`.list-item.${ID}__initial-hidden`);
      initialHiddenItems.forEach((li, i) => {
        li.classList.remove(`${ID}__initial-hidden`);
        li.classList.add(`${ID}__show`);
      });
      document.querySelector(`.${ID}__showMore`).remove();
    });
  };

  const language = document.documentElement.lang || 'en'; //Default to English if no lang attribute is found

  if (!document.querySelector(`.${ID}__cardWrapper`) && hasPageData) {
    document
      .querySelector('.entry-content')
      .insertAdjacentHTML('afterbegin', cardWrapper(ID, hasPageData, providerArray, language));
  }

  const allActiveProviders = document.querySelectorAll(`.${ID}__cardList .vpn-card`);
  allActiveProviders.forEach((provider, index) => {
    const { name } = provider.dataset;
    const providerLinkElem = provider.querySelector('.vpn-title a');
    const button = provider.querySelector('.vpn-button-wrapper a');
    if (providerLinkElem.querySelector('.serial')) {
      providerLinkElem.querySelector('.serial').remove();
    }
    providerLinkElem.insertAdjacentHTML('afterbegin', `<span class="serial">${index + 1}.</span>`);
    if (button.querySelector('.serial')) {
      button.querySelector('.serial').remove();
    }
    button.className = 'button';
    const firstWord = name ? name.split(' ')[0] : name;
    button.textContent = `Go to ${firstWord} ${arrow}`;
  });

  if (providerArray.length !== 0) {
    const countFalseShown = providerArray.filter((item) => !item.shown).length;
    if (countFalseShown > 0) {
      //Do something if there are hidden items
      renderShowMore(countFalseShown);
    }

    //Get the two boundary elements
    const start = document.querySelector('.CT270__cardWrapper');
    const end = document.querySelector('.highlight-box');

    if (start && end) {
      let current = start.nextElementSibling;

      while (current && current !== end) {
        if (current.tagName.toLowerCase() === 'p') {
          current.style.display = 'none'; //hide the <p>
        }
        current = current.nextElementSibling;
      }
    }
  }

  //const handIntersection = (entry) => {
  //if (entry.isIntersecting) {
  //document.querySelector('#toc-widget-2 .vpn')?.classList.add(`${ID}__hidden`);
  //} else {
  //document.querySelector('#toc-widget-2 .vpn')?.classList.remove(`${ID}__hidden`);
  //}
  //};

  //if (document.querySelector(`.${ID}__cardWrapper`)) {
  //obsIntersection(document.querySelector(`.${ID}__cardWrapper`), 0.2, handIntersection);
  //}
};

export default () => {
  setup(); //use if needed

  init();
};
