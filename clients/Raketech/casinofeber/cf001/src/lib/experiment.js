/*eslint-disable no-param-reassign */
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const allItems = document.querySelectorAll('.tabellcasino-container');

  allItems.forEach((el) => {
    const detailOneContainer = el.querySelector(
      ' .tabellcasino-info .visible-xs span:nth-child(1)'
    );
    const detailTwoContainer = el.querySelector(' .tabellcasino-info>.hidden-xs>div:last-child');
    //const innerLineBreak = detailTwoContainer.querySelector('br');
    //if (innerLineBreak) {
    //innerLineBreak.remove();
    //}

    const lineBreaks = el.querySelectorAll('br');
    lineBreaks.forEach((lineBreak) => {
      lineBreak.remove();
    });

    if (el.querySelector(`.${ID}__message`)) return;

    detailOneContainer.innerHTML =
      '<div  style="font-size:13px;font-weight:300;color: #000;"> <div>Inga FS utan insattaning</div></div>';
    el.querySelector(' .tabellcasino-info .visible-xs').insertAdjacentHTML(
      'beforeend',
      `<div class="${ID}__message">${detailTwoContainer.innerHTML}</div>`
    );
    if (!detailOneContainer.nextSibling) return;
    detailOneContainer.nextSibling.textContent = '';
  });
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('#loadall')) {
      setTimeout(init, 1000);
    }
  });

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'Control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  init();
};
