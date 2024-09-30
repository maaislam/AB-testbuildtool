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
    vistCasino.innerText = visitCasinoText;
    const ctaReview = mainCtaContainer.querySelector('.cta-review');
    const ctaLink = ctaReview?.href;
    const bonusElement = casino.querySelector('.bonus-container');
    const bonus = bonusElement?.querySelector('.bonus .amount')?.innerText || 0;
    const freeSpin = bonusElement?.querySelector('.freespins .amount')?.innerText || 0;
    const omsBonus = bonusElement?.querySelector('.bonus-turnover > strong')?.innerText || 0;
    const omsSpin = bonusElement?.querySelector('.freespins-turnover > strong')?.innerText || 0;
    if (ratingElement && !casino.querySelector(`.${ID}__ratingsContainer`)) {
      ratingElement.insertAdjacentHTML(
        'afterbegin',
        ratingsConatiner(ID, ratings, logoBgColor, ctaLink)
      );
    }

    const bonusData = {
      bonus,
      freeSpin,
      omsBonus,
      omsSpin
    };

    if (logoContainer && !casino.querySelector(`.${ID}__bonusContainer`)) {
      logoContainer.insertAdjacentHTML('afterend', bonusContainer(ID, bonusData));
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
