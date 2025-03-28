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
};

export default () => {
  setup();

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
};
