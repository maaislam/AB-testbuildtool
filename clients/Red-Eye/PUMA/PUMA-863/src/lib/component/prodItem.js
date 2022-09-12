const ProductItem = (item, countryName) => {
  const { name, url } = item;
  const prodItem = `
        <a class="p-search-dropdown-link"
          href="https://eu.puma.com${countryName}en/${url}">
          <span class="p-search-dropdown-link-inner"><span
                   class="suggestion-breadcrumb">${name}</span></span>
        </a>
        `;
  return prodItem;
};

export default ProductItem;
