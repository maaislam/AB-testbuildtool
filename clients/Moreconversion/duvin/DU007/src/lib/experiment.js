import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import productCarousel from './components/productCarousel';
import swiper from './helpers/swiper';
import initSwiper from './helpers/initSwiper';

const { ID, VARIATION } = shared;
const init = () => {
  const targetPoint = document.querySelector('product-content');
  const { productId, section } = document.querySelector('.product-page').dataset;
  const templateId = section.split('_')[0];
  const recommendationsLink = `/recommendations/products?section_id=${templateId}__product-recommendations&product_id=${productId}&limit=3`;

  const relatedProductsWrapper = document.querySelector('product-recommendations');
  console.log(relatedProductsWrapper.dataset.url, 'relatedProductsWrapper');

  //fetch(recommendationsLink, {
  //headers: {
  //accept: '*/*',
  //'accept-language': 'en-US,en;q=0.9'
  //},
  //body: null,
  //method: 'GET'
  //}).then((response) => {
  //const html = response.text();
  //const parser = new DOMParser();
  //const doc = parser.parseFromString(html, 'text/html');
  //console.log(doc, 'doc');
  //});

  //const allProducts = relatedProductsWrapper.querySelectorAll('.cards > x-cell');
  //const productsArray = Array.from(allProducts).map((product) => {
  //const productIdElement = product.querySelector('input[name="product-id"]');
  //const productId = productIdElement.value;
  //product.classList.add('swiper-slide');
  //product.setAttribute('id', productId);

  //return product.cloneNode(true);
  //});

  //swiper();

  //console.log(productsArray, 'productsArray');
  //if (!document.querySelector(`.${ID}__productCarouselWrapper`)) {
  //targetPoint.insertAdjacentHTML('beforeend', productCarousel(ID, productsArray));
  //initSwiper(`.${ID}__swiper`);
  //}
};
export default () => {
  setup(); //use if needed
  console.log(ID, 'ID');
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();
};
