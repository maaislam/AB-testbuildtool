import { isCartPage } from '../helpers/pageTypes';

const checkoutBtn = (id) => {
  const htmlStr = `
    <a class="b-button ${isCartPage ? `${id}__w-100` : ''}"
    href="/de/checkout/?step=shipping"
    data-tau="${id}__minicart_start_checkout">
    Zur Kasse
    </a>
  `;
  return htmlStr;
};

export default checkoutBtn;
