const getCart = async () => {
  const response = await fetch('/cart.js');
  const cartData = await response.json();
  //console.log(cartData);
  return cartData;
};

export default getCart;
