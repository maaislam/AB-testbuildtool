export const formatCardNumber = (value1) => {
  //Remove all non-digit characters
  const value = value1.replace(/\D/g, '');
  let formattedValue;
  let maxLength;

  //American Express, 15 digits, starts with 3
  if (/^3\d{0,14}$/.test(value)) {
    formattedValue = value.replace(/(\d{4})/, '$1 ').replace(/(\d{4}) (\d{6})/, '$1 $2 ');
    maxLength = 17;
  } else if (/^4\d{0,15}$/.test(value)) {
    //Visa, 16 digits, starts with 4
    formattedValue = value
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
      .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
    maxLength = 19;
  } else if (/^5\d{0,15}$/.test(value)) {
    //MasterCard, 16 digits, starts with 5
    formattedValue = value
      .replace(/(\d{4})/, '$1 ')
      .replace(/(\d{4}) (\d{4})/, '$1 $2 ')
      .replace(/(\d{4}) (\d{4}) (\d{4})/, '$1 $2 $3 ');
    maxLength = 19;
  } else {
    //Default case for other cards
    formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
    maxLength = 19;
  }

  document.querySelector('#cc').setAttribute('maxlength', maxLength);
  return formattedValue;
};
