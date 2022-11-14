const getCompareCount = () => {
  return fetch(
    `https://www.screwfix.com/presentation-web-search/jsp/search/action/productCompareListSize.jsp?_=${Date.now()}`,
    {
      headers: {
        accept: '*/*'
      }
    }
  ).then((response) => response.text());
};

export default getCompareCount;
