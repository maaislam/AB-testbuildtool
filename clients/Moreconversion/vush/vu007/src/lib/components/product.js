import { formatPrice } from '../helpers/utils';

const product = (id, data) => {
  const htmlStr = `
      <div class="${id}__product">
        <a href="${data.url}" class="${id}__product-image">
          <img src="${data.images[0]}" alt="${data.title}" />
        </a>
        <a href="${data.url}" class="${id}__product-details">
          <h4>${data.title}</h4>
          <p>${data.type}</p>
          <p>${formatPrice(data.price)}</p>
        </a>
        <div class="${id}__product-atc">
            <button class="${id}__add-to-cart" data-id="${data.variants[0].id}">Add to cart</button>
        </div>
      </div>
    `;
  return htmlStr;
};

export default product;
