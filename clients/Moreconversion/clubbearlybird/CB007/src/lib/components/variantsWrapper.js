import { downArrow, starRating } from '../assets/icons';
import { flavourData, pricingData, uspsData } from '../data/data';
import { formatPrice } from '../helpers/utils';
import flavourItem from './flavourItem';
import packItem from './packItem';
import extraUsp from './extraUsp';
import tabElement from './tabElement';

const variantsWrapper = (id, price_max, flavoursArray, packArray, selling_plan_groups) => {
  const activeFlavorItem = flavourData.find((item) => item.isActive);
  const firstSellingPlan = selling_plan_groups[0].selling_plans[0];
  const html = `
    <div class="product-selection ${id}__product-selection">
        <div class="${id}__prodInfo">
          <div class="${id}__prodRatings">
            <span>${starRating}</span>
            <span>4.8</span>
          </div>
          <div class="${id}__prodName">EarlyBird Morning Cocktail</div>
          <div class="${id}__prodDescription">"First... delicious! Second, I went from hitting the snooze every morning to waking up at 5 AM without any struggle... and using mornings as a tool to getting so much more done"  - Deanna S. USA</div>
        </div>
        <div class="${id}__mainPrice">$54.40</div>
        <div class="flavor flavor-desktop">
            <p class="flavor-label">Choose Flavor:</p>
            <div class="flavor-options">
                ${flavoursArray.map((item) => flavourItem(item)).join('\n')}
            </div>
        </div>
        <div class="flavor flavor-mobile">
            <p class="flavor-label">Choose Flavor:</p>
            <div class="flavor-options">
                <div class="active-flavor" data-key="${activeFlavorItem.title}">
                    <span class="icon">${activeFlavorItem.icon}</span>
                    <span>${activeFlavorItem.title}</span>
                    <span class="indicator-icon">${downArrow}</span>
                </div>
                <div class="flavor-options-hidden">
                  ${flavoursArray.map((item) => flavourItem(item)).join('\n')}
                </div>
                
            </div>
        </div>

        <div class="pricing">
            ${packArray.map((item) => packItem(item, price_max)).join('\n')}
        </div>

        <div class="pricing-options">
            <div class="option first-option">
                <div class="radio-group subscription-option">
                    <input type="radio" id="auto-ship" name="pricing-option" checked>
                    <label for="auto-ship">
                        <span></span>
                        <span>AutoShip & Save</span>
                        <span class="price"><strike>$68.00</strike> $54.40</span>
                    </label>
                </div>
                <div class="delivery-options">
                  <div class="active-option" data-id="${firstSellingPlan.id}">
                    <span>${firstSellingPlan.name}</span>
                    <span class="icon">${downArrow}</span>
                  </div>
                  <div class="other-options">
                    ${selling_plan_groups[0].selling_plans
                      .map(
                        (plan) => `
                      <div class="option-item" data-id="${plan.id}">
                          <span>${plan.name}</span>
                      </div>
                    `
                      )
                      .join('')}
                  </div>
                </div>
                <p class="option-badge">Best Value</p>
                <ul class="usp-lists">
                    ${uspsData
                      .map((item) => {
                        return `
                            <li>
                                <span>${item.icon}</span>
                                <span>${item.title}</span>
                            </li>
                        `;
                      })
                      .join('\n')}
                </ul> 
            </div>

            <!-- Buy Once Option -->
            <div class="option second-option">
                <div class="radio-group oneTime-option">
                    <input type="radio" id="buy-once" name="pricing-option">
                    <label for="buy-once">
                        <span></span>
                        <span>Buy Once</span>
                        <span class="price">${formatPrice(price_max)}/pack</span>
                    </label>
                </div>
            </div>
        </div>
        <div class="product-form-buttons-wrapper ${id}__buttonsWrapper">
          <button type="button" class="cart-icon btn btn-add-tocart ${id}__addtocart" id="AddToCart" style="display: inline-block;"><span class="btn-money ${id}__total-price"><span class="line-through" style="display: none">$68.00</span>$54.00</span>
              <span class="divisor">-</span><span class="btn-label">Add To Cart</span>
              <span class="btn-svg"> <!-- start icon-cart.liquid (SNIPPET) -->
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fill="#444" d="M18.936 5.564c-.144-.175-.35-.207-.55-.207h-.003L6.774 4.286c-.272 0-.417.089-.491.18-.079.096-.16.263-.094.585l2.016 5.705c.163.407.642.673 1.068.673h8.401c.433 0 .854-.285.941-.725l.484-4.571c.045-.221-.015-.388-.163-.567z"></path>
                        <path fill="#444" d="M17.107 12.5H7.659L4.98 4.117l-.362-1.059c-.138-.401-.292-.559-.695-.559H.924c-.411 0-.748.303-.748.714s.337.714.748.714h2.413l3.002 9.48c.126.38.295.52.942.52h9.825c.411 0 .748-.303.748-.714s-.336-.714-.748-.714zm-6.683 3.73a1.498 1.498 0 1 1-2.997 0 1.498 1.498 0 0 1 2.997 0zm6.429 0a1.498 1.498 0 1 1-2.997 0 1.498 1.498 0 0 1 2.997 0z"></path>
                    </svg>
              </span>
              <span class="btn-items">1 ITEM</span><span class="btn-progress"></span></button>
              <div id="button-out-of-stock" class="btn btn-choose-variant ${id}__out-of-stock" style="display: none;">
      <span class="btn-label">(Out of Stock)</span>
    </div>
        </div>
        <div class="${id}__disclaimer">No Risk, No Hassle <b>60-Day</b> 100% Money Back Guarantee</div>
        ${tabElement(id)}
        ${extraUsp(id)}
    </div>

    `;
  return html.trim();
};

export default variantsWrapper;
