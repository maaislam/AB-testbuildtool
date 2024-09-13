import setup from './services/setup';

export default () => {
  setup();
  const { pathname } = window.location;
  const isMetalBundles = pathname.includes('/products/metalbundles') && !pathname.includes('/products/metalbundles4');
  const isKittyspoutKit = pathname.includes('/products/the-kittyspout-kit') && !pathname.includes('/products/the-kittyspout-kit4');
  if (isMetalBundles) {
    document.body.style = 'display: none';
    window.location.href = 'https://www.kittyspout.com/products/metalbundles4';
  } else if (isKittyspoutKit) {
    document.body.style = 'display: none';
    window.location.href = 'https://www.kittyspout.com/products/the-kittyspout-kit4';
  }
};
