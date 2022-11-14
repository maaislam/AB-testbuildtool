const setCompare = (productId) => {
  const response = fetch('/presentation-web-search/jsp/search/action/productCompareList.jsp', {
    headers: {
      accept: '*/*',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: `productId=${productId}`,
    method: 'POST'
  });
  return response;
};

export default setCompare;
