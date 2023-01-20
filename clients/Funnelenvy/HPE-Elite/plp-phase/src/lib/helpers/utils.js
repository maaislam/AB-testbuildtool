export const getCategoryName = () => {
  const categoryNameConfig = {
    '%26catLevelMultiX%3D1_La4Piqll.dsAAAEEyImZio_D': 'serveurs',
    '%26catLevelMultiX%3D1_w9QPiqlltxMAAAEEYjCZio_D': 'stockage',
    '%26catLevelMultiX%3D1_pgkQxEQtStgAAAFQsD1WQjpn': 'synergy'
  };
  const selectedCatalogElm = document.querySelector('#selectedCatalog .selecter-item.selected');
  const itemID = selectedCatalogElm ? selectedCatalogElm.dataset.value : '';
  return categoryNameConfig[itemID];
};
