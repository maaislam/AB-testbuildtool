import { trustpilot } from './components/trustpilot';
import bannerData from './data/bannerData';
import { obsIntersection, pollerLite } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const getRandomElement = (variation) => {
  const elements = bannerData[variation];
  if (!elements) {
    console.error(`Variation "${variation}" not found.`);
    return null;
  }
  return elements[Math.floor(Math.random() * elements.length)];
};

const getSpeceficElement = (variation) => {
  const elements = bannerData[variation];
  if (!elements) {
    console.error(`Variation "${variation}" not found.`);
    return null;
  }

  const data = elements.find((item) => item.baseUrl === window.location.pathname);
  return data;
};

const renderHtml = (itemData) => {
  const { badge, title, subtitle, ctaText, ctaLink, imgSrc, contentPosition, showReviews } =
    itemData;

  return `
    <a href="${ctaLink}" class="${ID}__editorial" data-attr="${badge}">
      <div class="${ID}__content ${ID}__content--${contentPosition}">
        <div class="${ID}__content__badge">${badge}</div>
        <div class="${ID}__content__title">${title}</div>
        ${subtitle ? `<div class="${ID}__content__subtitleTitle">${subtitle}</div>` : ''}
        <div class="${ID}__content__cta" >${ctaText}</div>
      </div>
      ${showReviews ? `<div class="${ID}__reviews"></div>` : ''}
      <div class="${ID}__img" style="background-image:url(${imgSrc})">    
      </div>
    </a>
  `;
};

const init = () => {
  const attachPoint = document.querySelector('.products>.product:nth-child(5)');
  attachPoint.classList.add(`${ID}__attach-point`);
  const randomBannersData =
    VARIATION === '1'
      ? getRandomElement(VARIATION)
      : VARIATION === '2'
      ? getSpeceficElement(VARIATION)
      : bannerData[VARIATION][0];

  if (document.querySelector(`.${ID}__editorial`)) return;
  attachPoint.insertAdjacentHTML('afterend', renderHtml(randomBannersData));

  pollerLite(
    [
      `.${ID}__reviews`,
      () =>
        window.Trustpilot !== 'undefined' &&
        typeof window.Trustpilot?.loadFromElement === 'function'
    ],
    () => {
      if (document.querySelector(`.${ID}__trustpilotSection`)) {
        document.querySelector(`.${ID}__trustpilotSection`).remove();
      }
      document.querySelector(`.${ID}__reviews`).insertAdjacentHTML('afterbegin', trustpilot(ID));
      const trustbox = document.querySelector(`.${ID}__trustpilotSection .trustpilot-widget`);
      window.Trustpilot.loadFromElement(trustbox);
    }
  );
};

const intersectionCallback = (entry) => {
  const { isIntersecting } = entry;

  if (isIntersecting) {
    document.body.classList.remove(`${ID}__editorial--hide`);
  } else {
    document.body.classList.add(`${ID}__editorial--hide`);
  }
};

export default () => {
  setup();
  init();
  if (window.matchMedia('(max-width: 767px)').matches) return;
  obsIntersection(
    document.querySelector('.products>.product:nth-child(3)'),
    0,
    intersectionCallback
  );
};
