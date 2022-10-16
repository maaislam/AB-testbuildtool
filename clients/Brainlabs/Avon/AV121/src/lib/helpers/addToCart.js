export const addToCart = (payload) => {
  const response = fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((result) => {
    const res = result.json();

    return res;
  });
  return response;
};

export const getCart = () => {
  const response = fetch('/cart.js', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json());
  return response;
};
export const emitDYAddToCart = (res, quantity) => {
  const eventTotal = (res.final_price / 100) * quantity;

  const atcJson = {
    name: 'Add to Cart',
    properties: {
      dyType: 'add-to-cart-v1',
      value: eventTotal,
      currency: 'GBP',
      productId: res.sku,
      quantity
    }
  };
  //emit DY event
  window.DY.API('event', atcJson);
};
