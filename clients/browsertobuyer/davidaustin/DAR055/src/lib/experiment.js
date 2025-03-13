import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

// const validPaths = [
//   '/products/david-austin-mycorrhizal-fungi',
//   '/products/bring-me-sunshine',
//   '/products/gertrude-jekyll-climbing-rose',
//   '/products/strawberry-hill',
//   '/products/desdemona',
//   '/products/elizabeth',
//   '/products/eustacia-vye',
//   '/products/david-austin-controlled-release-rose-food',
//   '/products/gabriel-oak',
//   '/products/lady-of-shalott',
//   '/products/olivia-rose-austin',
//   '/products/tottering-by-gently'
// ];

const trackGA4Event = (category, action, label) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'gaCustomEvent',
    eventCategory: category,
    eventAction: action,
    eventLabel: label
  });
  console.log('event tracked', category, action, label);
};

const init = () => {
  if (VARIATION === 'control') {
    document.body.classList.add(`${ID}__hideReviews`);
  }
};

export default () => {
  //const { pathname } = window.location;
  //const isPathValid = validPaths.includes(pathname);
  //if (!isPathValid) return;

  setup();

  if (VARIATION === '1') {
    document.body.addEventListener('pointerup', (e) => {
      const { target } = e;

      console.log('clicked', target);

      if (target.closest('.jdgm-widget.jdgm-widget.jdgm-preview-badge')) {
        trackGA4Event('Review Summary Click', 'Review Summary Click', '');
      }
    });
  }

  init();
};
