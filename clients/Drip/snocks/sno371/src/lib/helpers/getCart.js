const getCart = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/cart.js', true);

    request.onload = async () => {
        document.documentElement.dispatchEvent(new CustomEvent('cart:build', {
            bubbles: true
        }));
        document.documentElement.dispatchEvent(new CustomEvent('product:added', {
            bubbles: true,
                detail: {
                variant: '',
                quantity: 1
            }
        }));
    };

    request.send();
};

export default getCart;
