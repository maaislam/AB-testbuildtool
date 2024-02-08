import setup from './services/setup';

import shared from './shared/shared';
import { upvData } from './data/upvData';

const { ID, VARIATION } = shared;

const upvItem = ({ icon, text }) => {
  const html = `
    <div class="${ID}__item">
      <div class="${ID}__icon">${icon}</div>
      <div class="${ID}__text">${text}</div>
    </div>
  `;
  return html.trim();
};

const upvHtml = () => {
  const html = `
    <div class="${ID}__productBadge">
      ${upvData.map((item) => upvItem(item)).join('\n')}
    </div>
  `;

  return html.trim();
};

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  if (VARIATION === '1') {
    if (!document.querySelector(`.${ID}__productBadge`)) {
      document.querySelector('.product_badge').insertAdjacentHTML('beforebegin', upvHtml());
    }
  }

  if (VARIATION === '2') {
    if (!document.querySelector(`.${ID}__productBadge`)) {
      document.querySelector('body .Product_Aside').insertAdjacentHTML('beforebegin', upvHtml());
    }
  }
};
