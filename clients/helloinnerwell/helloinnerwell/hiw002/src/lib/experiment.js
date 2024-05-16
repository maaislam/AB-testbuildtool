import setup from './services/setup';
import shared from './shared/shared';

const { VARIATION } = shared;

const ctaLinkConfig = {
  '/emdr': 'http://app.helloinnerwell.com/initial-screening/new-flow?product_option_triage=emdr',
  '/psychedelic-integration':
    'http://app.helloinnerwell.com/initial-screening/new-flow?product_option_triage=standalone_psychedelic_integration',
  '/psychiatry':
    'http://app.helloinnerwell.com/initial-screening/new-flow?product_option_triage=psychiatry',
  '/therapy':
    'http://app.helloinnerwell.com/initial-screening/new-flow?product_option_triage=therapy'
};

const init = () => {
  const getStartedCta = document.querySelector('[role="navigation"] [href*="/initial-screening"]');

  if (getStartedCta) {
    getStartedCta.href = ctaLinkConfig[window.location.pathname];
  }
};

export default () => {
  setup();

  const clickHandler = (event) => {
    const { target } = event;
    if (target.matches('[href*="/initial-screening"]') && target.closest('[role="navigation"]')) {
      //eslint-disable-next-line no-underscore-dangle
      window._conv_q = window._conv_q || [];
      //eslint-disable-next-line no-undef
      _conv_q.push(['triggerConversion', '100451937']);
    }
  };

  document.body.removeEventListener('click', clickHandler);
  document.body.addEventListener('click', clickHandler);

  if (VARIATION === 'control') {
    return;
  }

  init();
};
