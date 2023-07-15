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
    childList: false,
    subtree: false,
    attributes: true
  };
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      //console.log(mutation);
      observer.disconnect();
      setTimeout(() => {
        callbackFunction(mutation);
        observer.observe(target, config);
      }, 1500);
    });
  });

  observer.observe(target, config);
};
export const getOperatorFromUrl = (url) => {
  let cleanString;
  cleanString = url;
  if (cleanString.charAt(cleanString.length - 1) === '/') {
    cleanString = cleanString.slice(0, -1);
  }
  //Get the text after the last slash
  const text = cleanString.split('/').pop();

  //If the text contains a question mark, remove any characters after it
  const questionMarkIndex = text.indexOf('?');
  if (questionMarkIndex !== -1) {
    return text.substring(0, questionMarkIndex);
  }

  return text;
};

export const extractNumberFromString = (str) => {
  const matches = str.match(/\d+/);
  return matches ? parseInt(matches[0]) : null;
};

export const truncateText = (text, maxLength = 90) => {
  if (text && text.length < maxLength) return text;
  if (!text) return '';
  let truncatedText = text.slice(0, maxLength);
  //Check if the last character is a space to avoid cutting off a word
  if (truncatedText.charAt(truncatedText.length - 1) === ' ') {
    truncatedText = truncatedText.slice(0, truncatedText.lastIndexOf(' '));
  }
  //${truncatedText}...
  return '';
};
