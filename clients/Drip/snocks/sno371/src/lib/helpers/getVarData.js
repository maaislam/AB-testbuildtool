/*eslint-disable max-len */
import fetchData from './fetchData';
import { deviceType } from './pageTypes';

const getVarData = (id) => {
    if (deviceType() === 'desktop') {
        document.querySelectorAll('.ProductItem').forEach((item, key) => {
            item.addEventListener('mouseover', async () => {
                item.removeAttribute('data-obj');
          if (item.getAttribute('data-obj') === null && item.querySelector('a').getAttribute('href').indexOf('bundle') === -1) {
                    const prodHandle = item.querySelector('a').getAttribute('href').split('?')[0];
                // console.log(`${prodHandle}.js`);
                //const response = await fetch(`${prodHandle}.js`);
                //const output = await response.json();
                //console.log(output);
                //const prodArr = [];
                //output.variants.forEach((variant) => {
                //if (variant.option1 === item.querySelector('.ProductItem__TitleDescription').textContent) {
                //if (!prodArr.includes(variant)) {
                //prodArr.push({
                //id: variant.id,
                //title: variant.title,
                //option1: variant.option1,
                //option2: variant.option2,
                //option3: variant.option3,
                //sku: variant.sku,
                //available: variant.available,
                //name: variant.name,
                //public_title: variant.public_title
                //});
                //}
                //}
                //});
                //item.setAttribute('data-obj', JSON.stringify(prodArr));
                fetchData(prodHandle, item);
          }
            });
            });
    } else if (deviceType() === 'mobile') {
        document.querySelectorAll('.ProductItem').forEach((item, key) => {
            item.querySelector(`.${id}__cart-icon-mbl`)?.addEventListener('click', async () => {
                item.removeAttribute('data-obj');
          if (item.getAttribute('data-obj') === null) {
                    const prodHandle = item.querySelector('a').getAttribute('href').split('?')[0];
                // console.log(`${prodHandle}.js`);
                //const response = await fetch(`${prodHandle}.js`);
                //const output = await response.json();
                //const prodArr = [];
                //output.variants.forEach((variant) => {
                //if (variant.option1 === item.querySelector('.ProductItem__TitleDescription').textContent) {
                //if (!prodArr.includes(variant)) {
                //prodArr.push({
                //id: variant.id,
                //title: variant.title,
                //option1: variant.option1,
                //option2: variant.option2,
                //option3: variant.option3,
                //sku: variant.sku,
                //available: variant.available,
                //name: variant.name,
                //public_title: variant.public_title
                //});
                //}
                //}
                //});
                fetchData(prodHandle, item);
                //item.setAttribute('data-obj', JSON.stringify(prodArr));
          }
            });
            });
    }
};

export default getVarData;
