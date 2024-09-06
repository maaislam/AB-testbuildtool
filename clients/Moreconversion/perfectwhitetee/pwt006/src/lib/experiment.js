import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const typeObj = {
  'Tank Top': 'tank',
  'Shirts & Tops': 'tee',
  'Hoodies & Sweatshirts': 'sweatshirts'
};

const init = () => {
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
          const { type } = fileData;
          const productType = typeObj[type];
          const [titleFirstPart, ...rest] = collectionTitle.textContent.trim().split(' ');
          const productColor = rest.join(' ');

          console.log('productColor: ', productColor);

          //Update the product title to include the product type
          if (productType || type) {
            collectionTitle.textContent = `${titleFirstPart} ${productType || type} ${productColor}`;
          }
        });
      })
      .catch((err) => {
        console.log('Something went wrong with one or more fetch requests.', err);
      });
  });
};

export default () => {
  setup(); //use if needed
  init();
};
