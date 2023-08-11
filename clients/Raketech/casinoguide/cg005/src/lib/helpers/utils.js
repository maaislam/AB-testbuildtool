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

export const addCssToPage = (href, id, classes) => {
  if (document.querySelector(`#${id}`)) {
    return;
  }

  const c = document.createElement('link');
  c.setAttribute('id', id);
  c.setAttribute('rel', 'stylesheet');

  if (classes) {
    c.className = classes;
  }

  c.href = href;
  document.head.appendChild(c);
};

export const addJsToPage = (src, id, cb, classes) => {
  if (document.querySelector(`#${id}`)) {
    return;
  }

  const s = document.createElement('script');
  if (typeof cb === 'function') {
    s.onload = cb;
  }

  if (classes) {
    s.className = classes;
  }

  s.src = src;
  s.setAttribute('id', id);
  document.head.appendChild(s);
};

export const truncateText = (text, maxLength = 35) => {
  if (text && text.length < maxLength) return text;
  console.log(typeof text, text.length);
  if (!text) return '';
  let truncatedText = text.slice(0, maxLength);
  //Check if the last character is a space to avoid cutting off a word
  if (truncatedText.charAt(truncatedText.length - 1) === ' ') {
    truncatedText = truncatedText.slice(0, truncatedText.lastIndexOf(' '));
  }
  //${truncatedText}...
  return `${truncatedText}...`;
};

export const getBackgroundImageUrl = (element) => {
  const { style } = element;
  const { backgroundImage } = style;

  //Extract the URL from the background-image property
  const urlRegex = /url\(['"]?(.*?)['"]?\)/;
  const matches = backgroundImage.match(urlRegex);

  if (matches && matches.length >= 2) {
    return matches[1];
  }

  return null;
};
