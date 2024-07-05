export const expireDateValidation = (expiryDate) => {
  const re = /^(0[1-9]|1[0-2])\s*\/?\s*([0-9]{2})$/; //Regular expression to check MM/YY format

  if (!re.test(expiryDate)) {
    return false;
  }

  const today = new Date(); //gets the current date
  let today_mm = today.getMonth() + 1; //extracts the month portion
  const today_yy = today.getFullYear() % 100;

  if (today_mm < 10) {
    //if today's month is less than 10
    today_mm = `0${today_mm}`; //prefix it with a '0' to make it 2 digits
  }

  const mm = expiryDate.substring(0, 2);
  const yy = expiryDate.substring(5);

  if (yy > today_yy || (yy == today_yy && mm >= today_mm)) {
    //all good because the yy from expiryDate is greater than the current yy
    //or if the yy from expiryDate is the same as the current yy but the mm
    //from expiryDate is greater than the current mm
    return true;
  }
  return false;
};
