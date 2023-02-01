import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
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

  const sizes = [
    'XX-Small',
    'X-Small',
    'Small',
    'Small / Medium',
    'Medium',
    'Large',
    'Extra Large',
    'Large / X-large',
    'X-Large',
    'XX-Large',
    'XXX-Large',
    '4XL',
    '5XL',
    'XXL'
  ];

  const cartItems = document.querySelectorAll('.product-item-name a');

  cartItems.forEach((item) => {
    const itemName = item.innerText;
    const seperator = itemName.includes('-') ? '- ' : ' ';
    const itemSize = itemName.slice(itemName.lastIndexOf(seperator) + 1);
    console.log('itemSize', itemSize);
    if (sizes.includes(itemSize.trim())) {
      //console.log('found item', itemSize);
      if (item.parentElement.querySelector(`.${ID}__size`)) return;
      item.insertAdjacentHTML(
        'afterend',
        `<div class="${ID}__size">Gekozen Maat: <span>${itemSize}</span></div>`
      );
    }
  });
};
