const prepareControl = (ID) => {
  const cookieBtn = document.getElementById('gdpr-cookie-button');
  const topBrochureMenu = document.querySelector('[data-item-id="topBrochureMenu"]');
  topBrochureMenu.classList.add(`${ID}__topBrochureMenu`);
  cookieBtn.classList.add(`${ID}__cookie-container`);
  cookieBtn.querySelector('p').innerText = '';

  document.body.classList.add(`${ID}__mainWrapper`);

  //adjust catlog size

  //document.querySelectorAll(`.v7__elem__catalog__slide-page-image`).forEach((item) => {
  //item?.classList.add(`${ID}__catalog--image`);
  //});
  //document.querySelectorAll(`.v7__elem__catalog__slide-page-wrapper`).forEach((item) => {
  //item?.classList.add(`${ID}__catalogslide--wrapper`);
  //});

  //adjust height of pages
  //v7__pdp_basket mobile #pagesList
  const pageSpecificElems = {
    '.v7__pdp_basket.mobile': 132,
    '.v7__plp__list.mobile': 135,
    '.v7__search_results': 132,
    '.products_list.search_mode': 132,
    '.v7__scroll_container': 132,
    '.v7__pages.mobile .main_content': 175
  };

  Object.keys(pageSpecificElems).forEach((item) => {
    if (!document.querySelector(item)) return;
    document.querySelector(item).style.height = `calc(100% - ${pageSpecificElems[item]}px)`;
  });

  document.querySelector('[data-item-id="shareBtnContainer"]').classList.add(`${ID}__shareBtn`);

  //PDP page
  const mainContainer = document
    .querySelector('#v7_vue_pdp_detail')
    ?.closest('.v7__elem--container');
  mainContainer?.classList.add(`${ID}__mainContainer`);

  //pdp cart btn
  const isAttached =
    window.location.pathname.indexOf('/avon') !== -1 ||
    window.location.search.indexOf('rep_id') !== -1;
  const basketSection = document.querySelector('.basket_section');
  basketSection?.classList.add(
    `${ID}__basket-section`,
    `${isAttached ? 'attached' : 'not-attached'}`
  );
  const isCatSwiperHidden = document
    .querySelector(`.${ID}__catalog-swiper`)
    ?.classList.contains(`${ID}__invisible`);
  if (isCatSwiperHidden) {
    basketSection?.classList.add('reduced-position');
  }

  //hide control catalog slider
  document.querySelector('[data-item-id="topBrochureMenu"]').classList.add(`${ID}__hide`);
  document.querySelector('[data-item-id="shoppingWith"]').classList.add(`${ID}__hide`);
};

export default prepareControl;
