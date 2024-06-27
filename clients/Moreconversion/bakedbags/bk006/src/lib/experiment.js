import setup from './services/setup';

export default () => {
  setup(); //use if needed
  //console.log(ID);
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
  const shippingProtectionTitle = document.querySelector('.shipping-protection-title');
  const shippingProtectionDescription = document.querySelector('.shipping-protection-description');
  shippingProtectionTitle.innerHTML = 'Priority Processing';
  shippingProtectionDescription.innerHTML =
    'Skip the Line! Add priority processing and we ship your order faster.';
};
