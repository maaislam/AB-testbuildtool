import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const subscriptionWidget = document.getElementById('appstle_subscription_widget0');
  const oneTimePriceElem = document.querySelector(
    '.appstle_one_time_price_wrapper .appstle_subscription_amount'
  );
  const subPriceElem = document.querySelector(
    '.appstle_subscription_amount_wrapper .appstle_subscription_amount'
  );
  const savingElem = document.querySelector('.appstle-save-badge');

  const oneTimePrice = oneTimePriceElem.textContent;
  const subPrice = subPriceElem.textContent;
  const savingMoney = savingElem.textContent;

  console.log('oneTimePrice:', oneTimePrice);
  console.log('subPrice:', subPrice);

  const htmlStr = `
  <div class="${ID}__subscriptionwrap">
    <label class="switch">
      <input type="checkbox" id="toggleSwitch" checked>
      <span class="slider"></span>
    </label>

    <div id="content">
      <div id="content1" style="display:none;">
        <div class="${ID}__subscription-info">
          <div class="${ID}__subscription-info-title">
              <span class="${ID}__monthlyAmount">${subPrice} /month </span>
              <span class="${ID}__savingAmount">(${savingMoney})</span>
          </div>
            <div class="${ID}__subscription-info-subtext">Modify Skip or cancel anytime!</div>
          </div>
        </div>
      <div id="content2">
        <div class="${ID}__subscription-info">
          <div class="${ID}__subscription-info-title">
              <span class="${ID}__monthlyAmount">${oneTimePrice} /month </span>
              
          </div>
          <div class="${ID}__subscription-info-subtext">One Time Purchase</div>
        </div>
    </div>
    
  </div>`;

  subscriptionWidget.insertAdjacentHTML('beforeend', htmlStr);
  const content1 = document.getElementById('content1');
  const content2 = document.getElementById('content2');

  const oneTimePurchaseControl = document.querySelector('#appstle_selling_plan_label_10');
  const subPurchaseControl = document.querySelector('#appstle_selling_plan_label_20');
  document.getElementById('toggleSwitch').addEventListener('change', (e) => {
    if (e.target.checked) {
      content1.style.display = 'none';
      content2.style.display = 'block';
      oneTimePurchaseControl.checked = true;
    } else {
      content1.style.display = 'block';
      content2.style.display = 'none';
      subPurchaseControl.checked = true;
    }
  });
};

export default () => {
  setup();
  init();
};
