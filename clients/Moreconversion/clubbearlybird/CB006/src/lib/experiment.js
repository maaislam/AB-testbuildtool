import setup from './services/setup';
import shared from './shared/shared';
import {
  calculateSubtotal,
  fetchCartItems,
  fetchProductDetails,
  formatPrice,
  observeDOM
} from './helpers/utils';

const { ID } = shared;

const startExperiment = () => {
  const cartItems = document.querySelectorAll('#cart-products-wrapper .cart-product');

  const newDom = document.querySelectorAll(`.${ID}__compare-at-price,.${ID}__total`);
  if (newDom.length > 0) {
    newDom.forEach((el) => el.remove());
  }

  //Example usage:
  cartItems.length > 0 &&
    fetchCartItems()
      .then((cartData) => {
        if (cartData) {
          fetchProductDetails(cartData).then((productDetails) => {
            console.log(productDetails, 'productDetails');
            productDetails.forEach(({ variant_id, compare_at_price, quantity }) => {
              const priceWrapper = document.querySelector(
                `li[data-item="${variant_id}"] .product-price`
              );
              if (
                priceWrapper &&
                !priceWrapper.querySelector(`.${ID}__compare-at-price`) &&
                compare_at_price
              ) {
                priceWrapper.insertAdjacentHTML(
                  'afterbegin',
                  `
                  <div class="${ID}__compare-at-price">${formatPrice(
                    compare_at_price,
                    quantity
                  )}</div>
                `
                );
              }
            });

            const hasComparePrice = productDetails.some((item) => item.compare_at_price);

            if (
              !document.querySelector(`.${ID}__total`) &&
              document.querySelector('.cart-total-bottom') &&
              hasComparePrice
            ) {
              console.log(calculateSubtotal(productDetails));
              document
                .querySelector('.cart-total-bottom')
                .insertAdjacentHTML(
                  'afterbegin',
                  `<span class="${ID}__total">${calculateSubtotal(productDetails)}</span>`
                );
            }
          });
        } else {
          console.log('No cart data found');
        }
      })
      .catch((error) => {
        console.log('Error fetching cart items:', error);
      });
};

const init = () => {
  startExperiment();
  observeDOM('.cart-total-bottom .price-total', (mutation) => {
    console.log(mutation, 'mutation');
    startExperiment();
  });
};

export default () => {
  setup(); //use if needed
  init();
};
