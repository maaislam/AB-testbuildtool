/*eslint-disable object-curly-newline */
const getProductInfo = (element) => {
  //Search for <label> elements with class 'custom-child-upsel-checkbox' inside a <form>
  const form = element.querySelector('form');
  const labels = form.querySelectorAll('label.custom-child-upsel-checkbox');
  //let radioVal;
  const productsData = {};
  const variants = [];
  //Check if there are more than one label
  if (labels.length > 1) {
    const prodTitle = element.querySelector('.page-title').innerText.trim();
    const imgSrc = element.querySelector('.no-sirv-lazy-load').src;
    const defaultPriceElem = element.querySelector('[id^="product-price-"]');
    const defaultPrice = parseFloat(defaultPriceElem.dataset.priceAmount);

    productsData.title = prodTitle;

    productsData.img = imgSrc;
    //const secondToLastLabel = labels[labels.length - 2]; //Get the second-to-last label
    const priceOptions = element.querySelectorAll('.prices-tier li');
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
};

export default getProductInfo;
