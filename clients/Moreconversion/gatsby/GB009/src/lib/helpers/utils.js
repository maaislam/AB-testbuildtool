/**
 * Polls the DOM for a condition to be met before executing a callback.
 *
 * @param {array} conditions The array of conditions to check for.
 * @param {function} callback The callback function when all conditions are true.
 * @param {number} maxTime max time the check witll run before abort.
 */
export const pollerLite = (conditions, callback, maxTime = 10000000) => {
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

export const startTimer = (id, minutes, variation) => {
  //Save the initial minutes for reuse
  const initialMinutes = minutes;

  const startCountdown = () => {
    const now = new Date().getTime();

    //Check if remaining time exists in localStorage
    let timeRemaining = localStorage.getItem(`${id}__timeRemaining-${variation}`);

    if (!timeRemaining) {
      //If no time was saved, calculate the remaining time from the passed minutes
      const endTime = now + minutes * 60 * 1000;
      timeRemaining = endTime - now;
      localStorage.setItem(`${id}__timeRemaining-${variation}`, timeRemaining);
    }

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      timeRemaining -= 1000; //Decrease the remaining time by 1 second

      //Save the remaining time in localStorage
      localStorage.setItem(`${id}__timeRemaining-${variation}`, timeRemaining);

      if (timeRemaining < 0) {
        clearInterval(interval);
        localStorage.removeItem(`${id}__timeRemaining-${variation}`); //Clear storage after timer ends

        //Automatically restart the timer with the initial minutes
        startTimer(id, initialMinutes, variation);
        return;
      }

      //Calculate time components
      const minute = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      //Update HTML elements with new values
      document.getElementById(`${id}__minutes`).innerText = minute < 10 ? `0${minute}` : minute;
      document.getElementById(`${id}__seconds`).innerText = seconds < 10 ? `0${seconds}` : seconds;

      document.querySelector(`.${id}__mainDiv`)?.removeAttribute('style');
    }, 1000);
  };

  //Start the countdown for the first time
  startCountdown();
};
