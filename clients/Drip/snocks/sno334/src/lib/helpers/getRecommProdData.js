const getRecommStarData = async (init) => {
  const homePage = location.pathname === '/';
  const recommProducts = homePage
    ? document.querySelectorAll('.ProductListWrapper .ProductItem a')
    : document.querySelectorAll('.ProductRecommendations .ProductItem a');

  let promises = [];
  for (let index = 0; index < recommProducts.length; index++) {
    const prodHref = recommProducts[index].getAttribute('href');

    if (prodHref) {
      const productHandle = prodHref.split('?')[0];
      const response = await fetch(`${productHandle}.json`);
      const data = await response.json();
      promises.push(data);
    }
  }
  const datas = await Promise.all(promises);
  const normalisedData = datas.reduce((prev, curr) => {
    prev[curr.product.id] = curr.product;
    return prev;
  }, {});
  window.collectionProducts = normalisedData;
  setTimeout(() => {
    init(window.collectionProducts);
  }, 2000);
};
export default getRecommStarData;
