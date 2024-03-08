import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const anchorPoint = document.querySelector('section#table .container');
const rows = [...document.querySelectorAll('table.casino-table tr.casino-table__data-row')];
const ITEMS_PER_PAGE = 7;

const init = () => {
  //show more button
  const htmlStr = `<div class='${ID}__showMoreButtonWrapper'>
    <button class='${ID}__showMoreButton' id="showMoreButton">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="${ID}__icon show">
        <mask id="path-1-inside-1_1_477" fill="white">
          <path d="M7.99914 0L15.9991 8L7.99914 16L-0.000863196 8L7.99914 0Z"/>
        </mask>
        <path d="M7.99914 16L5.87782 18.1213L7.99914 20.2426L10.1205 18.1213L7.99914 16ZM13.8778 5.87868L5.87782 13.8787L10.1205 18.1213L18.1205 10.1213L13.8778 5.87868ZM10.1205 13.8787L2.12046 5.87868L-2.12218 10.1213L5.87782 18.1213L10.1205 13.8787Z" fill="#FF7556" mask="url(#path-1-inside-1_1_477)"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="${ID}__icon less">
        <mask id="path-1-inside-1_5518_72156" fill="white">
        <path d="M8 16L-4.00521e-07 8L8 5.47657e-07L16 8L8 16Z"/>
        </mask>
        <path d="M8 5.47657e-07L10.1213 -2.12132L8 -4.24264L5.87868 -2.12132L8 5.47657e-07ZM2.12132 10.1213L10.1213 2.12132L5.87868 -2.12132L-2.12132 5.87868L2.12132 10.1213ZM5.87868 2.12132L13.8787 10.1213L18.1213 5.87868L10.1213 -2.12132L5.87868 2.12132Z" fill="#FF7556" mask="url(#path-1-inside-1_5518_72156)"/>
      </svg>
      <span>Mostra altri casinò (${rows.length - ITEMS_PER_PAGE})</span>
    </button>
  </div>`;

  if (document.querySelector(`.${ID}__showMoreButtonWrapper`)) {
    document.querySelector(`.${ID}__showMoreButtonWrapper`).remove();
  }

  if (rows.length > ITEMS_PER_PAGE) {
    anchorPoint.insertAdjacentHTML('afterend', htmlStr);
    rows.slice(ITEMS_PER_PAGE).forEach((element) => element.classList.toggle(`${ID}__hide`));
  }
};

const showAllItems = () => {
  document.querySelectorAll(`#table.${ID}__show-full .${ID}__hide`).forEach((element) => {
    element && element.classList.toggle(`${ID}__hide`);
  });
  document.querySelector('#showMoreButton span').innerText = 'MOSTRA MENO CASINÒ';
};

const hideItems = () => {
  rows.slice(ITEMS_PER_PAGE).forEach((element) => element.classList.toggle(`${ID}__hide`));
  document.querySelector('#showMoreButton span').innerText = `Mostra altri casinò (${
    rows.length - ITEMS_PER_PAGE
  })`;
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('#showMoreButton')) {
      document.querySelector('#table').classList.toggle(`${ID}__show-full`);

      if (document.querySelector(`#table.${ID}__show-full`)) {
        showAllItems();
        gaTracking('Show All Casinos');
      } else {
        hideItems();

        document.querySelector('#table').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        gaTracking('Show Less Casinos');
      }
    } else if (target.closest('[href*="visita"]')) {
      const casinoNameElem = target.closest('a[href*="visita"]');

      const casinoName = casinoNameElem.dataset.operator;

      const clickedElemType = casinoNameElem.querySelector('img') ? 'Logo' : 'Button';
      gaTracking(`${casinoName} CTA CTO | ${clickedElemType}`);
    }
  });

  if (VARIATION === 'Control') return;

  init();
};
