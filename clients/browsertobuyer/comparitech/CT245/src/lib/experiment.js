/*eslint-disable max-len */
import setup from './services/setup';
import shared from './shared/shared';
import tableRow from './components/tableRow';
import generateToplistData from './helpers/generateToplistData';
import { hideParagraphsBeforeList, trackGA4Event } from './helpers/utils';

const { ID } = shared;

const isDesktop = () => (Math.min(window.innerWidth, document.documentElement.clientWidth, window.screen.width) >= 768);

const getTableHeader = () => {
  const topListElem = document.querySelector('.entry-content > ol');
  const headerBoldText = topListElem.previousElementSibling;

  if (headerBoldText) {
      return headerBoldText.textContent.trim();
  }
  return 'Overview';
};

const init = () => {
  const topListElem = document.querySelector('.entry-content > ol');
  const postTitleContainerElem = document.querySelector('.post-title-container');
  const promoBannerElem = document.querySelector('#toc-widget-2 .box.promo');
  const tableAttachpoint = document.querySelector('.main-container');

  if (topListElem) {
    hideParagraphsBeforeList(ID, '.entry-content');
  }

  if (isDesktop() && promoBannerElem) {
    postTitleContainerElem.classList.add('wrapper');
    postTitleContainerElem.classList.add(`${ID}__postTitleContainer`);
    postTitleContainerElem.insertAdjacentElement('beforeend', promoBannerElem);
  }

  const renderToplistTable = () => {
    const tableHeader = getTableHeader();
    const data = generateToplistData(ID);
    const htmlRows = data.map(tableRow).join('');

    const fullTableHtml = `<div class="${ID}__container wrapper">
      <p class="${ID}__tableHeader">${tableHeader}</p>
      ${htmlRows}
    </div>`;

    if (!document.querySelector(`.${ID}__container`)) {
      tableAttachpoint.insertAdjacentHTML('afterbegin', fullTableHtml);
    }
  };

  renderToplistTable();
};

export default () => {
  setup();

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__logo`)) {
      trackGA4Event('test_run_ct_245', 'logo_click', '');
    } else if (target.closest(`.${ID}__cardTitle`)) {
      trackGA4Event('test_run_ct_245', 'title_click', '');
    } else if (target.closest(`.${ID}__freeTrailLink`)) {
      trackGA4Event('test_run_ct_245', 'trial_click', '');
    } else if (target.closest(`.${ID}__cta`)) {
      trackGA4Event('test_run_ct_245', 'cta_click', '');
    }
  });
};
