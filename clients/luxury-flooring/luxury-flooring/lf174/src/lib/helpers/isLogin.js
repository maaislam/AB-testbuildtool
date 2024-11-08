const isLogin = () => {
  const customerGroupObj = window.dataLayer.find((item) => {
    if (item.customerGroup) {
      return true;
    }
    return false;
  });
  if (customerGroupObj.customerGroup === 'NOT LOGGED IN') {
    return false;
  }
  return true;
};

export default isLogin;
