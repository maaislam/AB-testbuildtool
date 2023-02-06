export const getCategoryName = () => {
  const categoryNameConfig = {
    '%26catLevelMultiX%3D1_La4Piqll.dsAAAEEyImZio_D': 'serveurs',
    '%26catLevelMultiX%3D1_w9QPiqlltxMAAAEEYjCZio_D': 'stockage',
    '%26catLevelMultiX%3D1_pgkQxEQtStgAAAFQsD1WQjpn': 'synergy',
    '%26catLevelMultiX%3D1_XSsPiqllurAAAAEEHO2Zio_D': 'options'
  };
  const selectedCatalogElm = document.querySelector('#selectedCatalog .selecter-item.selected');
  const itemID = selectedCatalogElm ? selectedCatalogElm.dataset.value : '';
  return categoryNameConfig[itemID];
};
export const observeDOM = (targetSelectorString, callbackFunction, expId, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      //console.log(mutation);
      setTimeout(callbackFunction(mutation), 1000);
    });
  });

  //configuration of the observer:

  const config = configObject || {
    childList: true,
    subtree: true,
    characterData: true
  };

  observer.observe(target, config);
};

export const categoryUrlConfig = {
  '%26catLevelMultiX%3D1_La4Piqll.dsAAAEEyImZio_D':
    '%26catLevelMultiX%3D1_La4Piqll.dsAAAEEyImZio_D',
  '%26catLevelMultiX%3D1_pgkQxEQtStgAAAFQsD1WQjpn':
    '%26catLevelMultiX%3D1_pgkQxEQtStgAAAFQsD1WQjpn',
  '%26catLevelMultiX%3D1_w9QPiqlltxMAAAEEYjCZio_D':
    '%26catLevelMultiX%3D1_w9QPiqlltxMAAAEEYjCZio_D',
  '%26catLevelMultiX%3D1_XSsPiqllurAAAAEEHO2Zio_D': '%26catLevelMultiX%3D1_XSsPiqllurAAAAEEHO2Zio_D'
};

export const getNewUrl = (category, urlConfig) => {
  //const category = target.closest('.selecter-item').dataset.value;
  const url = new URL(window.location.href);
  const { searchParams } = url;
  searchParams.set('filterTerms', urlConfig[category]);
  return url.toString();
};
