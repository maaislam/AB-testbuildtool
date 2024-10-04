const getTotalPrice = async () => {
    try {
        const response = await fetch('/cart.js');
        const data = await response.json();

        const totalPrice = data.original_total_price;
        return Number(totalPrice / 100);
    } catch (error) {
        console.error('Error fetching the cart data:', error);
        return 0;
    }
};

export default getTotalPrice;
