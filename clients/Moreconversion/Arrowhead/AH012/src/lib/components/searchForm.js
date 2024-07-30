const searchForm = (id, className) => {
  const html = `
    <div class="${id}__searchForm ${className}">
        <form action="/search" method="get" class="search-modal__wrapper" role="search">
          <button type="submit" class="text-link search-modal__submit">
            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-search" viewBox="0 0 64 64"><path d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"></path></svg>
            <span class="icon__fallback-text">Search</span>
          </button>
          <input type="hidden" name="type" value="product">
          <input type="hidden" name="options[prefix]" value="last">
          <input type="search" name="q" value="" placeholder="Search for Joggers, Shorts, Etc." id="SearchModalInput" class="search-modal__input" aria-label="Search our store">
        </form>
    </div>
    `;
  return html.trim();
};

export default searchForm;
