import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  //Initialize your experiment here
  const packageBox = document.querySelector('.join_package_box');
  const subscribePackage = packageBox.querySelector('.package1');
  const oneTime = packageBox.querySelector('.package2');

  if (VARIATION === '1') {
    const atcButtonForSubscription = subscribePackage.querySelector('.packge_button_outer > a');
    atcButtonForSubscription.href =
      'https://primalqueen.com/cart/clear?return_to=/cart/add?items[][id]=48567263887637%26items[][quantity]=1%26return_to=/checkout';

    const atcButtonForOneTime = oneTime.querySelector('.packge_button_outer > a');
    atcButtonForOneTime.href =
      'https://primalqueen.com/cart/clear?return_to=/cart/add?items[][id]=48567265558805%26items[][quantity]=1%26return_to=/checkout';

    //ONE TIME
    setTimeout(() => {
      const subPriceElment = subscribePackage.querySelector('.price_text2');
      const subComparePrice = subPriceElment.querySelector('span');
      const subSellPrice = subPriceElment.childNodes[3];
      subComparePrice.textContent = '$112';
      subSellPrice.nodeValue = '$58';
      const priceElment = oneTime.querySelector('.price_text2');
      const comparePrice = priceElment.querySelector('span');
      const sellPrice = priceElment.childNodes[3];
      comparePrice.textContent = '$132';
      sellPrice.nodeValue = '$78';
    }, 1000);
  } else if (VARIATION === '2') {
    const atcButtonForSubscription = subscribePackage.querySelector('.packge_button_outer > a');
    atcButtonForSubscription.href =
      'https://primalqueen.com/cart/clear?return_to=/cart/add?items[][id]=48567288267029%26items[][quantity]=1%26return_to=/checkout';

    const atcButtonForOneTime = oneTime.querySelector('.packge_button_outer > a');
    atcButtonForOneTime.href =
      'https://primalqueen.com/cart/clear?return_to=/cart/add?items[][id]=48567275487509%26items[][quantity]=1%26return_to=/checkout';

    //ONE TIME
    setTimeout(() => {
      const subPriceElment = subscribePackage.querySelector('.price_text2');
      const subComparePrice = subPriceElment.querySelector('span');
      const subSellPrice = subPriceElment.childNodes[3];
      subComparePrice.textContent = '$93';
      subSellPrice.nodeValue = '$39';
      const priceElment = oneTime.querySelector('.price_text2');
      const comparePrice = priceElment.querySelector('span');
      const sellPrice = priceElment.childNodes[3];
      comparePrice.textContent = '$113';
      sellPrice.nodeValue = '$59';
    }, 1000);
  }
};

export default () => {
  setup(); //use if needed

  if (VARIATION === '1') {
    window.baseComparePriceA = 112;
    window.baseNormalPriceA = 58;
    window.baseComparePriceB = 132;
    window.baseNormalPriceB = 78;
  } else if (VARIATION === '2') {
    window.baseComparePriceA = 93;
    window.baseNormalPriceA = 39;
    window.baseComparePriceB = 113;
    window.baseNormalPriceB = 59;
  }

  init();
};
