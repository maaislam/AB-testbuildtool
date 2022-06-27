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


  // const refNode = document.querySelectorAll('.product-description')[1];
  // var sliderHTML = `<div class='carousel'>
  //                   </div> 
  //                   ` ;
  // refNode.insertAdjacentHTML("afterend", sliderHTML);

  // // Defining async function
  // // const api_url = window.Shopify.routes.root + `recommendations/products.json?product_id=${id}&limit=15`;
  // async function getapi() {
  //   //  console.log("function called",selectedVariant);
  //   // Storing response
  //   const response = await getRecommendation({productId, selectedVariant:changedVariants});
  //   // console.log("response", response);
  //   // Storing data in form of JSON
  //   // var data = await response.json();
  //   // const prod = data.products;
  //   return response;
  // }
  // // Calling that async function
  // getapi();
  // outsidemodule.exports.doStuff = doStuff;
  // products.then(function (data) {
  //   console.log("filtering",data);
  
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
