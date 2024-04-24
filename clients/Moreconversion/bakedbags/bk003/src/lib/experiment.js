/*eslint-disable no-param-reassign */
import { subscriptionElement } from './components/subscriptionElement';
import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import { optionsObj } from './data/info';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector(
    '#appstle_subscription_widget0 .payAsYouGoPlansDropdownWrapper .appstle_subscription_radio_wrapper'
  );

  const parentOptionElement = document.querySelector(
    '#appstle_subscription_widget0 .payAsYouGoPlansDropdownWrapper .appstle_subscribe_option'
  );

  pollerLite([() => targetPoint.querySelector('label.appstle_radio_label')], () => {
    targetPoint.querySelector('label.appstle_radio_label').click();
    const savingAmount = targetPoint.querySelector('.appstle-save-badge').innerText.trim();
    const monthlyAmount = targetPoint
      .querySelector('.appstle_subscription_amount')
      .innerText.trim();
    if (document.querySelector(`.${ID}__subscription`)) {
      document.querySelector(`.${ID}__subscription`).remove();
    }
    targetPoint &&
      targetPoint.insertAdjacentHTML(
        'beforebegin',
        subscriptionElement(ID, savingAmount, monthlyAmount)
      );

    //options change
    parentOptionElement.querySelectorAll('option').forEach((item, index) => {
      item.innerText = optionsObj[index];
    });
    const toggleSwitch = document.getElementById('togBtn');

    toggleSwitch.addEventListener('change', (e) => {
      if (e.target.checked) {
        document.querySelector(`.${ID}__monthlyAmount`).innerText = `${monthlyAmount} /month`;
        document.querySelector(`.${ID}__savingAmount`).classList.remove(`${ID}__hide`);
        document.querySelector(`.${ID}__savingAmount`).innerText = `(${savingAmount})`;
        document.querySelector(`.${ID}__subscription-info-subtext`).innerText =
          'Modify Skip or cancel anytime!';
        document
          .querySelector('.payAsYouGoPlansDropdownWrapper .appstle_subscribe_option')
          .classList.remove(`${ID}__hide`);
        document
          .querySelector('.appstle_subscription_radio_wrapper label.appstle_radio_label')
          .click();
      } else {
        const onetimePurchase = document.querySelector(
          '.appstle_one_time_details_wrapper .appstle_subscription_amount'
        );

        document.querySelector(
          `.${ID}__monthlyAmount`
        ).innerText = `${onetimePurchase.innerText} /month`;
        document.querySelector(`.${ID}__savingAmount`).classList.add(`${ID}__hide`);
        document.querySelector(`.${ID}__subscription-info-subtext`).innerText = 'One Time Purchase';
        document
          .querySelector('.payAsYouGoPlansDropdownWrapper .appstle_subscribe_option')
          .classList.add(`${ID}__hide`);
        document
          .querySelector('.appstle_one_time_details_wrapper label.appstle_radio_label')
          .click();
      }
    });
    if (VARIATION === '2') {
      //console.log('🚀 ~ pollerLite ~ VARIATION:', VARIATION);
      const toggleBtn = document.getElementById('togBtn');
      toggleBtn.parentElement.querySelector('.slider').classList.add('v2');
      toggleBtn.click();
    }
  });
};

export default () => {
  setup(); //use if needed
  //console.log(ID);
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('label') && target.closest('.productpage-right-size-tabs')) {
      setTimeout(init, 500);
    }
  });
  init();
};
