import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;
const indicatorObject = {
  0: 'reviews',
  1: 'bonus'
};

const init = (targetElement) => {
  const featuredImage = document.querySelector('.td-post-featured-image');

  if (!document.querySelector(`${ID}__fcrp-scfeatured`)) {
    featuredImage.insertAdjacentElement('afterend', targetElement);
    targetElement.classList.add(`${ID}__fcrp-scfeatured`);
  }
};

export default () => {
  setup(); //use if needed

  const targetElement = document.querySelector('.fcrp-scfeatured');
  document.querySelectorAll('.fcrp-scfeatured').forEach((item, index) => {
    item.dataset.position = index;
  });

  //document.querySelectorAll('.scfeatright > button').forEach((item, index) => {
  //item.setAttribute('data-attr', indicatorObject[index]);
  //const url = item.getAttribute('onClick').match(/'([^']+)'/)[1];
  //window[`url${index + 1}`] = url;
  //item.removeAttribute('onClick');
  //});

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('a.ex-links') && target.closest('.fcrp-scfeatured')) {
      const casinoName = target.closest('a.ex-links').href.split('visit/')[1].split('/')[0];
      const { position } = target.closest('.fcrp-scfeatured').dataset;
      gaTracking(`${casinoName} Bonus Page CTA | Logo ${position}`);
    } else if (target.closest('a.fcrp-button') && target.closest('.fcrp-scfeatured')) {
      const casinoName = target.closest('a.fcrp-button').href.split('visit/')[1].split('/')[0];
      const { position } = target.closest('.fcrp-scfeatured').dataset;
      gaTracking(`${casinoName} CTO CTA | Button ${position}`);
    } else if (
      target.closest('figure.wp-block-image.size-large') &&
      target.closest('.td-post-content')
    ) {
      const targetedEl = target.closest('figure.wp-block-image.size-large');
      const casinoName = targetedEl.querySelector('a').href.split('visit/')[1].split('/')[0];
      gaTracking(`${casinoName} Click Banner 2 CTA`);
    } else if (
      target.closest('figure.wp-block-image.size-full') &&
      target.closest('.td-post-content')
    ) {
      const targetedEl = target.closest('figure.wp-block-image.size-full');
      const casinoName = targetedEl.querySelector('a').href.split('visit/')[1].split('/')[0];
      gaTracking(`${casinoName} Click Banner Low CTA 1`);
    } else if (target.closest('.td-post-featured-image')) {
      const targetedEl = target.closest('.td-post-featured-image');
      const casinoName = targetedEl.querySelector('a').href.split('visit/')[1].split('/')[0];
      gaTracking(`${casinoName} Click Banner 1 CTA`);
    }
  });

  document.body.addEventListener('pointerup', (e) => {
    const { target } = e;
    if (
      target.closest('button') &&
      target.closest('button').dataset.attr === 'reviews' &&
      target.closest('.fcrp-scfeatured')
    ) {
      const parentElement = target.closest('.fcrp-scfeatured');
      const casinoName = parentElement
        .querySelector('a.ex-links')
        .href.split('/visit/')[1]
        .split('/')[0];

      gaTracking(`${casinoName} Review Page CTA | Button`);
      setTimeout(() => {
        window.location.href = window.url1;
      }, 1000);
    } else if (
      target.closest('button') &&
      target.closest('button').dataset.attr === 'bonus' &&
      target.closest('.fcrp-scfeatured')
    ) {
      const parentElement = target.closest('.fcrp-scfeatured');
      const casinoName = parentElement
        .querySelector('a.ex-links')
        .href.split('/visit/')[1]
        .split('/')[0];

      gaTracking(`${casinoName} Bonus Page CTA | Button`);

      setTimeout(() => {
        window.location.href = window.url2;
      }, 1000);
    }
  });

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'Control') return;

  init(targetElement);
};
