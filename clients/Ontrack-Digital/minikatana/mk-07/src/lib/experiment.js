//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { pollerLite } from '../../../../../../globalUtil/util';
import { v1 } from './data';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);

  const waitForJquery = (selector, callback) => {
        let count = 0;
        if (selector != null) {
            callback();
        } else if (count < 100) {
            setTimeout(() => {
              waitForJquery(selector, callback, ++count);
            }, 100);
        }
    };

  pollerLite(['.product-photos > div > div.wrapper-images > div.product-photo-container.slider-for.slick-initialized.slick-slider .slick-list .slick-track'], () => {
    const prodName = document.querySelector('.product-shop > div.group-title .product-title').innerText.trim();
    const filteredProd = v1.find((prod) => prodName === prod.name);
    if (filteredProd) {
      waitForJquery(window.jQuery, () => {
        $('.product-photo-container').slick('slickAdd', ` <div class="mk-07-ifrmae">${filteredProd.embadedLink}</div>`, 0);
      });
    }
  });
};
