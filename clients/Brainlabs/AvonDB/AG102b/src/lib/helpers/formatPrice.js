/*eslint-disable implicit-arrow-linebreak */
const formatPrice = (amount, code = 'en-EU', currency = 'ZAR') =>
  new Intl.NumberFormat(code, {
    style: 'currency',
    currency
  }).format(amount);
export default formatPrice;
