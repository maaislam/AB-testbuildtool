try {
  //get latest op cache

  const getLatestOpcCache = () => {
    //Get all keys from session storage
    const keys = Object.keys(sessionStorage);

    //Filter out only the keys that start with "__opc_state_cache__"
    const stateCacheKeys = keys.filter((key) => key.startsWith('__opc_state_cache__'));

    //Sort the state cache keys by the numeric value at the end of each key in descending order
    stateCacheKeys.sort((a, b) => {
      const numA = parseInt(a.match(/\d+$/)[0]);
      const numB = parseInt(b.match(/\d+$/)[0]);
      return numB - numA;
    });

    //Extract the values for the state cache keys
    const stateCacheValues = stateCacheKeys.map((key) => sessionStorage.getItem(key));

    //Log the values for the state cache keys
    //console.log(stateCacheValues);
    return stateCacheValues.at(0);
  };

  const getPlanType = (latestOpcCache) => {
    //get zo_pro_monthly or zo_pro_annual
    const keys = Object.keys(latestOpcCache?.ShoppingCart?.persist);
    const planType = keys.find((key) => key.startsWith('zo_pro_'));
    return planType;
  };

  //add to the config as needed
  const eventsConfig = {
    zo_pro_monthly: 'Meetings Pro Monthly Plan Purchase',
    zo_pro_annual: 'Meetings Pro Annual Plan Purchase'
  };

  const latestOpcCache = getLatestOpcCache();
  const planType = getPlanType(latestOpcCache);

  const eventsTrigger = (configObject) => {
    window.optimizely.push({
      type: 'event',
      eventName: configObject[planType],
      tags: {
        revenue: 0, //Optional in cents as integer (500 == $5.00)
        value: 0.0 //Optional as float
      }
    });
    console.log(configObject[planType]);
  };
  const utils = window.optimizely.get('utils');

  utils.waitForElement('body').then(() => {
    if (window.location.pathname === '/buy/signup') {
      eventsTrigger(eventsConfig);
    }
  });
} catch (error) {
  console.log('error in Test', error);
}
/**
 Code Documentation:
Purpose:

The code is intended to track a user's purchase of a monthly or annual plan for a Zoom Pro account and send an event to the Optimizely platform for further analysis and optimization of the user experience.
Functionality:

    The code uses JavaScript to access the session storage of the user's browser and retrieve the latest state cache for Zoom Pro account purchases.
    It identifies the type of plan purchased, whether monthly or annual, from the retrieved cache.
    The code then creates an eventsConfig object with key-value pairs for the plan types, which is used to trigger the appropriate event based on the plan purchased.
    The code then waits for the body element to load, and if the user is on the '/buy/signup' path, it triggers an Optimizely event with the name of the purchased plan and optional revenue and value tags.

Code Flow:

    The code starts by wrapping all its functionality inside a try-catch block to catch any errors that may occur.
    The getLatestOpcCache() function retrieves the latest state cache for Zoom Pro account purchases from the session storage by first getting all keys in the storage, filtering out the keys that start with "opc_state_cache", sorting the remaining keys by their numeric value in descending order, and extracting the corresponding values for the sorted keys.
    The getPlanType() function retrieves the plan type, whether monthly or annual, by getting all keys of the latestOpcCache and finding the key that starts with "zo_pro_".
    The eventsConfig object is created to map the plan types to their respective event names.
    The eventsTrigger() function is created to trigger the Optimizely event with the appropriate event name based on the plan type, revenue and value tags.
    The utils.waitForElement('body') function waits for the body element to load, and if the user is on the '/buy/signup' path, the eventsTrigger() function is called with the eventsConfig object as a parameter to trigger the Optimizely event.

Input:

There are no inputs required for the code to function as it retrieves the necessary data from the session storage and the window object.
Output:

The code logs the name of the triggered event to the console using console.log(configObject[planType]);.
Possible Errors:

Any errors that may occur in the code are caught by the try-catch block and logged to the console using console.log('error in Test', error);. Possible errors include missing or incorrect data in the session storage or the eventsConfig object.
 */
