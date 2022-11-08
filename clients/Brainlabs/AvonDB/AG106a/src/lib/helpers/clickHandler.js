import shared from '../shared/shared';
import triggerEvent from './triggerEvent';
import waitForElm from './waitForElm';

const clickHandler = (id, event, fireEvent) => {
  const { target } = event;
  const pagesBtn = document.querySelector('[data-item-id="diaporamaBtn"]');
  const scrollshop =
    document.querySelector('[data-item-id="menuBtn"]') ||
    document.querySelector('[data-item-id="scrollshopBtn"]');
  if (target.matches('.subtitle[data-clicktakesto]')) {
    const clickTakesTo = target.dataset.clicktakesto;
    const newMenu = document.querySelector('[data-item-id="newMenuBtn"]');

    newMenu && triggerEvent(newMenu);

    if (clickTakesTo === 'scrollshop') {
      pagesBtn ? triggerEvent(scrollshop) : waitForElm('#scrollshop').then((elm) => elm.click());
    } else {
      pagesBtn ? triggerEvent(pagesBtn) : waitForElm('#pages').then((elm) => elm.click());
    }

    fireEvent(
      `User interacts with banner cta on ${
        clickTakesTo === 'scrollshop' ? 'pages' : 'scrollshop'
      } page`,
      shared
    );
  } else if (
    target.closest('[data-item-id^="sectorsContentDatalist_scroller_subObject"]') ||
    target.closest('.chapters_list')
  ) {
    fireEvent('User interacts with category quicky links on the brochure front cover', shared);
  } else if (target.closest('[data-item-id="pdcReturnBtn"]')) {
    fireEvent('User interacts with back to main CTA', shared);
  } else if (target.closest('[data-item-id="logoBtn"]')) {
    fireEvent('User interacts with Avon logo', shared);
  } else if (
    target.closest('[data-item-id="menuBtn"]') ||
    target.closest('[data-item-id="scrollshopBtn"]')
  ) {
    fireEvent('User interacts with scrollshop cta', shared);
  } else if (target.closest('[data-item-id="diaporamaBtn"]')) {
    fireEvent('User interacts with pages cta', shared);
  } else if (target.closest('[data-item-id="helpBtn"]')) {
    fireEvent('User interacts with help cta', shared);
  } else if (target.closest('[data-item-id="goTo_nextPageButton"]', shared)) {
    fireEvent('User interacts with next page cta', shared);
  } else if (target.closest('[data-item-id="goTo_previousPageButton"]')) {
    fireEvent('User interacts with previous page cta', shared);
  } else if (target.closest('[data-item-id="goTo_lastPageButton"]')) {
    fireEvent('User interacts with last page cta', shared);
  } else if (target.closest('[data-item-id="goTo_firstPageButton"]')) {
    fireEvent('User interacts with first page cta', shared);
  } else if (target.matches('[data-item-id="topBrochureMenuDatalist_scroller"]')) {
    fireEvent('User interacts with brochure selection in the carousel', shared);
  } else if (target.closest('#pagesContainer')) {
    fireEvent('User interacts with a page', shared);
  } else if (target.closest('.v7__plp__filters')) {
    fireEvent('User interacts with filters when on scroll shop', shared);
  } else if (target.closest(`.${id}__pagebanner-close`)) {
    //event.stopPropagation();
    const pageName = target.closest(`.${id}__pagebanner-close`).dataset.location;
    fireEvent(`User closes the banner in ${pageName}`, shared);
    //remove banner
    console.log('close');
    target.closest(`.${id}__pagebanner`).remove();
    //sessionStorage.setItem(`${ID}__${pageName}-navtextclosed`, true);
  }
};

export default clickHandler;
