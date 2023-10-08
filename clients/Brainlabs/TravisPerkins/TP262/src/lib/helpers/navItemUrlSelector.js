export const navItemUrlSelector =
  window.innerWidth > 1024
    ? '[data-test-id="header-nav-menu"] > div > div:not([data-test-id="nav-menu-bar"]) [data-test-id="nav-table-category"] [data-test-id="nav-table-category-list"] li a'
    : '[data-test-id="header-mobile-nav-menu"] > div:not([data-test-id="tp-category-tree"]) div div[data-test-id="mobile-category-wrapper"] > div [data-test-id="subcategory-wrapper"] ul[data-test-id="subcategory-list"] li[data-test-id="subcategory-item"] + div [data-test-id="subcategory-wrapper"] ul[data-test-id="subcategory-list"] li[data-test-id="subcategory-item"] a';
