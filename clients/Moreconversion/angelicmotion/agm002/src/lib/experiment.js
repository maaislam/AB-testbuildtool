import setup from './services/setup';

import shared from './shared/shared';

const { VARIATION } = shared;

const fabricUpvs = {
  zipup: ['Satin lined inner hood', '100% premium brushed cotton', 'Over 100, 000+ stiches'],
  hoodie: [
    'Perfect for both casual hangouts and stylish events',
    '100% premium french terry cotton'
  ],
  shorts: ['5" Inseams = short fit', '100% premium mesh', 'metal eyelets and caps']
};
const deliveryUpvs = ['Free Delivery over $100', '100% Satisfaction Guarantee'];

export default () => {
  setup();

  const bullet = `<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" fill="transparent" r="6" stroke="black" stroke-width="1" />
    <circle cx="10" cy="10" fill="black" r="3" />
  </svg>`;

  const image1 =
    '<img src="https://more-conversions.s3.amazonaws.com/bullet1.png" alt="delivery" />';
  const image2 = '<img src="https://more-conversions.s3.amazonaws.com/bullet2.png" alt="star" />';

  const attachpoint1 = document.querySelector('.rio-options');
  const attachPoint2 = document.querySelector('.product-form__buttons');

  const pagePath = window.location.pathname;

  const pageType = pagePath.includes('hoodie')
    ? 'hoodie'
    : pagePath.includes('shorts')
    ? 'shorts'
    : 'zipup';

  const fabricUpvHtml = `
    <div class="fabric-upvs">
      <ul>
        ${fabricUpvs[pageType].map((upv) => `<li>${bullet} ${upv}</li>`).join('\n')}
      </ul>
    </div>`;

  const deliveryUpvHtml = `
    <div class="delivery-upvs">
      <ul>
        ${deliveryUpvs
          .map((upv, i) => `<li class="container-${i}">${i === 0 ? image1 : image2} ${upv}</li>`)
          .join('\n')}
      </ul>
    </div>`;

  if (VARIATION !== '2' && !document.querySelector('.fabric-upvs')) {
    attachpoint1.insertAdjacentHTML('beforebegin', fabricUpvHtml);
  }

  if (VARIATION !== '1' && !document.querySelector('.delivery-upvs')) {
    attachPoint2.insertAdjacentHTML('afterend', deliveryUpvHtml);
  }
};
