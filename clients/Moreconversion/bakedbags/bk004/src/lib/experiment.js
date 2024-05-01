import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

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

  const htmlStr = `
  <div class="${ID}__wrapper">
    <span class="${ID}__headerTitle">SUBSCRIBE:</span>
    <div class="${ID}__subscriptionwrap">
      <div class="${ID}__switch">
        <label class="switch">
          <input type="checkbox" id="toggleSwitch" checked>
          <div class="slider round v2"></div>
        </label>
      </div>

      <div id="content">
        <div id="content1" >
          <div class="${ID}__subscriptionwrap-info">
            <div class="${ID}__subscriptionwrap-info-title">
                <span class="${ID}__monthlyAmount">${subPrice} /month </span>
                <span class="${ID}__savingAmount">(${savingMoney})</span>
            </div>
              <div class="${ID}__subscriptionwrap-info-subtext">Modify Skip or cancel anytime!</div>
              <select class="${ID}__select">
                  <option data-index='0' value="956792995">Delivered Every week</option>
                  <option data-index='1' value="956891299">Delivered Every 2 weeks</option>
                  <option data-index='2' value="956924067">Delivered Every 30 days</option>
              </select>
            </div>
          </div>
        <div id="content2" style="display:none;">
          <div class="${ID}__subscriptionwrap-info">
            <div class="${ID}__subscriptionwrap-info-title">
                <span class="${ID}__monthlyAmount">${oneTimePrice} /month </span>
            </div>
            <div class="${ID}__subscriptionwrap-info-subtext">One Time Purchase</div>
          </div>
      </div>
      
    </div>
  </div>
  `;

  subscriptionWidget.insertAdjacentHTML('beforeend', htmlStr);
  const content1 = document.getElementById('content1');
  const content2 = document.getElementById('content2');

  const oneTimePurchaseControl = document.querySelector('#appstle_selling_plan_label_10');
  const subPurchaseControl = document.querySelector('#appstle_selling_plan_label_20');
  document.getElementById('toggleSwitch').addEventListener('change', (e) => {
    if (e.target.checked && VARIATION === '2') {
      content1.style.display = 'block';
      content2.style.display = 'none';
      subPurchaseControl.click();
      //subPurchaseControl.checked = true;
    } else if (!e.target.checked && VARIATION === '2') {
      content1.style.display = 'none';
      content2.style.display = 'block';
      oneTimePurchaseControl.checked = true;
    } else if (e.target.checked && VARIATION === '1') {
      content1.style.display = 'block';
      content2.style.display = 'none';
      subPurchaseControl.click();
      //subPurchaseControl.checked = true;
    } else if (!e.target.checked && VARIATION === '1') {
      content1.style.display = 'none';
      content2.style.display = 'block';
      oneTimePurchaseControl.checked = true;
    }
  });

  if (VARIATION === '1') {
    subPurchaseControl.click();
  }

  setup();
};

export default () => {
  if (document.querySelector(`.${ID}-${VARIATION}`)) return;

  init();

  document.querySelector(`.${ID}__select`).addEventListener('change', (e) => {
    const selectedValue = e.target.querySelector('option:checked').dataset.index;
    const selectElemControl = document.querySelector('.appstle_select');
    const optionElemControl = document.querySelectorAll('.appstle_select option');
    optionElemControl[selectedValue].selected = true;
    selectElemControl.dispatchEvent(new Event('change'));
  });
};
