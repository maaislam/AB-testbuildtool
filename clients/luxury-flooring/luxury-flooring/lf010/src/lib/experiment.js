import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const floorFinderStr = () => {
  const html = `<a href="/#quiz-rkHWx0" class="${ID}__floorFinder">Floor Finder</a>`;
  return html.trim();
};

export default () => {
  setup();
  if (window.location.href.includes('quiz-rkHWx0')) {
    //document.querySelector(`.${ID}__floorFinder`).style.display = 'none';
    document.body.classList.add('quiz');
    const rhModal = document.querySelector('.rh-modal');
    if (rhModal) {
      rhModal.style.zIndex = null;
      //rhModal.style.zIndex = '9999999999';
    }

    const chatWidget = document.querySelector('##hubspot-messages-iframe-container');
    if (chatWidget) {
      chatWidget.style.zIndex = null;
      chatWidget.style.zIndex = '9999999';
    }
  }

  if (VARIATION === 'control') {
    return;
  }

  if (!document.querySelector(`.${ID}__floorFinder`)) {
    document.body.insertAdjacentHTML('beforeend', floorFinderStr());
  }
};
