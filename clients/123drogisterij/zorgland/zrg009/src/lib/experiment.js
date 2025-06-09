import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const allCards = document.querySelectorAll('.product_addtocart_form');
  allCards.forEach((card) => {
    const atcBtn = card.querySelector('button[aria-haspopup="dialog"]');
    if (atcBtn) atcBtn.textContent = 'in winkelwagen';
  });
};

export default () => {
  setup();

  init();
};
