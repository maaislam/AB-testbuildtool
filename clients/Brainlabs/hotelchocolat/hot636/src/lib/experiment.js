import discountOfferMessage from './components/discountOfferMessage';
import progressBar from './components/progressBar';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const thresholdPrice = 30;
  const location = window.location.href;
  if (location.includes('/basket')) {
    const anchorPoint = document.querySelector('#page_heading');
    const basketTotalPriceText = document.querySelector('tr.order-subtotal td:last-child').textContent;
    const basketTotalPrice = +basketTotalPriceText.replace('£', '');

    const isThresholdMet = basketTotalPrice < thresholdPrice;

    const progressWidth = (basketTotalPrice / thresholdPrice) * 100;
    const deductedPrice = isThresholdMet && (thresholdPrice - basketTotalPrice).toFixed(2);

    const discountProgressCardHtml = `
      <div class="${ID}__discountProgressCard">
        ${discountOfferMessage(ID, isThresholdMet, deductedPrice)}
        ${progressBar(ID, progressWidth.toFixed(2))}
      </div>
    `;

    if (!document.querySelector(`.${ID}__discountProgressCard`)) {
      anchorPoint.insertAdjacentHTML('afterend', discountProgressCardHtml);
    }
  }
};

export default () => {
  setup();
  init();
};
