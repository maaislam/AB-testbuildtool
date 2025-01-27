import { crossIcon } from '../assets/icons';
import product from './product';

const modal = (id, size, addedProduct, relatedProducts) => {
  const html = `
          <div class="${id}__modal open">
              <div class="${id}__modal-overlay"></div>
              <div class="${id}__modal-container">
                  <div class="${id}__modal-container-content">
                      <div class="${id}__modalHeader">
                        <h2>ADDED TO BAG</h2>
                        <span class="${id}__modalClose">${crossIcon}</span>
                      </div>
                      <div class="${id}__modalBody">
                        <div class="${id}__imageWrapper">
                            <img src="${addedProduct.featured_image}" alt="${addedProduct.title}" />
                        </div>
                        <div class="${id}__productContent">
                            <p>${addedProduct.title}</p>
                            <div class="${id}__size">Size - ${size}</div>
                            <div class="${id}__buttons">
                                <button class="${id}__shoppingATC">KEEP SHOPPING</button>
                                <a class="${id}__viewCartATC" href="/cart">VIEW CART</a>
                            </div>
                        </div>
                        <div></div>
                      </div>
                      <div class="${id}__modalFooter">
                        <p>pairs great with</p>
                        <div class="${id}__relatedProducts">
                            ${relatedProducts.map((item) => product(id, item)).join('\n')}
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
  return html;
};

export default modal;
