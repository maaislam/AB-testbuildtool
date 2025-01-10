export const getSearchResult = (url) => {
  return fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
      throw new Error(`Request failed with status: ${response.status}`);
    })
    .then((html) => {
      const parser = new DOMParser();
      const parsedHTML = parser.parseFromString(html, 'text/html');
      const buySection = parsedHTML.querySelector('#buy');

      return buySection;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};

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

export const addToCart = (payload) => {
  const response = fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((result) => {
    const res = result.json();

    return res;
  });
  return response;
};
