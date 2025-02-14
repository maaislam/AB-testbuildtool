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

const extractTextAndNumber = (input) => {
  const match = input.match(/(.+?)[,\s]+([\d.,]+)/);
  const text = match[1].trim();
  const number = match[2].replace(/,/g, '');
  return {
    text,
    number
  };
};

const collectProductInfo = (allItemsArray, url, doc, eventName, eventTime) => {
  //console.log(doc, 'doc');
  const mainTitleElement = doc.querySelector('#match-event-tabpanel-0 h3');
  const mainTitle = mainTitleElement?.textContent.trim();
  const eventDateElement = doc.querySelector('[data-testid="EventIcon"]');
  const eventDate = eventDateElement?.nextSibling?.textContent.trim() || '';
  //const eventTimeElement = doc.querySelector('[data-testid="ScheduleIcon"]');
  //const eventTime = eventTimeElement?.nextSibling?.textContent.trim() || '';
  //console.log(`time: ${eventTime}`);
  const tipsterElement = doc.querySelector('.MuiPaper-elevation .MuiCardHeader-title');
  const tipster = tipsterElement?.querySelector('a')?.textContent.trim() || '';
  const tipsterLink = tipsterElement?.querySelector('a')?.href || '';

  const competitionElement = doc.querySelector('.MuiTypography-subtitle2');
  const competitionName =
    competitionElement?.textContent?.toLocaleLowerCase()?.split('|')[1]?.trim() || '';

  const breadcrambsElement = doc.querySelector(
    'div.MuiBox-root > div.MuiContainer-root.MuiContainer-maxWidthLg > div.MuiBox-root'
  );

  const allLinkableElements = breadcrambsElement?.querySelectorAll('a');
  const lastBreadcrambItem = allLinkableElements[allLinkableElements.length - 1];
  const lastBreadcrambItemUrl = lastBreadcrambItem?.getAttribute('href') || '';

  const bettingItemsInfo = [];
  const allBettingItems = doc.querySelectorAll(
    '#match-event-tabpanel-0 .MuiPaper-elevation.mui-veyekx, .MuiStack-root.mui-6r2fzw .MuiGrid-item'
  );

  allBettingItems.forEach((item, index) => {
    let text;
    let number;
    const titleElement =
      index === 0
        ? item.querySelector(`p.MuiTypography-body${index + 1}`)
        : item.querySelector('p.MuiTypography-body2');

    if (index === 0) {
      text = titleElement?.textContent.trim()
        ? extractTextAndNumber(titleElement?.textContent.trim()).text
        : '';
      number = titleElement?.textContent.trim()
        ? extractTextAndNumber(titleElement?.textContent.trim()).number
        : '';
    } else {
      text = titleElement?.textContent.trim() || '';
      number = titleElement?.nextSibling?.textContent.trim() || '';
    }

    const image = item.querySelector('[data-type="logo"]');
    const imageSource = image?.querySelector('img').src || '';
    const bgColor = image ? image.getAttribute('bgcolor') : '#1a5685';

    const dataOperator = image ? image.getAttribute('data-operator') : '1xBet';

    const linkElement = item.querySelector('[data-type="button"]');
    const link = linkElement?.href || '';

    bettingItemsInfo.push({
      text,
      number,
      imageSource,
      link,
      bgColor,
      dataOperator
    });
  });

  allItemsArray.push({
    competitionName,
    eventDate,
    eventTime,
    mainTitle,
    tipster,
    tipsterLink,
    url,
    bettingItemsInfo,
    eventName,
    eventUrl: lastBreadcrambItemUrl,
    productInfo: doc
  });
};

export const parseHTML = async (urls) => {
  const allItemsArray = [];

  const promises = urls.map(({ url }) =>
    fetch(url).catch((error) => {
      console.error(`Error fetching ${url}: ${error.message}`);
      return Promise.resolve(null);
    }));

  const responses = await Promise.all(promises);
  //eslint-disable-next-line no-restricted-syntax
  for (const [index, response] of responses.entries()) {
    if (response) {
      //eslint-disable-next-line no-await-in-loop
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      collectProductInfo(
        allItemsArray,
        response.url,
        doc,
        urls[index].eventName,
        urls[index].eventTime
      );
    }
  }

  return allItemsArray;
};

export const onUrlChange = (callback, onError = null) => {
  if (typeof callback !== 'function') {
    throw new Error('Callback function must be provided');
  }
  const mutationConfig = {
    childList: true,
    subtree: true
  };
  //Create a new MutationObserver instance to observe changes to the document body
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      //Store the current URL in a separate variable to make the code more concise
      const currentUrl = window.location.href;
      //Check if the URL has changed since the last observation
      if (observer.previousUrl !== currentUrl) {
        const oldHref = observer.previousUrl;
        //Update the previous URL and execute the callback function
        observer.previousUrl = currentUrl;
        //console.log('URL changed!');
        observer.disconnect();
        try {
          setTimeout(() => {
            callback(oldHref, mutation);
          }, 1000);
        } catch (error) {
          console.log(`Error in callback function: ${error}`);
        }
        observer.observe(document.documentElement, mutationConfig);
      }
    });
  });

  //Initialize the previous URL to the current URL

  try {
    observer.previousUrl = window.location.href;
    //Start observing changes to the document documentElement to detect URL changes
    observer.observe(document.documentElement, mutationConfig);
  } catch (error) {
    if (onError && typeof onError === 'function') {
      onError(error);
    } else {
      console.log(`Error starting onUrlChange observer: ${error}`);
    }
  }
};
