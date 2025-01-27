import { crossIcon } from '../assets/icons';
import { formatPrice } from '../helpers/utils';

const product = (id, item) => {
  //eslint-disable-next-line array-callback-return
  const availableItems = item.variants.filter((variant) => {
    if (variant.available) {
      return variant;
    }
  });

  const html = `
         <div class="swiper-slide" data-id="${item.id}">
            <div class="image-wrapper">
                <a href="${item.url}">
                    <img src="${item.featured_image}" alt="${item.title}">
                </a>
            </div>
            <a href="${item.url}" class="product-title">${item.title}</a>
            <p class="product-price">${formatPrice(item.price)}</p>
            <div class="button-wrapper">
                <button class="atc-btn">ADD TO CART</button>
                <div class="optionsWrapper">
                    <div class="optionsTitle">
                        <span>SELECT SIZE</span>
                        <span>${crossIcon}</span>
                    </div>
                    <div class="optionsList">
                        ${availableItems
                          .map((list) => {
                            return `<span id="${list.id}" class="${id}__list">${list.title}</span>`;
                          })
                          .join('\n')}
                    </div>
                </div>
            </div>
        </div>
    `;

  return html.trim();
};

export default product;
