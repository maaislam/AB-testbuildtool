import { checkIcon, closeIcon } from '../assets/icons';
import productCard from './productCard';
import pagination from './pagination';

const modal = (id, imageSrc, productTitle, VARIATION, productsData) => {
  const itemLength = productsData.length;

  const html = `
    <div class="${id}__modal" data-name="${productTitle}">
      <div class="${id}__modal-overlay"></div>
        <div class="${id}__modal-container">
          <div class="${id}__modal-header">
              <div class="${id}__closeWrapper">
                ${closeIcon}
              </div>
              <div class="${id}__headerMessage">
                  <div class="${id}__headerMessage__icon">
                    ${checkIcon}
                  </div>
                  <div class="${id}__headerMessage__msg">Added to basket</div>
              </div>
              <div class="${id}__prodInfoWrapper">
                  <div class="${id}__prodImage">
                    <img src="${imageSrc}" alt="Product Image" class="${id}__prodImage__img" />
                  </div>
                  <div class="${id}__prodContent">
                    <div class="${id}__prodContent__title">${productTitle}</div>
                    <div class="${id}__prodContent__info">
                      <span>Total m² required: <span class="${id}__meter"></span></span>
                      <br>
                      <span>Number of packs: <span class="${id}__packSize"></span></span>
                    </div>
                    <div class="${id}__prodContent__price"></div>
                  </div>
              </div>
              <div class="${id}__prodBtnWrapper">
                  <a href="/checkout/cart/" class="${id}__prodBtnWrapper__cartBtn">View shopping basket</a>
                  <a href="/checkout/#shipping" class="${id}__prodBtnWrapper__checkoutBtn">Go to checkout</a>
              </div>
        </div>
        <div class="${id}__prodAccessoriesWrapper">
            <div class="${id}__prodAccessoriesTitle">Don't forget your accessories:</div>
            
            ${
              VARIATION === '1'
                ? `<a href="/checkout/cart/" data-name="${productTitle}" class="${id}__prodAccessoriesBtn">View recommended accessories</a>`
                : VARIATION === '2'
                ? `${productsData
                    .map((data, index) => productCard(id, data, index))
                    .join('')} ${pagination(id, itemLength)}`
                : ''
            }
        </div>
        <div class="${id}__prodBtnWrapperMobile">
          <a href="/checkout/cart/" class="${id}__prodBtnWrapper__cartBtn">View shopping basket</a>
          <a href="/checkout/#shipping" class="${id}__prodBtnWrapper__checkoutBtn">Go to checkout</a>
          </div>
      </div>
    </div>
    `;
  return html.trim();
};

export default modal;
