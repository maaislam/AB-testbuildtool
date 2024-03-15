const emitCartDataOnChange = () => {
  window.require(['Magento_Customer/js/customer-data'], (customerData) => {
    const cart = customerData.get('cart'); //Get cart data

    //Function to dispatch a custom event with cart data
    const emitCartDataEvent = (cartData) => {
      const event = new CustomEvent('cartDataChanged', {
        detail: cartData
      });
      document.dispatchEvent(event);
    };

    //Subscribe to cart updates
    cart.subscribe((updatedCart) => {
      console.log(updatedCart); //Log updated cart data
      emitCartDataEvent(updatedCart);
    });

    //Emit cart data event on page load with initial cart data
    emitCartDataEvent(cart());
  });
};

export default emitCartDataOnChange;
