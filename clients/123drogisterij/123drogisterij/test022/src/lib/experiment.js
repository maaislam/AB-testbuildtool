import setup from './services/setup';
import shared from './shared/shared';
import quizBanner from './components/quizBanner';

const { ID } = shared;

const scriptSrc = 'https://app.aiden.cx/webshop/build/aiden-embedded.min.js';

const init = () => {
  const targetPoint = document.querySelector('.product.media');
  //Check if script is already present
  const isScriptPresent = !!document.querySelector(`script[src="${scriptSrc}"]`);

  if (!isScriptPresent) {
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    document.body.insertAdjacentElement('afterbegin', script);
  }
  if (!document.querySelector(`.${ID}__quizBanner`)) {
    targetPoint.insertAdjacentHTML('beforeend', quizBanner(ID));
  }
};

export default () => {
  setup();
  init();
};
