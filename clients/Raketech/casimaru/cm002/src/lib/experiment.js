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
    const bonusItemLink = bonusItem?.href;
    const reviewItemLink = reviewItem?.href;
    const operatorName = bonusItemLink
      ?.split('/non-deposit-bonus/')[1]
      .split('-no-deposit-bonus/')[0];
    item.setAttribute('data-operator', operatorName);
    bonusItem && item.setAttribute('data-bonus', bonusItemLink);
    reviewItem && item.setAttribute('data-review', reviewItemLink);

    bonusItem?.removeAttribute('href');
    reviewItem?.removeAttribute('href');
  });

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.bottun-set-rev .btn')) {
      const parentElement = target.closest('.bottun-set-rev');
      const operatorName = parentElement.dataset.operator;
      if (target === parentElement.querySelector('a.btn + a.btn')) {
        gaTracking(`${operatorName} Review Page`);
        window.location.href = parentElement.dataset.review;
      } else {
        gaTracking(`${operatorName} Bonus Page`);
        window.location.href = parentElement.dataset.bonus;
      }
    }
  });

  if (VARIATION === 'Control') return;

  init();
};
