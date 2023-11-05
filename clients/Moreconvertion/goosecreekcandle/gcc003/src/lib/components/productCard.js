import { pollerLite } from '../helpers/utils';

const productCard = (id, data, index) => {
  const content = data.innerHTML;
  const htmlStr = `
    <li class='${id}__productCard swiper-slide'>
      ${content}
    </li>`;

  pollerLite([() => document.querySelectorAll('.add-to-cart-ajax')], () => {
    const atcButton = document.querySelectorAll('.add-to-cart-ajax')[index];
    atcButton.textContent = 'Add to Cart';
  });

  return htmlStr;
};

export default productCard;
