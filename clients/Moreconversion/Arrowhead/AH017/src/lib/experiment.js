import { data } from './data/data';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const attachPoint = document.querySelector('.marquee');

  const usps = () => {
    const htmlStr = `<div class='${ID}__usps'>
      ${data.map((item, index) => `
        <div class='usp'>
          <span class='usp-icon'>${item.icon}</span>
          <span class='title'>${item.title}</span class='title'>
        </div>
        ${index < data.length - 1 ? "<div class='usp-bar'></div>" : ''}
      `).join('')}
    </div>`;

    return htmlStr;
  };

  if (document.querySelector(`.${ID}__usps`)) return;
  attachPoint.insertAdjacentHTML('beforebegin', usps());
};

export default () => {
  setup(); //use if needed
  init();
};
