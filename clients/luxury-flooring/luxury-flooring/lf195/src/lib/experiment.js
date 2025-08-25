import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  pollerLite(
    ['.usps-main-new-design ul.items', () => VARIATION === '2' || VARIATION === '3'],
    () => {
      const container = document.querySelector('.usps-main-new-design ul.items');
      if (!container) return;
      //Hide Klarna item
      const klarnaItem = container.querySelector('.item-klarna');
      if (klarnaItem) klarnaItem.style.display = 'none';

      const newIconElement = document.querySelectorAll('.lf-one-million-icon');
      if (newIconElement.length > 0) {
        newIconElement.forEach((item) => item.remove());
      }

      //Create new item
      const newItem = document.createElement('li');
      newItem.className = 'item item-orders lf-one-million-icon';
      newItem.innerHTML = `
    <a>
      <div class="img_wrap">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 370 325" style="width: 70px;" class="lf-orders-icon">
        <defs>
        </defs>
        <text class="cls-3" transform="translate(159.42 229.93)"><tspan x="0" y="0">1</tspan></text>
        <text class="cls-1" transform="translate(73.2 305.67)"><tspan x="0" y="0">Million</tspan></text>
        <text class="cls-2" transform="translate(316.58 321.88)"><tspan x="0" y="0">+</tspan></text>
        <line id="Line_14" data-name="Line 14" class="cls-4" x1="261.58" y1="152.18" x2="310.1" y2="152.18"></line>
        <line id="Line_15" data-name="Line 15" class="cls-4" x1="119.74" y1="152.18" x2="168.26" y2="152.18"></line>
        <path id="Path_10479" data-name="Path 10479" class="cls-5" d="M92.29,103.88L213.88,19.27l115.71,84.61,11.2-9.95-55.99-41.06V.61h-34.84v24.89L213.88.61,85.73,88.95l6.56,14.93Z"></path>
      </svg>
      </div>
      <div class="usp-text-wrap">
        <h4>Orders and Counting</h4>
      </div>
    </a>
  `;

      container.appendChild(newItem);
    }
  );
};

export default () => {
  setup();
  init();
};
