import getTotal from './helpers/getTotal';
import { observeDOM } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const formatPrice = (number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number / 100);

const updateCartText = () => {
  const lockIcon = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_6260)">
    <path d="M13.5 6.25H12.75V4.75C12.75 2.68 11.07 1 9 1C6.93 1 5.25 2.68 5.25 4.75V6.25H4.5C3.675 6.25 3 6.925 3 7.75V15.25C3 16.075 3.675 16.75 4.5 16.75H13.5C14.325 16.75 15 16.075 15 15.25V7.75C15 6.925 14.325 6.25 13.5 6.25ZM9 13C8.175 13 7.5 12.325 7.5 11.5C7.5 10.675 8.175 10 9 10C9.825 10 10.5 10.675 10.5 11.5C10.5 12.325 9.825 13 9 13ZM6.75 6.25V4.75C6.75 3.505 7.755 2.5 9 2.5C10.245 2.5 11.25 3.505 11.25 4.75V6.25H6.75Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_1_6260">
    <rect width="18" height="18" fill="white" transform="translate(0 0.25)"/>
    </clipPath>
    </defs>
  </svg>
  `;
  getTotal().then((total) => {
    document.querySelector('.upcart-checkout-button').innerHTML = `<div class='${ID}__atcText'>
      ${lockIcon}
      <span>Secure Checkout • ${formatPrice(total)}</span>
    </div>`;
  });
};

const init = () => {
  const upsellTitleElem = document.querySelector('.upcart-upsells-title ins');
  upsellTitleElem.textContent = 'Add & Get Free Shipping';

  updateCartText();
};

export default () => {
  setup();
  init();

  observeDOM('.upcart-header-text', () => {
    updateCartText();
  });
};
