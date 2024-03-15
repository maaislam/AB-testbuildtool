import setup from './services/setup';

export default () => {
  setup();

  const { pathname } = window.location;

  const isMetalBundles = pathname.includes('/metalbundles') && !pathname.includes('/metalbundles-abtest');
  const isKittyspoutKit = pathname.includes('/the-kittyspout-kit') && !pathname.includes('/the-kittyspout-kit-abtest');

  if (isMetalBundles || isKittyspoutKit) {
    document.body.style = 'display: none';
    window.location.href = 'https://www.kittyspout.com/products/metalbundles-abtest';
  }
};
