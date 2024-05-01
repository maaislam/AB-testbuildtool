const getCart = async () => {
    const response = await fetch('/cart.js');
    const cartData = await response.json();
    return cartData;
};
export default getCart;
