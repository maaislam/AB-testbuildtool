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

export const getStarHTML = (rating) => {
  //Round the rating to the nearest half
  const roundedRating = Math.round(rating * 2) / 2;

  //Create a string of HTML star icons based on the rounded rating
  let starHTML = '';
  //eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      starHTML += '<span><i class="icon-star star__3oycQ"></i></span>'; //filled star
    } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
      starHTML += '<span><i class="icon-star star__3oycQ"></i></span>'; //half-filled star
    } else {
      starHTML += '<span><i class="icon-star-empty star__3oycQ"></i></span>'; //empty star
    }
  }

  //Wrap the starHTML in a div with the class 'container__1uJdY' and 'stars__2heWk'
  starHTML = `<div class="container__1uJdY stars__2heWk">${starHTML}</div>`;

  return starHTML;
};
