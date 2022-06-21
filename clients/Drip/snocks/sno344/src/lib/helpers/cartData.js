export const getCartData = async(fnc) => {
    const response = await fetch('/cart.js');

    const data = await response.json();
    console.log(data, 'Checking items');

    if (data.items.length == 1) {
        console.log(data.items.length, 'checking length')

        fnc(data);
    }

};

// export default getCartData;