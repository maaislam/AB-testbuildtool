import setup from './services/setup';
import shared from './shared/shared';
import { addItemToCart, pollerLite } from './helpers/utils';
import productCarousel from './components/productCarousel';
import swiper from './helpers/swiper';
import initSwiper from './helpers/initSwiper';
import modal from './components/modal';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('product-content');

  const shopifyDomain = 'duvindesign.com'; //Replace with your store's domain
  const productHandle = window.location.pathname.split('/products/')[1]; //Extracted from the URL

  //Fetch product details to get the product ID
  fetch(`https://${shopifyDomain}/products/${productHandle}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((productData) => {
      const productId = productData.product?.id;
      if (productId) {
        //Fetch product recommendations using the product ID
        fetch(`https://${shopifyDomain}/recommendations/products.json?product_id=${productId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.products.length === 0) {
              return;
            }

            setup();
            swiper();

            const productsArray = data.products.slice(0, 3);
            window[`${ID}__products`] = productsArray;
            if (!document.querySelector(`.${ID}__productCarouselWrapper`)) {
              targetPoint.insertAdjacentHTML('beforeend', productCarousel(ID, productsArray));
            }
            pollerLite([() => typeof window.Swiper === 'function'], () => {
              initSwiper(ID, `.${ID}__swiper`);
            });
          })
          .catch((error) => {
            console.log('Error fetching product recommendations:', error);
          });
      } else {
        console.log('Product ID not found.');
      }
    })
    .catch((error) => {
      console.log('Error fetching product details:', error);
    });
};
export default () => {
  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('button.atc-btn')) {
      const clickedItem = target.closest('button.atc-btn');
      const buttonWrapper = clickedItem.closest('.button-wrapper');
      const optionWrapper = buttonWrapper.querySelector('.optionsWrapper');
      const sliderWrapper = clickedItem.closest(`.${ID}__swiper`);

      sliderWrapper.classList.add('custom-overflow');

      if (optionWrapper.classList.contains('active')) {
        optionWrapper.classList.remove('active');
        sliderWrapper.classList.remove('custom-overflow');
        return;
      }
      const allOptionsWrapper = document.querySelectorAll('.optionsWrapper');
      allOptionsWrapper.forEach((wrapper) => {
        wrapper.classList.remove('active');
      });

      optionWrapper.classList.add('active');
    } else if (target.closest('.optionsTitle span:last-of-type')) {
      const clickedItem = target.closest('.optionsTitle span:last-of-type');
      const buttonWrapper = clickedItem.closest('.button-wrapper');
      const optionWrapper = buttonWrapper.querySelector('.optionsWrapper');
      const sliderWrapper = clickedItem.closest(`.${ID}__swiper`);
      optionWrapper.classList.remove('active');
      sliderWrapper.classList.remove('custom-overflow');
    } else if (target.closest(`.${ID}__list`)) {
      const clickedItem = target.closest(`.${ID}__list`);
      const productId = clickedItem.getAttribute('id');
      const buttonWrapper = clickedItem.closest('.button-wrapper');
      const optionWrapper = buttonWrapper.querySelector('.optionsWrapper');
      const size = clickedItem.textContent.trim();
      const productWrapper = clickedItem.closest('.swiper-slide');
      const { id } = productWrapper.dataset;

      if (optionWrapper.classList.contains('active')) {
        optionWrapper.classList.remove('active');
      }

      document.querySelector(`.${ID}__swiper`).classList.remove('custom-overflow');
      document
        .querySelectorAll(`.${ID}__productCarouselContainer .active`)
        .forEach((item) => item.classList.remove('active'));

      const modalOpen = (res) => {
        pollerLite(
          [
            '#rebuy-cart.is-visible',
            '.rebuy-cart__flyout-close',
            () => typeof window.Rebuy.SmartCart.hide === 'function'
          ],
          () => {
            window.Rebuy.SmartCart.hide();
          }
        );
        const totalProducts = window.Rebuy.Cart.cart.item_count;
        console.log(totalProducts, 'totalProducts');
        const productCounterElement = document.querySelector('#counter');

        if (productCounterElement) {
          productCounterElement.setAttribute('data-count', totalProducts > 0 ? totalProducts : 0);
        }

        const activeProduct = window[`${ID}__products`].filter(
          (product) => product.id === parseInt(id)
        );

        const otherProducts = window[`${ID}__products`].filter(
          (product) => product.id !== parseInt(id)
        );

        const modalElem = document.querySelector(`.${ID}__modal`);
        if (modalElem) modalElem.remove();
        if (!document.querySelector(`.${ID}__modal`)) {
          document.body.insertAdjacentHTML(
            'beforeend',
            modal(ID, size, activeProduct[0], otherProducts)
          );
        }

        document.body.classList.remove('cart-off');
      };
      addItemToCart(productId, modalOpen, 1);
    } else if (target.closest(`.${ID}__shoppingATC`) || target.closest(`.${ID}__modalClose`)) {
      const clickedItem =
        target.closest(`.${ID}__shoppingATC`) || target.closest(`.${ID}__modalClose`);
      const modalElem = clickedItem.closest(`.${ID}__modal`);
      modalElem.classList.remove('open');
    }
  });

  init();
};
