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

//export const waitForElement = (selector, trigger, delayInterval, delayTimeout) => {
//var interval = setInterval(() => {
//if (
//document &&
//document.querySelector(selector) &&
//document.querySelectorAll(selector).length > 0
//) {
//clearInterval(interval);
//trigger();
//}
//}, delayInterval);
//setTimeout(() => {
//clearInterval(interval);
//}, delayTimeout);
//};

export const live = (selector, event, callback, context) => {
  /****Helper Functions****/
  //helper for enabling IE 8 event bindings
  function addEvent(el, type, handler) {
    if (el.attachEvent) el.attachEvent(`on${type}`, handler);
    else el.addEventListener(type, handler);
  }
  //matches polyfill
  this &&
    this.Element &&
    (function (ElementPrototype) {
      ElementPrototype.matches =
        ElementPrototype.matches ||
        ElementPrototype.matchesSelector ||
        ElementPrototype.webkitMatchesSelector ||
        ElementPrototype.msMatchesSelector ||
        function (selector) {
          const node = this;
          const nodes = (node.parentNode || node.document).querySelectorAll(selector);
          let i = -1;
          while (nodes[++i] && nodes[i] != node);
          return !!nodes[i];
        };
    }(Element.prototype));
  //live binding helper using matchesSelector
  function live(selector, event, callback, context) {
    addEvent(context || document, event, (e) => {
      let found;
      let el = e.target || e.srcElement;
      while (el && el.matches && el !== context && !(found = el.matches(selector))) {
        el = el.parentElement;
      }
      if (found) callback.call(el, e);
    });
  }
  live(selector, event, callback, context);
};
