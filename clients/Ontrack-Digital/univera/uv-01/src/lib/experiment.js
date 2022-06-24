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

const heroContent = ` <div class="${ID}-hero-section">
                        <div class="hero-content">
                          <div class="content-text">
                            <h1>Regain your <span>health and energy</span> with the power of nature</h1>
                            <ul class="content-check-lists">
                              <li class="check-list">
                                <div class="content-text-tick"><img src="https://sandbox.echologyx.com/wp-content/uploads/2022/06/Vector.svg"/></div>
                                <p>Carefully curated all-natural formulations</p>
                              </li>
                              <li  class="check-list">
                                <div class="content-text-tick"><img src="https://sandbox.echologyx.com/wp-content/uploads/2022/06/Vector.svg"/></div>
                                <p>Over 200 patents in 27 areas of product research</p>
                              </li>
                              <li  class="check-list">
                                <div class="content-text-tick"><img src="https://sandbox.echologyx.com/wp-content/uploads/2022/06/Vector.svg"/></div>
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
                            <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/06/My-project-e1656072612972.png"/>
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
