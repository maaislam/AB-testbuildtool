import { onUrlChange } from './helpers/utils';
import setup from './services/setup';

const isHomePage = () => {
  const path = window.location.pathname;

  const regex = /^\/([a-z]{2})?\/?$/;
  return regex.test(path);
};

const init = () => {
  if (isHomePage()) {
    window.convert.redirect('https://bloxboom.com/en/store/murder-mystery-2');
  }
};

export default () => {
  setup();

  init();

  onUrlChange(() => {
    init();
  });
};
