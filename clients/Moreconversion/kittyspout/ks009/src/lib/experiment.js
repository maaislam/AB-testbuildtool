import setup from './services/setup';

export default () => {
  setup();

  const { pathname } = window.location;
  const isMetalBundles = pathname.includes('/products/metalbundles') && !pathname.includes('/products/metalbundles-price-abtest');
  const isKittyspoutKit = pathname.includes('/products/the-kittyspout-kit') && !pathname.includes('/products/the-kittyspout-kit-price-abtest');
  if (isMetalBundles) {
    document.body.style = 'display: none';
    window.location.href = 'https://www.kittyspout.com/products/metalbundles-price-abtest';
  } else if (isKittyspoutKit) {
    document.body.style = 'display: none';
    window.location.href = 'https://www.kittyspout.com/products/the-kittyspout-kit-price-abtest';
  }
};
