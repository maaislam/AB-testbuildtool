import setup from './services/setup';
import shared from './shared/shared';

const { VARIATION } = shared;

const init = () => {
  const firstAccordion = document.querySelectorAll('.product__accordions .product__accordion')[0];
  const firstAccordionHeading = document.querySelectorAll(
    '.product__accordions .product__accordion-heading'
  )[0];

  if (firstAccordionHeading.textContent.toLocaleLowerCase().trim() === 'this fragrance:') {
    document
      .querySelectorAll('.product__accordions .product__accordion-heading')
      .forEach((accordion) => {
        if (accordion.classList.contains('is-active') && accordion === firstAccordionHeading) {
          accordion.classList.remove('is-active');
        }
      });

    document.querySelectorAll('.product__accordions .product__accordion').forEach((accordion) => {
      if (accordion.classList.contains('is-active') && accordion === firstAccordion) {
        accordion.classList.remove('is-active');
      }
    });
    firstAccordionHeading.classList.add('is-active');
    firstAccordion.classList.add('is-active');
  }
};

export default () => {
  setup();

  if (VARIATION === 'Control') return;

  init(); //
};
