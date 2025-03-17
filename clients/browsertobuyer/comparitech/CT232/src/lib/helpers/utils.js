/*eslint-disable max-len */

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

export const checkTopThreeProvidersOrder = () => {
  const links = Array.from(document.querySelectorAll('ol a[href*="/l/list"]'));

  //Check if we have at least 3 links
  if (links.length < 3) {
    return false; //Not enough items to validate
  }

  //Get first 3 href values
  const firstThreeHrefs = links.slice(0, 3).map((link) => link.getAttribute('href'));

  //Define expected order
  const expectedOrder = ['/go/nordvpn', '/go/surfshark', '/go/ipvanish'];

  //Check if each href contains correct part in order
  const isValidOrder = expectedOrder.every((provider, index) => firstThreeHrefs[index].includes(provider));

  return isValidOrder;
};

export const getProviderScore = (providerSlug) => {
  //Find the link that contains providerSlug
  const providerLink = document.querySelector(`h2 + p [href*="/go/${providerSlug}"]`);

  //If provider not found, return null
  if (!providerLink) return null;

  //Get the closest parent <p> tag
  const parentP = providerLink.closest('p');

  //Get the next sibling element (which contains the score table)
  const nextElement = parentP.nextElementSibling;

  //Find the "Overall Score" <th> element
  const overallScoreTh = nextElement.querySelector('.provider-scores th');

  if (!overallScoreTh) return null; //If no score table found

  const overallScoreThText = overallScoreTh.textContent.trim().toLowerCase();

  let mainScore = null;

  //Check if this is really the "Overall Score" column
  if (overallScoreThText.includes('overall score')) {
    const tdElem = overallScoreTh.nextElementSibling; //Next <td> element
    const scoreText = tdElem.textContent.trim(); //e.g., "9.4/10"
    mainScore = parseFloat(scoreText.split('/')[0]); //Only "9.4"
  }

  return mainScore; //Return the score or null
};

export const getProviderBaseLink = (providerSlug) => {
  //Find the first link containing providerSlug
  const providerLink = document.querySelector(`a[href*="/go/${providerSlug}"]`);
  if (!providerLink) {
    return null;
  }

  const href = providerLink.getAttribute('href');

  //Cut off everything after "/l/"
  const baseUrl = href.split('/l/')[0] + '/'; //ensure trailing slash
  console.log(`Base URL for ${providerSlug}:`, baseUrl);

  return baseUrl;
};

export const getProviderImageLink = (providerSlug) => {
  //First get the base link for the provider
  const baseUrl = getProviderBaseLink(providerSlug);

  //If no base URL found, return null
  if (!baseUrl) {
    return null;
  }

  //Append image path
  const imageLink = `${baseUrl}l/top3-image`;
  console.log(`🖼️ Image Link for ${providerSlug}:`, imageLink);

  return imageLink;
};
