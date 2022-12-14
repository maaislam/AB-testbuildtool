/*eslint-disable no-underscore-dangle */
const addToCart = (sku) => {
  const addToCartEndpoint = '/api/cartapi/add';
  const payloads = [
    {
      Campaign: window._ShopContext.CampaignNumber,
      Quantity: 1,
      Sku: sku
    }
  ];

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payloads)
  };

  return fetch(addToCartEndpoint, options).then((respnse) => respnse.json());
};

export default addToCart;
