import setup from './services/setup';
import shared from './shared/shared';
import cards from './components/cards';

const { ID, VARIATION } = shared;

const data = [
  {
    title: 'June 2024 Drop',
    desktopImage:
      'https://cdn.shopify.com/s/files/1/0697/7277/1608/files/june2024drop.png?v=1730226935',
    mobileImage:
      'https://cdn.shopify.com/s/files/1/0697/7277/1608/files/june2024drop.png?v=1730226935',
    url: 'https://moonnude.com/collections/june-2024'
  },
  {
    title: 'Bestsellers',
    desktopImage:
      'https://cdn.shopify.com/s/files/1/0697/7277/1608/files/bestseller.png?v=1730226935',
    mobileImage:
      'https://cdn.shopify.com/s/files/1/0697/7277/1608/files/bestseller.png?v=1730226935',
    url: 'https://moonnude.com/collections/bestsellers'
  },
  {
    title: 'Low Stock',
    desktopImage:
      'https://cdn.shopify.com/s/files/1/0697/7277/1608/files/lowstock.png?v=1730226935',
    mobileImage: 'https://cdn.shopify.com/s/files/1/0697/7277/1608/files/lowstock.png?v=1730226935',
    url: 'https://moonnude.com/collections/low-stock'
  },
  {
    title: 'Large Makeup Bags',
    desktopImage:
      'https://cdn.shopify.com/s/files/1/0697/7277/1608/files/Tropical-Daydream-Lush-Foaming-Hand-Soap_2188e9e3-d353-4d21-b830-f1579cac9823_1512x_jpg.png?v=1730226935',
    mobileImage:
      'https://cdn.shopify.com/s/files/1/0697/7277/1608/files/Tropical-Daydream-Lush-Foaming-Hand-Soap_2188e9e3-d353-4d21-b830-f1579cac9823_1512x_jpg.png?v=1730226935',
    url: 'https://moonnude.com/collections/large-makeup-bags'
  }
];

const init = () => {
  //desktop attachpoint

  if (VARIATION === '1') {
    const attachPoint = document.querySelectorAll('.section-stack')[0];

    if (!document.querySelector(`.${ID}__highlightedCollections`)) {
      attachPoint.insertAdjacentHTML('afterbegin', cards(ID, data));
    }

    //mobile attachpoint
    // const mobileAttachPoint = document.querySelector(
    //   '[data-shogun-id] .shg-box-vertical-align-wrapper:nth-child(7)'
    // );
    // mobileAttachPoint.classList.add(`${ID}__mobileSection`);
    // if (!document.querySelector(`.${ID}__mobileSection + .${ID}__highlightedCollections`)) {
    //   mobileAttachPoint.insertAdjacentHTML('afterend', cards(ID, data));
    // }
  }
};

export default () => {
  setup();

  init();
};
