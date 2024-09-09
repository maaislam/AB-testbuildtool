/*eslint-disable max-len */
/*eslint-disable no-param-reassign */
import setup from './services/setup';
import shared from './shared/shared';
import { observeDOM, pollerLite } from './helpers/utils';
import cartPage from './pages/cartPage';

const { VARIATION } = shared;

const typeObj = {
  'Tank Top': 'tank',
  'Shirts & Tops': 'tee',
  'Hoodies & Sweatshirts': 'sweatshirts',
  'Apparel & Accessories > Clothing > Shirts & Tops': 'tee'
};

const colorInBracket = [
  '/collections/new',
  '/collections/ziggy',
  '/collections/layla',
  '/collections/hendrix',
  '/collections/johnny',
  '/collections/blondie-1',
  '/collections/springsteen',
  '/collections/tyler'
];

const init = () => {
  const { pathname } = window.location;

  if (VARIATION === '1' && pathname.includes('/collections/')) {
    const collectionTitles = document.querySelectorAll('.grid-product__title');
    pollerLite([() => collectionTitles.length > 0], () => {
      const fetchPromises = [];

      collectionTitles.forEach((collectionTitle) => {
        let variantId;
        const { productId } = collectionTitle.closest('.grid-product').dataset;
        const linkElem = collectionTitle.closest('.grid-product__link');
        const link = linkElem.getAttribute('href');

        //const url = link.replace(/\?.*$/, '.js');
        const urlObj = new URL(link, window.location.origin);

        if (urlObj.search.length > 0) {
          variantId = urlObj.searchParams.get('variant');
        } else {
          variantId = productId;
        }

        urlObj.search = ''; //Remove query parameters
        const url = `${urlObj.href}.js`;

        fetchPromises.push(
          fetch(url)
            .then((response) => response.json())
            .then((fileData) => ({
              fileData,
              collectionTitle,
              variantId
            }))
        );
      });

      Promise.all(fetchPromises)
        .then((fileDataArray) => {
          fileDataArray.forEach(({ fileData, collectionTitle, variantId }) => {
            const { type, variants } = fileData;
            const macthedPrdType = typeObj[type];
            const [titleFirstPart, ...rest] = collectionTitle.textContent.trim().split(' ');
            const productColor = rest.join(' ');
            const prdType = type.toLowerCase();

            const isNewCategory =
              (pathname.startsWith('/collections/new') &&
                !pathname.includes('/collections/new-lounge')) ||
              colorInBracket.includes(pathname);

            //Update the product title to include the product type
            if (macthedPrdType || type) {
              if (variants) {
                const prdId = Number(variantId);
                const currentVariant = variants.find((variant) => variant.id === prdId);

                if (
                  collectionTitle.textContent.includes(macthedPrdType) ||
                  collectionTitle.textContent.includes(prdType)
                )
                  return;

                if (currentVariant && currentVariant.option2) {
                  const { option2 } = currentVariant;
                  const color = option2.toLowerCase();
                  const productTitleText = isNewCategory
                    ? `${titleFirstPart} ${macthedPrdType || prdType} (${color})`
                    : `${titleFirstPart} ${macthedPrdType || prdType} ${color}`;
                  collectionTitle.textContent = productTitleText;
                } else {
                  const productTitleText = `${titleFirstPart} ${
                    macthedPrdType || prdType
                  } ${productColor}`;
                  collectionTitle.textContent = productTitleText;
                }
              }
            }
          });
        })
        .catch((err) => {
          console.log('Something went wrong with one or more fetch requests.', err);
        });
    });
  }

  if (VARIATION === '2') {
    cartPage(typeObj);
  }
};

export default () => {
  setup(); //use if needed
  init();

  const configure = {
    childList: true,
    subtree: false,
    attributes: false,
    characterData: false,
    characterDataOldValue: false
  };

  if (VARIATION === '1') {
    pollerLite(['#CollectionAjaxContent'], () => {
      observeDOM(
        '#CollectionAjaxContent',
        () => {
          const productsWrapper = document.querySelector('#CollectionAjaxContent > .grid');
          const productsItems = productsWrapper.querySelectorAll('.grid__item');
          if (productsItems.length && window.location.pathname.includes('/collections/')) {
            init();
          }
        },
        configure
      );
    });
  }
  if (VARIATION === '2') {
    pollerLite(
      ['.slidecarthq'],
      () => {
        observeDOM('.slidecarthq', () => {
          init();
        });
      },
      configure
    );
  }
};
