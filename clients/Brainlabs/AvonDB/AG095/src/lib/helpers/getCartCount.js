const getCartCount = () => {
  const basketIconWrapper = document.querySelector('[data-item-id="wishlistButton"]');
  const cartCount = parseInt(basketIconWrapper.querySelector('.v7__elem--content-p').innerText);
  console.log('cartCount', cartCount);
  return cartCount;
};

export default getCartCount;
