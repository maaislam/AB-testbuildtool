//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const setUniqueClass = () => {
  document.querySelector('body').classList.add(`${ID}`);
};

const waitForEl = function(selector, callback) {
  let count = 0;

  if (document.querySelector(selector) != null ) {

      callback();

  } else if(count < 100) {

      setTimeout(function() {

          waitForEl(selector, callback, ++count);

      }, 100);

  }

};

const reArrangePrice = ()=>{
  

  waitForEl('#alireview-review-widget-badge', ()=>{
    const reviewContainer = document.querySelector('.mk-01 .alr-display-review-badge')
  reviewContainer.classList.add('mk-01-review-container')

  const priceContainer = document.querySelector('.mk-01 .product-shop .prices')
  const price = priceContainer.querySelector('.price').innerText
  document.querySelector('alr-display-review-badge mk-01-review-container')
  const priceDiv = document.createElement('div')
  priceDiv.innerText = price.trim()
  priceDiv.classList.add('mk-01-price')
  reviewContainer.append(priceDiv)
  })
}

export default () => {
  //setup(); //use if needed

  console.log(ID); 
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }
  setUniqueClass();
  document.querySelector(".product-photos").classList.add("echo_mk_2");
  reArrangePrice()

  waitForEl('.slick-track .item[aria-describedby]', function() {
    window.jQuery('.slick-track .item').hide()
    window.jQuery('.slick-track .item[aria-describedby]').show()
  })
  
  
  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...
};
