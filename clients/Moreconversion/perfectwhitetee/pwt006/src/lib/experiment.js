import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const typeObj = {
  'Tank Top': 'tank',
  'Shirts & Tops': 'tee',
  'Hoodies & Sweatshirts': 'sweatshirts',
  'Apparel & Accessories > Clothing > Shirts & Tops': 'tee'
};

const init = () => {
  const { pathname } = window.location;

  if (pathname.includes('/collections/')) {
    const collectionTitles = document.querySelectorAll('.grid-product__title');
    pollerLite([() => collectionTitles.length > 0], () => {
      const fetchPromises = [];

      collectionTitles.forEach((collectionTitle) => {
        const linkElem = collectionTitle.closest('.grid-product__link');
        const link = linkElem.getAttribute('href');

        //const url = link.replace(/\?.*$/, '.js');
        const urlObj = new URL(link, window.location.origin);
        urlObj.search = ''; //Remove query parameters
        const url = `${urlObj.href}.js`;

        fetchPromises.push(
          fetch(url)
            .then((response) => response.json())
            .then((fileData) => ({ fileData, collectionTitle }))
        );
      });

      Promise.all(fetchPromises)
        .then((fileDataArray) => {
          fileDataArray.forEach(({ fileData, collectionTitle }) => {
            console.log('fileData: ', fileData);
            const { type } = fileData;
            const macthedPrdType = typeObj[type];
            const [titleFirstPart, ...rest] = collectionTitle.textContent.trim().split(' ');
            const productColor = rest.join(' ');
            const prdType = type.toLowerCase();

            console.log('productType: ', prdType);
            console.log('productColor: ', productColor);

            //Update the product title to include the product type
            if (macthedPrdType || type) {
              collectionTitle.textContent = `${titleFirstPart} ${macthedPrdType || prdType} ${productColor}`;
            }
          });
        })
        .catch((err) => {
          console.log('Something went wrong with one or more fetch requests.', err);
        });
    });
  }

  if (VARIATION === '2') {
    //cart drawer
    const cartTitles = document.querySelectorAll('#slidecarthq .item .title');
    pollerLite([() => cartTitles.length > 0], () => {
      const fetchPromises = [];

      cartTitles.forEach((cartTitle) => {
        const linkElem = cartTitle.querySelector('a');
        const link = linkElem.getAttribute('href');

        //const url = link.replace(/\?.*$/, '.js');
        const urlObj = new URL(link, window.location.origin);
        urlObj.search = ''; //Remove query parameters
        const url = `${urlObj.href}.js`;

        fetchPromises.push(
          fetch(url)
            .then((response) => response.json())
            .then((fileData) => ({ fileData, cartTitle }))
        );
      });

      Promise.all(fetchPromises)
        .then((fileDataArray) => {
          fileDataArray.forEach(({ fileData, cartTitle }) => {
            const { type } = fileData;
            const macthedPrdType = typeObj[type];
            const [titleFirstPart, ...rest] = cartTitle.textContent.trim().split(' ');
            const productColor = rest.join(' ');
            const prdType = type.toLowerCase();

            //Update the product title to include the product type
            if (macthedPrdType || type) {
              cartTitle.textContent = `${titleFirstPart} ${macthedPrdType || prdType} ${productColor}`;
            }
          });
        })
        .catch((err) => {
          console.log('Something went wrong with one or more fetch requests.', err);
        });
    });
  }
};

export default () => {
  setup(); //use if needed
  init();
};
