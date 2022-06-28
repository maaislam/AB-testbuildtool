//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;
const stars = [1,2,3,4,5].map(star=>{
              return `<img src="https://sandbox.echologyx.com/wp-content/uploads/2022/06/star-1.png"/>`
            }).join('\n')
console.log(stars)

const setUniqueClass = () => {
  document.querySelector('body').classList.add(`${ID}`);
  document.querySelector('.static-home-slide .container-slide')
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

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.3335 10L4.25016 7.08333L10.0835 12.9167L21.7502 1.25L24.6668 4.16667L10.0835 18.75L1.3335 10Z" fill="#ACD399" stroke="#ACD399" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const heroContent = ` <div class="${ID}-hero-section">
                        <div class="hero-content">
                          <div class="content-text">
                            <h1>Regain your <span>health and energy</span> with the power of nature</h1>
                            <ul class="content-check-lists">
                              <li class="check-list">
                                <div class="content-text-tick">${svg}</div>
                                <p>Carefully curated all-natural formulations</p>
                              </li>
                              <li  class="check-list">
                                <div class="content-text-tick">${svg}</div>
                                <p>Over 1700+ life changing reviews</p>
                              </li>
                              <li  class="check-list">
                                <div class="content-text-tick">${svg}</div>
                                <p>Over 20 years of expertise in full body wellness</p>
                              </li>
                            </ul>
                          </div>
                          <div class="content-review">
                            <a class="regain-cta" href="https://us.univera.com/us/shop.html">REGAIN YOUR LIFE NOW</a>
                            <div class="review-content">
                              <div class="review-avatar">
                                <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/06/image-3.png"/>
                              </div>
                              <div class="review-assets">
                                <div class="review-stars">${stars}</div>
                                <p class="review-text">I have been taking these products for almost 20 years now. They have made a huge difference in my energy and immune levels!</p>
                                <p class="reviewer">Angela Smith-Chitty McGee</p>
                                </div>
                            </div>
                          </div>
                        </div>
                        <div class="image-container">
                          <div>
                            <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/06/My-project-1_adobe_express-1-e1656415616988.png"/>
                          </div>
                        </div>
                        <div class="mobile-content-review">
                            <a class="regain-cta" href="https://us.univera.com/us/shop.html">REGAIN YOUR LIFE NOW</a>
                            <div class="review-content">
                              <div class="review-avatar">
                                <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/06/image-3.png"/>
                              </div>
                              <div class="review-assets">
                                <div class="review-stars">${stars}</div>
                                <p class="review-text">I have been taking these products for almost 20 years now. They have made a huge difference in my energy and immune levels!</p>
                                <p class="reviewer">Angela Smith-Chitty McGee</p>
                                </div>
                            </div>
                          </div>
                      </div>`
const setHeroSection = ()=>{
  const heroStart = document.querySelector(`.static-home-slide .container-slide`)
  heroStart.insertAdjacentHTML("beforebegin", heroContent);
  // heroStart.innerHTML = heroContent

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

  waitForEl('.static-home-slide .container-slide', ()=>{
    setHeroSection();
  })
 

  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...
};


