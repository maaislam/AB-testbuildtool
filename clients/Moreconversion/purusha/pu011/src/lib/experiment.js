import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const imageSource =
  'https://cdn.shopify.com/s/files/1/0245/5613/files/jude-donation.png?v=1709239549';
const heading = 'Giving Back with Every Purchase';
const description =
  'At Purusha, we believe in the power of giving back. That’s why we’re proud to support St. Jude’s Hospital, an institution dedicated to changing the lives of children facing serious illnesses. With every product you purchase, a portion of our sales goes directly to St. Jude’s, helping to provide critical care and support to those in need.';

const template = () => `<div class="${ID}__section Section--spacingNormal">
  <div class="${ID}__container">
    <div class="${ID}__image">
      <img src="${imageSource}">
    </div>
    <div class="${ID}__description">
      <div class="${ID}__heading">
        ${heading}
      </div>
      <div class="${ID}__description-text">
        ${description}
      </div>
    </div>
  </div>
</div>`;

export default () => {
  setup();
  console.log(ID);

  !document.querySelector(`.${ID}__section`) &&
    document
      .querySelector('.shopify-section--bordered .product_custom_section')
      .insertAdjacentHTML('afterend', template());
};
