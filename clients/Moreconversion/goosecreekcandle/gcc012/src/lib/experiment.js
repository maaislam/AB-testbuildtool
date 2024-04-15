import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID } = shared;

const afterPayIcon =
  'https://cdn.shopify.com/s/files/1/0016/9092/7179/files/AfterPay_New_2021.png?v=1635537148';
const infoIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5625 8.25C9.5625 8.10082 9.50324 7.95774 9.39775 7.85225C9.29226 7.74676 9.14918 7.6875 9 7.6875C8.85082 7.6875 8.70774 7.74676 8.60225 7.85225C8.49676 7.95774 8.4375 8.10082 8.4375 8.25V12.75C8.4375 12.8992 8.49676 13.0423 8.60225 13.1477C8.70774 13.2532 8.85082 13.3125 9 13.3125C9.14918 13.3125 9.29226 13.2532 9.39775 13.1477C9.50324 13.0423 9.5625 12.8992 9.5625 12.75V8.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 0.9375C4.54725 0.9375 0.9375 4.54725 0.9375 9C0.9375 13.4528 4.54725 17.0625 9 17.0625C13.4528 17.0625 17.0625 13.4528 17.0625 9C17.0625 4.54725 13.4528 0.9375 9 0.9375ZM2.0625 9C2.0625 7.16006 2.79341 5.39548 4.09445 4.09445C5.39548 2.79341 7.16006 2.0625 9 2.0625C10.8399 2.0625 12.6045 2.79341 13.9056 4.09445C15.2066 5.39548 15.9375 7.16006 15.9375 9C15.9375 10.8399 15.2066 12.6045 13.9056 13.9056C12.6045 15.2066 10.8399 15.9375 9 15.9375C7.16006 15.9375 5.39548 15.2066 4.09445 13.9056C2.79341 12.6045 2.0625 10.8399 2.0625 9Z" fill="black"/>
<path d="M9.75 6C9.75 6.19891 9.67098 6.38968 9.53033 6.53033C9.38968 6.67098 9.19891 6.75 9 6.75C8.80109 6.75 8.61032 6.67098 8.46967 6.53033C8.32902 6.38968 8.25 6.19891 8.25 6C8.25 5.80109 8.32902 5.61032 8.46967 5.46967C8.61032 5.32902 8.80109 5.25 9 5.25C9.19891 5.25 9.38968 5.32902 9.53033 5.46967C9.67098 5.61032 9.75 5.80109 9.75 6Z" fill="black"/>
</svg>
`;

const installmentText = 'Pay in full or 4 interest - free installment of $13.99 With';

const gcc012Template = () => `<div class="${ID}__container">
  <span>${installmentText}</span>
  <img src="${afterPayIcon}" alt="Afterpay Icon" style="width: 64px;"/>
  <span class="${ID}__tooltip">${infoIcon}</span>
</div>`;

const applyVariation = () => {
  !document.querySelector(`.${ID}__container`) &&
    document.querySelector('#purchase').insertAdjacentHTML('afterend', gcc012Template());

  document.querySelector(`.${ID}__tooltip`).addEventListener('click', () => {
    document.querySelector('.announcement-bar a').click();
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  pollerLite(['#purchase'], applyVariation);
};
