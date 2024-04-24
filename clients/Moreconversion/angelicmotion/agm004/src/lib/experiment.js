import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
};

const productUrls = [
  '/products/onyx-zipup',
  '/products/obsidian-hoodie',
  '/products/ash-zipup',
  '/products/copy-of-graphite-hoodie',
  '/products/mocha-zipup',
  '/products/cocoa-hoodie',
  '/products/cream-zipup',
  '/products/grape-hoodie',
  '/products/cloud-zipup',
  '/products/opal-hoodie',
  '/products/ink-shorts',
  '/products/slate-shorts',
  '/products/frost-shorts',
  '/products/blush-shorts',
  '/products/sky-shorts'
];
//Key for storing the combined data
const storageKey = 'fetchedData';

//Function to fetch all data and store as a single object in session storage
const fetchAllData = (links) => {
  //Create an object to accumulate all data
  const allData = {};

  //Generate promises for each URL
  const promises = links.map((item) => {
    const url = item.getAttribute('href');
    const urlWithJS = url.endsWith('.js') ? url : `${url}.js`;
    console.log('Fetching URL:', urlWithJS);

    //Fetch each URL if not already cached
    return fetch(urlWithJS)
      .then((response) => response.json())
      .then((data) => {
        allData[urlWithJS] = data; //Add data to the allData object
      });
  });

  //Use Promise.all to wait for all fetches to complete
  Promise.all(promises)
    .then(() => {
      console.log('All data fetched and stored in a single object:', allData);
      //Store the combined data object in session storage
      sessionStorage.setItem(storageKey, JSON.stringify(allData));
    })
    .catch((error) => {
      console.error('Error in fetching data:', error);
    });
};

//Function to retrieve data from session storage
const retrieveDataFromStorage = () => {
  const cachedData = sessionStorage.getItem(storageKey);
  if (cachedData) {
    console.log('Returning data from session storage.');
    return JSON.parse(cachedData);
  }
  console.error('No data found in session storage. Fetching new data.');
  return fetchAllData(productUrls);
};

//Example usage:
const data = retrieveDataFromStorage();
console.log('Data:', data);
