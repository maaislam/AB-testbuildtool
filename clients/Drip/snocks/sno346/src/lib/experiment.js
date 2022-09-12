/*eslint-disable no-param-reassign */
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  document.querySelector('body').classList.add(ID);
  console.log('ID:', ID);
  if (window.location.href.includes('collections')) {
    localStorage.setItem('paar', null);
    //setup(); //use if needed

    const mengeSection = `<div class="${ID}__mengeSection">
      <button class="${ID}__pairButton ${ID}__selected"><span class="${ID}__loaderParent"><span class="${ID}__loader"></span></span></button>
      <button class="${ID}__pairButton ${ID}__tooltipContain"><span class="${ID}__loaderParent"><span class="${ID}__loader"></span></span></button>
      <button class="${ID}__pairButton ${ID}__tooltipContain"><span class="${ID}__loaderParent"><span class="${ID}__loader"></span></span></button>
    </div>`;

    const tooltip = `
    <div class="${ID}__tooltipContainer">
      <div class="${ID}__tooltip">
        <div class="${ID}__tooltip-arrow"> 
          <label class="${ID}__tooltip-arrow-label">
            -12%
          </label>
        </div>
      </div>
    </div>`;

    const priceSection = `<div class='${ID}__priceSection'>
      <div class='${ID}__initialPrice'></div>
      <div class='${ID}__strikePrice'></div>
      <div class='${ID}__discountedPrice'></div>
    </div>`;

    setTimeout(() => {
      document.querySelectorAll('.ProductItem__Wrapper').forEach((item) => {
        const url = item.querySelector('a').href;
        item.querySelector('.ProductItem__Info').insertAdjacentHTML('beforebegin', mengeSection);
        item.querySelector('.ProductItem__Info .ProductItem__PriceList').insertAdjacentHTML('beforeend', priceSection);

        item.querySelectorAll('.sno346__tooltipContain').forEach((tooltipItem) => {
          tooltipItem.insertAdjacentHTML('beforeend', tooltip);
        });

          fetch(url).then((response) => {
            return response.text();
            }).then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const mengeDiv = doc.querySelector('.ProductForm__Option .SizeSwatchList.upsell-js-option');
                dom = doc;
                if (mengeDiv) {
                  setTimeout(() => {
                    item.querySelectorAll('.sno346__mengeSection').forEach((menge) => {
                      menge.querySelectorAll('button').forEach((btn, btnIndex) => {
                        const paarArray = [...mengeDiv.querySelectorAll('.HorizontalList__Item .SizeSwatch .color-value-bold .right-paar-option span:not(.color-maroon)')];
                        paarArray.splice(2, 1);
                        btn.querySelector('span').innerText = paarArray[btnIndex].innerText;
                        btn.querySelector('span').style = 'animation: fade-in 2s';
                        btn.querySelector('br').remove();
                        btn.querySelector('span').classList.remove(`${ID}__loaderParent`);
                      });
                    });
                  }, 500);
                  setTimeout(() => {
                      item.querySelectorAll('.sno346__mengeSection .sno346__tooltipContain .sno346__tooltipContainer .sno346__tooltip .sno346__tooltip-arrow .sno346__tooltip-arrow-label').forEach((tooltipItem, tooltipItemIndex) => {
                        if (tooltipItemIndex === 0) {
                          tooltipItem.innerText = `-${mengeDiv.querySelectorAll('.HorizontalList__Item .SizeSwatch .color-value-bold .right-paar-option span span.color-maroon')[0].innerText}`;
                        } else if (tooltipItemIndex === 1) {
                          tooltipItem.innerText = `-${mengeDiv.querySelectorAll('.HorizontalList__Item .SizeSwatch .color-value-bold .right-paar-option span span.color-maroon')[1].innerText}`;
                        }
                      });
                  }, 500);
                } else {
                    item.querySelector('.sno346__mengeSection')?.remove();
                }
            });
      });

      //discount calculation......................................
      const discountCalc = (price, percentage) => {
        const priceDividation = price / 100;
        const deductedPrice = percentage * priceDividation.toFixed(1);
        const discountedPrice = priceDividation - deductedPrice;
        console.log(priceDividation, deductedPrice, discountedPrice);
        return discountedPrice.toFixed(2);
      };

      //price calculation......................................
      document.querySelectorAll('.ProductItem__Wrapper').forEach((item) => {
        item.querySelectorAll('.sno346__pairButton').forEach((button, index) => {
          button.addEventListener('click', () => {
            const url = item.querySelector('a').href;
            item.querySelector('.ProductItem__PriceList .ProductItem__Price').classList.add('sno346__hidden');
            let price = item.querySelector('.ProductItem__PriceList .ProductItem__Price').innerText.split('€')[1];
            price = price.replace(',', '');
            const initialPrice = item.querySelector('.ProductItem__PriceList .sno346__priceSection .sno346__initialPrice');
            const strikePrice = item.querySelector('.ProductItem__PriceList .sno346__priceSection .sno346__strikePrice');
            const discountedPriceElem = item.querySelector('.ProductItem__PriceList .sno346__priceSection .sno346__discountedPrice');

            if (index === 0) {
              fetch(url).then((response) => {
                return response.text();
              }).then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const mengeDiv = doc.querySelector('.ProductForm__Option .SizeSwatchList.upsell-js-option');
                if (mengeDiv) {
                  const originalPrice = mengeDiv.querySelectorAll('.HorizontalList__Item.amount')[index].querySelector('input').getAttribute('data-price');
                  const discountValue = mengeDiv.querySelectorAll('.HorizontalList__Item.amount')[index].querySelector('input').getAttribute('data-discount');
                  const discountedPrice = discountCalc(originalPrice, discountValue);
                  let discountedPriceWithComma = originalPrice.toString().replace(/.(?=(..)$)/g, '$&,');
                  discountedPriceWithComma = discountedPriceWithComma.replace('.', '');
                  initialPrice.innerText = `€${discountedPriceWithComma}`;
                }
              });

              price *= 1;
              const priceWithComma = price.toString().replace(/.(?=(..)$)/g, '$&,');
              discountedPriceElem.innerText = `€${priceWithComma}`;
            } else if (index === 1) { //second button........................
              fetch(url).then((response) => {
                return response.text();
              }).then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const mengeDiv = doc.querySelector('.ProductForm__Option .SizeSwatchList.upsell-js-option');
                if (mengeDiv) {
                  const originalPrice = mengeDiv.querySelectorAll('.HorizontalList__Item.amount')[index].querySelector('input').getAttribute('data-price');
                  const discountValue = mengeDiv.querySelectorAll('.HorizontalList__Item.amount')[index].querySelector('input').getAttribute('data-discount');
                  const discountedPrice = discountCalc(originalPrice, discountValue);
                  let discountedPriceWithComma = discountedPrice.toString().replace(/.(?=(..)$)/g, '$&,');
                  discountedPriceWithComma = discountedPriceWithComma.replace('.', '');
                  discountedPriceElem.innerText = `€${discountedPriceWithComma}`;
                }
              });

              const percentage = item.querySelectorAll('.sno346__tooltip-arrow-label')[index - 1].innerText.replace('%', '').split('-')[1];

              price *= 2;
              const priceWithComma = price.toString().replace(/.(?=(..)$)/g, '$&,');
              strikePrice.innerText = `€${priceWithComma}`;

              // const discountedPrice = discountCalc(price, percentage);
              // let discountedPriceWithComma = discountedPrice.toString().replace(/.(?=(..)$)/g, '$&,');
              // discountedPriceWithComma = discountedPriceWithComma.replace('.', '');
              // discountedPriceElem.innerText = `€${discountedPriceWithComma}`;
            } else if (index === 2) { //third button........................
              const percentage = item.querySelectorAll('.sno346__tooltip-arrow-label')[index - 1].innerText.replace('%', '').split('-')[1];

              price *= 3;
              const priceWithComma = price.toString().replace(/.(?=(..)$)/g, '$&,');
              strikePrice.innerText = `€${priceWithComma}`;

              const discountedPrice = discountCalc(price, percentage);
              let discountedPriceWithComma = discountedPrice.toString().replace(/.(?=(..)$)/g, '$&,');
              discountedPriceWithComma = discountedPriceWithComma.replace('.', '');
              discountedPriceElem.innerText = `€${discountedPriceWithComma}`;
            }
            const closestElem = button.closest('.sno346__mengeSection');
            closestElem.children.forEach((elem) => {
              if (elem.classList.contains('sno346__selected')) {
                elem.classList.remove('sno346__selected');
              }
            });
            button.classList.toggle('sno346__selected');
            localStorage.setItem('paar', button.innerText.split('-')[0].trim());
          });
        });
      });
    }, 500);
  } else if (window.location.href.includes('products')) {
    const paar = localStorage.getItem('paar');

    document.querySelectorAll('.SizeSwatch__Radio[name=quantity]').forEach((item) => {
      if (item.nextElementSibling.innerText.split('s')[0].includes(paar)) {
        item.click();
      }
    });
  }
};
