const recommendedProducts = (activeSku) => {
  return fetch(`/recommendations/products.json?product_id=${window.product.id}&limit=15`)
    .then((response) => response.json())
    .then(({ products }) => {
      console.log(products);
    });
};

export default recommendedProducts;
