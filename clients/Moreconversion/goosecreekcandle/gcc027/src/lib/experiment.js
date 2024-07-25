import setup from './services/setup';
import shared from './shared/shared';
import cards from './components/cards';

const { ID, VARIATION } = shared;

const data = [
  {
    title: 'Today’s deals',
    desktopImage: 'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-1-desktop.png?v=1721866848',
    mobileImage: 'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-1-mobile.png?v=1721866848',
    url: ''
  },
  {
    title: 'New Fall Fragrances',
    desktopImage: 'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-2-desktop.png?v=1721866848',
    mobileImage: 'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-2-mobile.png?v=1721866848',
    url: ''
  },
  {
    title: 'Seasonal Fragrances',
    desktopImage: 'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-3-desktop.png?v=1721866849',
    mobileImage: 'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-3-desktop.png?v=1721866849',
    url: ''
  },
  {
    title: 'Fruity Fragrances',
    desktopImage: 'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-4-desktop.png?v=1721866848',
    mobileImage: 'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/image-4-mobile.png?v=1721866848',
    url: ''
  }
];

const init = () => {
  const attachPoint = document.querySelector('.shogun-root > .shg-box-vertical-align-wrapper .shg-box-vertical-align-wrapper');
  attachPoint.insertAdjacentHTML('beforebegin', cards(ID, data));
};

export default () => {
  setup();

  init();
};
