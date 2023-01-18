export const getCategoryName = () => {
  const selectedCatalogElm = document.querySelector('#selectedCatalog .selecter-selected');
  return selectedCatalogElm ? selectedCatalogElm.textContent.toLowerCase().trim() : '';
};
