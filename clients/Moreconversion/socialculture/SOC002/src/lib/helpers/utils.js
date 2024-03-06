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

const calculateBusinessDays = (fromDate, daysToAdd) => {
  const dayOfWeek = fromDate.getDay(); //0 = Sunday, 1 = Monday, etc.
  let daysAdded = 0;
  while (daysAdded < daysToAdd) {
    fromDate.setDate(fromDate.getDate() + 1); //Add a day
    if (fromDate.getDay() !== 0 && fromDate.getDay() !== 6) {
      //Skip weekends
      daysAdded++;
    }
  }
  return fromDate;
};

export const displayDeliveryEstimate = () => {
  const today = new Date();
  const minDeliveryDate = calculateBusinessDays(new Date(), 3);
  const maxDeliveryDate = calculateBusinessDays(new Date(), 5);

  const options = { month: 'short', day: 'numeric' };
  const minDeliveryDateString = minDeliveryDate.toLocaleDateString('en-US', options);
  const maxDeliveryDateString = maxDeliveryDate.toLocaleDateString('en-US', { day: 'numeric' });

  return ` ${minDeliveryDateString} - ${maxDeliveryDateString}.`;
};
