/*eslint-disable no-undef */
/*eslint-disable no-underscore-dangle */
import generateTrustpilotRating from './components/generateTrustpilotRating';
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

const fetchTrustpilotReviews = () => {
  return fetch(
    'https://widget.trustpilot.com/trustbox-data/5419b6ffb0d04a076446a9af?businessUnitId=51f87a0a00006400056d3768&locale=en-GB',
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
  )
    .then((data) => data.json())
    .catch((error) => console.error('Error fetching Trustpilot data:', error));
};

const renderHtml = (itemData) => {
  const { id, badge, title, subtitle, ctaText, ctaLink, imgSrc, contentPosition, showReviews } =
    itemData;

  return `
    <a href="${ctaLink}" class="${ID}__editorial" data-attr="${badge}"  ${
    showReviews ? "target = '_blank'" : ''
  } id="${id}">
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

  pollerLite([`.${ID}__reviews`, () => window.Trustpilot !== 'undefined'], () => {
    fetchTrustpilotReviews()
      .then((data) => {
        if (data && data.businessUnit && data.businessUnit.stars) {
          console.log(data, 'data');
          const trustPilotTargetPoint = document.querySelector(`.${ID}__reviews`);
          trustPilotTargetPoint.insertAdjacentHTML(
            'afterbegin',
            generateTrustpilotRating(ID, data.businessUnit.stars)
          );
        }
      })
      .catch((error) => console.error('Failed to fetch reviews:', error));
  });
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
  window._conv_q = window._conv_q || [];
  setup();
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__editorial`)) {
      _conv_q.push(['triggerConversion', '100489147']);
    }
  });
  init();
  if (window.matchMedia('(max-width: 767px)').matches) return;
  obsIntersection(
    document.querySelector('.products>.product:nth-child(3)'),
    0,
    intersectionCallback
  );
};
