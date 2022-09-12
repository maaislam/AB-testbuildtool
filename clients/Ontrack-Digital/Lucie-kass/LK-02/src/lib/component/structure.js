export const searchBar = () => {
  return `
  <div id="search-popdown" class="search__predictive" data-popdown-outer="">
  <div class="item--loadbar" data-loading-indicator="" style="display: none;"></div>
  <div class="search__predictive__outer">
    <div class="wrapper">
      <div class="search__predictive__main">
        <form class="search__predictive__form" action="/search" method="get" role="search">
          <button class="search__predictive__form__button" type="submit">
            <span class="visually-hidden">Search</span>
            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-search" viewBox="0 0 16 16"><path d="M16 14.864L14.863 16l-4.24-4.241a6.406 6.406 0 01-4.048 1.392 6.61 6.61 0 01-4.65-1.925A6.493 6.493 0 01.5 9.098 6.51 6.51 0 010 6.575a6.536 6.536 0 011.922-4.652A6.62 6.62 0 014.062.5 6.52 6.52 0 016.575 0 6.5 6.5 0 019.1.5c.8.332 1.51.806 2.129 1.423a6.454 6.454 0 011.436 2.13 6.54 6.54 0 01.498 2.522c0 1.503-.468 2.853-1.4 4.048L16 14.864zM3.053 10.091c.973.972 2.147 1.461 3.522 1.461 1.378 0 2.551-.489 3.525-1.461.968-.967 1.45-2.138 1.45-3.514 0-1.37-.482-2.545-1.45-3.524-.981-.968-2.154-1.45-3.525-1.45-1.376 0-2.547.483-3.513 1.45-.973.973-1.46 2.146-1.46 3.523 0 1.375.483 2.548 1.45 3.515z"></path></svg>
          </button>
          <input type="search" data-predictive-search-input="" name="q" value="" placeholder="Search..." aria-label="Search our store">
        </form>
        <div class="search__predictive__close">
          <button class="search__predictive__close__inner" data-close-popdown="" aria-label="Close">
            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-close-small" viewBox="0 0 15 15"><g fill-rule="evenodd"><path d="M2.237 1.073l12.021 12.021-1.414 1.414L.824 2.488z"></path><path d="M.823 13.094l12.021-12.02 1.414 1.413-12.02 12.021z"></path></g></svg>
          </button>
        </div>

        <div class="search__predictive__clear">
          <button class="search__predictive__close__inner" data-clear-input="" aria-label="Close">
            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" viewBox="0 0 15 15"><g fill-rule="evenodd"><path d="M2.06 1l12.02 12.021-1.06 1.061L1 2.062z"></path><path d="M1 13.02L13.022 1l1.061 1.06-12.02 12.02z"></path></g></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="header__search__results" data-predictive-search-results="">
    <div class="wrapper">
      <div class="search__results__empty" data-predictive-search-aria=""></div>
      <div class="search__results__outer">

        <div class="search__results__products">
          <div class="search__results__products__title" data-product-title-wrap=""></div>
          <div class="search__results__products__list" data-product-wrap="">
            
          </div>
        </div>
        <div class="search__results__other">
          <div class="search__results__other__list" data-collection-wrap=""></div>
          <div class="search__results__other__list" data-article-wrap=""></div>
          <div class="search__results__other__list" data-page-wrap=""></div>
        </div>
      </div>
    </div>
  </div>
</div>
    
    `;
};

export const searchFindText = (id, text) => {
  return `<p class="${id}__searchFindText">${text}</p>`;
};

export const searchIcon = (id) => {
  return `
    <div class="${id}__searchIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50"><path fill="#ccc" d="M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13s13 5.8 13 13s-5.8 13-13 13zm0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11s11-4.9 11-11s-4.9-11-11-11z"/><path fill="#ccc" d="m32.682 31.267l8.98 8.98l-1.414 1.414l-8.98-8.98z"/></svg>
    </div>

    `;
};
