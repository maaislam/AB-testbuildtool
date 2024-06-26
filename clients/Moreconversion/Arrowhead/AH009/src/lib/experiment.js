import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const attachPoint = document.querySelector('.product-description');
  const highlightsTitle = document.querySelector('.highlights-title');
  const highlightsCard1 = document.querySelector('.highlights-first-card');
  const highlightsCard2 = document.querySelector('.highlights-second-card');
  const highlightsCard3 = document.querySelector('.highlights-third-card');

  const highlightSection = `<div class='${ID}__highlightSection'>
    <div class='${ID}__highlightTitle'>${highlightsTitle.outerHTML}</div>
    <div class='${ID}__highlightCards'>
      <div class='${ID}__highlightCard'>${highlightsCard1.outerHTML}</div>
      <div class='${ID}__highlightCard'>${highlightsCard2.outerHTML}</div>
      <div class='${ID}__highlightCard'>${highlightsCard3.outerHTML}</div>
    </div>
  </div>`;

  attachPoint.insertAdjacentHTML('afterbegin', highlightSection);
};

export default () => {
  setup();

  init();
};
