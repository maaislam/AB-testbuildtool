/*eslint-disable no-useless-escape */
/*eslint-disable no-param-reassign */
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import ratingsConatiner from './components/ratings';
import bonusContainer from './components/bonusContainer';
import { parseHTML } from './helpers/utils';
import { casinoFeaturesData } from './data/data';

const { ID, VARIATION } = shared;
const allDataUrl = 'https://www.casinofeber.se/casinon-med-svensk-licens';

const renderCasinoFeaturesData = (allBoxesData, casino) => {
  allBoxesData.forEach((item, index) => {
    if (index === 0) {
      casino.querySelector('.first-box .value').textContent = item;
    }
    if (index === 1) {
      casino.querySelector('.second-box .value').textContent = item;
    }
    if (index === 2) {
      casino.querySelector('.third-box .value').textContent = item;
    }
  });
};

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
    const casinoName = casino.querySelector('.cta-text-small');
    const parksContainer = casino.querySelector('.perks-container');
    parksContainer.querySelectorAll('.perk').forEach((item, index) => {
      if (index === 0) {
        item.querySelector('.title').innerText = 'oms.krav insättning';
        item.classList.add('first-box');
      }

      if (index === 4) {
        item.querySelector('.title').innerText = 'svarstid chatt';
        item.classList.add('second-box');
      }

      if (index === 3) {
        item.querySelector('.title').innerText = 'uttagstid Swish';
        item.classList.add('third-box');
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
        const modifiedString = !ratings.includes('.') ? `${ratings}.0` : ratings;
        ratingElement.insertAdjacentHTML(
          'afterbegin',
          ratingsConatiner(ID, modifiedString, logoBgColor, ctaLink)
        );

        const desktopRatings = document.createElement('div');
        desktopRatings.classList.add(`${ID}__desktopRatingsContainer`);
        const existingRatingContainer = ratingElement.closest('.rating').cloneNode(true);
        desktopRatings.innerHTML = existingRatingContainer.outerHTML;
        logoContainer.insertAdjacentElement('afterend', desktopRatings);
      }, 2000);
    }
  });

  parseHTML([allDataUrl]).then((doc) => {
    const allCasinoWrapper = doc.querySelector('.block-toplist .toplist-holder');
    const otherPageCasinos = Array.from(allCasinoWrapper.querySelectorAll('.toplist > div'));
    casinos.forEach((casino) => {
      const casinoName = casino.querySelector('.logo-container > a')?.dataset.operator;
      const isExistCasino = otherPageCasinos.filter((item) => {
        const name = item.querySelector('.logo-container > a').dataset.operator;
        if (name === casinoName) {
          return item;
        }
      });

      if (isExistCasino && isExistCasino.length) {
        const allBoxes = isExistCasino[0].querySelectorAll('.perk-container');
        const allBoxesData = Array.from(allBoxes).map((item) => {
          if (item.querySelector('span.value')) {
            return item.querySelector('span.value').textContent;
          }
        });
        renderCasinoFeaturesData(allBoxesData, casino);
      } else {
        const casinoBoxesData = casinoFeaturesData[`${casinoName}`];
        casinoBoxesData && renderCasinoFeaturesData(casinoBoxesData, casino);
      }
    });
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
