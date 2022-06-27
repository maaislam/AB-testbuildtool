import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();

  console.log(ID);
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }

  const refNode = document.querySelector('.slidecarthq .header');
  const subtotal = document.querySelector('.slidecart-subtotal').innerHTML.split('$')[1];
  console.log(subtotal);
  var freeFromAmount = 100.00 - subtotal;
  console.log("away from", freeFromAmount);
  var freeShipping = `<div class="main-cont">
                        <p class="away_txt">you're $${freeFromAmount} away from free shipping </p>
                        <p class="success_txt">you qualify for free shipping!</p>
                        <div class="progress_bar">
                          <div class="progress"></div>
                        </div>
                      <div>`;
 
  refNode.insertAdjacentHTML("afterend",freeShipping);

  let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords); // console.log(the changes)
    checkForTotalPriceUpdate();
});

// observe everything except attributes
observer.observe(slidecart-subtotal, {
    childList: true, // observe direct children
    subtree: true, // and lower descendants too
    characterDataOldValue: true // pass old data to callback
});
  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...
};
