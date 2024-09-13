const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const addToCart = async (products) => {
        try {
            for (const product of products) {
                // Add product to cart
                await fetch('/cart/add.js', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: product.id, // Product variant ID
                        quantity: product.quantity // Quantity to add
                    })
                });

                console.log(`Added product ${product.id} to cart`);

                // Wait for 1 second before adding the next product
                await delay(300);
            }
        } catch (error) {
            console.error('Error adding products to the cart:', error);
        }
    };

export default addToCart;
