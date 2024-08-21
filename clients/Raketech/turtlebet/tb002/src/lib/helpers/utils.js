/**
 * Polls the DOM for a condition to be met before executing a callback.
 *
 * @param {array} conditions The array of conditions to check for.
 * @param {function} callback The callback function when all conditions are true.
 * @param {number} maxTime max time the check witll run before abort.
 */
export const pollerLite = (conditions, callback, maxTime = 100000) => {
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
    subtree: false,
    attributes: false,
    characterData: false,
    characterDataOldValue: false
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

export const onUrlChange = (callback, onError = null) => {
  if (typeof callback !== 'function') {
    throw new Error('Callback function must be provided');
  }
  const mutationConfig = {
    childList: true,
    subtree: true
  };
  //Create a new MutationObserver instance to observe changes to the document body
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      //Store the current URL in a separate variable to make the code more concise
      const currentUrl = window.location.href;
      //Check if the URL has changed since the last observation
      if (observer.previousUrl !== currentUrl) {
        const oldHref = observer.previousUrl;
        //Update the previous URL and execute the callback function
        observer.previousUrl = currentUrl;
        //console.log('URL changed!');
        observer.disconnect();
        try {
          setTimeout(() => {
            callback(oldHref, mutation);
          }, 1000);
        } catch (error) {
          console.log(`Error in callback function: ${error}`);
        }
        observer.observe(document.documentElement, mutationConfig);
      }
    });
  });

  //Initialize the previous URL to the current URL

  try {
    observer.previousUrl = window.location.href;
    //Start observing changes to the document documentElement to detect URL changes
    observer.observe(document.documentElement, mutationConfig);
  } catch (error) {
    if (onError && typeof onError === 'function') {
      onError(error);
    } else {
      console.log(`Error starting onUrlChange observer: ${error}`);
    }
  }
};

export const setCroStorage = (key, data, expirationDays = 30) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expirationDays);

  const dataToStore = {
    data,
    expires: expirationDate.toISOString()
  };

  localStorage.setItem(key, JSON.stringify(dataToStore));
};

export const getCroStorage = (key) => {
  const storedData = localStorage.getItem(key);

  if (storedData) {
    const { data, expires } = JSON.parse(storedData);

    const expirationTime = new Date(expires);
    const currentTime = new Date();

    if (currentTime <= expirationTime) {
      return data;
    }
    //Data has expired, remove it from Local Storage
    localStorage.removeItem(key);
    console.log('Stored data has expired and has been removed.');
  }

  return null; //No valid data found
};

export const fetchCasinoData = (type = 'default', startNumber = 0, limit = 20) => {
  const casinoResponse = fetch(
    `https://www.turtlebet.com/api/wp-json/rest/v1/casinos_list?start=${startNumber}&limit=${limit}&filters=%7B%7D&sort=${type}&extended=true&hub_toplist_id=1925&custom_casino_ids=`,
    {
      referrer: 'https://www.turtlebet.com/fi',
      referrerPolicy: 'same-origin',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'omit'
    }
  );

  return casinoResponse;
};

//eslint-disable-next-line default-param-last
export const fetchCasinoHelper = (value, casinoLength = 0, isLoaded, callback) => {
  fetchCasinoData(value, casinoLength, 10)
    .then((res) => res.json())
    .then(({ data }) => {
      pollerLite([() => isLoaded === true && data.casinos.length], () => {
        callback('.mui-t5yac0', data.casinos);
      });
    });
};
