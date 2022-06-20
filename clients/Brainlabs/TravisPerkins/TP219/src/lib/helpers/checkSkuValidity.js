import { deviceType } from './utils';

const skuValidity = (data, productCodePlp) => {
  const isPDP = () => {
    return !!document.querySelector('[data-test-id="pdp-wrapper"]');
  };
  const isPLP = () => {
    return (
      (window.location.pathname.indexOf('/search/') !== -1 || window.location.pathname.indexOf('/c/') !== -1) &&
      !!document.querySelector('[data-test-id="plp-list"]')
    );
  };

  const skus = Object.keys(data);

  if (isPDP()) {
    const isMobile = deviceType() !== 'desktop';
    const productCodeText = document.querySelector('[data-test-id="product-code"]').innerText;
    const productCode = isMobile ? productCodeText.split(': ')[1] : productCodeText;
    return skus.some((id) => id == productCode);
  } else if (isPLP()) {
    return skus.some((id) => id == productCodePlp);
  }
};

export default skuValidity;
