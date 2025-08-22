import setup from './services/setup';

import shared from './shared/shared';

import cardWrapper from './components/cardWrapper';
import trackGA4Event from './services/gaTracking';
import { data } from './data/data';
import { obsIntersection } from './helpers/utils';
import { arrow } from './assets/icons';

const { ID, VARIATION } = shared;

const handleIntersectionForTest = (entry) => {
  console.log('Intersection entry:', entry);
  if (entry.isIntersecting) {
    if (!document.body.classList.contains(`${ID}__hasSeen`)) {
      console.log('In view', entry.target);
      trackGA4Event('test_run_ct_270', 'scrolls down', '');
      document.body.classList.add(`${ID}__hasSeen`);
    }
  }
};

const handleObserver = (selector) => {
  const intersectionAnchor = document.querySelector(selector);
  if (intersectionAnchor) {
    obsIntersection(intersectionAnchor, 0.2, handleIntersectionForTest);
  }
};

const init = () => {
  const { pathname } = window.location;
  const hasPageData = data[pathname];
  //A) Hide the top hero <p> that wraps the first image via CSS class

  if (VARIATION === 'control') {
    handleObserver('.entry-content > ol');
    return;
  }

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
  listItems.forEach((li, index) => {
    providerArray.push({
      name:
        li.querySelector('a.go-link') &&
        li.querySelector('a.go-link').childNodes[1]?.textContent &&
        li.querySelector('a.go-link .serial')
          ? li.querySelector('a.go-link').childNodes[1].textContent.trim()
          : li.querySelector('a.go-link')
          ? li.querySelector('a.go-link').textContent.trim()
          : li.querySelector('b')?.textContent.trim() ||
            li.querySelector('strong')?.textContent.trim() ||
            '',
      shown: !!li.querySelector('a.go-link'),
      linkElement: li.querySelector('a.go-link')
        ? li.querySelector('a.go-link').cloneNode(true)
        : null
    });

    if (!li.querySelector('a.go-link')) {
      if (li.querySelector('.serial')) {
        li.querySelector('.serial').remove();
      }
      li.insertAdjacentHTML('afterbegin', `<span class="serial">${index + 1}.</span>`);
      li.classList.add(`${ID}__initial-hidden`);
    }
    if (li.querySelector('a.go-link')) {
      li.classList.add(`${ID}__always-hidden`);
    }
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
      const initialHiddenItems = document.querySelectorAll(`li.${ID}__initial-hidden`);
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

    handleObserver(`.${ID}__cardWrapper`);
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
    button.innerHTML = name.includes('SFTP To Go')
      ? `SFTP To Go ${arrow}`
      : `Go to ${firstWord} ${arrow}`;
  });

  if (providerArray.length !== 0) {
    const countFalseShown = providerArray.filter((item) => !item.shown).length;
    if (countFalseShown > 0) {
      //Do something if there are hidden items
      renderShowMore(countFalseShown);
    }

    const hiddenItem = providerArray.filter((item) => !item.shown);

    if (hiddenItem.length > 0) {
      //Do something with hidden items

      const allHiddenElements = document.querySelectorAll(`li.${ID}__initial-hidden`);
      allHiddenElements.forEach((li) => {
        const providerNameElement = li.querySelector('b') || li.querySelector('strong');
        const providerName = providerNameElement ? providerNameElement.textContent.trim() : '';
        const hasItem = hasPageData.find(
          (dataItem) =>
            dataItem.name.toLowerCase().trim().includes(providerName.toLowerCase().trim()) ||
            providerName.toLowerCase().trim().includes(dataItem.name.toLowerCase().trim())
        );

        if (hasItem) {
          li.childNodes[2].textContent = ` - ${hasItem.best_for}` || li.childNodes[2].textContent;
        }
      });
    }

    //Get the two boundary elements
    const start = document.querySelector('.CT270__cardWrapper');
    const end =
      document.querySelector('.highlight-box') || document.querySelector('.entry-content > ol');

    if (start && end) {
      let current = start.nextElementSibling;

      while (current && current !== end) {
        if (current.tagName.toLowerCase() === 'p' || current.tagName.toLowerCase() === 'ul') {
          current.style.display = 'none';
        }
        current = current.nextElementSibling;
      }
    }
  }
};

export default () => {
  setup(); //use if needed

  init();
};
