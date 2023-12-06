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

export const getTimeUntilMidnight = () => {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  let timeRemaining;
  if (now < midnight) {
    timeRemaining = new Date(midnight - now);
  } else {
    midnight.setDate(midnight.getDate() + 1);
    timeRemaining = new Date(midnight - now);
  }
  return timeRemaining;
};

export const displayTimeRemaining = () => {
  const timeLeftElement = document.getElementById('timeLeft');
  const timeRemaining = getTimeUntilMidnight();
  const hours = timeRemaining.getUTCHours();
  const minutes = timeRemaining.getUTCMinutes();
  const timeString = `${hours.toString()} hrs ${minutes.toString().padStart(2, '0')} mins🔥`;
  timeLeftElement.textContent = `${timeString}`;
};

export const getTomorrowDateFormatted = () => {
  //Get today's date
  const today = new Date();

  //Get tomorrow's date by adding one day (in milliseconds)
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  //Array of abbreviated month names for formatting
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  //Array of day names
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  //Get day, month, and year for tomorrow's date
  const day = days[tomorrow.getDay()];
  const month = months[tomorrow.getMonth()];
  const date = tomorrow.getDate();

  //Format the date
  const formattedDate = `${day}, ${month} ${date}`;

  return formattedDate;
};
