import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import getProducts from './helpers/getProducts';

const { ID, VARIATION } = shared;

const setUniqueClass = () => {
  document.querySelector('body').classList.add(`${ID}`);
};

const slider = async (variants) => {
  const productWrapper = document.querySelector(`.${ID} .Product__Wrapper`);
  console.log('slider', productWrapper);

  const varientsDiv = variants
    .map(({ title, featured_image, handle, price }) => {
      return `<div class="product">
              <img class="product-img" src="${featured_image}"/>
             <div class="product-info">
             <p class="product-info__title">${title}</p>
             <p class="product-info__subtitle">${handle}</p>
             <p class="product-info__price">&#8364;${price}</p>
             </div>
            </div>`;
    })
    .join('');

  const slider = `<div class="${ID}-products"> 
                    <h2 class="${ID}-products__title" >Passt dazu</h2> 
                    <p class="${ID}-products__suntitle">Mach dein outfit komplete</p> 
                    <div class="${ID}-products--container">${varientsDiv}</div> 
                  </div>`;

  productWrapper.insertAdjacentHTML('afterend', slider);

  let elem = document.querySelector(`.${ID}-products--container`);
  // console.log(elem)
  let flkty = new window.Flickity(elem, {
    cellAlign: 'center',
    contain: true,
    initialIndex: 6,
    prevNextButtons: true,
    pageDots: false,
    draggable: false,
    percentPosition: false,
  });
};

export default async () => {
  setup();

  console.log(ID);
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }

  setUniqueClass();
  const { id: productId } = window.product;
  const { products } = await getProducts(
    `/recommendations/products.json?product_id=${productId}&limit=15`
  );
  console.log('recommendation', products);

  slider(products);

  const nextBtn = document.querySelector('.flickity-prev-next-button.next');
  // console.log('nextBtn', nextBtn)
  nextBtn.style.right = 0;
  nextBtn.style.top = '30%';
  const prevBtn = document.querySelector('.flickity-prev-next-button.previous');
  prevBtn.style.left = 0;
  prevBtn.style.top = '30%';
  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...
};
