import { subscriptionElement } from './components/subscriptionElement';
import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector(
    '#appstle_subscription_widget0 .payAsYouGoPlansDropdownWrapper .appstle_subscription_radio_wrapper'
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

    const toggleSwitch = document.getElementById('togBtn');

    toggleSwitch.addEventListener('change', (e) => {
      if (e.target.checked) {
        console.log('ON');
        document
          .querySelector('.appstle_subscription_radio_wrapper label.appstle_radio_label')
          .click();
      } else {
        document
          .querySelector('.appstle_one_time_details_wrapper label.appstle_radio_label')
          .click();
      }
    });
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('label') && target.closest('.productpage-right-size-tabs')) {
      setTimeout(init, 500);
    }
  });
  init();
};
