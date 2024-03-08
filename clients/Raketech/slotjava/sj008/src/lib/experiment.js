import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const anchorPoint = document.querySelector('section#table .container');
  const rows = [...document.querySelectorAll('table.casino-table tr.casino-table__data-row')];
  const ITEMS_PER_PAGE = 7;

  //show more button
  const htmlStr = `<div class='${ID}__showMoreButtonWrapper'>
    <button class='${ID}__showMoreButton' id="showMoreButton">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <mask id="path-1-inside-1_1_477" fill="white">
          <path d="M7.99914 0L15.9991 8L7.99914 16L-0.000863196 8L7.99914 0Z"/>
        </mask>
        <path d="M7.99914 16L5.87782 18.1213L7.99914 20.2426L10.1205 18.1213L7.99914 16ZM13.8778 5.87868L5.87782 13.8787L10.1205 18.1213L18.1205 10.1213L13.8778 5.87868ZM10.1205 13.8787L2.12046 5.87868L-2.12218 10.1213L5.87782 18.1213L10.1205 13.8787Z" fill="#FF7556" mask="url(#path-1-inside-1_1_477)"/>
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

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('#showMoreButton')) {
      //gaTracking('Show All Casinos');
      document.querySelector('#table table.casino-table').classList.toggle(`${ID}__show-full`);
      if (document.querySelector(`#table table.casino-table.${ID}__show-full`)) {
        document
          .querySelectorAll(`#table table.casino-table.${ID}__show-full .${ID}__hide`)
          .forEach((element) => {
            element && element.classList.toggle(`${ID}__hide`);
          });
      } else {
        // document
        //   .querySelectorAll(`#table table.casino-table.${ID}__show-full`)
        //   .forEach((element) => {
        //     element && element.classList.toggle(`${ID}__hide`);
        //   });
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
