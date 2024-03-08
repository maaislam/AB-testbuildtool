import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const images = [
  'https://cdn.shopify.com/s/files/1/0619/1559/4985/files/Frame_160817.png',
  'https://cdn.shopify.com/s/files/1/0619/1559/4985/files/Frame_160818.png',
  'https://cdn.shopify.com/s/files/1/0619/1559/4985/files/Frame_160819.png',
  'https://cdn.shopify.com/s/files/1/0619/1559/4985/files/Frame_160820.png'
];

const varTemplate = () => `<div class="${ID}_container">
  ${images
    .map(
      (img) => `<div class="${ID}_image">
    <img src="${img}">
  </div>`
    )
    .join('')}
</div>`;

const applyVariation1 = () => {
  const buyBtn = document.querySelector(
    '.product-info .product-info__buy-buttons + .product-info__liquid'
  );
  const complementaryProducts = document.querySelector(
    '.product-info__complementary-products > .h-stack.justify-between'
  );

  !document.querySelector(`.product-info__liquid + .${ID}_container`) &&
    buyBtn.insertAdjacentHTML('afterend', varTemplate());
  !document.querySelector(`.product-info__complementary-products .${ID}_container`) &&
    complementaryProducts.insertAdjacentHTML('afterend', varTemplate());
};

const applyVariation2 = () => {
  const faq = document.querySelector('.shopify-section--faq');

  !document.querySelector(`main > .${ID}_container`) &&
    faq.insertAdjacentHTML('beforebegin', varTemplate());
};

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);

  if (VARIATION === '1') {
    pollerLite(
      [
        '.product-info .product-info__buy-buttons + .product-info__liquid',
        '.product-info__complementary-products'
      ],
      applyVariation1
    );
  } else if (VARIATION === '2') {
    pollerLite(['.shopify-section--faq'], applyVariation2);
  }
};
