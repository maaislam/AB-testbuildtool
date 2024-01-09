import setup from './services/setup';

export default () => {
  setup();
  const saleLink = document.querySelectorAll(' a[href*="/collections/mdw-sale-23"]');
  saleLink.forEach((link) => {
    const saleLinkParent = link.parentElement;

    saleLinkParent.style.display = 'none';
  });
};
