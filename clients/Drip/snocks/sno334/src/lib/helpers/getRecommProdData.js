const getRecommProdData = async (productHref) => {
  const productHandle = productHref.split('?')[0];
  //console.log(productHandle);
  const response = await fetch(`${productHandle}.json`);
  return await response.json();
};

export default getRecommProdData;
