import setup from './services/setup';
import shared from './shared/shared';
import { onUrlChange } from './helpers/utils';

const { ID } = shared;

const joinWaitList = () => {
  const htmlStr = `<button type="button" class="${ID}__button">
    <span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.47835 6.10352e-05C3.65373 0.0970628 3.8546 0.16663 4.00059 0.296945C4.49197 0.734923 4.45718 1.50359 3.91044 1.89209C3.14815 2.43392 2.45836 3.04827 1.82148 3.73218C1.26837 4.32595 0.291495 4.06875 0.0558495 3.29224C0.0396825 3.23933 0.0186165 3.18789 0 3.13547C0 3.05366 0 2.97233 0 2.89052C0.079855 2.53337 0.297864 2.26295 0.550656 2.01505C0.812757 1.75785 1.06212 1.48644 1.34137 1.24933C1.89839 0.776075 2.43435 0.268041 3.13541 6.10352e-05C3.24956 6.10352e-05 3.3642 6.10352e-05 3.47835 6.10352e-05Z" fill="#333333"/>
      <path d="M19.4005 3.13547C19.3128 3.31625 19.2545 3.52054 19.1315 3.6729C18.7318 4.16869 18.0145 4.20053 17.5819 3.72777C16.9451 3.03161 16.2396 2.42217 15.4709 1.87543C14.8223 1.41394 14.9653 0.405705 15.7012 0.0931435C15.7747 0.0617894 15.8486 0.0309252 15.9221 6.10352e-05C16.0363 6.10352e-05 16.1509 6.10352e-05 16.2651 6.10352e-05C16.5267 0.145564 16.8162 0.256773 17.0435 0.443428C17.654 0.944603 18.2414 1.47468 18.8307 2.00133C19.1007 2.24237 19.3143 2.5275 19.4 2.89052V3.13547H19.4005Z" fill="#333333"/>
      <path d="M9.692 1.18852C14.8498 1.17382 19.087 5.39634 19.1066 10.5712C19.1262 15.751 14.9242 19.9726 9.7214 20C4.55091 20.0269 0.308306 15.802 0.294589 10.6124C0.280872 5.43847 4.50388 1.20371 9.692 1.18852ZM9.68857 17.9179C13.7039 17.9346 16.9877 14.6629 17.0107 10.6227C17.0343 6.60053 13.7666 3.30394 9.73658 3.28337C5.69778 3.26279 2.40903 6.52705 2.38993 10.5752C2.37082 14.6081 5.64438 17.9017 9.68857 17.9184V17.9179Z" fill="#333333"/>
      <path d="M10.7326 8.18394C10.7326 8.73117 10.7419 9.27839 10.7282 9.82513C10.7228 10.0387 10.784 10.1847 10.9496 10.3253C11.4601 10.7579 11.9628 11.2008 12.4551 11.6544C12.9945 12.1512 12.924 12.9517 12.3214 13.3299C11.9495 13.5636 11.465 13.5558 11.1324 13.2682C10.4039 12.6382 9.68762 11.9935 8.97138 11.3497C8.74749 11.1484 8.64608 10.8819 8.64559 10.583C8.64314 9.20295 8.63677 7.82337 8.64755 6.4433C8.65294 5.80691 9.111 5.36844 9.71506 5.37922C10.3 5.38999 10.7282 5.84561 10.7316 6.46975C10.735 7.04147 10.7321 7.61271 10.7326 8.18443V8.18394Z" fill="#333333"/>
      </svg>
    </span>
    <span class="${ID}__text">Join the Waitlist</span>
  </button>`;
  return htmlStr;
};

const setWaitList = () => {
  const atcBtnElem = document.querySelector('.add-to-cart');
  const isSoldOut = atcBtnElem.textContent.toLowerCase().includes('sold out');

  if (isSoldOut) {
    atcBtnElem.classList.add(`${ID}__hide`);

    if (!document.querySelector(`.${ID}__button`)) {
      atcBtnElem.insertAdjacentHTML('afterend', joinWaitList());
    }
  } else {
    atcBtnElem.classList.remove(`${ID}__hide`);

    if (document.querySelector(`.${ID}__button`)) {
      document.querySelector(`.${ID}__button`).remove();
    }
  }
};

const init = () => {
  setWaitList();

  onUrlChange(() => {
    setWaitList();
  });
};

export default () => {
  setup();
  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__button`)) {
      const notfiyBtn = document.querySelector('form.product-single__form a.btn.klaviyo-bis-trigger');
      notfiyBtn && notfiyBtn.click();
    }
  });
};
