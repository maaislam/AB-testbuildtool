export const getProductData = async (productHandle) => {
  return await fetch(`${productHandle}.json`);
};
