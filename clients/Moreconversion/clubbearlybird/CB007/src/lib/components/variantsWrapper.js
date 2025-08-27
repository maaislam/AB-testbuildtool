import { downArrow } from '../assets/icons';
import { flavourData, pricingData, uspsData } from '../data/data';

const variantsWrapper = (id) => {
  const activeFlavorItem = flavourData.find((item) => item.isActive);
  const html = `
    <div class="product-selection ${id}__product-selection">
        <div class="flavor flavor-desktop">
            <p class="flavor-label">Choose Flavor:</p>
            <div class="flavor-options">
                ${flavourData
                  .map(
                    (item) => `
                    <div class="flavor-option ${item.isActive ? 'flavor-active' : ''}">
                    <span>${item.icon}</span>
                    <span>${item.title}</span>
                    </div>
                `
                  )
                  .join('\n')}
            </div>
        </div>
        <div class="flavor flavor-mobile">
            <p class="flavor-label">Choose Flavor:</p>
            <div class="flavor-options">
                <div class="active-flavor">
                    <span class="icon">${activeFlavorItem.icon}</span>
                    <span>${activeFlavorItem.title}</span>
                    <span class="indicator-icon">${downArrow}</span>
                </div>
                <div class="flavor-options-hidden">
                  ${flavourData
                    .map(
                      (item) => `
                    <div class="flavor-option">
                    <span>${item.icon}</span>
                    <span>${item.title}</span>
                    </div>
                `
                    )
                    .join('\n')}
                </div>
                
            </div>
        </div>

        <div class="pricing">
            ${pricingData
              .map((item) => {
                return `
                    <div class="pack-option ${item.isActive ? 'pack-active' : ''}">
                        <span>${item.unit}</span>
                        <span>${item.price}</span>
                        ${item.savings ? `<span class="discount">${item.savings}</span>` : ''}
                    </div>
                `;
              })
              .join('\n')}
        </div>

        <div class="pricing-options">
            <div class="option">
                <div class="radio-group">
                    <input type="radio" id="auto-ship" name="pricing-option" checked>
                    <label for="auto-ship">
                        <span></span>
                        <span>AutoShip & Save</span>
                        <span class="price"><strike>$68.00</strike> $54.40</span>
                    </label>
                </div>
                <div class="delivery-options">
                  <div class="active-option">
                    <span>Deliver every 1 month</span>
                    <span class="icon">${downArrow}</span>
                  </div>
                  <div class="other-options">
                    <div class="option-item">
                        <span>Deliver every 1 month</span>
                    </div>
                    <div class="option-item">
                        <span>Deliver every 2 months</span>
                    </div>
                    <div class="option-item">
                        <span>Deliver every 3 months</span>
                    </div>
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
            <div class="option">
                <div class="radio-group">
                    <input type="radio" id="buy-once" name="pricing-option">
                    <label for="buy-once">
                        <span></span>
                        <span>Buy Once</span>
                        <span class="price">$68.00</span>
                    </label>
                </div>
            </div>
        </div>
    </div>

    `;
  return html.trim();
};

export default variantsWrapper;
