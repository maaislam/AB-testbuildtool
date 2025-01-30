import setup from './services/setup';

export default () => {
  setup(); //use if needed

  //Define the observer
  const observer = new PerformanceObserver((entryList) => {
    //eslint-disable-next-line no-restricted-syntax
    for (const entry of entryList.getEntries()) {
      //Get the "More Products" button
      const moreProductsButton =
        document.querySelector('.amscroll-load-button') ||
        document.querySelector('.products-grid ~ .toolbar.toolbar-products');
      if (!moreProductsButton) return;

      //Identify the newly loaded product wrapper
      const newMainProductWrapper = moreProductsButton.previousElementSibling;

      //Get the first product inside the new product wrapper
      const firstProduct = newMainProductWrapper?.querySelector('.item.product');

      //Check if the previous sibling is a product grid and contains products
      const previousProductGrid = newMainProductWrapper?.previousElementSibling;
      const productList = previousProductGrid?.querySelector('ol.products');

      if (
        previousProductGrid?.classList.contains('products-grid') &&
        //eslint-disable-next-line no-unsafe-optional-chaining
        productList?.childElementCount % 2 !== 0
      ) {
        productList.insertAdjacentElement('beforeend', firstProduct);
      }
    }
  });

  //Start observing layout shifts
  observer.observe({
    type: 'layout-shift',
    buffered: true
  });
};
