/*eslint-disable object-curly-newline */
const getProductInfo = (url) => {
  return fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      //Search for <label> elements with class 'custom-child-upsel-checkbox' inside a <form>
      const form = doc.querySelector('form');
      const labels = form.querySelectorAll('label.custom-child-upsel-checkbox');
      //let radioVal;
      const productsData = {};
      const variants = [];
      //Check if there are more than one label
      if (labels.length > 1) {
        const prodTitle = doc.querySelector('.page-title').innerText.trim();
        const imgSrc = doc.querySelector('.no-sirv-lazy-load').src;
        const defaultPriceElem = doc.querySelector('[id^="product-price-"]');
        const defaultPrice = parseFloat(defaultPriceElem.dataset.priceAmount);

        productsData.title = prodTitle;

        productsData.img = imgSrc;
        //const secondToLastLabel = labels[labels.length - 2]; //Get the second-to-last label
        const priceOptions = doc.querySelectorAll('.prices-tier li');
        priceOptions.forEach((item) => {
          const priceWrapper = item.querySelector('.price-wrapper');
          const qty = parseInt(item.dataset.item);
          const price = parseFloat(priceWrapper.dataset.priceAmount);
          const saving = defaultPrice * qty + 4.95 - qty * price;
          variants.push({
            qty,
            price,
            saving
          });
        });
        variants.push({
          qty: 1,
          price: defaultPrice,
          saving: 0
        });
      }
      console.log(variants);
      productsData.variants = variants;
      return productsData;
    })
    .catch((error) => {
      console.log('An error occurred:', error);
    });
};

export default getProductInfo;
