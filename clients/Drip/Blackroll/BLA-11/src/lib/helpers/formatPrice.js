const formatPrice = (amount, code = 'en-GB', currency = 'EUR') => {
  return new Intl.NumberFormat(code, {
    style: 'currency',
    currency,
  }).format(amount);
};
export default formatPrice;
