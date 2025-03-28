<<<<<<< HEAD
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite, trackGA4Event } from './helpers/utils';

const { ID, VARIATION } = shared;
const isDesktop = () =>
  Math.min(window.innerWidth, document.documentElement.clientWidth, window.screen.width) >= 850;

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
    const row = isDesktop() ? tableRow : tableRowMobile;
    const htmlRows = data.map(row).join('');

    const fullTableHtml = `<div class="${ID}__container wrapper">
      <p class="${ID}__tableHeader">${tableHeader}</p>
      ${htmlRows}
    </div>`;

    if (!document.querySelector(`.${ID}__container`)) {
      tableAttachpoint.insertAdjacentHTML('afterbegin', fullTableHtml);
    }
  };

  renderToplistTable();
=======
/*eslint-disable max-len */
import dealCard from './components/dealCard';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const isMobile = () => (Math.min(window.innerWidth, document.documentElement.clientWidth, window.screen.width) < 1051);

const init = () => {
  const attachPoint = document.querySelector('.entry-content > ol');
  const bbcIplayerBtn = document.querySelector('.entry-content > ol + div a[href*="/l/listcta/u/"]');

  if (bbcIplayerBtn) bbcIplayerBtn.classList.add(`${ID}__hide`);

  if (!document.querySelector(`.${ID}__dealCard`)) {
    attachPoint.insertAdjacentHTML('afterend', dealCard(ID));
  }

  const tooltipContainerElem = document.querySelector(`.${ID}__sponsoredTooltip`);
  if (tooltipContainerElem && isMobile()) {
    //Step 1: Temporarily show it invisibly
    tooltipContainerElem.style.visibility = 'hidden';
    tooltipContainerElem.classList.remove(`${ID}__hide`);
    tooltipContainerElem.style.position = 'absolute';
    tooltipContainerElem.style.opacity = '0';

    //Step 2: Measure height
    const tooltipContainerElemHeight = tooltipContainerElem.offsetHeight + 20;

    //Step 3: Store height in CSS variable
    document.documentElement.style.setProperty('--tooltip-height', `${tooltipContainerElemHeight}px`);

    //Step 4: Hide it again
    tooltipContainerElem.classList.add(`${ID}__hide`);
    tooltipContainerElem.style.visibility = '';
    tooltipContainerElem.style.position = '';
    tooltipContainerElem.style.opacity = '';
  }
>>>>>>> 60cc775acd3f39b51ddb389a97c88f7126d668ed
};

export default () => {
  setup();

<<<<<<< HEAD
  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    //if (target.closest(`.${ID}__logo`)) {
    //trackGA4Event('test_run_ct_245', 'logo_click', '');
    //} else if (target.closest(`.${ID}__cardTitle`)) {
    //trackGA4Event('test_run_ct_245', 'title_click', '');
    //} else if (target.closest(`.${ID}__freeTrailLink`)) {
    //trackGA4Event('test_run_ct_245', 'trial_click', '');
    //} else if (target.closest(`.${ID}__cta`)) {
    //trackGA4Event('test_run_ct_245', 'cta_click', '');
    //}
  });
=======
  document.body.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('.close-tooltip');
    const tooltip = document.querySelector(`.${ID}__sponsoredTooltip`);

    const { target } = e;

    if (target.closest(`.${ID}__sponsoredBtn`)) {
      tooltip.classList.toggle(`${ID}__hide`);

      if (!tooltip.classList.contains(`${ID}__hide`) && isMobile()) {
        const rect = tooltip.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        //Final scroll position = current scroll + tooltip top - some padding
        const offsetTop = scrollTop + rect.top - 20;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else if (closeBtn) {
      tooltip.classList.add(`${ID}__hide`);
    }

    //Close the tooltip if clicked outside of it
    if (!target.closest(`.${ID}__sponsoredTooltip`) && !target.closest(`.${ID}__sponsoredBtn`)) {
      tooltip.classList.add(`${ID}__hide`);
    }
  });

  init();
>>>>>>> 60cc775acd3f39b51ddb389a97c88f7126d668ed
};
