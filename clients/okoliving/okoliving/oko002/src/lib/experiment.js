import { observeDOM } from './helpers/utils';
//import setup from './services/setup';
//import gaTracking from './services/gaTracking';
//import shared from './shared/shared';
const shared = {
  ID: 'oko002',
  VARIATION: '1',
  CLIENT: 'okoliving',
  SITE: 'okoliving'
};
const { ID, VARIATION } = shared;

const init = () => {
  //remove existing trust badge
  const existingTrustbadges = document.querySelector(`.${ID}__trustbadge`);
  existingTrustbadges?.remove();

  const trustBadgeData = [
    {
      classSuffix: 'secure',
      imgSrc: 'https://cdn.shopify.com/s/files/1/0284/0428/5533/files/4secure.jpg?v=1671774359',
      text: 'Secure Checkout'
    },
    {
      classSuffix: 'gurantee',
      imgSrc: 'https://cdn.shopify.com/s/files/1/0284/0428/5533/files/3guarantee.jpg?v=1671774342',
      text: 'Risk free 30 day Returns'
    },
    {
      classSuffix: 'fastship',
      imgSrc: 'https://cdn.shopify.com/s/files/1/0284/0428/5533/files/1.fastship.jpg?v=1671774304',
      text: 'Fast Shipping'
    }
  ];

  const trustBadge = (id, { classSuffix, imgSrc, text }) => `
  <div class="${id}__trustbadge--${classSuffix}">
    <img src="${imgSrc}">
    <p>${text}</p>
  </div>
  `;

  const trustBadges = `  
    <div class="${ID}__trustbadge">
      ${trustBadgeData.map((data) => trustBadge(ID, data)).join('\n')}
    </div>`;

  if (!document.querySelector(`.${ID}__trustbadge`)) {
    document.querySelector('header').insertAdjacentHTML('beforeend', trustBadges);
  }
};

export default () => {
  document.documentElement.classList.add(ID);
  document.documentElement.classList.add(`${ID}-${VARIATION}`);

  init();

  observeDOM('#app', init);
};
