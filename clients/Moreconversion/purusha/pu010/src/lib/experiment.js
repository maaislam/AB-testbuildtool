import setup from './services/setup';
import shared from './shared/shared';
import { observeDOM, pollerLite } from './helpers/utils';

const { ID } = shared;

const init = () => {
  const htmlStr = `<section class="bars-container ${ID}__bars-container">
      <div class="loading-bar"></div>
      <div class="loading-bar"></div>
      <div class="loading-bar"></div>
  </section>`;

  const setProgressBar = async () => {
    const anchorPoint = document.querySelector(
      '.Cart.Drawer__Content [class*="free_shipping_card_progress"]'
    );

    if (document.querySelector('.bars-container') && !anchorPoint) return;
    const response = await fetch('/cart.js');
    const cartData = await response.json();
    const cartTotal = cartData.total_price / 100;

    const threshold = 200;
    const percent = (cartTotal / threshold) * 100;

    if (document.querySelector('.bars-container') || cartTotal <= 0) return;
    anchorPoint.insertAdjacentHTML('beforebegin', htmlStr);

    const bars = document.querySelectorAll('.loading-bar');
    const barsCount = bars.length;
    const percentPerBar = 100 / barsCount;
    const barsGap = `${100 / barsCount}px`;

    document.documentElement.style.setProperty('--barsCount', barsCount);
    document.documentElement.style.setProperty('--barsGap', barsGap);

    bars.forEach((bar, index) => {
      const diff = ((percent - percentPerBar * index) / percentPerBar) * 100;
      //const progress = window.getComputedStyle(bar, '::before');
      const barBackground = document.querySelector(`.loading-bar:nth-child(${index + 1})`).style;
      barBackground.setProperty(
        '--background',
        `linear-gradient(to right, #000 ${diff}%, #E4E5E7 ${diff}%`
      );
    });
  };

  if (document.querySelector('.bars-container')) return;

  pollerLite(['.Cart.Drawer__Content [class*="free_shipping_card_progress"]'], setProgressBar);
};

export default () => {
  setup();

  //init();

  observeDOM('#sidebar-cart', init);
};
