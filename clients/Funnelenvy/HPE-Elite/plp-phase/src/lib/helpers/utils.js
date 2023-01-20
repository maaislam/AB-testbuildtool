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
export const observeDOM = (targetSelectorString, callbackFunction, expId, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);
  let oldHref = window.location.href;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      let urlChanged = false;
      if (oldHref !== window.location.href) {
        oldHref = window.location.href;
        urlChanged = true;
      }
      const { addedNodes, removedNodes } = mutation;
      const modifiedNodes = [...addedNodes, ...removedNodes];
      if (!modifiedNodes.some((node) => node.nodeType === 1 && node.matches(`[class^=${expId}]`))) {
        setTimeout(callbackFunction(mutation, urlChanged), 1000);
      }
    });
  });

  //configuration of the observer:

  const config = configObject || {
    childList: true,
    subtree: true
  };

  observer.observe(target, config);
};
