const searchBar = (id) => {
  return `
  <div class="${id}__searchBarHero">
      <div class="${id}__searchBarContainer">
          <span class="p-header-search-icon js-cmp-search-bar-open-search-page">
              <svg class="icon">
                  <use xlink:href="#search"></use>
              </svg>
          </span>
          <input type="search"
                 name="q"
                 value=""
                 placeholder="What ARE YOU LOOKING FOR?"
                 autocomplete="off"
                 aria-label="What ARE YOU LOOKING FOR?"
                 aria-invalid="false">
      </div>
  </div>
</div>
  `;
};

export default searchBar;
