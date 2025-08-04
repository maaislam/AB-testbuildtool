import { discountIcon, icons, moneyBackIcon, starsStr, tickIcon } from '../assets/icons';
import { bulletPoints } from '../data/data';

const content = (id, data) => {
  const html = `
        <div class="${id}__card">
            <h1 class="font-serif">Proton VPN Plus</h1>
            <div class="${id}__price-wrapper">
                <div class="price">${data[0].price}<span>/month</span></div>
                ${
                  data[0].tag
                    ? `
                    <div class="discount">
                        <span>${discountIcon}</span>
                        <span><strong>${data[0].tag}% discount</strong></span>
                    </div>
                `
                    : ''
                }
            </div>
            <div class="rating ${id}__hide">
               <div class="rating-image">
                 ${starsStr}
               </div>
               <div class="rating-number">435K</div>
            </div>
            <div class="rating">
               <div class="rating-image apple">
                 <img src="https://cdn-3.convertexperiments.com/uf/10021806/10025618/frame-2_6890db288f485.png" alt="rating image" />
               </div>
               <div class="rating-image google">
                 <img src="https://cdn-3.convertexperiments.com/uf/10021806/10025618/frame-6_6890db81ef32e.png" alt="rating image" />
               </div>
            </div>
            ${
              data[0].tag
                ? `
                    <div class="discount ${id}__hide">
                        <span>${discountIcon}</span>
                        <span>Your <strong>${data[0].tag}% discount</strong> to <strong>VPN Plus</strong> has been applied</span>
                    </div>    
                `
                : ''
            }
            

            <ul class="features">
                ${bulletPoints[data[0].title]
                  .map((item) => {
                    return `<li><span>${tickIcon}</span><span>${item}</span></li>`;
                  })
                  .join('\n')}
            </ul>
            <div class="dropdown-wrapper">
                <div class="dropdown" tabindex="0">
                    <div class="dropdown-selected">
                    <span>${data[0].title} Proton VPN</span>
                    <span></span>
                    </div>
                    <div class="dropdown-options">
                        ${data
                          .map((item) => {
                            return `  
                            <div class="dropdown-item" data-item="${item.title}">${item.title} Proton VPN</div>`;
                          })
                          .join('\n')}
                    </div>   
                </div>
                <div class="guarantee">
                    <span>${moneyBackIcon}</span>
                    <span>30-day money-back guarantee.</span>
                </div>
            </div>

            <a href="${
              data[0].link
            }" class="get-the-deal-button" rel="noopener noreferrer">GET THE DEAL</a>

            <div class="available">
                <span>Available on:</span>
                <span>${icons}</span>
            </div>

            <div class="guarantee ${id}__hide">
               <span>${moneyBackIcon}</span>
               <span>30-day money-back guarantee.</span>
            </div>
        </div>
    `;
  return html.trim();
};

export default content;
