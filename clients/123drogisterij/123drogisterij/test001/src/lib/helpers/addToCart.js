const addToCart = (url, formBody) => {
  return fetch(url, {
    headers: {
      accept: '*/*',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'x-requested-with': 'XMLHttpRequest'
    },
    method: 'POST',
    body: formBody
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export default addToCart;
