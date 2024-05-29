import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { stickySection } from './components/stickySection';
import { obsIntersection } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const parentElement = document.querySelector('#td-outer-wrap');
  const featuredImageLink = parentElement.querySelector('.td-post-featured-image > a').href;
  const casinoName = featuredImageLink.split('/visit/')[1].split('/')[0];
  const casinoTitle = parentElement.querySelector('.entry-title').textContent;

  parentElement &&
    parentElement.insertAdjacentHTML(
      'beforeend',
      stickySection(ID, featuredImageLink, casinoName, casinoTitle)
    );
};

export default () => {
  setup();

  const allLinks = document.querySelectorAll('[href*="/visit"]');
  allLinks.forEach((link, index) => {
    //eslint-disable-next-line no-param-reassign
    link.dataset.count = index;
  });

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__link`)) {
      const { casino } = target.closest(`.${ID}__link`).dataset;
      gaTracking(`${casino} | CTA CTO | Sticky`);
    } else if (target.closest('[href*="/visit"]')) {
      const { count } = target.closest('[href*="/visit"]').dataset;
      gaTracking(`CTA CTO ${count}`);
    }
  });

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'Control') return;

  init();

  const targetElement = document.querySelector('h1.entry-title');

  const intersectionCallback = (entry) => {
    const stickyElement = document.querySelector(`.${ID}__stickySection`);
    if (!entry.isIntersecting) {
      stickyElement.classList.add(`${ID}__show`);
    } else {
      stickyElement.classList.remove(`${ID}__show`);
    }
  };

  obsIntersection(targetElement, 0, intersectionCallback);
};
