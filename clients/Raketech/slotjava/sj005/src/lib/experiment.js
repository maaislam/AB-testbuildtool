import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const anchorPoint = document.querySelector('section#table .container');

  //show more button
  const htmlStr = `<div class='${ID}__showMoreButtonWrapper'>
    <button class='${ID}__showMoreButton' id="showMoreButton">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <mask id="path-1-inside-1_1_477" fill="white">
          <path d="M7.99914 0L15.9991 8L7.99914 16L-0.000863196 8L7.99914 0Z"/>
        </mask>
        <path d="M7.99914 16L5.87782 18.1213L7.99914 20.2426L10.1205 18.1213L7.99914 16ZM13.8778 5.87868L5.87782 13.8787L10.1205 18.1213L18.1205 10.1213L13.8778 5.87868ZM10.1205 13.8787L2.12046 5.87868L-2.12218 10.1213L5.87782 18.1213L10.1205 13.8787Z" fill="#FF7556" mask="url(#path-1-inside-1_1_477)"/>
      </svg>
      <span>Mostra altri casinò</span>
    </button>
  </div>`;

  VARIATION !== 'Control' && anchorPoint.insertAdjacentHTML('afterend', htmlStr);

  const rows = document.querySelectorAll('table.casino-table tr.casino-table__data-row');
  const itemsPerPage = 7;
  let currentPage = 1;

  const hideRows = (index) => {
    for (let i = 0; i < rows.length; i += 1) {
      if (i < index) {
        rows[i].classList.add(`${ID}__show`);
      } else {
        rows[i].style.display = 'none';
        rows[i].classList.remove(`${ID}__show`);
      }
    }
  };

  VARIATION !== 'Control' && hideRows(itemsPerPage * currentPage);

  const showMore = () => {
    currentPage += 1;
    hideRows(itemsPerPage * currentPage);

    if (itemsPerPage * currentPage >= rows.length) {
      document.getElementById('showMoreButton').style.display = 'none';
    }
  };

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('#showMoreButton')) {
      showMore();
      gaTracking('Show All Casinos');
    } else if (target.closest('[href*="visita"]')) {
      const casinoNameElem = target.closest('a[href*="visita"]');

      const casinoName = casinoNameElem.dataset.operator;

      const clickedElemType = casinoNameElem.querySelector('img') ? 'Logo' : 'Button';
      gaTracking(`${casinoName} CTA CTO | ${clickedElemType}`);
    }
  });
};

export default () => {
  setup();
  init();
};
