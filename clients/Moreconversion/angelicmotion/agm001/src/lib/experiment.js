/*eslint-disable no-underscore-dangle */
import setup from './services/setup';

export default () => {
  setup();
  //get product id

  const productId = window.__productWizRioProduct.id;

  const reviewUrl = `https://widget-hub-api.alireviews.io/api/storefront/star-rating?myshopify_domain=angelicmotion.myshopify.com&product_ids=${productId}`;

  //get review Data
  fetch(reviewUrl, {
    headers: {
      accept: 'application/json, text/plain, */*'
    }
  })
    .then((response) => response.json())
    .then(({ data }) => {
      const reviewData = data[productId];

      const reviewCount = reviewData.review_number;

      if (reviewData && reviewCount > 0) {
        //show review
        document.body.classList.add('show-review');
      }
    });
};
