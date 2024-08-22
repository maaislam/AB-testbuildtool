const fakeSearchBar = (id) => {
  const html = `
        <div class="block block-search ${id}__fakeSearchBar">
    <div class="block block-title">
        <strong>Search</strong>
    </div>

    <div class="block block-content">
        <form id="minisearch-form-top-search"
              class="form minisearch"
              action="https://www.luxuryflooringandfurnishings.co.uk/catalogsearch/result/"
              method="get">
            <div class="field search">
                <label class="label"
                       for="minisearch-input-top-search"
                       data-role="minisearch-label">
                    <span>Search</span>
                </label>

                <div class="control">
                    <input id="minisearch-input-top-search"
                           type="text"
                           name="q"
                           value=""
                           placeholder="What are you searching for?"
                           class="input-text"
                           maxlength="128"
                           role="combobox"
                           aria-haspopup="false"
                           aria-autocomplete="both"
                           aria-expanded="false"
                           autocomplete="off"
                           data-block="autocomplete-form">

                    <div id="minisearch-autocomplete-top-search"
                         class="search-autocomplete"
                         flockr="1"
                         style="display: none;"></div>

                </div>
            </div>

            <div class="actions">
                <button type="submit"
                        title="Search"
                        class="action search"
                        disabled="">
                    <span>Search</span>
                </button>
            </div>
        </form>
    </div>
</div>
    `;
  return html.trim();
};

export default fakeSearchBar;
