//import { observeDOM } from './helpers/utils';

import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

const updateCheckoutCtaText = () => {
  const subTotalElem = document.querySelector('.slidecart-subtotal');

  if (subTotalElem) {
    subTotalElem.closest('.footer-row').style.display = 'none';
  }

  const continueToCheckout = document.querySelector('#slidecart-checkout-form .button');
  if (continueToCheckout) {
    continueToCheckout.innerText = `Proceed to Checkout  |  ${subTotalElem.innerText}`;
  }
};

const addUpsellHeadline = () => {
  const upSellsElem = document.querySelector('.upsells');

  const upsellHeadline = `
    <div class="${ID}__upsell-headline">
      YOU MAY ALSO LIKE
    </div>
  `;
  if (upSellsElem && !document.querySelector(`.${ID}__upsell-headline`)) {
    upSellsElem.insertAdjacentHTML('afterbegin', upsellHeadline);
  }
};

//const init = () => {
////move rewards block

//addUpsellHeadline();
//};

const resetUI = () => {
  addUpsellHeadline();
  updateCheckoutCtaText();
  const announcements = document.querySelector('.announcements');
  const rewards = document.querySelector('.rewards');
  if (rewards && !document.body.classList.contains(`${ID}-reward-moved`)) {
    announcements.insertAdjacentElement('afterend', document.querySelector('.rewards'));
    document.body.classList.add(`${ID}-reward-moved`);
  }
  //update rewards message

  const rewardsConfig = {
    tier1: {
      amount: 7399,
      messageBelow: 'Spend {{amount}} more for a Free Gift',
      messageReached: "You've unlocked a Free Gift!"
    },
    tier2: {
      amount: 7499,
      messageBelow: 'Spend {{amount}} more for a Free Gift & Free Shipping',
      messageReached: "You've unlocked a Free Gift & Free Shipping!"
    }
  };
  const rewardsMsgElem = () =>
    document.querySelector('.rewards-pre-unlock-text') ||
    document.querySelector('.rewards-post-unlock-text');
  const currentTotalElem = document.querySelector('.slidecart-subtotal');
  const currentTotal = Math.round(parseFloat(currentTotalElem.innerText.replace('$', '')) * 100);
  console.log('🚀 ~ resetUI ~ currentTotal:', currentTotal);

  let rewardMessage = '';

  if (currentTotal < rewardsConfig.tier1.amount) {
    rewardMessage = rewardsConfig.tier1.messageBelow.replace(
      '{{amount}}',
      `$${(rewardsConfig.tier1.amount - currentTotal) / 100}`
    );
    rewardsMsgElem().innerText = rewardMessage;
  } else if (
    currentTotal < rewardsConfig.tier2.amount &&
    currentTotal >= rewardsConfig.tier1.amount
  ) {
    rewardMessage = rewardsConfig.tier2.messageBelow.replace(
      '{{amount}}',
      `$${(rewardsConfig.tier2.amount - currentTotal) / 100}`
    );

    rewardsMsgElem().innerText = rewardMessage;
  } else if (currentTotal >= rewardsConfig.tier2.amount) {
    rewardsMsgElem().innerText = rewardsConfig.tier2.messageReached;
  }
};
export default () => {
  setup(); //use if needed

  //document.body.addEventListener('click', (e) => {
  //const { target } = e;

  //if (target.closest('.site-header__cart-toggle')) {
  //resetUI();
  //}
  //});

  //updateCheckoutCtaText();
  //observeDOM('.cart-count', resetUI);
  setTimeout(resetUI, 1000);
  resetUI();
  window.SLIDECART_UPDATED = (cart) => {
    console.log('🚀 ~ cart:', cart);
    setTimeout(resetUI, 1000);
  };
  //init();
};
