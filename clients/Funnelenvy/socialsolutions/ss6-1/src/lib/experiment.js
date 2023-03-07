import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup(); //use if needed

  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const supportText =
    'See how our most comprehensive case management solution can work for your organization.';
  const primaryCtaText = 'Get a live demo';
  const newCtaText = 'Tour the product';
  const newCtaLink = '/apricot-product-tour/';
  const supprtElem = document.querySelector('.suport-text');
  const mainCta = document.querySelector('a.main-cta');

  const newCta = `<div class="${ID}__ctablock wp-block-button is-style-outline">
                    <a class="wp-block-button__link" href="${newCtaLink}">${newCtaText}</a>
                  </div>`;
  if (document.querySelector(`.${ID}__cta-container`)) return;

  supprtElem.innerText = supportText;
  mainCta.closest('.cta-container').classList.add(`${ID}__cta-container`);
  mainCta.innerText = primaryCtaText;
  mainCta.insertAdjacentHTML('afterend', newCta);

  document.querySelector(`.${ID}__ctablock`).addEventListener('click', () => {
    gaTracking('tour_the_product');
  });
};
