/*eslint-disable no-useless-escape */
/*eslint-disable no-param-reassign */
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import ratingsConatiner from './components/ratings';
import bonusContainer from './components/bonusContainer';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const casinoCardConatiner = document.querySelector('.block-toplist .toplist-holder');
  const casinos = casinoCardConatiner.querySelectorAll('.toplist > div');
  casinos.forEach((casino) => {
    const logoContainer = casino.querySelector('.logo-container');
    const logoBgColor = getComputedStyle(logoContainer)?.getPropertyValue('background-color');
    const ratingElement = casino.querySelector('.logo-container .item-rating');
    const ratings = getComputedStyle(ratingElement)?.getPropertyValue('--rating');
    const mainCtaContainer = casino.querySelector('.cta-container');
    const vistCasino = casino.querySelector('.cta .cta-text-small');
    const visitCasinoText = vistCasino.innerText.toLowerCase().replace('vidare till', '').trim();
    vistCasino.textContent = visitCasinoText;
    const ctaReview = mainCtaContainer.querySelector('.cta-review');
    const ctaLink = ctaReview?.href;
    const bonusElement = casino.querySelector('.bonus-container');
    const bonusTurnOver = bonusElement.querySelector('.bonus-turnover');
    const bonusValue =
      bonusElement.querySelector('.bonus .amount')?.textContent ||
      bonusElement.querySelector('.bonus .fallback').textContent;
    const bonusValuex = bonusTurnOver.querySelector('strong')?.textContent;
    const freeSpinElement = bonusElement.querySelector('.freespins-turnover');
    const freeSpinValue =
      bonusElement.querySelector('.freespins .amount')?.textContent ||
      bonusElement.querySelector('.freespins .fallback')?.textContent;
    const freeSpinValuex = freeSpinElement.querySelector('strong')?.textContent;
    console.log('bonusValue', bonusValuex, bonusValue);
    console.log('freeSpinValue', freeSpinValuex, freeSpinValue);
    const casinoName = casino.querySelector('.cta-text-small');
    const parksContainer = casino.querySelector('.perks-container');
    parksContainer.querySelectorAll('.perk').forEach((item, index) => {
      if (index === 0) {
        item.querySelector('.title').innerText = 'oms.krav insättning';
      }

      if (index === 4) {
        item.querySelector('.title').innerText = 'svarstid chatt';
      }

      if (index === 3) {
        item.querySelector('.title').innerText = 'uttagstid Swish';
      }
    });
    if (casinoName.textContent.includes('svenska spel')) {
      casinoName.textContent = 'Svenska Spel';
    }

    if (!casino.querySelector(`.${ID}__bonusContainer`)) {
      bonusElement.insertAdjacentHTML(
        'beforebegin',
        bonusContainer(ID, bonusValue, bonusValuex, freeSpinValue, freeSpinValuex)
      );
    }

    if (ratingElement && !casino.querySelector(`.${ID}__ratingsContainer`)) {
      setTimeout(() => {
        ratingElement.insertAdjacentHTML(
          'afterbegin',
          ratingsConatiner(ID, ratings, logoBgColor, ctaLink)
        );
      }, 2000);
    }
  });

  const mainCsinoWrapper = document.querySelector('.block-toplist .toplist-holder .toplist');
  mainCsinoWrapper.style.opacity = '1';
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (
      target.closest('.logo-container a[data-type="logo"]') &&
      target.closest('.operator-container')
    ) {
      const operatorName = target.closest('.logo-container a[data-type="logo"]').dataset.operator;
      gaTracking(`${operatorName} CTA CTO | Logo`);
    } else if (target.closest('.cta-review') && target.closest('.operator-container')) {
      const operatorName = target.closest('.cta-review').href.split('svenska-casinon/')[1];
      gaTracking(`${operatorName} CTA CTR`);
    } else if (
      target.closest('a.cta[data-type="button"]') &&
      target.closest('.operator-container')
    ) {
      const operatorName = target.closest('a.cta[data-type="button"]').dataset.operator;
      gaTracking(`${operatorName} CTA CTO | Button`);
    }
  });

  document.body.addEventListener('pointerup', ({ target }) => {
    if (target.closest('button.load-more')) {
      setTimeout(() => {
        if (document.querySelector('.toplist-holder .toplist.show-full')) {
          gaTracking('Load More');
        } else if (document.querySelector('.toplist-holder .toplist:not(.show-full)')) {
          gaTracking('See Less');
        }
      }, 1000);
    }
  });

  const casinoCardConatiner = document.querySelector('.block-toplist .toplist-holder');
  const casinos = casinoCardConatiner.querySelectorAll('.toplist > div');

  casinos.forEach((casino) => {
    const logoContainer = casino.querySelector('.logo-container');
    const logo = logoContainer.querySelector('a[data-type="logo"]');
    logo && logo.setAttribute('target', '_blank');
  });

  if (VARIATION === 'Control') {
    return;
  }

  init();
};
