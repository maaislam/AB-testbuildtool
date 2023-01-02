import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import brandData from './brandData';
import obsIntersection from './helpers/observeIntersection';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed

  document.body.addEventListener('input', ({ target }) => {
    if (target.closest('#mainSearch-input')) {
      gaTracking('User interacts with search');
    }
  });

  document.body.addEventListener('click', ({ target }) => {
    if (target.closest('#site-navigation')) {
      gaTracking(
        `User interacts with navigation | ${target.closest('li').querySelector('a').innerText}`
      );
    } else if (target.closest('#recommendations_container')) {
      gaTracking('User interact with best sellers');
    } else if (target.closest('[id^="product_add_to_trolley"]')) {
      gaTracking('User interacts with the delivery CTA');
    } else if (
      target.closest('[id^="add_for_collection_button"]') &&
      target.closest('[id^="add_for_sticky_collection_button"]')
    ) {
      gaTracking('User interacts with the click & collect CTA');
    } else if (target.closest('.bc__list')) {
      gaTracking('User interact with breadcrumbs');
    } else if (target.closest(`.${ID}__shopall`)) {
      gaTracking('User interact with “shop all” cta in  banner');
    } else if (target.closest(`.${ID}__shopcategory`)) {
      gaTracking('User interact with category cta in  banner');
    } else if (target.closest(`.${ID}__brandbanner`) && VARIATION !== '3') {
      gaTracking('User interact with experiment banner');
    }
  });

  //document.querySelector('.pr__product #qty').addEventListener('keyup', () => {});

  //console.log(ID);
  const anchorElm = document.getElementById('recommendations_container');

  const intersectionCallback = (entry) => {
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      entry.target.classList.add(`${ID}__seen`);
      gaTracking('Conditions Met');
    }
  };

  obsIntersection(anchorElm, 0.1, intersectionCallback);

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const brandElem = document.getElementById('product_brand_img');
  if (!brandElem) return;
  const brandName = brandElem.getAttribute('alt');
  const brandLogo = brandElem.getAttribute('src');
  const pdpCategory = window.dataLayer[0].prodCategory;

  const brandDetails = brandData[pdpCategory][brandName];
  console.log(brandDetails);

  const textContent =
    VARIATION === '1'
      ? `SHOP ${brandName} ${pdpCategory}`
      : VARIATION === '2'
      ? `SHOP ALL ${brandName}`
      : `We have lots more ${brandName} products available`;

  const htmlStr = `
      <a class="${ID}__brandbanner" 
         href="${VARIATION === '1' ? brandDetails.v1Url : brandDetails.v2Url}">
        <div class="${ID}__brandbanner--text">${textContent}</div>
        <div class="${ID}__brandbanner--logo"><img src="${brandLogo}" alt="${brandName}" /></div>
      </a>
      `;
  const v3Html = `
    <div class="${ID}__brandbanner" 
         href="${VARIATION === '1' ? brandDetails.v1Url : brandDetails.v2Url}">
        <div class="${ID}__brandbanner--text">${textContent}</div>
        <div class="${ID}__brandbanner--logo"><img src="${brandLogo}" alt="${brandName}" /></div>
        <div class="${ID}__brandbanner--buttons">
          <div class="${ID}__shopall btn btn--lg fill">Shop all ${brandName}</div>
          <div class="${ID}__shopcategory btn btn--lg fill">Shop ${brandName} ${pdpCategory}</div>
        </div>
    </div>
    `;

  anchorElm.insertAdjacentHTML('beforebegin', VARIATION === '3' ? v3Html : htmlStr);
};
