/*eslint-disable max-len */

import bestChoiceVpnCard from './components/bestChoiceVpnCard';
import setup from './services/setup';
import shared from './shared/shared';
import surfSharkVpnCard from './components/surfSharkVpnCard';
import ipVanishVpnCard from './components/ipVanishVpnCard';
import { checkTopThreeProvidersOrder, getProviderCTALink, getProviderImageLink, getProviderScore } from './helpers/utils';

const { ID } = shared;

const getFirstExistingBadgeElement = () => {
  const selectors = [
      '[href*="/go/nordvpn"] .badge-element.badge-action',
      '[href*="/go/surfshark"] .badge-element.badge-action',
      '[href*="/go/ipvanish"] .badge-element.badge-action'
  ];

  for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (element) return element;
  }

  return null;
};

const providerData = {
  id: ID,
  nordvpn: {
    score: getProviderScore('nordvpn') || 9.6,
    skyGoElem: getFirstExistingBadgeElement(),
    ctaUrl: getProviderCTALink('nordvpn'),
    imgUrl: getProviderImageLink('nordvpn')
  },
  surfshark: {
    score: getProviderScore('surfshark') || 9.3,
    skyGoElem: getFirstExistingBadgeElement(),
    ctaUrl: getProviderCTALink('surfshark'),
    imgUrl: getProviderImageLink('surfshark')
  },
  ipvanish: {
    score: getProviderScore('ipvanish') || 9.0,
    skyGoElem: getFirstExistingBadgeElement(),
    ctaUrl: getProviderCTALink('ipvanish'),
    imgUrl: getProviderImageLink('ipvanish')
  }
};

const isDesktop = () => (Math.min(window.innerWidth, document.documentElement.clientWidth, window.screen.width) >= 768);

const setClassToBody = (className) => {
  const { body } = document;

  body.classList.add(className);
};

const init = () => {
  const { pathname } = window.location;

  if (pathname.includes('/change-netflix-region/')) {
    setClassToBody(`${ID}__netflixRegion`);
  }

  const postDetailContainer = document.querySelector('.post-details-container');
  const shortSubjectElem = document.querySelector('div.short-subject');
  const attachPoint = document.querySelector('.post-title-container .wrapper');

  const container = `<div class="${ID}__container">
    <div class="wrapper ${ID}__content">
      ${surfSharkVpnCard(providerData, shortSubjectElem)}
      ${bestChoiceVpnCard(providerData, shortSubjectElem)}
      ${ipVanishVpnCard(providerData)}
    </div>
  </div>`;

  if (!document.querySelector(`.${ID}__container`)) {
    attachPoint.insertAdjacentHTML('afterend', container);
  }

  if (postDetailContainer && isDesktop()) {
    const containerElem = document.querySelector(`.${ID}__container`);
    postDetailContainer.classList.add('wrapper');
    containerElem.insertAdjacentElement('afterend', postDetailContainer);
  }
};

export default () => {
  if (checkTopThreeProvidersOrder()) {
    setup();
    init();
  }
};
