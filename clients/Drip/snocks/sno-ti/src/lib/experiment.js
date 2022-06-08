import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import getProducts  from './helpers/getProducts';

const { ID, VARIATION } = shared;

const setUniqueClass = ()=>{
  document.querySelector('body').classList.add(`${ID}`)
}

const slider = async (variants)=>{
  const productWrapper = document.querySelector(`.${ID} .Product__Wrapper`)
  console.log('slider', productWrapper)

  const varientsDiv = variants.map(({title, src, option1})=>{
    return `<div class="product">
              <img class="product-img" src="${src}"/>
              <p class="product-title">${title}</p>
              <p class="product-title">${option1}</p>
            </div>`
  }).join('')

  const slider = `<div class="${ID}-products"> 
                    <h2>Passt dazu</h2> 
                    <p>Mach dein outfit komplete</p> 
                    <div class="${ID}-products--container">${varientsDiv}</div> 
                  </div>`

  productWrapper.insertAdjacentHTML('afterend', slider)
}

export default async () => {
  setup();

  console.log(ID);
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }

  setUniqueClass()
  const {handle: productName} = window.product
  const {variants, images} = await getProducts(`products/${productName}.json`)

  const products = variants.map((variant)=>{
    const imgIndex = images.findIndex(({id})=> id === variant.image_id)

    return {...variant, ...images[imgIndex]}

  })
  console.log('prod', products)

  slider(products.slice(0,4))
  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...
};
