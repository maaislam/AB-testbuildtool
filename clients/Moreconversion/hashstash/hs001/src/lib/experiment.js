import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const progressHeader = (ID) => {
    const html = `
    <div class="${ID}__progressHeader">
    <div class="group-item">420 Days Guarantee</div>
    <div class="group-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
        <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
      </svg>
    </div>
    <div class="group-item">30 Days Money Back</div>
    <div class="group-item">
      <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
        <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
      </svg>
    </div>
    <div class="group-item">Free Shipping</div>
  </div>
  
    `;

    return html.trim();
  };

  const progressBar = (ID) => {
    const html = `
    <div class="${ID}__progress-wrapper">
      <div class="progress-bar-width" data-progress-bar-percent="100">
        <span>$60 away from FREE Shipping</span>
      </div>
      <div class="progress-bar-anim"></div>
    </div>
    `;

    return html.trim();
  };

  //progree header add
  if (!document.querySelector(`body .cart-drawer .${ID}__progressHeader`)) {
    document
      .querySelector('body .cart-drawer .free-shipping-bar')
      .insertAdjacentHTML('beforebegin', progressHeader(ID));
  }

  //progress bar add
  if (!document.querySelector(`body .cart-drawer .${ID}__progress-wrapper`)) {
    document
      .querySelector('body .cart-drawer .free-shipping-bar')
      .insertAdjacentHTML('beforebegin', progressBar(ID));
  }
};
