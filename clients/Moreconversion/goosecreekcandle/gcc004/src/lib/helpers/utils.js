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

export const timerCountdown = (ID, TIME_FOR_COUNTDOWN) => {
  const countDownDate = new Date(TIME_FOR_COUNTDOWN).getTime();

  const x = setInterval(() => {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance > 0) {
      document.querySelector(`.${ID}__header-promo`).classList.remove('countdown-ended');
    }

    if (document.querySelector(`.${ID}__header-promo #header-promo-countdown`)) {
      document.querySelector(`.${ID}__header-promo #header-promo-countdown`).innerHTML = `
        <div><span class="time">${days}</span><span>days</span></div>
        <div><span class="time">${hours}</span><span>hours</span></div>
        <div><span class="time">${minutes}</span><span>minutes</span></div>
        <div><span class="time">${seconds}</span><span>seconds</span></div>
      `;
    }

    if (distance < 0) {
      clearInterval(x);
      if (document.querySelector(`.${ID}__header-promo #header-promo-countdown`)) {
        document.querySelector(`.${ID}__header-promo #header-promo-countdown`).innerHTML = '';
      }
      document.querySelector(`.${ID}__header-promo #header-promo`)?.classList.add('countdown-ended');
    }
  }, 1000);
};
