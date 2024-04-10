export const deviceType = () => (window.innerWidth > 767 ? 'desktop' : 'mobile');

export const isPDP = () => {
  return !!document.querySelector('[data-test-id="pdp-wrapper"]');
};
export const isPLP = () => {
  return (
    (window.location.pathname.indexOf('/search/') !== -1 || window.location.pathname.indexOf('/c/') !== -1) &&
    !!document.querySelector('[data-test-id="plp-list"]')
  );
};

export const formatPrice = (amount, code = 'en-GB', currency = 'GBP') => {
  return new Intl.NumberFormat(code, {
    style: 'currency',
    currency
  }).format(amount);
};
