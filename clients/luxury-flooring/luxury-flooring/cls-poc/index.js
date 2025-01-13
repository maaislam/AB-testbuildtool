/* eslint-disable */

(function () {
	'use strict';

	console.log('cls poc - live');
	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var shared = {
	    ID: "lf175",
	    VARIATION: "1",
	    CLIENT: "luxury-flooring",
	    SITE: "luxury-flooring"
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
	      console.error('Polling exceeded maximum time limit');
	    }
	  }, POLLING_INTERVAL);
	};
	const observeIntersection = (target, threshold, callback) => {
	  const observer = new IntersectionObserver(callback, {
	    root: null,
	    rootMargin: '0px',
	    threshold
	  });
	  if (!target) {
	    return;
	  }
	  observer?.observe(target);
	};

	const { ID, VARIATION } = shared$1;
	const handleIntersection = (entries) => {
	  entries.forEach((entry) => {
	    if (entry.isIntersecting) {
	      const viewMoreButton = document.querySelector('.amscroll-load-button');
	      if (viewMoreButton) {
	        viewMoreButton.click();
	      }
	    }
	  });
	};

	const trackGA4Event = (category, action, label) =>{
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'layout-shif',
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
        });
        console.log('event tracked', category, action, label);
    }
	var activate = () => {
		window._conv_q = window._conv_q || [];  
	  	setup();
	    // Initialize CLS value
        let clsValue = 0;

		// Define the observer
		const observer = new PerformanceObserver((entryList) => {
		for (const entry of entryList.getEntries()) {
			console.log('entry', entry);
			clsValue += entry.value;
		}
		});

		// Start observing layout shifts
		observer.observe({ type: 'layout-shift', buffered: true });
		// Send CLS value to Convert custom variable
		trackGA4Event('CRO-exp1', 'page load', clsValue);

		window.addEventListener('beforeunload', function(e) {
			console.log('page leave', e);
			// Send CLS value to Convert custom variable
			window._conv_q = window._conv_q || []; 
			_conv_q.push(["triggerConversion", "100481308"]);
			console.log(clsValue, 'convert.customData');
			_conv_q.push(["pushRevenue", clsValue, "1", "100481305"]);
		});
		
		if (VARIATION === 'control') {
			return;
		}
		const intersectionAnchor = document.querySelector('.amscroll-load-button ~ .widget.block');
		observeIntersection(intersectionAnchor, 0.1, handleIntersection);
	};

	pollerLite(['body.page-products', '.amscroll-load-button'], activate);


})();