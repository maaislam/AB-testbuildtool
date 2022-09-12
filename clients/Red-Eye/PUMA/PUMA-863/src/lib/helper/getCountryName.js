const getCountryName = () => {
  return window.location.pathname.split('en/')[0];
};

export default getCountryName;
