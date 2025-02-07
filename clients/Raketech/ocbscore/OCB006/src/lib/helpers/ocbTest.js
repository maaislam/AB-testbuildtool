const ocbTest = () => {
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
  }

  const shared = {
    ID: 'OCB005',
    VARIATION: '1',
    CLIENT: 'Raketech',
    SITE: 'ocbscore'
  };
  const shared$1 = getDefaultExportFromCjs(shared);

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
  const onUrlChange = (callback, onError = null) => {
    if (typeof callback !== 'function') {
      throw new Error('Callback function must be provided');
    }
    const mutationConfig = {
      childList: true,
      subtree: true
    };
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        const currentUrl = window.location.href;
        if (observer.previousUrl !== currentUrl) {
          const oldHref = observer.previousUrl;
          observer.previousUrl = currentUrl;
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
    try {
      observer.previousUrl = window.location.href;
      observer.observe(document.documentElement, mutationConfig);
    } catch (error) {
      if (onError && typeof onError === 'function') {
        onError(error);
      } else {
        console.log(`Error starting onUrlChange observer: ${error}`);
      }
    }
  };

  const gaTracking = (label) => {
    const { VARIATION } = shared$1;
    const variationType = VARIATION === '1' ? '1' : 'C';
    const GA4_PROPERTY_ID = 'G-77TJP2RZPT';
    const GA4_INTERNAL_EXPERIMENT_NUM = '8180345639';
    const GA4_INTERNAL_EXPERIMENT_ID = `CRO - OCB - Match Page Optimization ${GA4_INTERNAL_EXPERIMENT_NUM}`;
    const EXPERIMENT_DEVICE_CATEGORY = 'All Devices';
    pollerLite([() => document.readyState === 'complete'], () => {
      window.dataLayer.push({
        event: 'cro_event',
        event_detail: GA4_INTERNAL_EXPERIMENT_ID,
        event_category: EXPERIMENT_DEVICE_CATEGORY,
        event_label: `${GA4_INTERNAL_EXPERIMENT_NUM} | V${variationType} | ${label}`,
        send_to: GA4_PROPERTY_ID
      });
    });
  };

  const rightArrow = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<path d="M8.0876 5.01514L6.9126 6.19014L10.7293 10.0151L6.9126 13.8401L8.0876 15.0151L13.0876 10.0151L8.0876 5.01514Z" fill="white"></path>
</svg>
`;
  const pointElement = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
<path d="M13.9999 8.06181V8.68181C13.9982 11.6343 12.0547 14.234 9.22344 15.0711C6.39215 15.9082 3.34747 14.7834 1.74051 12.3065C0.133553 9.82969 0.347117 6.5909 2.26539 4.34652C4.18366 2.10215 7.34968 1.38683 10.0465 2.58848" stroke="#EDEDED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M14.6668 2.68188L7.3335 10.0152L5.3335 8.01522" stroke="#EDEDED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
`;

  const staticButton = (id, link) => {
    const html = `
   <div class="MuiCardActions-root MuiCardActions-spacing mui-1es341j ${id}__staticButtonWrapper">
    <a bgcolor="#1a5685"
   data-element="clicks-to-operators"
   data-operator="1xBet"
   data-placement="quick-tips-block"
   data-type="logo"
   rel="nofollow noopener"
   target="_blank"
   class="mui-v350jx ${id}__staticButton"
   href="${link}"><img alt=""
         loading="lazy"
         decoding="async"
         data-nimg="fill"
         style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;object-fit:contain;object-position:center;color:transparent"
         sizes="100vw"
         srcset="/_next/image/?url=https%3A%2F%2Fcdn.backend.ocbscores.com%2Fwp-content%2Fuploads%2F2024%2F08%2F1xbet.png&amp;w=640&amp;q=75 640w, /_next/image/?url=https%3A%2F%2Fcdn.backend.ocbscores.com%2Fwp-content%2Fuploads%2F2024%2F08%2F1xbet.png&amp;w=750&amp;q=75 750w, /_next/image/?url=https%3A%2F%2Fcdn.backend.ocbscores.com%2Fwp-content%2Fuploads%2F2024%2F08%2F1xbet.png&amp;w=828&amp;q=75 828w, /_next/image/?url=https%3A%2F%2Fcdn.backend.ocbscores.com%2Fwp-content%2Fuploads%2F2024%2F08%2F1xbet.png&amp;w=1080&amp;q=75 1080w, /_next/image/?url=https%3A%2F%2Fcdn.backend.ocbscores.com%2Fwp-content%2Fuploads%2F2024%2F08%2F1xbet.png&amp;w=1200&amp;q=75 1200w, /_next/image/?url=https%3A%2F%2Fcdn.backend.ocbscores.com%2Fwp-content%2Fuploads%2F2024%2F08%2F1xbet.png&amp;w=1920&amp;q=75 1920w, /_next/image/?url=https%3A%2F%2Fcdn.backend.ocbscores.com%2Fwp-content%2Fuploads%2F2024%2F08%2F1xbet.png&amp;w=2048&amp;q=75 2048w, /_next/image/?url=https%3A%2F%2Fcdn.backend.ocbscores.com%2Fwp-content%2Fuploads%2F2024%2F08%2F1xbet.png&amp;w=3840&amp;q=75 3840w"
         src="https://cdn.backend.ocbscores.com/wp-content/uploads/2024/08/1xbet.png"></a></div>
  `;
    return html.trim();
  };

  const { ID, VARIATION } = shared$1;
  const shouldRunTest = (url) => /^https:\/\/ocbscores\.com\/predictions-and-tips\/.+$/.test(url);
  const init = () => {
    const mainCard = document.querySelectorAll('[aria-labelledby*="match-event-tab"]');
    mainCard.forEach((card) => {
      const mainCardTitleElement = card.querySelector('.MuiTypography-body1');
      const text = mainCardTitleElement ? mainCardTitleElement.textContent : '';
      const onlyText = text?.split(',')[0];
      const rating = text?.split(',')[1];
      const mainButton = card.querySelector('[data-type="button"]');
      if (mainCardTitleElement) mainCardTitleElement.textContent = onlyText;
      if (mainButton && !mainButton.classList.contains(`${ID}__cardButton`)) {
        mainButton.innerHTML = `${mainButton.innerHTML}${rating}<span class="${ID}__arrow">${rightArrow}</span>`;
        mainButton.classList.add(`${ID}__cardButton`);
      }
      if (mainButton && !card.querySelector(`.${ID}__staticButtonWrapper`)) {
        mainButton.insertAdjacentHTML('beforebegin', staticButton(ID, mainButton.href));
        document
          .querySelector(`.${ID}__staticButtonWrapper`)
          .insertAdjacentElement('beforeend', mainButton);
        mainButton.childNodes[0].textContent = 'BET ON 1XBET TO WIN';
      }
      const allSvgIcons = card.querySelectorAll('svg.MuiSvgIcon-root');
      allSvgIcons.forEach((icon) => {
        if (!icon.previousElementSibling?.classList.contains(`${ID}__icon`)) {
          icon.insertAdjacentHTML('beforebegin', pointElement);
          icon.previousElementSibling.classList.add(`${ID}__icon`);
        }
      });
    });
    const bettingsTipsItems = document.querySelectorAll(
      '.MuiGrid-container.mui-isbt42 .MuiGrid-item'
    );
    bettingsTipsItems.forEach((item) => {
      item.classList.add(`${ID}__bettingItem`);
      const logoElement = item.querySelector('a[data-type="logo"]');
      const mainButton = item.querySelector('a[data-type="button"]');
      const ratingElement = item.querySelector('.MuiTypography-root.mui-1egalym');
      const rating = ratingElement ? ratingElement.textContent : '';
      if (ratingElement) ratingElement.classList.add(`${ID}__hidden`);
      if (logoElement && !logoElement.classList.contains(`${ID}__logo`)) {
        mainButton.insertAdjacentElement('beforebegin', logoElement);
        logoElement.classList.add(`${ID}__logo`);
      }
      if (mainButton && !mainButton.classList.contains(`${ID}__button`)) {
        mainButton.innerHTML = `${mainButton.innerHTML
          .toLowerCase()
          .replace(
            'visit',
            'BET ON'
          )}&nbsp;${rating} <span class="${ID}__arrow">${rightArrow}</span>`;
        mainButton.classList.add(`${ID}__button`);
      }
    });
  };
  const clickHandler = (e) => {
    const { target } = e;
    const firstTeam = document.querySelector('.MuiBox-root.mui-1f0m54x > p');
    const secondTeam = document.querySelector(
      '.MuiBox-root.mui-1f0m54x ~ .MuiBox-root.mui-1f0m54x > p'
    );
    const matchType = document.querySelector('.MuiTypography-caption.mui-l7ou8j');
    const firstTeamName = firstTeam ? firstTeam.textContent : '';
    const secondTeamName = secondTeam ? secondTeam.textContent : '';
    const matchTypeName = matchType ? matchType.textContent : '';
    if (target.closest('[aria-labelledby*="match-event-tab"] [data-type="button"]')) {
      const button =
        target.closest('[aria-labelledby*="match-event-tab"] [data-type="button"]') ||
        target.closest(`.${ID}__bettingItem [data-type="button"]`);
      const { operator } = button.dataset;
      const jsClick = button.classList.contains('js-click');
      //console.log('js click', jsClick)
      if (!jsClick) {
        gaTracking(
          `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Prediction Button`
        );
      }
    } else if (target.closest(`.${ID}__bettingItem [data-type="button"]`)) {
      const button = target.closest(`.${ID}__bettingItem [data-type="button"]`);
      const { operator } = button.dataset;
      const jsClick = button.classList.contains('js-click');
      //console.log('js click', jsClick)
      if (!jsClick) {
        gaTracking(
          `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Betting Tips Button`
        );
      }
    } else if (target.closest('[aria-labelledby*="match-event-tab"] [data-type="logo"]')) {
      const button = target.closest('[aria-labelledby*="match-event-tab"] [data-type="logo"]');
      const { operator } = button.dataset;
      gaTracking(
        `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Prediction Logo`
      );
    } else if (target.closest(`.${ID}__bettingItem [data-type="logo"]`)) {
      const button = target.closest(`.${ID}__bettingItem [data-type="logo"]`);
      const { operator } = button.dataset;
      gaTracking(
        `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Betting Tips Logo`
      );
    } else if (target.closest('button#match-event-tab-0')) {
      pollerLite(['#match-event-tabpanel-0'], () => {
        init();
      });
    } else if (target.closest('[aria-labelledby*="match-event-tab"] .mui-veyekx')) {
      const clickedItem = target.closest('[aria-labelledby*="match-event-tab"] .mui-veyekx');
      const linkElement = clickedItem.querySelector('a[data-type="button"]');
      const link = linkElement.href;
      const { operator } = linkElement.dataset;
      gaTracking(
        `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Prediction Container`
      );
      //window.open(link, '_blank');
      const nextBtn = clickedItem.querySelector('a[data-type="button"]');
      nextBtn.classList.add('js-click');
      if (nextBtn) {
        nextBtn.click();

        setTimeout(() => {
          nextBtn.classList.remove('js-click');
        }, 1000);
      }
    } else if (target.closest(`.${ID}__bettingItem`)) {
      const clickedItem = target.closest(`.${ID}__bettingItem`);
      const linkElement = clickedItem.querySelector(`.${ID}__bettingItem [data-type="button"]`);
      const link = linkElement.href;
      const { operator } = linkElement.dataset;
      gaTracking(
        `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Betting Tips Container`
      );
      //window.open(link, '_blank');
      const nextBtn = clickedItem.querySelector('a[data-type="button"]');
      nextBtn.classList.add('js-click');
      if (nextBtn) {
        nextBtn.click();

        setTimeout(() => {
          nextBtn.classList.remove('js-click');
        }, 1000);
      }
    }
  };
  const activate = () => {
    setup();
    const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
    if (!isListenerAdded) {
      document.body.addEventListener('click', (e) => clickHandler(e));
    }
    document.body.dataset[`${ID}__isListenerAdded`] = true;
    const bettingsTipsItems = document.querySelectorAll(
      '.MuiGrid-container.mui-isbt42 .MuiGrid-item'
    );
    bettingsTipsItems.forEach((item) => {
      item.classList.add(`${ID}__bettingItem`);
    });
    if (VARIATION === 'control') return;
    setTimeout(init, 1000);
    onUrlChange(() => {
      pollerLite(['body', () => shouldRunTest(window.location.href)], () => {
        setTimeout(init, 1000);
      });
    });
  };

  pollerLite(['body'], () => {
    setTimeout(activate, 2000);
  });
};

export default ocbTest;
