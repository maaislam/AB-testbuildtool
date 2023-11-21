import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup();
  const ctaBtns = document.querySelectorAll('form button.add-to-cart:not([disabled])');
  ctaBtns.forEach((ctaBtn) => {
    ctaBtn.classList.add(`${ID}__ctaBtn`);
  });
};
