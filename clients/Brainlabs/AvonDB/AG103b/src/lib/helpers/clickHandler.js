import triggerEvent from './triggerEvent';
import { isMobile, removeExisting } from './utils';

const clickHandler = (fireEvent, { ID, VARIATION }) => {
  document.querySelector(`.${ID}__slidecatalog`).addEventListener('click', ({ target }) => {
    const targetMatched = (desiredMatch) =>
      target.matches(desiredMatch) || target.closest(desiredMatch);
    if (targetMatched(`.${ID}__slidecatalog--content`)) {
      if (VARIATION === '1') {
        window.location.href = target.closest(`.${ID}__slidecatalog--content`).dataset.href;
        return;
      }
      const scrollshop =
        document.querySelector('[data-item-id="menuBtn"]') ||
        document.querySelector('[data-item-id="scrollshopBtn"]');
      triggerEvent(scrollshop);
      //removeExisting(ID);
      const sortBtn = document.querySelectorAll('.list_options_button')[1];
      sortBtn?.click();
      setTimeout(() => {
        const promoBtn = document.getElementById('plp_sort_by_promotion');
        promoBtn.click();
        if (!isMobile) return;
        setTimeout(() => {
          document.querySelector('.close_button')?.click();
        }, 300);
      }, 300);
      fireEvent('User clicks with the clearance brochure element', {
        ID,
        VARIATION
      });
    } else if (targetMatched(`.${ID}__closeicon`)) {
      removeExisting(ID);
      sessionStorage.setItem(`${ID}__user-closed`, 'true');
      fireEvent('User closes with the clearance brochure element', {
        ID,
        VARIATION
      });
    }
  });
};

export default clickHandler;
