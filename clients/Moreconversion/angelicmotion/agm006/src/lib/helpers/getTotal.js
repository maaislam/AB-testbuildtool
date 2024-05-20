const getTotal = async () => {
    const response = await fetch('/cart.js');
    const cartData = await response.json();
    const cartTotal = cartData.total_price / 100;
    return cartTotal;
};

export default getTotal;
