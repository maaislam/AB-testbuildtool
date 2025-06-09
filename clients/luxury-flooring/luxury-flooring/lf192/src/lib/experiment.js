import setup from './services/setup';
import shared from './shared/shared';
import { promoBoxDesktop } from './components/promoBoxDesktop';
import { promoBoxMobile } from './components/promoBoxMobile';

const { ID } = shared;

const init = () => {
  const productCarousel = document.querySelector('#productCarousel');
  const urgentMsgElement = productCarousel.querySelector('.msg-box.psm_message');
  const priceElement =
    document.querySelector('.flooring-price .price-including-tax > span.price') ||
    document.querySelector('.product-info-price .price-including-tax > span.price');
  const price = priceElement ? priceElement.innerText.split('£')[1] : null;

  if (!document.querySelector(`.${ID}__price-box`)) {
    productCarousel.insertAdjacentHTML('beforeend', promoBoxDesktop(ID, price));
  }

  if (!document.querySelector(`.${ID}__discount-banner`)) {
    productCarousel.insertAdjacentHTML('afterend', promoBoxMobile(ID, price));
  }
  if (urgentMsgElement) {
    document.body.classList.add(`${ID}__has-urgent-message`);
  }
};

export default () => {
  setup();

  init();
};
