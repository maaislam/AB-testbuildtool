import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import '../experiment.scss';
import { getProducts } from './components/products';
import { makeSlider } from './components/makeTheSlider';
const { ID, VARIATION } = shared;


const { id: productId, selectedVariant } = window.product;

export default async() => {
  const setUniqueClass = () => {
    document.querySelector('body').classList.add(`${ID}`);
  };

  console.log(ID);
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }
  setUniqueClass();
  // Write experiment code here

  
  //   for (let i = 0; i < desiredProducts.length; i++) {
  //     // console.log("daaa", desiredProducts[i]);
  //     var imgUrl = desiredProducts[i].featured_image.src;
  //     const caro = document.querySelector('.carousel');
  //     var columnImage = `<div class="slideContainer">
  //                     <img src=${imgUrl} alt="orange tree"/> 
  //                     <p>first pic</p>
  //                   </div>`;
  //     caro.insertAdjacentHTML("beforeend", columnImage);
  //   }

  const filteredProducts = await getProducts({ productId, selectedVariant });
  makeSlider(filteredProducts);
  document.querySelector('body').classList.add(`${ID}__maincontainer`);
};
