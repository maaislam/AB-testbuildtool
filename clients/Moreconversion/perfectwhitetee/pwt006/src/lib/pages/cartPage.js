/*eslint-disable max-len */
/*eslint-disable no-param-reassign */
import { pollerLite } from '../helpers/utils';

const cartPage = (typeObj) => {
  const cartTitles = document.querySelectorAll('#slidecarthq .item .title a');
  const upsellTitles = document.querySelectorAll('.upsell-text');
  pollerLite([() => cartTitles.length > 0, '.upsell.multi'], () => {
    const fetchCartItems = [];
    const fetchUpsells = [];

    cartTitles.forEach((cartTitle) => {
      let newVariantId;

      const { variantId } = cartTitle.closest('.item').dataset;
      const link = cartTitle.getAttribute('href');

      //const url = link.replace(/\?.*$/, '.js');
      const urlObj = new URL(link, window.location.origin);

      if (urlObj.search.length > 0) {
        newVariantId = urlObj.searchParams.get('variant');
      } else {
        newVariantId = variantId;
      }

      urlObj.search = '';
      const url = `${urlObj.href}.js`;

      fetchCartItems.push(
        fetch(url)
          .then((response) => response.json())
          .then((fileData) => ({
<<<<<<< HEAD
            fileData,
            cartTitle,
            newVariantId
=======
            fileData, cartTitle, newVariantId
>>>>>>> 2243136991f6e0ac8e3e71c0358dd9aa5beab4fd
          }))
      );
    });

    upsellTitles.forEach((upsellTitle) => {
<<<<<<< HEAD
      const variantId = upsellTitle
        .closest('.upsell.multi')
        .getAttribute('data-slidecart-product-id');
=======
      const variantId = upsellTitle.closest('.upsell.multi').getAttribute('data-slidecart-product-id');
>>>>>>> 2243136991f6e0ac8e3e71c0358dd9aa5beab4fd
      const cartTitle = upsellTitle.querySelector('a');
      const link = cartTitle.getAttribute('href');

      //const url = link.replace(/\?.*$/, '.js');
      const urlObj = new URL(link, window.location.origin);
      urlObj.search = '';
      const url = `${urlObj.href}.js`;

      fetchUpsells.push(
        fetch(url)
          .then((response) => response.json())
          .then((fileData) => ({
<<<<<<< HEAD
            fileData,
            cartTitle,
            variantId
=======
            fileData, cartTitle, variantId
>>>>>>> 2243136991f6e0ac8e3e71c0358dd9aa5beab4fd
          }))
      );
    });

    Promise.all(fetchCartItems)
      .then((fileDataArray) => {
        fileDataArray.forEach(({ fileData, cartTitle, newVariantId }) => {
          const { type, variants } = fileData;
          const macthedPrdType = typeObj[type];
          const [titleFirstPart, ...rest] = cartTitle.textContent.trim().split(' ');
          const productColor = rest.join(' ');
          const prdType = type.toLowerCase();

          //Update the product title to include the product type
          if (macthedPrdType || type) {
            if (variants) {
              const prdId = Number(newVariantId);
              const currentVariant = variants.find((variant) => variant.id === prdId);

<<<<<<< HEAD
              if (
                cartTitle.textContent.includes(macthedPrdType) ||
                cartTitle.textContent.includes(prdType)
              )
                return;
=======
              if ((cartTitle.textContent.includes(macthedPrdType) || cartTitle.textContent.includes(prdType))) return;
>>>>>>> 2243136991f6e0ac8e3e71c0358dd9aa5beab4fd

              if (currentVariant && currentVariant.option2) {
                const { option2 } = currentVariant;
                const color = option2.toLowerCase();
                const productTitleText = `${titleFirstPart} ${macthedPrdType || prdType} ${color}`;
                cartTitle.textContent = productTitleText;
              } else {
<<<<<<< HEAD
                const productTitleText = `${titleFirstPart} ${
                  macthedPrdType || prdType
                } ${productColor}`;
=======
                const productTitleText = `${titleFirstPart} ${macthedPrdType || prdType} ${productColor}`;
>>>>>>> 2243136991f6e0ac8e3e71c0358dd9aa5beab4fd
                cartTitle.textContent = productTitleText;
              }
            }
          }
        });
      })
      .catch((err) => {
        console.log('Something went wrong with one or more fetch requests.', err);
      });

    Promise.all(fetchUpsells)
      .then((fileDataArray) => {
        fileDataArray.forEach(({ fileData, cartTitle, newVariantId }) => {
          const { type, variants } = fileData;
          const macthedPrdType = typeObj[type];
          const [titleFirstPart, ...rest] = cartTitle.textContent.trim().split(' ');
          const productColor = rest.join(' ');
          const prdType = type.toLowerCase();

          //Update the product title to include the product type
          if (macthedPrdType || type) {
            if (variants) {
              const prdId = Number(newVariantId);
              const currentVariant = variants.find((variant) => variant.id === prdId);

<<<<<<< HEAD
              if (
                cartTitle.textContent.includes(macthedPrdType) ||
                cartTitle.textContent.includes(prdType)
              )
                return;
=======
              if ((cartTitle.textContent.includes(macthedPrdType) || cartTitle.textContent.includes(prdType))) return;
>>>>>>> 2243136991f6e0ac8e3e71c0358dd9aa5beab4fd

              if (currentVariant && currentVariant.option2) {
                const { option2 } = currentVariant;
                const color = option2.toLowerCase();
                const productTitleText = `${titleFirstPart} ${macthedPrdType || prdType} ${color}`;
                cartTitle.textContent = productTitleText;
              } else {
<<<<<<< HEAD
                const productTitleText = `${titleFirstPart} ${
                  macthedPrdType || prdType
                } ${productColor}`;
=======
                const productTitleText = `${titleFirstPart} ${macthedPrdType || prdType} ${productColor}`;
>>>>>>> 2243136991f6e0ac8e3e71c0358dd9aa5beab4fd
                cartTitle.textContent = productTitleText;
              }
            }
          }
        });
      })
      .catch((err) => {
        console.log('Something went wrong with one or more fetch requests.', err);
      });
  });
};
export default cartPage;
