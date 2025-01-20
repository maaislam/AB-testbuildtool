import quoteHtml from './components/quote';
import { data } from './data/data';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const { pathname } = window.location;
  const attachPoint = document.querySelector('#ProductDetails');

  const urlSpecificData = data[pathname];

  if (!document.querySelector(`.${ID}__quoteContainer`)) {
    attachPoint.insertAdjacentHTML('afterbegin', quoteHtml(ID, urlSpecificData));
  }
};

export default () => {
  setup();

  init();
};
