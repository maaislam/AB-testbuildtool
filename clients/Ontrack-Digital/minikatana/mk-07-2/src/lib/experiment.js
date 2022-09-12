//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { pollerLite } from '../../../../../../globalUtil/util';
import { v2 } from './data';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);

  pollerLite(['.product-photos > div > div.wrapper-images > div.product-photo-container.slider-for.slick-initialized.slick-slider .slick-list .slick-track'], () => {
    const prodName = document.querySelector('.product-shop > div.group-title .product-title').innerText.trim();
    const filteredProd = v2.find((prod) => prodName === prod.name);
    console.log(filteredProd);
    if (filteredProd) {
      const component = `<div class="mk-video-section">
                          <h3>${filteredProd.title}</h3>
                          <div class=".mk-07-ifrmae">
                          ${filteredProd.embadedLink}
                          </div>
                        </div>`;
      document.querySelector('.product-shop > div.product__benefits').insertAdjacentHTML('afterend', component);
    }
  });
};
