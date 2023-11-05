import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { data } from './data/data';

const { ID } = shared;

export default () => {
  setup();
  const anchorPoint = document.querySelector('.variants_vendor');

  const htmlStr = `<div class='${ID}__uspWrapper'>
    ${data.map((item) => {
      const usp = `<div class='${ID}__uspItem'>
        <div class='${ID}__uspIconWrapper'>
          <div class='${ID}__uspIcon'>
            ${item.uspIcon}
          </div>
        </div>
        <div class='${ID}__uspTitle'>
          ${item.uspTitle}
        </div>
      </div>`;
      return usp;
    }).join('')}
  </div>`;

  anchorPoint.insertAdjacentHTML('beforebegin', htmlStr);
};
