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

export const ratingStars = (ID, ratingData) => {
  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    const rounderRating = Math.floor(ratingData);
    if (i <= rounderRating) {
      stars.push(`<span class="${ID}__yotpo-icon"></span>`);
    } else if (i === rounderRating + 1 && (ratingData * 10) % 5) {
      stars.push(`<span class="${ID}__yotpo-icon half-star"></span>`);
    } else {
      stars.push(`<span class="${ID}__yotpo-icon empty-star"></span>`);
    }
  }

  const htmlStr = `
        <div class="${ID}__yotpo-bottomline ">
            <div class="${ID}__yotpo-stars">
               ${stars.map((star) => star).join('\n')}
            </div>    
        </div>
    `;

  return htmlStr;
};
