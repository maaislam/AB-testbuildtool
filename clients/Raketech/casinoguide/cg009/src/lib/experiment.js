import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;

const casinoMessageStr = (id, messages) => {
  const html = `
    <div class="${id}__casinoMessageContainer" id="${id}__casinoMessage">
      ${messages
        .map((message) => {
          return `<p class="toplistTitle">${message}</p>`;
        })
        .join('\n')}
    </div>
  `;

  return html.trim();
};

const init = () => {
  //const casino = document.querySelector('.mui-1xlzx9v');
  //const casino = document.querySelectorAll('#sticky-cta-container .mui-6tgflj .mui-1pfard8');
  const casino = document.querySelectorAll('#sticky-cta-container .mui-p8iq1o');
  if (!casino.length) return;

  const messages = [...casino].map((message) => message?.innerText);
  //const messages = [...casino].map((message) => message.querySelector('.mui-p8iq1o')?.innerText);

  //const casinoMessage = casino.cloneNode(true);
  //if (casinoMessage) casinoMessage.id = `${ID}__casinoMessage`;

  const container = document.querySelectorAll('.mui-1v68uba')[0];
  if (container && !document.querySelector(`#${ID}__casinoMessage`)) {
    const subText = document.querySelector('.mui-dspu10').firstChild.textContent;
    //eslint-disable-next-line no-unused-vars
    document.querySelector('.mui-dspu10').firstChild.textContent = `${subText} | `;

    container.insertAdjacentHTML('beforebegin', casinoMessageStr(ID, messages));
  }
};
export default () => {
  setup();
  const { isListenerAdded } = document.body.dataset;
  !isListenerAdded &&
    document.addEventListener('click', ({ target }) => {
      if (target.closest('a[href*="/go/"]') && target.closest('.mui-1v68uba')) {
        const clickedElem = target.closest('a');
        const casionName = clickedElem.href.split('/go/')[1];

        gaTracking(`${casionName} | CTA Clicks to Operator| Button | Bottomlist`);
      }
    });
  document.body.dataset.isListenerAdded = true;
  if (VARIATION === 'Control') {
    return;
  }
  init();
  observeDOM('body', init);
};
