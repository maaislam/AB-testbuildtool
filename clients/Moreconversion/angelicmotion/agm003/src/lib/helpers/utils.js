/**
 * Polls the DOM for a condition to be met before executing a callback.
 *
 * @param {array} conditions The array of conditions to check for.
 * @param {function} callback The callback function when all conditions are true.
 * @param {number} maxTime max time the check witll run before abort.
 */

const storageKey = 'fetchedData';
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

// //Function to fetch all data and store as a single object in session storage
// export const fetchAllData = (links) => {
//   //Create an object to accumulate all data
//   const allData = {};

//   //Generate promises for each URL
//   const promises = links.map((url) => {
//     const urlWithJS = url.endsWith('.js') ? url : `${url}.js`;

//     //Fetch each URL if not already cached
//     return fetch(urlWithJS)
//       .then((response) => response.json())
//       .then((data) => {
//         allData[url] = data; //Add data to the allData object
//       });
//   });

//   //Use Promise.all to wait for all fetches to complete
//   Promise.all(promises)
//     .then(() => {
//       console.log('All data fetched and stored in a single object:', allData);
//       //Store the combined data object in session storage
//       sessionStorage.setItem(storageKey, JSON.stringify(allData));
//     })
//     .catch((error) => {
//       console.error('Error in fetching data:', error);
//     });
// };

// //Function to retrieve data from session storage
// export const retrieveDataFromStorage = (productUrls) => {
//   const cachedData = sessionStorage.getItem(storageKey);
//   if (cachedData) {
//     console.log('Returning data from session storage.');
//     return JSON.parse(cachedData);
//   }
//   console.error('No data found in session storage. Fetching new data.');
//   return fetchAllData(productUrls);
// };

export const fetchAllData = async (links) => {
  const allData = {};

  const promises = links.map(async (url) => {
    const urlWithJS = url.endsWith('.js') ? url : `${url}.js`;

    try {
      const response = await fetch(urlWithJS);
      const data = await response.json();
      allData[url] = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

  try {
    await Promise.all(promises);
    sessionStorage.setItem(storageKey, JSON.stringify(allData));
  } catch (error) {
    console.error('Error in fetching data:', error);
  }
};

//eslint-disable-next-line consistent-return
export const retrieveDataFromStorage = async (productUrls) => {
  const cachedData = sessionStorage.getItem(storageKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  console.error('No data found in session storage. Fetching new data.');
  await fetchAllData(productUrls);
  const newData = sessionStorage.getItem(storageKey);
  return JSON.parse(newData);
};
