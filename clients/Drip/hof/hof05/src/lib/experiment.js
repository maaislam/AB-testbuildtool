/*eslint-disable no-useless-return */
import { pollerLite } from '../../../../../../globalUtil/util';
import { products } from './products';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const setUniqueClass = () => {
  document.querySelector('body').classList.add(`${ID}`);
};

export default () => {
  //variables
  let discountedProductPriceFor16cm;
  let discountedProductPriceFor18cm;
  let discountedProductPriceFor20cm;
  let discountedProductPriceFor24cm;
  let discountedProductPriceFor25cm;
  let discountedProductPriceFor26cm;
  let discountedProductPriceFor28cm;
  let discountedProductPriceFor32cm;
  let initialDiscountedPrice;

  setUniqueClass();
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }
  //discount calculation for tooltip...........
  const discountCalculation = (priceWithEuroSign, lidUrl) => {
    const oldPrice = priceWithEuroSign.toString().substring(1, 7);
    const priceReplace = oldPrice.replace(',', '.');
    const afterDiscountPrice = parseInt(document.querySelector('.__discountedPrice').innerText);
    const subsTractTwoPrice = priceReplace - afterDiscountPrice;
    const result = ((subsTractTwoPrice / priceReplace) * 100).toFixed(1);
    const resultReplaceToComma = result.replace('.', ',');
    document.querySelector('.hof05__tooltip-arrow-label').innerHTML = lidUrl === '' ? `<span><span class="${ID}__loader"></span></span>` : resultReplaceToComma;
    document.querySelector('.hof05__tooltip-arrow-label').style = 'animation: fade-in 1s';
  };
  //initial price and discount loading........
  const previousPrice = () => {
    let currentURL;
    if (window.location.search.indexOf('variant') > 1) {
      currentURL = `${window.location.href.split('?')[0]}?variant${window.location.href.split('variant')[1]}`;
    } else if (window.location.search.includes('variant') === false) {
      const splitURL = window.location.href.split('?')[0];
      currentURL = splitURL;
    } else {
      currentURL = window.location.href;
    }
    pollerLite([() => '.hof05__tooltip-arrow', '.hof05__moreBuyTooltip', '.hof05__insteadOf'], () => {
      products.forEach((product) => {
        if (product.productUrl === currentURL) {
          if (product.lidUrl === '') {
            document.querySelector('.hof05__insteadOf').classList.add('__hide');
            document.querySelector('.hof05__moreBuyTooltip').classList.add('__hide');
          }
          fetch(product.lidUrl).then((response) => {
            return response.text();
        }).then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const priceWithEuroSign = doc.querySelector('.ProductMeta__Price').innerText;
            document.querySelector('.hof05__oldPrice s').innerText = `${priceWithEuroSign.toString().substring(1, 7)}€`;
            document.querySelector('.hof05__oldPrice s').style = 'animation: fade-in 1s';
            //calculation
            discountCalculation(priceWithEuroSign, product.lidUrl);
        }).catch((err) => {
            console.warn('Something went wrong.', err);
        });
        }
      });
    });
    pollerLite([() => '.hof05__checkbox'], () => {
      setTimeout(() => {
        document.querySelectorAll('#parent_of_options')[1].querySelectorAll('.SizeSwatch__Radio')[0].click();
        if (document.querySelectorAll('#parent_of_options')[1].querySelectorAll('.SizeSwatch__Radio')[0].checked === true) {
            document.querySelector('.hof05__checkbox').checked = true;
            document.querySelector('.hof05__checkmark').classList.remove('__hide');
        } else {
          document.querySelector('.hof05__checkmark').classList.add('__hide');
        }
      }, 200);
    });
  };
  //price and discount change as per click of CM button.........
  const previousPriceWithUrlChanging = (currentUrl) => {
    pollerLite([() => '.hof05__oldPrice', '.hof05__insteadOf', '.hof05__moreBuyTooltip'], () => {
      products.forEach((product) => {
        if (product.productUrl === currentUrl) {
          if (product.lidUrl === '') {
            document.querySelector('.hof05__insteadOf').classList.add('__hide');
            document.querySelector('.hof05__moreBuyTooltip').classList.add('__hide');
          } else {
            document.querySelector('.hof05__insteadOf').classList.remove('__hide');
            document.querySelector('.hof05__moreBuyTooltip').classList.remove('__hide');
          }
          fetch(product.lidUrl).then((response) => {
            return response.text();
        }).then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const priceWithEuroSign = doc.querySelector('.ProductMeta__Price').innerText;
            document.querySelector('.hof05__oldPrice s').innerHTML = product.lidUrl === '' ? `<span><span class="${ID}__loader"></span></span>` : `${priceWithEuroSign.toString().substring(1, 7)}€`;
            document.querySelector('.hof05__oldPrice s').style = 'animation: fade-in 1s';
            //calculation
              discountCalculation(priceWithEuroSign, product.lidUrl);
        }).catch((err) => {
            console.warn('Something went wrong.', err);
        });
        }
      });
    });
  };
  previousPrice();

  const withSKUKD = [];
  const withoutSKUKD = [];
  //after discount the recent price calculation..................
  const discountedPriceCalculation = (regularPrice, discountedPrice) => {
    return (regularPrice - discountedPrice) / 100;
  };

  window.meta.product.variants.forEach((variant) => {
    if (variant.sku.includes('KD')) {
      withSKUKD.push(variant);
    } else if (!variant.sku.includes('KD')) {
      withoutSKUKD.push(variant);
    }
  });

  withSKUKD.forEach((i) => {
    withoutSKUKD.forEach((j) => {
      if (i.public_title.includes('16 cm') && j.public_title.includes('16 cm')) {
        discountedProductPriceFor16cm = discountedPriceCalculation(j.price, i.price);
      }
      if (i.public_title.includes('18 cm') && j.public_title.includes('18 cm')) {
        discountedProductPriceFor18cm = discountedPriceCalculation(j.price, i.price);
      }
      if (i.public_title.includes('20 cm') && j.public_title.includes('20 cm')) {
        discountedProductPriceFor20cm = discountedPriceCalculation(j.price, i.price);
      }
      if (i.public_title.includes('24 cm') && j.public_title.includes('24 cm')) {
        discountedProductPriceFor24cm = discountedPriceCalculation(j.price, i.price);
      }
      if (i.public_title.includes('25 cm') && j.public_title.includes('25 cm')) {
        discountedProductPriceFor25cm = discountedPriceCalculation(j.price, i.price);
      }
      if (i.public_title.includes('26 cm') && j.public_title.includes('26 cm')) {
        discountedProductPriceFor26cm = discountedPriceCalculation(j.price, i.price);
      }
      if (i.public_title.includes('28 cm') && j.public_title.includes('28 cm')) {
        discountedProductPriceFor28cm = discountedPriceCalculation(j.price, i.price);
      }
      if (i.public_title.includes('32 cm') && j.public_title.includes('32 cm')) {
        discountedProductPriceFor32cm = discountedPriceCalculation(j.price, i.price);
      }
    });
  });
  //initial value assign for __discountedPrice selector.......................
    document.querySelectorAll('.SizeSwatch__Radio').forEach((i) => {
      if (i.checked) {
          if (i.value !== 'Mit Glasdeckel') {
            if (i.value === '16 cm') {
              initialDiscountedPrice = discountedProductPriceFor16cm;
            }
            if (i.value === '18 cm') {
              initialDiscountedPrice = discountedProductPriceFor18cm;
            }
            if (i.value === '20 cm') {
              initialDiscountedPrice = discountedProductPriceFor20cm;
            }
            if (i.value === '20x20 cm') {
              initialDiscountedPrice = discountedProductPriceFor20cm;
            }
            if (i.value === '24 cm') {
              initialDiscountedPrice = discountedProductPriceFor24cm;
            }
            if (i.value === '24x24 cm') {
              initialDiscountedPrice = discountedProductPriceFor24cm;
            }
            if (i.value === '32x25 cm') {
              initialDiscountedPrice = discountedProductPriceFor25cm;
            }
            if (i.value === '26 cm') {
              initialDiscountedPrice = discountedProductPriceFor26cm;
            }
            if (i.value === '26x26 cm' || i.value === '26×26 cm') {
              initialDiscountedPrice = discountedProductPriceFor26cm;
            }
            if (i.value === '28 cm') {
              initialDiscountedPrice = discountedProductPriceFor28cm;
            }
            if (i.value === '28x28 cm' || i.value === '28×28 cm') {
              initialDiscountedPrice = discountedProductPriceFor28cm;
            }
            if (i.value === '38 x 28 cm') {
              initialDiscountedPrice = discountedProductPriceFor28cm;
            }
            if (i.value === '32 cm') {
              initialDiscountedPrice = discountedProductPriceFor32cm;
            }
          }
      }
    });

  const forMoreBuy = `
    <div class="${ID}__moreBuy">
      <p class="${ID}__moreBuyTitle">Für ein professionelleres Kocherlebnis:</p>
      <input type="checkbox" class="${ID}__checkbox" id="cb1">
      <label for="cb1" class="${ID}__checkboxLabel">Glasdeckel hinzufügen (
        <span class=${ID}__insteadOf>
          statt 
          <label class="${ID}__oldPrice">
            <s>
              <span><span class="${ID}__loader"></span></span>
            </s>
          </label>
        </span>
          nur
        <label class="__discountedPrice">${initialDiscountedPrice}</label>€)
      </label>
      <i class="fa fa-check ${ID}__checkmark"></i>

      <div class="${ID}__moreBuyTooltip"><div class="${ID}__tooltip-arrow">Sparen Sie 
      <label class="${ID}__tooltip-arrow-label">
        <span><span class="${ID}__loader"></span></span>
      </label>%</div></div>
    </div>
  `;

  if (document.querySelectorAll('#parent_of_options')[1]) {
    document.querySelector('.ProductForm__Variants').insertAdjacentHTML('beforeend', forMoreBuy);
  }
//checkbox all functionalities..................
  pollerLite([() => `${ID}__checkbox`], () => {
    document.querySelector('.hof05__checkbox').addEventListener('click', () => {
      if (document.querySelector('.hof05__checkbox').checked) {
        document.querySelectorAll('#parent_of_options')[1].querySelectorAll('.SizeSwatch__Radio')[0].click();
        document.querySelector('.hof05__checkmark').classList.remove('__hide');
      } else {
        document.querySelector('.hof05__checkmark').classList.add('__hide');
        document.querySelectorAll('#parent_of_options')[1].querySelectorAll('.SizeSwatch__Radio')[1].click();
      }
    });
    document.querySelector('.hof05__checkmark').addEventListener('click', (e) => {
      if (document.querySelector('.hof05__checkbox').checked) {
        document.querySelectorAll('#parent_of_options')[1].querySelectorAll('.SizeSwatch__Radio')[1].click();
        document.querySelector('.hof05__checkbox').checked = false;
        e.target.classList.add('__hide');
      } else {
        document.querySelectorAll('#parent_of_options')[1].querySelectorAll('.SizeSwatch__Radio')[0].click();
        document.querySelector('.hof05__checkbox').checked = true;
      }
    });
  });

  //cm wise click and change as their event
  document.querySelectorAll('.SizeSwatchList li').forEach((li) => {
      li.addEventListener('click', () => {
        setTimeout(() => {
          previousPriceWithUrlChanging(window.location.href);
        }, 200);
          if (li.childNodes[3].innerText === '18 cm') {
            document.querySelector('.__discountedPrice').innerText = discountedProductPriceFor18cm;
            //recheck the checkbox
            document.querySelectorAll('#parent_of_options')[1].querySelectorAll('.SizeSwatch__Radio')[0].click();
            document.querySelector('.hof05__checkmark').classList.remove('__hide');
            document.querySelector('.hof05__checkbox').checked = true;
          }
          if (li.childNodes[3].innerText === '20 cm') {
            document.querySelector('.__discountedPrice').innerText = discountedProductPriceFor20cm;
            //recheck the checkbox
            document.querySelectorAll('#parent_of_options')[1].querySelectorAll('.SizeSwatch__Radio')[0].click();
            document.querySelector('.hof05__checkmark').classList.remove('__hide');
            document.querySelector('.hof05__checkbox').checked = true;
          }
          if (li.childNodes[3].innerText === '24 cm') {
            document.querySelector('.__discountedPrice').innerText = discountedProductPriceFor24cm;
            //recheck the checkbox
            document.querySelectorAll('#parent_of_options')[1].querySelectorAll('.SizeSwatch__Radio')[0].click();
            document.querySelector('.hof05__checkmark').classList.remove('__hide');
            document.querySelector('.hof05__checkbox').checked = true;
          }
          if (li.childNodes[3].innerText === '25 cm') {
            document.querySelector('.__discountedPrice').innerText = discountedProductPriceFor25cm;
            //recheck the checkbox
            document.querySelectorAll('#parent_of_options')[1].querySelectorAll('.SizeSwatch__Radio')[0].click();
            document.querySelector('.hof05__checkmark').classList.remove('__hide');
            document.querySelector('.hof05__checkbox').checked = true;
          }
          if (li.childNodes[3].innerText === '26 cm') {
            document.querySelector('.__discountedPrice').innerText = discountedProductPriceFor26cm;
            //recheck the checkbox
            document.querySelectorAll('#parent_of_options')[1].querySelectorAll('.SizeSwatch__Radio')[0].click();
            document.querySelector('.hof05__checkmark').classList.remove('__hide');
            document.querySelector('.hof05__checkbox').checked = true;
          }
          if ((li.childNodes[5] && li.childNodes[5].innerText === '28 cm') || li.childNodes[3].innerText === '28 cm') {
            document.querySelector('.__discountedPrice').innerText = discountedProductPriceFor28cm;
            //recheck the checkbox
            document.querySelectorAll('#parent_of_options')[1].querySelectorAll('.SizeSwatch__Radio')[0].click();
            document.querySelector('.hof05__checkmark').classList.remove('__hide');
            document.querySelector('.hof05__checkbox').checked = true;
          }
          if (li.childNodes[3].innerText === '32 cm') {
            document.querySelector('.__discountedPrice').innerText = discountedProductPriceFor32cm;
            //recheck the checkbox
            document.querySelectorAll('#parent_of_options')[1].querySelectorAll('.SizeSwatch__Radio')[0].click();
            document.querySelector('.hof05__checkmark').classList.remove('__hide');
            document.querySelector('.hof05__checkbox').checked = true;
          }
      });
  });
  //-----------------------------
  //...
};
