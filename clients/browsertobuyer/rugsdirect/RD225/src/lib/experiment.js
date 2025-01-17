import setup from './services/setup';

const trackGAEvent = (eventCategory, eventAction, eventLabel) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'gaCustomEvent',
      eventCategory,
      eventAction,
      eventLabel
    });

    console.log('event tracked', eventCategory, eventAction, eventLabel);
  }
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('button[type="submit"]') && target.closest('#omnisend-forms-wrapper')) {
      setTimeout(() => {
        const thankYouElem = document.querySelector('[id*="success-sections"]');
        if (thankYouElem && window.getComputedStyle(thankYouElem).display !== 'none') {
          trackGAEvent('RD 225', 'email_submitted', '');
        }
      }, 500);
    }
  });

  trackGAEvent('RD 225', 'banner_shown', '');
};
