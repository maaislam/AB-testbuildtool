import getProducts from './getProducts';

const getVariant = (prods, selectedVariant) => {
  console.log('selectedVariant', selectedVariant);
  const { option1: v1, option2: v2, option3: v3 } = selectedVariant;
  const prodVarMatcher = prods.reduce((acc, curr) => {
    const prod = curr.variants.filter(({ option1 }) => v1 === option1);

    return prod ? [...acc, ...prod] : acc;
  }, []);

  let finalRes = [];
  for (let index = 1; index < 4; index++) {
    const sortedData = prodVarMatcher.filter(({ option1, option2, option3 }) => {
      return index === 1
        ? v1 === option1 && v2 === option2 && v3 === option3
        : index == 2
        ? v1 === option1 && v2 === option2 && v3 !== option3
        : v1 === option1 && v2 !== option2 && v3 !== option3;
    });
    finalRes.push(...sortedData);
  }
  console.log('finalRes', finalRes);
  return finalRes.slice(0, 15);
};

export const getRecommendation = async ({ productId, selectedVariant }) => {
  try {
    const { products } = await getProducts(
      `/recommendations/products.json?product_id=${productId}&limit=15`
    );
    console.log(products);
    const filteredProducts = getVariant(products, selectedVariant);
    console.log(filteredProducts);
    return filteredProducts;
  } catch (error) {
    throw new Error(error);
  }
};
