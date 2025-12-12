import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import wrapper from './components/wrapper';

const { ID, VARIATION } = shared;

const trackGA4Event = (category, action, label) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'gaCustomEvent',
    eventCategory: category,
    eventAction: action,
    eventLabel: label
  });
  console.log('event tracked', category, action, label);
};

const init = () => {
  (() => {
    const firstProvider = document.querySelector('.entry-content ol li a.go-link');
    const providerName = firstProvider.querySelector('b')
      ? firstProvider.querySelector('b').childNodes[0].textContent.trim() ||
        firstProvider.innerText ||
        ''
      : firstProvider.querySelector('strong')
      ? firstProvider.querySelector('strong').childNodes[0].textContent.trim() ||
        firstProvider.innerText ||
        ''
      : firstProvider.textContent.trim() || firstProvider.innerText || '';

    const providerLink = firstProvider ? firstProvider.href || '' : '';

    const updatedName = providerName.includes('(FREE TRIAL)')
      ? providerName.replace('(FREE TRIAL)', '').trim()
      : providerName;

    console.log(updatedName, 'updatedName');

    const pageTitleElem = document.querySelector('#pagetitle');
    const pageTitle = pageTitleElem.textContent || pageTitleElem.innerText || '';

    const entryContent = document.querySelector('.entry-content');
    const features = entryContent ? entryContent.getBoundingClientRect() : {};

    //new code
    (() => {
      const CONFIG = {
        mainMenuSelector: '.header-nav',
        editorsChoiceSelector: '.editors-choice',
        proConSelector: '.pro-con-list-wrapper',
        topListHrefFragment: '/l/list',
        stickyBannerSelector: '#sticky-banner'
      };

      //Create a basic banner if one doesn't exist
      const ensureBanner = () => {
        let el = document.querySelector(CONFIG.stickyBannerSelector);
        if (!el) {
          el = document.createElement('div');
          el.id = CONFIG.stickyBannerSelector.replace(/^#/, '');
          el.setAttribute('role', 'region');
          el.style.cssText = `
        position: fixed; left: ${features.left}px; top: 0; z-index: 99999;
        visibility: hidden; pointer-events: none; /* start hidden */
        background: #fff; color: #fff; text-align: center;
        font: 14px/1.3 system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        box-shadow: 0 -6px 16px rgba(0,0,0,.15); width: ${features.width}px;
      `;
          el.innerHTML = wrapper(ID, updatedName, providerLink, pageTitle);

          if (!document.querySelector('#sticky-banner')) {
            document.querySelector('.entry-content').insertAdjacentElement('beforebegin', el);
            trackGA4Event('test_run_ct_274', '', '');
          }
        }
        return el;
      };

      const findTopList = () => {
        const ols = document.querySelectorAll('ol');
        for (const ol of ols) {
          if (ol.querySelector(`a[href*="${CONFIG.topListHrefFragment}"]`)) return ol;
        }
        return null;
      };

      const getAbsTop = (el) => {
        const r = el.getBoundingClientRect();
        return window.scrollY + r.top;
      };
      const getAbsBottom = (el) => getAbsTop(el) + (el?.offsetHeight || 0);

      const banner = ensureBanner();
      let visible = false;

      //Scroll direction
      let lastY = window.scrollY;
      let scrollingUp = false;

      //Watchers for elements that directly hide the banner while visible
      const trackers = {};
      const observe = (el, key) => {
        if (!el) return;
        trackers[key] = {
          el,
          inView: false
        };
        new IntersectionObserver(
          ([entry]) => {
            trackers[key].inView = entry.isIntersecting;
            applyVisibility();
          },
          {
            threshold: 0
          }
        ).observe(el);
      };

      //Targets (allow refresh if DOM changes)
      let editorsChoice = document.querySelector(CONFIG.editorsChoiceSelector);
      let proCons = Array.from(document.querySelectorAll(CONFIG.proConSelector));
      let lastProCon = proCons.length ? proCons[proCons.length - 1] : null;

      observe(document.querySelector(CONFIG.mainMenuSelector), 'mainMenu');
      observe(findTopList(), 'topList');

      const show = () => {
        if (visible) return;
        banner.style.visibility = 'visible';
        banner.style.pointerEvents = 'auto';
        banner.setAttribute('aria-hidden', 'false');
        visible = true;
      };

      const hide = () => {
        if (!visible) return;
        banner.style.visibility = 'hidden';
        banner.style.pointerEvents = 'none';
        banner.setAttribute('aria-hidden', 'true');
        visible = false;
      };

      //Exclusion states
      const betweenEditorsAndLast = () => {
        if (!editorsChoice || !lastProCon) return false;
        const viewportTop = window.scrollY;
        const viewportBottom = viewportTop + window.innerHeight;
        const ecTop = getAbsTop(editorsChoice);
        const lastBottom = getAbsBottom(lastProCon);
        //Exclusion is active once we've reached editors-choice,
        //and remains until we pass the bottom of the last pro/con.
        const reachedEditors = viewportBottom >= ecTop;
        const beforeLastBottom = viewportTop < lastBottom;
        return reachedEditors && beforeLastBottom;
      };

      const belowLastProCon = () => {
        if (!lastProCon) return false;
        const viewportTop = window.scrollY;
        const lastBottom = getAbsBottom(lastProCon);
        //Below last pros/cons when the viewport top is at/after the last section's bottom
        return viewportTop >= lastBottom;
      };

      const exclusionActive = () => {
        const menuIn = trackers.mainMenu?.inView;
        const listIn = trackers.topList?.inView;
        const between = betweenEditorsAndLast();
        const belowLast = belowLastProCon();
        return !!(menuIn || listIn || between || belowLast);
      };

      const shouldHide = () => {
        //Hide if scrolling up OR any exclusion is active
        return scrollingUp || exclusionActive();
      };

      const applyVisibility = () => {
        if (shouldHide()) hide();
        else show(); //reappear when scrolling down and no exclusion in view

        const entryContentElem = document.querySelector('.entry-content');
        const { left, width } = entryContentElem ? entryContentElem.getBoundingClientRect() : {};
        const bannerElem = document.querySelector('#sticky-banner');
        if (bannerElem) {
          bannerElem.style.left = `${left}px`;
          bannerElem.style.width = `${width}px`;
        }
      };

      //Listeners
      window.addEventListener(
        'scroll',
        () => {
          const y = window.scrollY;
          scrollingUp = y < lastY;
          lastY = y;
          applyVisibility();
        },
        {
          passive: true
        }
      );

      window.addEventListener('resize', applyVisibility);

      //Re-detect dynamic elements (for SPA or lazy content)
      const refreshTargets = () => {
        //editors-choice / pro-cons might appear or change
        editorsChoice = document.querySelector(CONFIG.editorsChoiceSelector) || editorsChoice;
        proCons = Array.from(document.querySelectorAll(CONFIG.proConSelector));
        lastProCon = proCons.length ? proCons[proCons.length - 1] : lastProCon;

        //top list may appear later
        if (!trackers.topList?.el) {
          const tl = findTopList();
          if (tl) observe(tl, 'topList');
        }
      };

      const mo = new MutationObserver(() => {
        clearTimeout(mo._t);
        mo._t = setTimeout(() => {
          refreshTargets();
          applyVisibility();
        }, 150);
      });
      mo.observe(document.documentElement, {
        childList: true,
        subtree: true
      });

      //Init
      const init_2 = () => applyVisibility();
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init_2);
      } else {
        init_2();
      }
      window.addEventListener('load', init_2);
    })();
  })();
};

const startExperiment = () => {
  init();
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (
      target.closest(`.${ID}__imageWWrapper`) ||
      target.closest(`.${ID}__title`) ||
      target.closest(`.${ID}__providerBtn`)
    ) {
      trackGA4Event('test_run_ct_274', 'Sticky Banner Clicks', '');
    }
  });
  startExperiment();
};
