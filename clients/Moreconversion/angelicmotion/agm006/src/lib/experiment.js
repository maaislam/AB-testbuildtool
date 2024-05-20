import getTotal from './helpers/getTotal';
import { observeDOM } from './helpers/utils';
import setup from './services/setup';
import shared, { VARIATION } from './shared/shared';

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
  if (VARIATION === '1') {
    const upsellTitleElem = document.querySelector('.upcart-upsells-title ins');
    upsellTitleElem.textContent = 'Add & Get Free Shipping';

    updateCartText();
  } else if (VARIATION === '2' && !document.querySelector(`.${ID}__guaranteeText`)) {
    const attachPoint = document.querySelector('.upcart-cart-body');
    const thumbIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_5293)">
      <path d="M7.50825 17.5H14.9999C15.6666 17.5 16.2666 17.1 16.5249 16.4917L19.2416 10.15C19.9499 8.5 18.7416 6.66667 16.9499 6.66667H12.2416L13.0333 2.85C13.1166 2.43333 12.9916 2.00833 12.6916 1.70833C12.4499 1.46667 12.1333 1.35 11.8166 1.35C11.4999 1.35 11.1749 1.475 10.9333 1.71667L6.32492 6.33333C6.01659 6.64167 5.84159 7.06667 5.84159 7.50833V15.8333C5.84159 16.75 6.59159 17.5 7.50825 17.5ZM11.1166 3.89167L10.6083 6.325L10.1916 8.33333H12.2416H16.9499C17.3416 8.33333 17.5499 8.56667 17.6416 8.70833C17.7333 8.85 17.8666 9.13333 17.7083 9.5L14.9999 15.8333H7.50825V7.50833L11.1166 3.89167Z" fill="#E8EAED"/>
      <path d="M2.50033 17.5C3.41699 17.5 4.16699 16.75 4.16699 15.8333V9.16667C4.16699 8.25 3.41699 7.5 2.50033 7.5C1.58366 7.5 0.833659 8.25 0.833659 9.16667V15.8333C0.833659 16.75 1.58366 17.5 2.50033 17.5Z" fill="#E8EAED"/>
      </g>
      <defs>
      <clipPath id="clip0_1_5293">
      <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 -1 20 20)"/>
      </clipPath>
      </defs>
    </svg>
    `;
    const htmlStr = `<div class='${ID}__guaranteeText'>
    ${thumbIcon}
    <span>100% Satisfaction Guarantee </span>
    </div>`;
    attachPoint.insertAdjacentHTML('afterbegin', htmlStr);
  }
};

export default () => {
  setup();
  init();

  observeDOM('#CartPopup', () => {
    init();
  });
};
