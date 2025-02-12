import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const trackGA4Event = (category, action, label) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'gaCustomEvent',
    eventCategory: category,
    eventAction: action,
    eventLabel: label
  });
};

const init = () => {
  const isMobile = () => window.matchMedia('(max-width: 500px)').matches;
  const telNoInputElem = document.querySelector('#tel_num');
  const telNoParentElem = telNoInputElem.parentElement;

  const polygon = `<svg width="33" height="13" viewBox="0 0 33 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.0977 2.02113L20.2922 6.75526C21.1498 7.72314 20.4626 9.25 19.1695 9.25L10.7805 9.25C9.48737 9.25 8.80024 7.72314 9.65779 6.75526L13.8523 2.02113C14.4492 1.34745 15.5008 1.34745 16.0977 2.02113Z" fill="white" stroke="#333333"/>
  <rect x="33" y="7" width="5" height="33" transform="rotate(90 33 7)" fill="white"/>
  </svg>
  `;

  const tooltipHTMLV1 = `<div class="${ID}__tooltipWrapper ${ID}__container">
    <div class="${ID}__tooltip">We won’t share your number with anyone else. 
      <div class="${ID}__tooltipBtn">
        <span class='tooltipBtnText'>Why we ask for this?</span>
      </div>

      <div class="tooltip-box ${ID}__hide">
        <span class='${ID}__tooltipArrow'>${polygon}</span>
        <span class='tooltip-text'>We can negotiate a better price on your behalf but may need to ask you about the vehicle's condition</span>
      </div>
    </div>
  </div>`;

  const tooltipHTMLV2 = `<div class="${ID}__counterObjectionWrapper ${ID}__container">
    <div class="${ID}__headerText">We won’t share your number with anyone else.</div>
    <div class="${ID}__detailText">We can negotiate a better price on your behalf but may need to ask you about the vehicle's condition</div>
  </div>`;

  if (!document.querySelector(`.${ID}__container`)) {
    VARIATION === '1'
      ? telNoParentElem.insertAdjacentHTML('afterend', tooltipHTMLV1) : telNoParentElem.insertAdjacentHTML('afterend', tooltipHTMLV2);
  }

  const tooltipBtn = document.querySelector(`.${ID}__tooltipBtn`);
  //Desktop hover events
  if (!isMobile()) {
    tooltipBtn.addEventListener('mouseenter', () => {
      const tooltipBox = document.querySelector('.tooltip-box');
      setTimeout(() => tooltipBox.classList.remove(`${ID}__hide`), 150);
      tooltipBox.classList.add(`${ID}__show`);

      if (VARIATION === '1') trackGA4Event('SCC 063', 'Tel why we ask click', '');
    });

    tooltipBtn.addEventListener('mouseleave', () => {
      const tooltipBox = document.querySelector('.tooltip-box');
      tooltipBox.classList.remove(`${ID}__show`);
      setTimeout(() => tooltipBox.classList.add(`${ID}__hide`), 150);
    });
  }

  //Mobile tap event
  if (isMobile()) {
    tooltipBtn.addEventListener('touchstart', () => {
      const tooltipBox = document.querySelector('.tooltip-box');
      setTimeout(() => tooltipBox.classList.remove(`${ID}__hide`), 150);
      tooltipBox.classList.add(`${ID}__show`);

      if (VARIATION === '1') trackGA4Event('SCC 063', 'Tel why we ask click', '');
    });
  }
};

export default () => {
  setup();

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (!target.closest(`.${ID}__tooltipBtn`) || !target.closest('.tooltipBtnText')) {
      const tooltipBox = document.querySelector('.tooltip-box');
      tooltipBox.classList.remove(`${ID}__show`);
      setTimeout(() => tooltipBox.classList.add(`${ID}__hide`), 150);
    }
  });
};
