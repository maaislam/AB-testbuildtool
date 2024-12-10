import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  //Initialize experiment-specific functionality here
  const targetElement = document.querySelector('#join_pkg');
  targetElement.querySelectorAll('.package').forEach((item) => {
    if (!item.querySelector(`.${ID}__wrapper`)) {
      item
        .querySelector('.packge_button_outer')
        .insertAdjacentHTML(
          'afterend',
          `<div class="${ID}__wrapper">Lab Verified -&nbsp;<a href="https://cdn.shopify.com/s/files/1/0805/3971/3813/files/Primal_Queen_COA-combined.pdf?v=1733152358" target="_blank">View Results</a></div>`
        );
    }
  });
};

export default () => {
  setup();

  init();
};
