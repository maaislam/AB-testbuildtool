import card from './components/card';
import usp from './components/usp';
import { data, uspData } from './data/data';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const uspAttachPoint = document.querySelector('.breadcrumbs');
  const quickLinksAttachPoint = document.querySelector('.filter-toolbar');

  if (!document.querySelector(`.${ID}__usps`)) {
    const usps = () =>
      `<div class="${ID}__usps">${uspData.map((item) => usp(ID, item)).join('')}</div>`;
    uspAttachPoint.insertAdjacentHTML('afterend', usps());
  }

  if (document.querySelector(`.${ID}__quickLinks`)) return;
  const quickLinks = () =>
    `<div class="${ID}__quickLinks">${data.map((item) => card(ID, item)).join('')}</div>`;
  quickLinksAttachPoint.insertAdjacentHTML('beforebegin', quickLinks());
};

export default () => {
  setup();
  init();
};
