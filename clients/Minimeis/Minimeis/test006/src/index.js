import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body'], () => {
  //30 EUR OFF on Minimeis Carrier, shop now before the stock runs out!
  const blackFridayBar = document.querySelectorAll('.black-friday-bar-content');
  blackFridayBar.forEach((bar) => {
    const newHtml = `
    <div class="left-title bar-title bar-content-item">30 EUR OFF</div>
    <div class="left-text bar-text bar-content-item">on MiniMeis Carrier,</div>
    <div class="right-text bar-text bar-content-item">shop now before stocks run out!</div>
    <div class="right-title bar-title bar-content-item">super summer sale</div>`;
    //eslint-disable-next-line no-param-reassign
    bar.innerHTML = newHtml;
  });
});

if (window.location.href.includes('/products/minimeis-g4')) {
  pollerLite(['body'], activate);
}
