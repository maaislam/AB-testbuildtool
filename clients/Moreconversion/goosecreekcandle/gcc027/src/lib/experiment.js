import setup from './services/setup';
import shared from './shared/shared';
import cards from './components/cards';

const { ID, VARIATION } = shared;

const data = [
  {
    title: 'Today’s deals',
    desktopImage:
      'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-1-desktop.png?v=1721866848',
    mobileImage:
      'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-1-mobile.png?v=1721866848',
    url: 'https://goosecreekcandle.com/collections/lush-foaming-hand-soap'
  },
  {
    title: 'New Fall Fragrances',
    desktopImage:
      'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-2-desktop.png?v=1721866848',
    mobileImage:
      'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-2-mobile.png?v=1721866848',
    url: ''
  },
  {
    title: 'Seasonal Fragrances',
    desktopImage:
      'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-3-desktop.png?v=1721866849',
    mobileImage:
      'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-3-desktop.png?v=1721866849',
    url: ''
  },
  {
    title: 'Fruity Fragrances',
    desktopImage:
      'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-4-desktop.png?v=1721866848',
    mobileImage:
      'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-4-mobile.png?v=1721866848',
    url: ''
  }
];

const init = () => {
  //desktop attachpoint
  const attachPoint = document.querySelector(
    '.shogun-root > .shg-box-vertical-align-wrapper .shg-box-vertical-align-wrapper'
  );

  if (!document.querySelector(`.${ID}__highlightedCollections`)) {
    attachPoint.insertAdjacentHTML('afterend', cards(ID, data));
  }

  //mobile attachpoint
  const mobileAttachPoint = document.querySelector(
    '[data-shogun-id] .shg-box-vertical-align-wrapper:nth-child(7)'
  );
  mobileAttachPoint.classList.add(`${ID}__mobileSection`);
  if (!document.querySelector(`.${ID}__mobileSection + .${ID}__highlightedCollections`)) {
    mobileAttachPoint.insertAdjacentHTML('afterend', cards(ID, data));
  }
};

export default () => {
  setup();

  init();
};
