export const addToCart = async (sku, quantity) => {
  const payload = {
    sku,
    quantity,
    campaignNumber: window.PDP_MANAGER.API_DATA.campaignNumber
  };

  const response = await fetch(
    `https://api.south.avon.digital-catalogue.com/avon-mas/${
      window.PDP_MANAGER.API_DATA.mrktCd
    }/basket/${localStorage.getItem('AG102b__shopperId')}/add-product`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  );
  const result = await response.json();
  return result;
};

//please also send add to cart event to DY
export const emitDYAddToCart = async (res, quantity) => {
  const eventTotal = res.lastProductChanged.price * quantity;

  const atcJson = {
    name: 'Add to Cart',
    properties: {
      dyType: 'add-to-cart-v1',
      value: eventTotal,
      currency: 'GBP',
      productId: res.id,
      quantity
    }
  };
  //emit DY event
  await window.DY.API('event', atcJson);
};
