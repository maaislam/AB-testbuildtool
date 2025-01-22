import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const messageHTML = `<div class="${ID}__message">
    <span class="fa fa-truck">&nbsp;</span>
    <span class="${ID}__message-text"> Vanwege een interne verhuizing verzenden wij uw bestelling op donderdag </span>
  </div>`;

  const attachPoint = document.querySelector('.column.main');
  if (!document.querySelector(`.${ID}__message`)) {
    attachPoint.insertAdjacentHTML('afterbegin', messageHTML);
  }
};

export default () => {
  setup();
  init();
};
