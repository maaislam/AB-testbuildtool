import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const chatIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
<circle cx="28.5" cy="28.5" r="28.5" fill="#53684A"/>
<path d="M28.3095 35.2471C34.8186 35.2471 40.0952 30.4083 40.0952 24.9092C40.0952 19.4102 34.8186 15.3333 28.3095 15.3333C21.8004 15.3333 16.5238 19.7912 16.5238 25.2902C16.5238 27.4373 17.3282 29.4257 18.6963 31.052L17.2604 37.7999L23.0296 34.1945C24.6179 34.868 26.4113 35.2471 28.3095 35.2471Z" stroke="white" stroke-width="2.18182" stroke-linecap="round" stroke-linejoin="round"/>
<g clip-path="url(#clip0_1_48)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.6667 43.1552C30.6041 43.1552 26.5 39.6879 26.5 35.4109C26.5 31.1339 30.6041 27.6667 35.6667 27.6667C40.7293 27.6667 44.8333 31.1339 44.8333 35.4109C44.8333 37.0809 44.2077 38.6274 43.1436 39.8922L44.2604 45.1406L39.7733 42.3365C38.5379 42.8603 37.1431 43.1552 35.6667 43.1552Z" fill="white" stroke="#53684A" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.668 36.8333C35.0951 36.8333 34.5222 36.2604 34.5222 35.6875C34.5222 35.1146 35.0951 34.5417 35.668 34.5417C36.2409 34.5417 36.8125 35.1146 36.8125 35.6875C36.8125 36.2604 36.2409 36.8333 35.668 36.8333ZM40.2513 36.8333C39.6784 36.8333 39.1055 36.2604 39.1055 35.6875C39.1055 35.1146 39.6784 34.5417 40.2513 34.5417C40.8243 34.5417 41.3958 35.1146 41.3958 35.6875C41.3958 36.2604 40.8243 36.8333 40.2513 36.8333ZM31.084 36.8333C30.5108 36.8333 29.9375 36.2604 29.9375 35.6875C29.9375 35.1146 30.5108 34.5417 31.084 34.5417C31.6573 34.5417 32.2292 35.1146 32.2292 35.6875C32.2292 36.2604 31.6573 36.8333 31.084 36.8333Z" fill="#53684A"/>
</g>
<defs>
<clipPath id="clip0_1_48">
<rect width="23" height="23" fill="white" transform="matrix(-1 0 0 1 46 23)"/>
</clipPath>
</defs>
</svg>
`;

const init = () => {
  const helpTextElem = document.querySelector('[id*="help-drawer"] label.transition-colors');
  const helpTextWrapper = helpTextElem.parentElement;

  helpTextWrapper.classList.add(`${ID}__helpTextWrapper`);
  helpTextElem.classList.add(`${ID}__helpText`);

  if (VARIATION === '1') {
    helpTextElem.textContent = 'Help?';
  } else if (VARIATION === '2') {
    helpTextElem.innerHTML = `<span>${chatIcon}</span>`;
  }
};

export default () => {
  setup();

  const trackGAEvent = (c, a, l) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'gaCustomEvent',
        eventCategory: c,
        eventAction: a,
        eventLabel: l
      });
      console.log('event tracked', c, a, l);
    }
  };

  document.body.addEventListener('click', (e) => {
    if (e.target.closest('[id*="help-drawer"]')) {
      trackGAEvent('DAR 077', 'Help Click', 'help-drawer clicked');
    }
  });

  init();
};
