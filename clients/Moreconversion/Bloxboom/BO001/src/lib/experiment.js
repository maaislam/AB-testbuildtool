import { onUrlChange } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const isHomePage = () => {
  const path = window.location.pathname;

  const regex = /^\/([a-z]{2})?\/?$/;
  return regex.test(path);
};

const init = () => {
  if (!isHomePage()) return;

  const ourGamesSection = document.querySelector('section.layout.relative');
  const bestSellerSection = document.querySelector('section.bg-transparent');

  ourGamesSection.classList.add(`${ID}__ourGamesSection`);
  bestSellerSection.classList.add(`${ID}__bestSellerSection`);

  ourGamesSection.insertAdjacentElement('beforebegin', bestSellerSection);
};

export default () => {
  setup();
  init();

  onUrlChange(() => {
    init();
  });
};
