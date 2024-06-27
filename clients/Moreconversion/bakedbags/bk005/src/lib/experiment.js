import { headsetIcon, smileIcon, truckIcon } from './assets/svg';
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const renderUsps = () => {
    const data = [
      {
        icon: truckIcon,
        title: 'Discreet Delivery'
      },
      {
        icon: headsetIcon,
        title: '24/7 Customer Service'
      },
      {
        icon: smileIcon,
        title: '100,000+ Happy Customers'
      }
    ];

    const htmlStr = `
      <div class="${ID}__uspWrapper">
        ${data
          ?.map(
            ({ icon, title }) => `
            <div class="${ID}__usp">
              <div class="${ID}__uspIcon">${icon}</div>
              <div class="${ID}__uspTitle">${title}</div>
            </div>
          `
          )
          .join('')}
      </div>
    `;

    return htmlStr;
  };

  const landingSection = `
    <div class="${ID}__landing-section">
      <div class="${ID}__static-img-container">
        
          <div class="content-desktop">
            <div class="copy-block">
              <h1 class="title-h1">BAKED BAGS</h1>
              <h4 class="title-h4">🍦Legal THC Products Shipped To Your Door🍦</h4>
            </div>
            <div class="cta-block">
              <div class="row1">
                <a href="/products/extra-strength-birthday-cake-edibles-600mg" class="cta1">Shop Coned</a>
                <a href="/products/dope-dough" class="cta2">Shop Dope Dough</a>
              </div>
              ${
                VARIATION === '1'
                  ? `<div class="row2">
                  <a href="/pages/all-products" class="cta3">Shop All »</a>
                  </div>`
                  : ''
              }
              <div class="row3">
                ${renderUsps()}
              </div>
            </div>
          </div>
         
          <div class="content-mobile">
            <div class="copy-block">
              <h1 class="title-h1">BAKED BAGS</h1>
              <h4 class="title-h4">🍦Legal THC Products Shipped To Your Door🍦</h4>
            </div>
            <div class="cta-block">
              <div class="row1">
                <a href="/products/extra-strength-birthday-cake-edibles-600mg" class="cta1">Shop Coned</a>
                <a href="/products/dope-dough" class="cta2">Shop Dope Dough</a>
              </div>
              ${
                VARIATION === '1'
                  ? `<div class="row2">
                  <a href="/pages/all-products" class="cta3">Shop All »</a>
                  </div>`
                  : ''
              }
              <div class="row3">
                ${renderUsps()}
              </div>
            </div>
          </div>
        
      </div>
    </div>
  `;

  const attachPoint = document.querySelector('.opening-section .opening');
  const staticImgContainer = document.createElement('div');
  staticImgContainer.classList.add(`${ID}__static-img-container`);

  if (document.querySelector(`.${ID}__static-img-container`)) {
    return;
  }
  attachPoint.insertAdjacentHTML('afterbegin', landingSection);
};
