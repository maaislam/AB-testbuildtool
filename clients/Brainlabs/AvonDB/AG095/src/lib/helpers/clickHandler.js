import prepareControl from './prepareControl';
import triggerEvent from './triggerEvent';

const clickHandler = (ID, VARIATION, fireEvent) => {
  document.body.addEventListener('click', (e) => {
    prepareControl(ID);
    const target = e.target;
    const targetMatched = (desiredMatch) =>
      target.matches(desiredMatch) || target.closest(desiredMatch);

    if (targetMatched(`.${ID}__menubar-item--Pages`)) {
      const controlPages = document.querySelector('[data-item-id="diaporamaBtn"]');
      triggerEvent(controlPages);
    } else if (targetMatched(`.${ID}__menubar-item--Scrollshop`)) {
      const scrollshop = document.querySelector('[data-item-id="menuBtn"]');
      triggerEvent(scrollshop);
    } else if (targetMatched(`.${ID}__menubar-item--Search`)) {
      const searchIcon = document.querySelector('[data-item-id="searchIcon"]');
      triggerEvent(searchIcon);
    } else if (targetMatched(`.${ID}__menubar-item--Brochures`)) {
      const slideWrapper = document.querySelector(`.${ID}__slide--wrapper`);

      const isCatSwiperHidden = slideWrapper
        .querySelector(`.${ID}__catalog-swiper`)
        .classList.contains(`${ID}__invisible`);
      const buttonTitle = target.closest(`.${ID}__menubar-item--Brochures`).querySelector('.title');

      fireEvent(
        `Test ID: ${ID} Variation: ${VARIATION} Label: User clicks “Show” or “Hide” Brochure`
      );
      const addToCart = document.querySelector(`.${ID}__basket-section`);

      //document.querySelector(`.${ID}__repname .subtitle`).classList.toggle(`${ID}__hide`);
      if (isCatSwiperHidden) {
        slideWrapper.classList.add(`slide-in-bottom`);
        slideWrapper.classList.remove(`slide-out-bottom`);
        slideWrapper.querySelector(`.${ID}__catalog-swiper`).classList.remove(`${ID}__invisible`);
        slideWrapper
          .querySelector(`.${ID}__repname>.subtitle`)
          ?.classList.remove(`${ID}__invisible`);
        addToCart?.classList.remove('reduced-position');
        buttonTitle.innerText = 'Hide Brochures';
        document.querySelectorAll(`.v7__elem__catalog__slide-page-image`).forEach((item) => {
          item?.classList.add(`${ID}__catalog--image`);
        });
        document.querySelectorAll(`.v7__elem__catalog__slide-page-wrapper`).forEach((item) => {
          item?.classList.add(`${ID}__catalogslide--wrapper`);
        });
      } else {
        slideWrapper.classList.add(`slide-out-bottom`);
        slideWrapper.classList.remove(`slide-in-bottom`);
        buttonTitle.innerText = 'Show Brochures';
        addToCart?.classList.add('reduced-position');

        document.querySelector('.AG085a__rep--container')?.classList.add(`${ID}__hide`);

        document.querySelectorAll(`.v7__elem__catalog__slide-page-image`).forEach((item) => {
          item?.classList.remove(`${ID}__catalog--image`);
        });
        document.querySelectorAll(`.v7__elem__catalog__slide-page-wrapper`).forEach((item) => {
          item?.classList.remove(`${ID}__catalogslide--wrapper`);
        });
        setTimeout(() => {
          slideWrapper.querySelector(`.${ID}__catalog-swiper`).classList.add(`${ID}__invisible`);
          slideWrapper
            .querySelector(`.${ID}__repname>.subtitle`)
            ?.classList.add(`${ID}__invisible`);
        }, 500);
      }
    } else if (
      targetMatched(`.${ID}__cartbtn`) ||
      targetMatched(`.${ID}AG095__menubar-item--Basket`)
    ) {
      const cartBtn = document.querySelector('[data-item-id="wishlistButton"]');
      triggerEvent(cartBtn);
      fireEvent('User clicks the basket');
      fireEvent(`Test ID: ${ID} Variation: ${VARIATION} Label: User clicks the basket`);
    }
  });
};

export default clickHandler;
