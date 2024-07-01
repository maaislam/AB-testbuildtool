/*eslint-disable no-param-reassign */
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;
let blockCountForLowCta = 0;
let blockCountForBannerCta = 1;

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
  const blockImages = document.querySelectorAll('.td-post-content figure.size-large');

  const lowctas = document.querySelectorAll('.td-post-content figure.size-full');

  lowctas.forEach((item) => {
    if (item.querySelector('a')) {
      blockCountForLowCta += 1;
      item.setAttribute('data-position', blockCountForLowCta);
    }
  });

  blockImages.forEach((item) => {
    if (item.querySelector('a')) {
      blockCountForBannerCta += 1;
      item.setAttribute('data-position', blockCountForBannerCta);
    }
  });

  document.querySelectorAll('.fcrp-scfeatured').forEach((item, i) => {
    item.dataset.position = i;
    item.querySelectorAll('button[onClick]').forEach((btn, index) => {
      const parentElement = btn.closest('.fcrp-scfeatured');
      const casinoName = parentElement
        .querySelector('a.ex-links')
        .href.split('/visit/')[1]
        .split('/')[0];
      //clone the original buttons
      const clonedBtn = btn.cloneNode(true);
      //remove onclik attribute from the cloned btn
      clonedBtn.removeAttribute('onclick');
      clonedBtn.setAttribute('data-casinoname', casinoName);

      //add new class to the cloned btn
      clonedBtn.classList.add(`${ID}-fcrp-button-${index === 0 ? 'reviews' : 'bonus'}`);
      //hide original button
      btn.style.display = 'none';
      //append the cloned btn
      btn.insertAdjacentElement('afterend', clonedBtn);
    });
  });

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
    } else if (target.closest('.td-post-featured-image')) {
      const targetedEl = target.closest('.td-post-featured-image');
      const casinoName = targetedEl.querySelector('a')?.href.split('visit/')[1].split('/')[0];
      casinoName && gaTracking(`${casinoName} Click Banner 1 CTA`);
    } else if (target.closest('figure.size-large') && target.closest('.td-post-content')) {
      const targetedEl = target.closest('figure.size-large');
      const { position } = targetedEl.dataset;
      const casinoName = targetedEl.querySelector('a')?.href.split('visit/')[1].split('/')[0];
      casinoName && gaTracking(`${casinoName} Click Banner ${position} CTA`);
    } else if (target.closest('figure.size-full') && target.closest('.td-post-content')) {
      const targetedEl = target.closest('figure.size-full');
      const { position } = targetedEl.dataset;
      const casinoName = targetedEl.querySelector('a')?.href.split('visit/')[1].split('/')[0];
      casinoName && gaTracking(`${casinoName} Click Banner Low CTA ${position}`);
    } else if (target.closest('.td-post-featured-image')) {
      const targetedEl = target.closest('.td-post-featured-image');
      const { position } = targetedEl.dataset;
      const casinoName = targetedEl.querySelector('a').href.split('visit/')[1].split('/')[0];
      gaTracking(`${casinoName} Click Banner ${position} CTA`);
    } else if (target.closest(`.${ID}-fcrp-button-reviews`)) {
      //add tracking here
      const parentElement = target.closest('.fcrp-scfeatured');
      const targetedElement = target.closest(`.${ID}-fcrp-button-reviews`);
      const { casinoname } = targetedElement.dataset;
      const { position } = parentElement.dataset;
      gaTracking(`${casinoname} Review Page CTA | Button ${position}`);

      setTimeout(() => {
        targetedElement.previousElementSibling.click();
      }, 500);
    } else if (target.closest(`.${ID}-fcrp-button-bonus`)) {
      //add tracking here
      const parentElement = target.closest('.fcrp-scfeatured');
      const targetedElement = target.closest(`.${ID}-fcrp-button-bonus`);
      const { casinoname } = targetedElement.dataset;
      const { position } = parentElement.dataset;
      gaTracking(`${casinoname} Bonus Page CTA | Button ${position}`);
      setTimeout(() => {
        targetedElement.previousElementSibling.click();
      }, 500);
    }
  });

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'Control') return;

  init(targetElement);
};
