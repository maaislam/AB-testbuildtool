import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM, pollerLite, fetchProducts } from './helpers/utils';
import scentWrapper from './components/scentWrapper';
import scentData from './data/data';
import tagWrapper from './components/tagWrapper';

const { ID, VARIATION } = shared;

const findSimilarElements = (upcomingData, mainArray) => {
  return upcomingData.filter((item) => mainArray.includes(item));
};

const init = (data) => {
  setup();

  if (document.querySelector(`.${ID}__scentWrapper`)) {
    document.querySelector(`.${ID}__scentWrapper`).remove();
  }

  if (!document.querySelector(`.${ID}__scentWrapper`) && data.length) {
    document
      .querySelector('.boost-sd-layout')
      .insertAdjacentHTML('afterbegin', scentWrapper(ID, data));
  }
};

const repeatfn = () => {
  pollerLite(
    [
      '.template-collection',
      '#boost-sd_filter-tree-mobile',
      '#boost-sd_filter-tree-mobile #pf_t_scent-toggle',
      '#boost-sd_filter-tree-mobile #pf_t_scent',
      () => window.innerWidth <= 991
    ],
    () => {
      const stickyOverlay = document.querySelector(
        '#boost-sd_filter-tree-mobile .boost-sd__filter-tree-vertical-sticky-overlay'
      );
      const toggleButton = document.querySelector('#boost-sd__filter-tree-toggle-button');
      const mobileScent = document.querySelector('#boost-sd_filter-tree-mobile #pf_t_scent-toggle');
      stickyOverlay.style.opacity = '0';
      toggleButton.click();
      mobileScent.click();
      if (mobileScent) {
        pollerLite(['#boost-sd_filter-tree-mobile #pf_t_scent'], () => {
          const scentInfo = [];
          const collectScent = document.querySelector('#boost-sd_filter-tree-mobile #pf_t_scent');
          collectScent.querySelectorAll('li').forEach((list) => {
            const scentText = list.querySelector('button').ariaLabel;
            scentInfo.push(scentText);
          });

          setTimeout(() => {
            const toolBar = document.querySelector(
              '.boost-sd__filter-tree-vertical-mobile-toolbar > button'
            );
            const buttonClose = document.querySelector('.boost-sd__button.boost-sd__button--close');
            if (buttonClose) {
              toolBar.click();
              buttonClose.click();
              stickyOverlay.removeAttribute('style');
            }
          }, 500);

          if (scentInfo.length > 0) {
            init(scentInfo);
          }
        });
      }
    }
  );
};

const repeatFnDesktop = () => {
  pollerLite(
    [
      '.template-collection',
      '#boost-sd__filter-tree-wrapper',
      '#boost-sd__filter-tree-wrapper div[data-filteroptionid="pf_t_scent"]',
      () => window.innerWidth >= 992
    ],
    () => {
      const scentDataDesktop = [];

      const scentLists = document.querySelectorAll('ul[id="pf_t_scent"] > li');
      scentLists.forEach((list) => {
        const scentText = list.querySelector('button').ariaLabel;
        scentDataDesktop.push(scentText);
      });

      init(scentDataDesktop);
    }
  );
};

const prodInit = (data) => {
  const selectedTags = findSimilarElements(data, scentData);
  if (!selectedTags.length) return;
  setup();

  const isActiveAccordion = document.querySelector(
    '.product__accordion.is-active  .metafield-rich_text_field'
  );
  const targetElement = isActiveAccordion.querySelectorAll('p')[1] || isActiveAccordion;

  if (document.querySelector(`.${ID}__tagWrapper`)) {
    document.querySelector(`.${ID}__tagWrapper`).remove();
  }
  if (targetElement) {
    targetElement.insertAdjacentHTML('afterend', tagWrapper(ID, selectedTags));
  } else {
    isActiveAccordion.insertAdjacentHTML('beforeend', tagWrapper(ID, selectedTags));
  }
};

export default () => {
  //use if needed

  pollerLite(['.template-product'], () => {
    const { pathname } = window.location;
    fetchProducts(pathname).then(
      (products) => products && products.tags && prodInit(products.tags)
    );
  });

  pollerLite(
    [
      '.template-collection',
      '#boost-sd_filter-tree-mobile',
      '#boost-sd_filter-tree-mobile #pf_t_scent-toggle',
      '#boost-sd_filter-tree-mobile #pf_t_scent',
      () => window.innerWidth <= 991
    ],
    () => {
      const stickyOverlay = document.querySelector(
        '#boost-sd_filter-tree-mobile .boost-sd__filter-tree-vertical-sticky-overlay'
      );
      const toggleButton = document.querySelector('#boost-sd__filter-tree-toggle-button');
      const mobileScent = document.querySelector('#boost-sd_filter-tree-mobile #pf_t_scent-toggle');
      stickyOverlay.style.opacity = '0';
      toggleButton.click();
      mobileScent.click();
      const scentDataMobile = [];
      if (mobileScent) {
        pollerLite(['#boost-sd_filter-tree-mobile #pf_t_scent'], () => {
          const collectScent = document.querySelector('#boost-sd_filter-tree-mobile #pf_t_scent');
          collectScent.querySelectorAll('li').forEach((list) => {
            const scentText = list.querySelector('button').ariaLabel;
            scentDataMobile.push(scentText);
          });

          setTimeout(() => {
            const toolBar = document.querySelector(
              '.boost-sd__filter-tree-vertical-mobile-toolbar > button'
            );
            const buttonClose = document.querySelector('.boost-sd__button.boost-sd__button--close');
            if (buttonClose) {
              toolBar.click();
              buttonClose.click();
              stickyOverlay.removeAttribute('style');
            }
          }, 500);

          if (scentData.length > 0) {
            init(scentDataMobile);
          }
        });
      }
    }
  );

  pollerLite(
    [
      '.template-collection',
      '#boost-sd__filter-tree-wrapper',
      '#boost-sd__filter-tree-wrapper div[data-filteroptionid="pf_t_scent"]',
      () => window.innerWidth >= 992
    ],
    () => {
      const scentDataDesktop = [];

      const scentLists = document.querySelectorAll('ul[id="pf_t_scent"] > li');
      scentLists.forEach((list) => {
        const scentText = list.querySelector('button').ariaLabel;
        scentDataDesktop.push(scentText);
      });

      init(scentDataDesktop);
    }
  );

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__scentWrapper-item`)) {
      const clickedItem = target.closest(`.${ID}__scentWrapper-item`);
      const label = clickedItem.dataset.attr;
      const allItems = document.querySelectorAll(`.${ID}__scentWrapper-item`);
      allItems.forEach((item) => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');
      if (window.innerWidth <= 991) {
        document
          .querySelector(
            `#boost-sd_filter-tree-mobile ul[id="pf_t_scent"] > li button[aria-label="${label}"]`
          )
          .click();
        setTimeout(() => {
          repeatfn();
        }, 1000);
      } else {
        document.querySelector(`ul[id="pf_t_scent"] > li button[aria-label="${label}"]`)?.click();
        document.querySelector('#pf_t_scent-toggle-target button.boost-sd__button--apply').click();
        setTimeout(() => {
          repeatFnDesktop();
        }, 1000);
      }
    } else if (target.closest('#boost-sd__button--clear-all-filters')) {
      const allItems = document.querySelectorAll(`.${ID}__scentWrapper-item`);
      allItems.forEach((item) => {
        item.classList.remove('active');
      });
      setTimeout(() => {
        window.innerWidth <= 991 && repeatfn();
        window.innerWidth >= 992 && repeatFnDesktop();
      }, 1000);
    } else if (
      target.closest('.boost-sd__pagination') ||
      target.closest('.boost-sd__sorting-list') ||
      target.closest('.boost-sd__in-collection-search') ||
      target.closest('#pf_pt_product_type-toggle-target') ||
      target.closest('button[aria-label="Clear filter"]') ||
      target.closest('#pf_p_price-apply-button') ||
      target.closest('.boost-sd__button--apply') ||
      target.closest('.boost-sd__button--clear') ||
      target.closest('.boost-sd__view-as') ||
      target.closest('.boost-sd__button--result')
    ) {
      setTimeout(() => {
        window.innerWidth <= 991 && repeatfn();
        window.innerWidth >= 992 && repeatFnDesktop();
      }, 1000);
    }
  });

  if (document.body.classList.contains('template-collection')) {
    const parentElement = document
      .querySelector('.boost-sd__filter-product-list')
      .closest('.shopify-block');

    parentElement.addEventListener('input', (event) => {
      if (event.target && event.target.matches('input.boost-sd__in-collection-search-input')) {
        setTimeout(() => {
          window.innerWidth <= 991 && repeatfn();
          window.innerWidth >= 992 && repeatFnDesktop();
        }, 1000);
      }
    });
  }
};
