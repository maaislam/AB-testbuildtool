/*eslint-disable implicit-arrow-linebreak */
const formatPrice = (amount, code = 'en-GB', currency = 'GBP') =>
  new Intl.NumberFormat(code, {
    style: 'currency',
    currency
  }).format(amount);

export default formatPrice;
