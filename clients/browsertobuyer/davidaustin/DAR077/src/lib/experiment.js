import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const chatIcon = `<svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_0_5)">
  <circle cx="48.5" cy="48.5" r="28.5" fill="#546848"/>
  <path d="M46.3095 55.2471C52.8186 55.2471 58.0952 50.4083 58.0952 44.9092C58.0952 39.4102 52.8186 35.3333 46.3095 35.3333C39.8004 35.3333 34.5238 39.7912 34.5238 45.2902C34.5238 47.4373 35.3282 49.4257 36.6963 51.052L35.2604 57.7999L41.0296 54.1945C42.6179 54.868 44.4113 55.2471 46.3095 55.2471Z" stroke="white" stroke-width="2.18182" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M54.6667 62.1552C49.6041 62.1552 45.5 58.6879 45.5 54.4109C45.5 50.1339 49.6041 46.6667 54.6667 46.6667C59.7293 46.6667 63.8333 50.1339 63.8333 54.4109C63.8333 56.0809 63.2077 57.6274 62.1436 58.8922L63.2604 64.1406L58.7733 61.3365C57.5379 61.8603 56.1431 62.1552 54.6667 62.1552Z" fill="white" stroke="#546848" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M54.668 55.8333C54.0951 55.8333 53.5222 55.2604 53.5222 54.6875C53.5222 54.1146 54.0951 53.5417 54.668 53.5417C55.2409 53.5417 55.8125 54.1146 55.8125 54.6875C55.8125 55.2604 55.2409 55.8333 54.668 55.8333ZM59.2513 55.8333C58.6784 55.8333 58.1055 55.2604 58.1055 54.6875C58.1055 54.1146 58.6784 53.5417 59.2513 53.5417C59.8243 53.5417 60.3958 54.1146 60.3958 54.6875C60.3958 55.2604 59.8243 55.8333 59.2513 55.8333ZM50.084 55.8333C49.5108 55.8333 48.9375 55.2604 48.9375 54.6875C48.9375 54.1146 49.5108 53.5417 50.084 53.5417C50.6573 53.5417 51.2292 54.1146 51.2292 54.6875C51.2292 55.2604 50.6573 55.8333 50.084 55.8333Z" fill="#546848"/>
  </g>
  <defs>
  <filter id="filter0_d_0_5" x="0" y="0" width="97" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset/>
  <feGaussianBlur stdDeviation="10"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_5"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_5" result="shape"/>
  </filter>
  </defs>
</svg>
`;

const init = () => {
  const helpTextElem = document.querySelector('[id*="help-drawer"] label.transition-colors');
  const helpTextWrapper = helpTextElem.parentElement;

  helpTextWrapper.classList.add(`${ID}__helpTextWrapper`);
  helpTextElem.classList.add(`${ID}__helpText`);

  if (VARIATION === '1') {
    helpTextElem.textContent = 'Help';
  } else if (VARIATION === '2') {
    helpTextElem.innerHTML = `<span>${chatIcon}</span>`;
  }
};

export default () => {
  setup();
  init();
};
