(function () {
	'use strict';
	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}
	var shared = {
	    ID: "cf035",
	    VARIATION: "W",
	    CLIENT: "Raketech",
	    SITE: "casinofeber"
	  };
	var shared$1 = getDefaultExportFromCjs(shared);
	const setup = () => {
	  const { ID, VARIATION } = shared$1;
	  document.documentElement.classList.add(ID);
	  document.documentElement.classList.add(`${ID}-${VARIATION}`);
	};
	const pollerLite = (conditions, callback, maxTime = 10000) => {
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
	      console.error('Polling exceeded maximum time limit', conditions);
	    }
	  }, POLLING_INTERVAL);
	};
	const setCroStorage = (key, data, expirationDays = 30) => {
	  const expirationDate = new Date();
	  expirationDate.setDate(expirationDate.getDate() + expirationDays);
	  const dataToStore = {
	    data,
	    expires: expirationDate.toISOString()
	  };
	  localStorage.setItem(key, JSON.stringify(dataToStore));
	};
	const getCroStorage = (key) => {
	  const storedData = localStorage.getItem(key);
	  if (storedData) {
	    const { data, expires } = JSON.parse(storedData);
	    const expirationTime = new Date(expires);
	    const currentTime = new Date();
	    if (currentTime <= expirationTime) {
	      return data;
	    }
	    localStorage.removeItem(key);
	    console.log('Stored data has expired and has been removed.');
	  }
	  return null;
	};
	const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
	  const target = document.querySelector(`${targetSelectorString}`);
	  if (!target) return;
	  const config = configObject || {
	    childList: true,
	    subtree: true,
	    attributes: true
	  };
	  const observer = new MutationObserver((mutations) => {
	    mutations.forEach((mutation) => {
	      if (mutation.target.classList.contains('show-full')) {
	        callbackFunction();
	      }
	    });
	  });
	  observer.observe(target, config);
	};
	const gaTracking = (label) => {
      console.log('label: ', label);
	  /* const { VARIATION } = shared$1;
	  const GA4_PROPERTY_ID = 'G-H91NBPERDS';
	  const GA4_INTERNAL_EXPERIMENT_NUM = '035';
	  const GA4_INTERNAL_EXPERIMENT_ID = `Experiment CEO History Casinos ${GA4_INTERNAL_EXPERIMENT_NUM}`;
	  const EXPERIMENT_DEVICE_CATEGORY = 'All Devices';
	  pollerLite([() => document.readyState === 'complete'], () => {
	    console.log(label);
	    if (window.gtag !== undefined) {
	      window.gtag('event', GA4_INTERNAL_EXPERIMENT_ID, {
	        event_category: EXPERIMENT_DEVICE_CATEGORY,
	        event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | Variation: ${VARIATION} | ${label}`,
	        send_to: GA4_PROPERTY_ID
	      });
	    } else {
	      window.dataLayer.push({
	        event: 'cro_event',
	        event_detail: GA4_INTERNAL_EXPERIMENT_ID,
	        event_category: EXPERIMENT_DEVICE_CATEGORY,
	        event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | Variation: ${VARIATION} | ${label}`,
	        send_to: GA4_PROPERTY_ID
	      });
	    }
	  }); */
	};
	const affiliateLinksConfig = {
	  'A Link': {
	    mrvegascasino: 'https://www.mrvegas.com/?referral_id=casinofeberse_MrV_CA_A175218C',
	    happycasino: 'https://record.glitnoraffiliates.com/_xnCN8G1x6VyBKOxorkQ2_WNd7ZgqdRLk/5',
	    gogocasino: 'https://ntrfr.gogocasino.com/redirect.aspx?pid=3770468&bid=17485',
	    noaccountcasino: 'https://record.multibrandaffiliates.com/_tdy0piJikMgd2bMnnkYwymNd7ZgqdRLk/6/',
	    lyllocasino:
	      'https://media.lyllocasino.com/tracking.php?tracking_code&aid=110721&mid=6288&sid=457168&pid=3267',
	    leovegas: 'https://ntrfr.leovegas.com/redirect.aspx?pid=3770466&bid=14986',
	    supersnabbt:
	      'https://ads.supersnabbt.se/C.ashx?btag=a_26961b_215c_&affid=7652&siteid=26961&adid=215&c=',
	    jallacasino: 'https://record.jallacasino.se/_ueGwq1j42qSbqaH_WN91omNd7ZgqdRLk/275/',
	    comeoncasino:
	      'https://media.comeon.com/tracking.php?tracking_code&aid=110728&mid=1782&sid=457170&pid=488',
	    betinia: 'https://btn.servclick1move.com/?mid=21245_605521',
	    paf: 'https://record.multibrandaffiliates.com/_bPRS6WANiKShWoqmOk2VLGNd7ZgqdRLk/16/'
	  },
	  'B Link': {
	    mrvegascasino: '/spela/mr-vegas-casino',
	    happycasino: 'https://record.glitnoraffiliates.com/_xnCN8G1x6VyBKOxorkQ2_WNd7ZgqdRLk/6',
	    gogocasino: 'https://ntrfr.gogocasino.com/redirect.aspx?pid=3770469&bid=17485',
	    noaccountcasino: 'https://record.multibrandaffiliates.com/_tdy0piJikMgd2bMnnkYwymNd7ZgqdRLk/7/',
	    lyllocasino:
	      'https://media.lyllocasino.com/tracking.php?tracking_code&aid=110721&mid=6288&sid=457169&pid=3267',
	    leovegas: 'https://ntrfr.leovegas.com/redirect.aspx?pid=3770467&bid=14986',
	    supersnabbt:
	      'https://ads.supersnabbt.se/C.ashx?btag=a_26962b_215c_&affid=7652&siteid=26962&adid=215&c=',
	    jallacasino: 'https://record.jallacasino.se/_ueGwq1j42qSbqaH_WN91omNd7ZgqdRLk/276/',
	    comeoncasino:
	      'https://media.comeon.com/tracking.php?tracking_code&aid=110728&mid=1782&sid=457171&pid=488',
	    betinia: 'https://btn.servclick1move.com/?mid=21245_605573',
	    paf: 'https://record.multibrandaffiliates.com/_bPRS6WANiKShWoqmOk2VLGNd7ZgqdRLk/17/'
	  }
	};
	const { ID, VARIATION } = shared$1;
	const linkType = VARIATION === 'Control' ? 'A Link' : 'B Link';
	const init = () => {
	  const casinoData = getCroStorage(`${ID}__visitedCasinos`);
	  if (!casinoData) return;
	  //console.log('🚀 ~ file: experiment.js:14 ~ init ~ casinoData:', casinoData);
	  casinoData.forEach((casino) => {
	    const casinoLinks = document.querySelectorAll(`a[data-oldhref*="${casino}"]`);
	    casinoLinks.forEach((casinoLink) => {
	      const casinoCardElem = casinoLink.closest('.toplist-item');
	      if (!casinoCardElem) return;
	      casinoCardElem.classList.add(`${ID}__grayscale`);
	    });
	  });
	};
	var activate = () => {
	  setup();
	  document.body.addEventListener('click', (e) => {
	    const { target } = e;
        console.log('target: ', target);
	    if (
	      !target.closest('a[href*="/spela/"]') &&
	      target.closest(`.${ID}__affiliate`) &&
	      target.closest('.toplist')
	    ) {
	      const closestWrapper = target.closest('a');
	      const casinoLink = closestWrapper.dataset.oldhref || closestWrapper.href;
	      const casinoName = casinoLink.split('/spela/')[1];
	      const clikedElem = target.closest('a.img') ? 'logo' : 'button';
	      console.log(
	        `${linkType} | ${casinoName.replace(/\//g, '')} | CTA Clicks to Operator | Toplist${
          target.closest(`.${ID}__grayscale`) ? ' | Greyscaled' : ''
        } (${clikedElem})`
	      );
	      const data = getCroStorage(`${ID}__visitedCasinos`);
	      if (!data) {
	        const casinoNameArr = [casinoName];
	        setCroStorage(`${ID}__visitedCasinos`, casinoNameArr);
	        init();
	        return;
	      }
	      const visitedCasinos = getCroStorage(`${ID}__visitedCasinos`) || [];
	      if (visitedCasinos.includes(casinoName)) return;
	      visitedCasinos.push(casinoName);
	      setCroStorage(`${ID}__visitedCasinos`, visitedCasinos);
	      init();
	    } else if (
	      target.closest('a[href*="/spela/"]') &&
	      !target.closest(`.${ID}__affiliate`) &&
	      target.closest('.toplist')
	    ) {
	      const operatorHref = target.closest('a[href*="/spela/"]').href;
	      const operatorName = operatorHref.split('/spela/')[1];
	      const clikedElem = target.closest('a.img') ? 'logo' : 'button';
	      console.log(
	        `Default link | ${operatorName.replace(/\//g, '')} | CTA Clicks to Operator${
          target.closest(`.${ID}__grayscale`) ? ' | Greyscaled' : ''
        } (${clikedElem})`
	      );
	      const data = getCroStorage(`${ID}__visitedCasinos`);
	      if (!data) {
	        const casinoNameArr = [operatorName];
	        setCroStorage(`${ID}__visitedCasinos`, casinoNameArr);
	        init();
	        return;
	      }
	      const visitedCasinos = getCroStorage(`${ID}__visitedCasinos`) || [];
	      if (visitedCasinos.includes(operatorName)) return;
	      visitedCasinos.push(operatorName);
	      setCroStorage(`${ID}__visitedCasinos`, visitedCasinos);
	      init();
	    }
	  });
	  const updateAffiliateLinks = () => {
	    const casinoToplistItems = document.querySelectorAll('.toplist .toplist-item');
	    casinoToplistItems.forEach((casinoToplistItem) => {
	      const casinoBtnElem = casinoToplistItem.querySelector('a.visit');
	      const casinoImgElem = casinoToplistItem.querySelector('a.img');
	      if (!casinoBtnElem || !casinoImgElem) return;
	      const casinoHref = casinoBtnElem.href;
	      if (!casinoHref.includes('/spela/')) return;
	      const casinoName = casinoHref.split('/spela/')[1].replace(/[\/\-_]/g, '');
	      const newUrl = affiliateLinksConfig[linkType][casinoName];
	      casinoBtnElem.setAttribute('data-oldhref', casinoHref);
	      casinoImgElem.setAttribute('data-oldhref', casinoHref); 
	      if (newUrl) {
            casinoBtnElem.classList.add(`${ID}__affiliate`);
            casinoBtnElem.setAttribute('data-name', casinoName);
            casinoBtnElem.href = newUrl;
            casinoImgElem.classList.add(`${ID}__affiliate`);
            casinoImgElem.setAttribute('data-name', casinoName);
            casinoImgElem.href = newUrl;
          }
	    });
	  };
	  updateAffiliateLinks();
	  observeDOM('.toplist', () => {
	    updateAffiliateLinks();
	    if (VARIATION !== 'Control') {
	      init();
	    }
	  });
	  if (VARIATION === 'Control') {
	    return;
	  }
	  init();
	};
	pollerLite(['.toplist'], () => {
	  const DOM_RENDER_DELAY = 1000;
	  setTimeout(activate, DOM_RENDER_DELAY);
	});
})();
