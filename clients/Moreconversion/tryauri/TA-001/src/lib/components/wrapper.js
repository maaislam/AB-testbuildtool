import { Bundle, existingBundle } from './bundle';

const wrapper = (id, data) => {
  const html = `
    <div class="${id}__wrapper">
        <h1 class="${id}__wrapper-header">FREQUENTLY BOUGHT TOGETHER</h1>
        <div class="${id}__wrapper-contents">
    
            <div class="${id}__wrapper-products">
              ${data
                .map((item, index) => {
                  if (index === 0) {
                    return existingBundle(id, item);
                  }
                  return Bundle(id, item);
                })
                .join('\n')}
            </div>
            <div class="${id}__wrapper-total">
                 <p>Total price: <span class="${id}__compare-price-total original-price">100.00</span>           
                  <span class="${id}__price-total price">0.00</span>
                </p>
                <button class="${id}__button button">Add selected to cart</button>
            </div>
        
        </div>
    </div>
  `;
  return html.trim();
};
export default wrapper;
