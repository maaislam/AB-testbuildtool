const getActiveSku = () => {
  const variantArr = window.meta.product.variants;
  const variants = variantArr.reduce((prev, curr) => {
    prev[curr.id] = curr.sku;
    return prev;
  }, {});
  window.sno342Variants = variants;
  const firstVariant = variantArr[0].id;
  const varString = location.search;
  const selectedVariant = varString.substring(varString.indexOf('?variant=') + 9, varString.indexOf('&')) || firstVariant;

  return variants[selectedVariant];
};

export default getActiveSku;
