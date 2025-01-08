import setup from './services/setup';
import shared from './shared/shared';
import banner from './components/banner';
import { features, featuresV2 } from './data/data';
import { fetchAndParseHTML } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const targetElement = document.querySelector('.offerform-wrapper');
  if (!document.querySelector(`.${ID}__banner`)) {
    targetElement.insertAdjacentHTML(
      'afterbegin',
      banner(ID, VARIATION === '1' ? features : featuresV2)
    );

    const formBody = document.querySelector('.offerform-body .inner');
    if (!document.querySelector(`.${ID}__formBodyTitle`)) {
      formBody.insertAdjacentHTML(
        'afterbegin',
        `<h1 class="${ID}__formBodyTitle">Provide the details below<h1>`
      );
    }

    document.querySelector(`.${ID}__banner`) &&
      fetchAndParseHTML('https://www.scrapcarcomparison.co.uk/quote-forms/rnf')
        .then((info) => {
          const { postCode, makeValue } = info;
          const bannerHeader = document.querySelector(`.${ID}__bannerHeader h2 span`);
          const postCodeListElement = document.querySelectorAll(`li .${ID}__text span`);
          if (bannerHeader) bannerHeader.textContent = makeValue;
          if (VARIATION === '2' && postCodeListElement) {
            postCodeListElement.forEach((item) => {
              item.textContent = postCode;
            });
          }
        })
        .catch((err) => console.error('Error in fetchAndParseHTML:', err));
  }
};

export default () => {
  setup(); //use if needed

  const trackGA4Event = (category, action, label) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'gaCustomEvent',
      eventCategory: category,
      eventAction: action,
      eventLabel: label
    });
  };

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__dropdown-header`)) {
      const clickedItem = target.closest(`.${ID}__dropdown-header`);
      const dropdown = clickedItem.closest(`.${ID}__dropdown`);
      const dropDownContent = dropdown.querySelector(`.${ID}__dropdown-content`);
      dropdown.classList.toggle('open');
      dropdown.classList.contains('open')
        ? (dropDownContent.style.maxHeight = `${dropDownContent.scrollHeight}px`)
        : dropDownContent.removeAttribute('style');

      trackGA4Event('SCC 061', 'Trusted buyer clicks', '');
    }
  });
  if (VARIATION === 'control') return; //

  init();
};
