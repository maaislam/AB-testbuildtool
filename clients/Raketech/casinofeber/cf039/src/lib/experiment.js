/*eslint-disable no-useless-escape */
/*eslint-disable no-param-reassign */
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import ratingsConatiner from './components/ratings';
import bonusContainer from './components/bonusContainer';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

function adjustHeights(selector, insideChildSelector) {
  const container = document.querySelector(selector); //Change the selector accordingly
  const { children } = container; //Get all children inside the container

  const allCasinos = container.querySelectorAll('.toplist > div');
  allCasinos &&
    allCasinos.forEach((casino, index) => {
      const middleElement = casino.querySelector(insideChildSelector);
      if (!middleElement) return;
      const middleElementHeight = parseFloat(window.getComputedStyle(middleElement).height);
      //even
      if (index % 2 === 0) {
        const nextElementIndex = index + 1;
        const nextElement = allCasinos[nextElementIndex];
        if (nextElement) {
          const nextMiddleElement = nextElement.querySelector(insideChildSelector);
          const nextMiddleElementHeight = parseFloat(
            window.getComputedStyle(nextMiddleElement).height
          );
          const largestHeight = Math.max(middleElementHeight, nextMiddleElementHeight);
          middleElement.style.height = `${largestHeight}px`;
          nextMiddleElement.style.height = `${largestHeight}px`;
        }
      } else if (index % 2 !== 0) {
        //odd

        const previousIndex = index - 1;
        const previousElement = allCasinos[previousIndex];
        if (previousElement) {
          const nextMiddleElement = previousElement.querySelector(insideChildSelector);
          const nextMiddleElementHeight = parseFloat(
            window.getComputedStyle(nextMiddleElement).height
          );
          const largestHeight = Math.max(middleElementHeight, nextMiddleElementHeight);
          middleElement.style.height = `${largestHeight}px`;
          nextMiddleElement.style.height = `${largestHeight}px`;
        }
      }
    });
}

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
    const bonusTurnOver = bonusElement.querySelector('.bonus-turnover');
    const freeSpinElement = bonusElement.querySelector('.freespins-turnover > span');
    const childBonusTurnOver = bonusTurnOver.childNodes;
    const childFreeSpin = freeSpinElement.childNodes;
    childBonusTurnOver.forEach((child) => {
      if (child.nodeName === '#text' && child.nodeValue.includes('Omsättningskrav på bonus')) {
        child.nodeValue = 'Oms.krav bonus';
      }
    });

    childFreeSpin.forEach((child) => {
      if (child.nodeName === '#text' && child.nodeValue.includes('Omsättningskrav på spin')) {
        child.nodeValue = 'Oms.kra free spins';
      }
    });

    if (ratingElement && !casino.querySelector(`.${ID}__ratingsContainer`)) {
      ratingElement.insertAdjacentHTML(
        'afterbegin',
        ratingsConatiner(ID, ratings, logoBgColor, ctaLink)
      );
    }
  });

  setTimeout(() => {
    adjustHeights('.block-toplist .toplist-holder', '.bonus-container');
  }, 100);

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
          setTimeout(() => {
            adjustHeights('.block-toplist .toplist-holder', '.bonus-container');
          }, 100);
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
