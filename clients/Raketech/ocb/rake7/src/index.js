/* eslint-disable */
(function(window, isDevMode) {
    const _NAME_ = 'rake7';
    const _CNAME_ = 'lc-' + _NAME_;
    const safeLog = debug(_CNAME_)('variant');
    const BASE_URL = 'https://www.onlinecricketbetting.net';
    safeLog.info();
    // config section
    // START banner config
    const BANNERS = [
      
      {
        bgImage: 'https://res.cloudinary.com/qm-media/image/upload/v1696241196/varial/ocb/media/articles/image0',
        mainCopy: '₹150% Bonus to INR 30,000',
        secondaryCopy: 'OCB Exclusive! Code - OCB',
        ctaCopy: 'Claim',
        badgeImage: 'https://res.cloudinary.com/qm-media/image/upload/w_240,f_auto/varial/ocb/betting-sites/parimatch-logo',
        link: '/go/parimatch/',
        tag: 'parimatch'
      },
      {
        bgImage: 'https://res.cloudinary.com/qm-media/image/upload/f_auto,q_auto,w_1000/varial/ocb/media/articles/1xbet-kieron-pollard.jpg',
        mainCopy: 'OCB Exclusive Bonus up to INR ₹42,900',
        secondaryCopy: 'CODE: OCB2024',
        ctaCopy: 'Claim',
        badgeImage: 'https://res.cloudinary.com/qm-media/image/upload/w_240,f_auto/varial/ocb/betting-sites/1xbet-logo',
        link: '/go/1xbet/',
        tag: '1xbet'
      },
      {
        bgImage: 'https://res.cloudinary.com/qm-media/image/upload/v1696342070/varial/ocb/media/articles/mostbet-russel',
        mainCopy: '120% First Deposit Bonus',
        secondaryCopy: 'Upto INR 34000',
        ctaCopy: 'Claim',
        badgeImage: 'https://res.cloudinary.com/qm-media/image/upload/w_240,f_auto/varial/ocb/betting-sites/mostbet-logo',
        link: '/go/mostbet/',
        tag: 'mostbet'
      },
      {
        bgImage: 'https://res.cloudinary.com/qm-media/image/upload/f_auto,w_auto/varial/ocb/media/satbet-banner',
        mainCopy: '300% Bonus on First Deposit',
        secondaryCopy: 'PROMO CODE: OCB300',
        ctaCopy: 'Claim',
        badgeImage: 'https://res.cloudinary.com/qm-media/image/upload/w_240,f_auto/varial/ocb/betting-sites/satbet-logo',
        link: '/go/satbet/',
        tag: 'satbet'
      },
      {
        bgImage: 'https://res.cloudinary.com/qm-media/image/upload/f_auto,q_auto/varial/ocb/media/dafabet-ipl-banner-2023',
        mainCopy: '200% Up To 20,000',
        secondaryCopy: 'New Player Offer',
        ctaCopy: 'Claim',
        badgeImage: 'https://res.cloudinary.com/qm-media/image/upload/w_240,f_auto/varial/ocb/betting-sites/dafabet-logo',
        link: '/go/dafabet/',
        tag: 'dafabet'
      },
      {
        bgImage: 'https://res.cloudinary.com/qm-media/image/upload/v1686854807/varial/ocb/media/articles/10cric-ashes-banner',
        mainCopy: '100% Bonus Up To ₹30000 ',
        secondaryCopy: 'Welcome Bonus',
        ctaCopy: 'Claim',
        badgeImage: 'https://res.cloudinary.com/qm-media/image/upload/w_240,f_auto/varial/ocb/betting-sites/10cric-logo',
        link: '/go/10cric/',
        tag: '10cric'
      },
      {
        bgImage: 'https://res.cloudinary.com/qm-media/image/upload/v1685708598/varial/ocb/media/articles/rajabets-carousel-image',
        mainCopy: '150% Bonus up to ₹1,00,000 ',
        secondaryCopy: 'Welcome Bonus',
        ctaCopy: 'Claim',
        badgeImage: 'https://res.cloudinary.com/qm-media/image/upload/w_240,f_auto/varial/ocb/betting-sites/rajabets-logo',
        link: '/go/rajabets/',
        tag: 'rajabets'
      },
      {
        bgImage: 'https://res.cloudinary.com/qm-media/image/upload/v1685708721/varial/ocb/media/articles/fun88-carousel-image',
        mainCopy: '250% up to ₹12,500',
        secondaryCopy: 'Welcome Bonus',
        ctaCopy: 'Claim',
        badgeImage: 'https://res.cloudinary.com/qm-media/image/upload/w_240,f_auto/varial/ocb/betting-sites/fun88-logo',
        link: '/go/fun88/',
        tag: 'fun88'
      }
      
      
      
      
    ];
    // END banner config
    // START navigation config
    const NAV = [
      {copy: 'Sites', iconClass: 'fa-globe', link: BASE_URL + '/betting-sites'},
      {copy: 'Odds', iconClass: 'fa-list-ol', link: BASE_URL + '/odds'},
      {copy: 'Apps', iconClass: 'fa-mobile-alt', link: BASE_URL + '/apps'},
      {copy: 'Tips', iconClass: 'fa-gem', link: BASE_URL + '/cricket-betting-tips'},
      {copy: 'IPL', iconClass: 'fa-award', link: BASE_URL + '/tournaments/IPL'}
    ];
    // END navigation config
    // config section
    const Classes = {
      NAV: _CNAME_ + -'nav',
      NAVITEM: _CNAME_ + '-item',
      CAROUSEL: _CNAME_ + '-carousel',
      BANNER: _CNAME_ + '-banner'
    };
    waitFor(() => window.jQuery && document.querySelector('header'))
      .then(runCampaign)
      .catch((err) => {
        safeLog.error(err);
        toggleBodyClass('remove');
        cleanupCampaign(Classes.BANNER, Classes.NAV);
      });
    // eslint-disable-next-line consistent-return
    function runCampaign(headerEl) {
      safeLog.ok();
      toggleBodyClass('add');
      const navMenu = addNavMenu(headerEl);
      listenClicksFor(navMenu, Classes.NAVITEM, 'Nav Click', navTagBuilder);
      if (isHomePage()) {
        const carouselEl = initCarousel(navMenu);
        hideLandingSection();
        listenClicksFor(carouselEl, Classes.BANNER, 'Carousel Click');
        return loadSlick().then(() => initSlick(carouselEl));
      }
    }
    function hideLandingSection() {
      const landingEl = document.querySelector('.landing-page');
      landingEl && landingEl.classList.add('lc-rake7-hidden');
    }
    function navTagBuilder(navEl) {
      return new URL(navEl.href).pathname.split('/').filter(Boolean).join('-');
    }
    function addNavMenu(headerEl) {
      headerEl.insertAdjacentHTML(
        'afterend',
        `<div class="lc-rake7-nav ${isHomePage() ? 'sticky' : ''}">${buildNavElFromConfig()}</div>`
      );
      return document.querySelector('.lc-rake7-nav');
    }
    function buildNavElFromConfig() {
      return NAV.map(entry => `<a href="${entry.link}" class="${Classes.NAVITEM}">
        ${entry.iconLink ?  `<img src=${entry.iconLink}></img>` : `<i class="fas ${entry.iconClass}" aria-hidden="true"></i>`}
        <p>${entry.copy}</p>
      </a>`).join('');
    }
    function buildBannersFromConfig() {
      return BANNERS.map(entry => `<a class="${Classes.BANNER}" href="${entry.link}" target="_blank" rel="noreferrer noopener" data-lc-tag="${entry.tag}">
        <div class="lc-rake7-wrapper">
          <img class="lc-rake7-bg cover-img" src=${entry.bgImage}></img>
          <div class="lc-rake7-content">
              ${entry.badgeImage ? `<div class="lc-rake7-badge"><img class="cover-img" src=${entry.badgeImage}></img></div>` : ''}
            <h1>${entry.mainCopy}</h1>
            <p>${entry.secondaryCopy}</p>
            <button class="cta play-icon" href="${entry.link}">${entry.ctaCopy}</button>
          </div>
        </div>
      </a>`).join('');
    }
    function initSlick(carouselEl) {
      $(carouselEl).slick({
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        //centerPadding: '1.5em',
        centerPadding: '10px',
        infinite: false,
        arrows: false,
        dots: true,
        slidesToShow: 1,
      });
      carouselEl.classList.remove('lc-rake7-hidden');
    }
    function initCarousel(targetElement) {
      targetElement.insertAdjacentHTML(
        'afterend',
        `<div class="${Classes.CAROUSEL} lc-rake7-hidden">
          ${buildBannersFromConfig()}
        </div>`
      );
      return document.querySelector('.lc-rake7-carousel');
    }
    function listenClicksFor(targetEl, cls, metricPrepend, fnTagBuilder) {
      targetEl.addEventListener('click', function(e) {
        const targets = [`a.${cls}`, `a.${cls} *`];
        const targetBanner = e.target.matches(targets.join(',')) && e.target.closest(`.${cls}`);
        if (targetBanner) {
          const metricString = (metricPrepend || '') + ' ' + (fnTagBuilder ? fnTagBuilder(targetBanner) : targetBanner.dataset.lcTag);
          safeLog.ok('metric:', metricString);
          !isDevMode && trackMetric(metricString);
        }
      });
    }
    function cleanupCampaign() {
      const elements = [...arguments].map(str => '.' + str);
      document.querySelectorAll(elements.join(',')).forEach(el => el.remove());
      document.querySelectorAll('.lc-rake7-hidden').forEach(el => el.classList.remove('lc-rake7-hidden'));
    }
    function loadSlick() {
      return $.getScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js');
    }
    function isHomePage() {
      return window.location.pathname === '/';
    }
    function trackMetric(name) {
      if (window.ga) {
        window.ga(getTrackerName() + '.send', {
          hitType: 'event',
          eventCategory: 'Google Optimize',
          eventAction: _CNAME_,
          eventLabel: name,
        });
      }
    }
    function getTrackerName() {
      var trackerName = '';
      var trackers = window.ga.getAll();
      trackers.forEach(function(tracker) {
        trackerName = tracker.get('name');
      });
      return trackerName;
    }
    function toggleBodyClass(action) {
      document.body.classList[action](_CNAME_);
    }
    function waitFor(condition, timeout) {
      const stopTime = typeof timeout === 'number' ? timeout : 7000;
      let stop = false;
      window.setTimeout(function() {
        stop = true;
      }, stopTime);
      // eslint-disable-next-line no-undef
      return new Promise(function(resolve, reject) {
        (function _innerWaitFor() {
          const value = condition();
          if (stop) {
            reject();
          } else if (value) {
            resolve(value);
          } else {
            window.setTimeout(_innerWaitFor, 50);
          }
        })();
      });
    }
    /* LC safe debug */
    function debug(u) {var n = {info: "blue", ok: "green", error: "red"}; return function(t) {return Object.keys(n).reduce(function(r, e) {var o = n[e]; r[e] = function() {if (!c()) return; var r = (new Date).toTimeString().replace(/\s(.*)/, ""); var n = "%c" + u + ":" + e + " [" + r + "] " + (t || ""); console.info.apply(this, [n, "color: " + o].concat(Array.prototype.slice.call(arguments)))}; return r}, {})}; function c() {return document.cookie.indexOf("lc-qa=1") !== -1 || window.location.href.indexOf("lc-qa=1") !== -1} } // eslint-disable-line
    // eslint-disable-next-line no-undef
  }
  )(typeof unsafeWindow === 'undefined' ? window : unsafeWindow, typeof unsafeWindow !== 'undefined');
  // eslint-disable-next-line spaced-comment
  //# sourceURL=c-rake7-v1.js
  
