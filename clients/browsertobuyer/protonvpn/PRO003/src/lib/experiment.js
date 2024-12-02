import onlineSecurityFeatures from './components/onlineSecurityFeatures';
import shortBenefits from './components/shortBenefits';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const { pathname } = window.location;
  const pageType = pathname.includes('/vpn-home-plans-offer') || pathname.includes('/vpn-home-offer')
  ? 'hp'
  : pathname.includes('/special-partner-offer') ? 'partner' : '';

  let attachPoint;

  if (pageType === 'hp') {
    document.body.classList.add('homepage');
    const gridSection = document.querySelector('[data-testid="grid-section"]');
    const titleElem = document.querySelector('[data-testid="title"]');
    attachPoint = titleElem.parentElement.parentElement;

    attachPoint.classList.add('hidden');
    gridSection.classList.add('hidden');
  } else if (pageType === 'partner') {
    document.body.classList.add('partnerPage');
    attachPoint = document.querySelector('[data-testid="image-section"]');
    const nextSibling = attachPoint.nextElementSibling;

    attachPoint.classList.add('hidden');
    nextSibling.classList.add('hidden');
  }

  if (!attachPoint) return;

  if (VARIATION === '1' && !document.querySelector(`.${ID}__onlineSecurityFeatures`)) {
    attachPoint.insertAdjacentHTML('beforebegin', onlineSecurityFeatures(ID));
  } else if (VARIATION === '2' && !document.querySelector(`.${ID}__shortBenefits`)) {
    attachPoint.insertAdjacentHTML('beforebegin', shortBenefits(ID));
  }
};

export default () => {
  setup();
  init();
};
