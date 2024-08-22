import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import header from './components/header';

const { ID, VARIATION } = shared;

const init = () => {
  const casinoRankings = document.querySelectorAll('.space-page-content > .casino-ranking');
  const banner = document.querySelector('.post-modified-info + p');
  if (!document.querySelector(`.${ID}__best`)) {
    banner.insertAdjacentHTML('afterend', header(ID));
  }
  casinoRankings.forEach((ranking, index) => {
    if (index === 0 || index === 1) {
      ranking.classList.add(`${ID}__showCasinoRanking`);
    } else {
      ranking.classList.add(`${ID}__hideCasinoRanking`);
    }
  });
};

export default () => {
  setup();

  document.querySelectorAll('.bottun-set-rev').forEach((item) => {
    const bonusItem = item.childNodes[0];
    const reviewItem = item.childNodes[1];

    const cloneBonusItem = bonusItem?.cloneNode(true);
    cloneBonusItem?.classList.add(`${ID}__bonus`);
    cloneBonusItem?.removeAttribute('href');
    const cloneReviewItem = reviewItem?.cloneNode(true);
    cloneReviewItem?.classList.add(`${ID}__reviews`);
    cloneReviewItem?.removeAttribute('href');

    if (item.querySelector(`.${ID}__bonus`) || item.querySelector(`.${ID}__reviews`)) {
      item.querySelector(`.${ID}__bonus`)?.remove();
      item.querySelector(`.${ID}__reviews`).remove();
    }

    bonusItem && bonusItem.insertAdjacentElement('beforebegin', cloneBonusItem);
    reviewItem && reviewItem.insertAdjacentElement('beforebegin', cloneReviewItem);
  });

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__bonus`) || target.closest(`.${ID}__reviews`)) {
      const clickedElement = target.closest('a.btn');
      const parentElement = target.closest('.bottun-set-rev');

      const casinoName = parentElement
        .querySelector(`.${ID}__bonus + a`)
        .href.split('/non-deposit-bonus/')[1]
        .split('-no-deposit-bonus/')[0];
      if (clickedElement.classList.contains(`${ID}__bonus`)) {
        gaTracking(`${casinoName} Bonus Page`);
      } else {
        gaTracking(`${casinoName} Review Page`);
      }
      clickedElement.nextElementSibling.click();
    }
  });

  if (VARIATION === 'Control') return;

  init();
};
