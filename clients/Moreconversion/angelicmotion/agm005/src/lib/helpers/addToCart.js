const addToCart = async (product) => {
    try {
        const result = await fetch('/cart/add.js', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        if (!result.ok) {
            throw new Error(`Request failed with status ${result.status}`);
        }

        const response = await result.json();
        return response;
    } catch (error) {
        console.error('Error adding product to cart:', error);
        throw error;
    }
};

export default addToCart;
