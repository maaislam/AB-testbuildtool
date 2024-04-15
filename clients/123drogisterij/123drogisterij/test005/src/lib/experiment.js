/*eslint-disable function-paren-newline */
/*eslint-disable no-await-in-loop */
/*eslint-disable no-restricted-syntax */
import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID } = shared;

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

  //const sizes = [
  //'XX-Small',
  //'X-Small',
  //'Small',
  //'Small/Medium',
  //'Medium',
  //'Large',
  //'Extra Large',
  //'Large/X-large',
  //'L/XL',
  //'Large/Extra Large',
  //'X-Large',
  //'XX-Large',
  //'XXX-Large',
  //'4XL',
  //'5XL',
  //'XXL',
  //'S/M'
  //];

  const cartItems = document.querySelectorAll('.cart .product-item-name a');

  //cartItems.forEach((item) => {
  //const itemName = item.innerText;
  ////const seperator = itemName.includes('-') ? '- ' : ' ';
  ////const itemSize = itemName.slice(itemName.lastIndexOf(seperator) + 1);
  //const itemSizes = sizes.filter((size) => itemName.includes(size));
  //const itemSize =
  //itemSizes.length > 0 &&
  //itemSizes.reduce((prev, cur) => {
  //if (prev.length > cur.length) return prev;
  //return cur;
  //});
  //console.log('itemSize', itemSize);
  //if (itemSize) {
  ////console.log('found item', itemSize);
  //if (item.parentElement.querySelector(`.${ID}__size`)) return;
  //item.insertAdjacentHTML(
  //'afterend',
  //`<div class="${ID}__size">Gekozen Maat: <span>${itemSize}</span></div>`
  //);
  //}
  //});

  const cartHrefs = Array.from(cartItems).map((item) => item.href);
  //console.log('🚀 ~ file: experiment.js:70 ~ cartHrefs', cartHrefs);

  const parseHTML = async (urls) => {
    const promises = urls.map((url) =>
      fetch(url).catch((error) => {
        console.error(`Error fetching ${url}: ${error.message}`);
        return Promise.resolve(null);
      })
    );
    const responses = await Promise.all(promises);
    for (const [index, response] of responses.entries()) {
      if (response) {
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const itemSize = doc.querySelector('[data-th="Maat"]')?.innerText;
        if (itemSize) {
          const item = cartItems[index];
          console.log(itemSize);
          item.insertAdjacentHTML(
            'afterend',
            `<div class="${ID}__size">Gekozen Maat: <span>${itemSize}</span></div>`
          );
        }
      }
    }
  };
  parseHTML(cartHrefs);
};
