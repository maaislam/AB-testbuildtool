/**
 * Polls the DOM for a condition to be met before executing a callback.
 *
 * @param {array} conditions The array of conditions to check for.
 * @param {function} callback The callback function when all conditions are true.
 * @param {number} maxTime max time the check witll run before abort.
 */
export const pollerLite = (conditions, callback, maxTime = 10000) => {
  const POLLING_INTERVAL = 25;
  const startTime = Date.now();
  const interval = setInterval(() => {
    const allConditionsMet = conditions.every((condition) => {
      if (typeof condition === 'function') {
        return condition();
      }
      return !!document.querySelector(condition);
    });
    if (allConditionsMet) {
      clearInterval(interval);
      callback();
    } else if (Date.now() - startTime >= maxTime) {
      clearInterval(interval);
      console.error('Polling exceeded maximum time limit');
    }
  }, POLLING_INTERVAL);
};
export const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);

  if (!target) return;
  //configuration of the observer:

  const config = configObject || {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
    characterDataOldValue: true
  };
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      //console.log(mutation);
      observer.disconnect();

      callbackFunction(mutation);
      observer.observe(target, config);
    });
  });

  observer.observe(target, config);
};

export const extractAttributes = () => {
  const mapping = {
    joining_method: 'Joining method',
    finish_select: 'Finish',
    room_suitability: 'Room suitability',
    product_guarantee: 'Guarantee',
    installation_method: 'Installation method'
  };

  return Object.entries(mapping).map(([dataCode, name]) => {
    const el = document.querySelector(`.value [data-code="${dataCode}"]`);
    const value = el?.textContent.trim() || '';
    return {
      name,
      value
    };
  });
};

export const extractPdfIcons = () => {
  const features = document.querySelectorAll('.product-features-grid .product-feature');
  return Array.from(features).map((feature) => {
    const value = feature.querySelector('strong')?.textContent.trim() || '';
    return {
      name: 'pdf_icon',
      value
    };
  });
};

export const mergeAttributesWithIcons = (mainArray, pdfArray) => {
  if (!Array.isArray(pdfArray) || pdfArray.length === 0) {
    return mainArray;
  }

  const result = [];

  //eslint-disable-next-line no-restricted-syntax
  for (const item of mainArray) {
    result.push(item);
    if (item.name.toLowerCase() === 'finish') {
      result.push(...pdfArray);
    }
  }

  return result;
};

//export const enrichMergedArray = (mergedArray, mainObj) => {
//return mergedArray.reduce((acc, item) => {
//const key = item.name.toLowerCase();
//const section = mainObj[key];
//if (!section) return acc;

//const match = section.options.find(
//(opt) =>
//(opt.value &&
//(item.value.toLowerCase().includes(opt.value.toLowerCase()) ||
//opt.value.toLowerCase().includes(item.value.toLowerCase()))) ||
//(opt.detail &&
//(item.value.toLowerCase().includes(opt.detail.toLowerCase()) ||
//opt.detail.toLowerCase().includes(item.value.toLowerCase())))
//);

//if (match) {
//acc.push({
//...item,
//...match
//});
//}

//return acc;
//}, []);
//};

export const enrichMergedArray = (mergedArray, mainObj) => {
  return mergedArray.reduce((acc, item) => {
    const key = item.name.toLowerCase();
    const section = mainObj[key];
    if (!section) return acc;

    const itemValue = item.value.toLowerCase().trim();
    const requiresExactMatch = key === 'finish' || key === 'pdf_icon' || key === 'room suitability';

    //Try exact match first
    const exactMatch = section.options.find((opt) => {
      const optValue = (opt.value || '').toLowerCase().trim();
      const optDetail = (opt.detail || '').toLowerCase().trim();
      return itemValue === optValue || itemValue === optDetail;
    });

    //If exact match is required or found, use it
    if (requiresExactMatch || exactMatch) {
      if (exactMatch) {
        acc.push({
          ...item,
          ...exactMatch
        });
      }
      return acc;
    }

    //Otherwise, fallback to partial match (includes)
    const fallbackMatch = section.options.find((opt) => {
      const optValue = (opt.value || '').toLowerCase().trim();
      const optDetail = (opt.detail || '').toLowerCase().trim();
      return (
        itemValue.includes(optValue) ||
        optValue.includes(itemValue) ||
        itemValue.includes(optDetail) ||
        optDetail.includes(itemValue)
      );
    });

    if (fallbackMatch) {
      acc.push({
        ...item,
        ...fallbackMatch
      });
    }

    return acc;
  }, []);
};

export const captureElementsContainingString = (searchString) => {
  const elements = [...document.querySelectorAll('.product-detail-col > h5')]; //Get all elements as an array

  return elements.filter((el) => el.textContent.toLowerCase().trim().includes(searchString));
};
