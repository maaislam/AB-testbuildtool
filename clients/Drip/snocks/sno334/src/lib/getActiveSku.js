const getActiveSku = () => {
  const variantArr = window.meta.product.variants;
  const variants = variantArr.reduce((prev, curr) => {
    prev[curr.id] = curr.sku;
    return prev;
  }, {});
  window.sno342Variants = variants;
  const firstVariant = variantArr[0].id;
  const varString =
    location.search.indexOf('&') !== -1
      ? location.search.split('?variant=')[1].split('&')[0]
      : location.search.split('?variant=')[1];
  const selectedVariant = varString || firstVariant;

  return variants[selectedVariant];
};

export default getActiveSku;
