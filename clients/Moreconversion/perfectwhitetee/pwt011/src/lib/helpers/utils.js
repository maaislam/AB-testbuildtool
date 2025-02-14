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

export const parseHTML = async (id, urls) => {
  const promises = urls.map((url) =>
    fetch(url).catch((error) => {
      console.error(`Error fetching ${url}: ${error.message}`);
      return Promise.resolve(null);
    }));
  const responses = await Promise.all(promises);
  for (const [index, response] of responses.entries()) {
    if (response) {
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const variantWrapper = doc.querySelector('.variant-input-wrap[data-handle="color"]');
      const photoSection = doc.querySelector('.product__main-photos');
      const image = photoSection.querySelectorAll('.product-main-slide')[1]?.querySelector('img')
        ?.dataset?.photoswipeSrc;
      const link = response.url;
      if (variantWrapper) {
        const allLabels = variantWrapper.querySelectorAll('.variant-input').forEach((label) => {
          label.querySelector('input').removeAttribute('checked');
          label.querySelector('label').classList.add('custom-label');
        });
        const targetElement = document.querySelector(`.${id}__recentlyViewed a[href="${link}"]`);
        const secondaryImageElement = targetElement.querySelector(
          '.grid-product__secondary-image img'
        );
        if (image) {
          secondaryImageElement.dataset.srcset = image;
          secondaryImageElement.srcset = image;
        }
        const colorElement = targetElement.querySelector('.grid-product__colors');
        colorElement.innerHTML = variantWrapper.outerHTML;
      }
    }
  }
};

//export const parseJSON = async (urls) => {
//const promises = urls.map((url) =>
//fetch(url)
//.then((response) => response.json()) //Parse the response as JSON
//.catch((error) => {
//console.error(`Error fetching ${url}: ${error.message}`);
//return null; //Return null if an error occurs
//})
//);

//const data = await Promise.all(promises);

////Filter out any null responses caused by fetch errors
//const validData = data.filter((item) => item !== null);

//return validData; //Return all valid product data in an array
//};
