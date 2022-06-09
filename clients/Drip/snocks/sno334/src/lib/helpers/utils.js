export const isPDP = location.pathname.indexOf('/product') !== -1;
export const isPLP = location.pathname.indexOf('/collections') !== -1;
const productsOnPage = isPLP && Object.values(window.collectionProducts);
export const skusOnPage =
  isPLP &&
  productsOnPage.reduce((prev, curr) => {
    const variants = curr.variants;

    variants.forEach((variant) => {
      prev[variant.id] = variant.sku;
    });

    return prev;
  }, {});

const skusArr = Object.values(skusOnPage);



export const thingsToPollFor = isPDP
  ? ['#judgeme_product_reviews', '.Product__Info']
  : isPLP
  ? [
      '.ProductList.ProductList--grid .ProductItem',
      '.ProductItem__Info',
      () =>
        document.querySelectorAll('.ProductList.ProductList--grid .ProductItem').length >=
        skusArr.length,
    ]
  : null;
