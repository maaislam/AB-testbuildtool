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

export const getOperatorFromUrl = (url) => {
  //Get the text after the last slash
  const text = url.split('/').pop();

  //If the text contains a question mark, remove any characters after it
  const questionMarkIndex = text.indexOf('?');
  if (questionMarkIndex !== -1) {
    return text.substring(0, questionMarkIndex);
  }

  return text;
};

export const getStringBetween = (str, start, end) => {
  const startIndex = str.indexOf(start) + start.length;
  const endIndex = str.indexOf(end, startIndex);
  return startIndex >= start.length && endIndex !== -1 ? str.substring(startIndex, endIndex) : '';
};
