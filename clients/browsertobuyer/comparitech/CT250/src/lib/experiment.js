import setup from './services/setup';
import shared from './shared/shared';
import header from './components/header';
import rightSideBanner from './components/rightSideBanner';
import { descriptionObj, providerImageObj, sidebarObj } from './data/data';
import providerInfo from './components/providerInfo';

const { ID } = shared;

const init = () => {
  const headerElement = document.querySelector('.home-nav header');
  const softwareTitleElement = headerElement.querySelector('.software-title');
  const softwareTitle = softwareTitleElement ? softwareTitleElement.textContent.trim() : '';
  const softwareDescriptionElement = headerElement.querySelector('.software-excerpt');
  const softwareDescription = softwareDescriptionElement
    ? softwareDescriptionElement.textContent.trim()
    : '';

  const mainContainer = document.querySelector('.main-container');
  const disclaimerElement = document.querySelector('.row.disclaimer');
  const wrapper = document.querySelector('.main.wrapper');
  const providers = wrapper.querySelectorAll('.wrapper table tbody tr');

  if (!document.querySelector(`.${ID}__disclaimer`)) {
    mainContainer.insertAdjacentElement('beforebegin', disclaimerElement);
    disclaimerElement.classList.add(`${ID}__disclaimer`);
  }
  if (!document.querySelector(`.${ID}__header`)) {
    disclaimerElement.insertAdjacentHTML(
      'afterend',
      header(ID, softwareTitle, softwareDescription)
    );
  }

  //Extract the arrays
  const articles = sidebarObj[`${window.location.pathname}`];
  const providersInfo = descriptionObj[`${window.location.pathname}`];
  if (articles) {
    const mustReadArray = articles
      .filter((item) => item.location === 'mustread')
      .sort((a, b) => a.position - b.position);

    const reviewsArray = articles
      .filter((item) => item.location === 'review')
      .sort((a, b) => a.position - b.position);

    if (!document.querySelector(`.${ID}__rightSideContainer`)) {
      wrapper.insertAdjacentHTML('afterend', rightSideBanner(ID, mustReadArray, reviewsArray));
    }
  }

  providers.forEach((provider) => {
    const buttonElem = provider.querySelector('.cta_deal .button a');
    const providerNameElem = provider.querySelector('.content_title h2');
    const providerName = providerNameElem ? providerNameElem.textContent.trim() : '';
    const isProviderExist = providersInfo.find((item) =>
      providerName.toLowerCase().includes(item.provider.toLowerCase())
    );
    const logoElement = provider.querySelector('.logo-features');
    const ratingElement = provider.querySelector('.rating_deal_wrap');
    const content = provider.querySelector('td.content');
    if (!provider.querySelector(`.${ID}__provider-info`) && isProviderExist) {
      logoElement.insertAdjacentHTML('afterend', providerInfo(ID, isProviderExist));
    }

    if (!provider.querySelector(`.${ID}__provider-info.${ID}__mobile`) && isProviderExist) {
      ratingElement.insertAdjacentHTML('beforeend', providerInfo(ID, isProviderExist, 'mobile'));
    }

    if (!content.querySelector(`.${ID}__mobileHeader`) && isProviderExist) {
      content.insertAdjacentHTML(
        'afterbegin',
        `<div class="${ID}__mobileHeader">${isProviderExist.title}</div>`
      );
    }

    logoElement.querySelector('img').src = providerImageObj[isProviderExist.provider];
    logoElement.querySelector('source').srcset = providerImageObj[isProviderExist.provider];

    buttonElem.childNodes[0].nodeValue = 'Visit Site ';
  });
};

export default () => {
  setup(); //use if needed
  init();
};
