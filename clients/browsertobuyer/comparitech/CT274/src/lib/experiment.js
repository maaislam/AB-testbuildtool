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
    const providerName = firstProvider.querySelector('strong')
      ? firstProvider.querySelector('strong').childNodes[0].textContent.trim() ||
        firstProvider.innerText ||
        ''
      : firstProvider.querySelector('b')
      ? firstProvider.querySelector('b').childNodes[0].textContent.trim() ||
        firstProvider.innerText ||
        ''
      : firstProvider.textContent.trim() || firstProvider.innerText || '';

    const providerLink = firstProvider ? firstProvider.href || '' : '';
    console.log(firstProvider, 'firstProvider');

    const pageTitleElem = document.querySelector('#pagetitle');
    const pageTitle = pageTitleElem.textContent || pageTitleElem.innerText || '';

    const entryContent = document.querySelector('.entry-content');
    const features = entryContent ? entryContent.getBoundingClientRect() : {};
    //--- Banner setup ---
    const banner = document.createElement('div');
    banner.id = 'sticky-banner';
    banner.innerHTML = wrapper(ID, providerName, providerLink, pageTitle);
    Object.assign(banner.style, {
      position: 'fixed',
      top: '0',
      left: `${features.left}px`,
      background: '#fff',
      color: '#fff',
      textAlign: 'center',
      display: 'none',
      width: `${features.width}px`,
      zIndex: '9999'
    });

    if (!document.querySelector('#sticky-banner')) {
      document.querySelector('.entry-content').insertAdjacentElement('beforebegin', banner);
      trackGA4Event('test_run_ct_274', '', '');
    }

    let lastScrollY = window.scrollY;
    let ticking = false;

    const isInViewport = (el) => {
      if (!el || typeof el.getBoundingClientRect !== 'function') return false;
      const r = el.getBoundingClientRect();
      //element intersects viewport vertically
      return r.top < window.innerHeight && r.bottom > 0;
    };

    //Get the first <ol> that contains a link with href*="/l/list"
    const getFirstListWithLink = () => {
      const ols = document.querySelectorAll('ol');
      for (const ol of ols) {
        if (ol.querySelector('a[href*="/l/list"]')) return ol;
      }
      return null;
    };

    const anyTargetInView = () => {
      //Check ALL .editors-choice and .header-nav
      const targets = [...document.querySelectorAll('.editors-choice, .header-nav')];

      //Add ONLY the first matching <ol> (if any)
      const firstOl = getFirstListWithLink();
      if (firstOl) targets.push(firstOl);

      //Debug which elements we're checking
      console.log(
        '[targets]',
        targets.map((t) => {
          const r = t.getBoundingClientRect();
          return {
            node:
              t.tagName +
              (t.className ? `.${String(t.className).trim().replace(/\s+/g, '.')}` : ''),
            top: Math.round(r.top),
            bottom: Math.round(r.bottom)
          };
        })
      );

      //Visible if ANY target intersects the viewport
      const visible = targets.some(isInViewport);
      if (visible) {
        console.log('→ A hide-target is in viewport → should hide banner');
      } else {
        console.log('→ No hide-targets in viewport');
      }
      return visible;
    };

    const applyVisibility = (scrollDir) => {
      const inView = anyTargetInView();

      //Rule: hide if (scrolling up) OR (any target in view)
      const shouldHide = scrollDir === 'up' || inView;
      const nextDisplay = shouldHide ? 'none' : 'block';

      if (banner.style.display !== nextDisplay) {
        console.log(
          `Setting banner display to: ${nextDisplay} (dir: ${scrollDir}, inView: ${inView})`
        );
        banner.style.display = nextDisplay;
      } else {
        console.log(
          `Banner display unchanged: ${nextDisplay} (dir: ${scrollDir}, inView: ${inView})`
        );
      }
    };

    const handleTick = () => {
      const currentY = window.scrollY;
      const dir = currentY > lastScrollY ? 'down' : currentY < lastScrollY ? 'up' : 'none';
      console.log('Scroll →', {
        currentY,
        lastScrollY,
        dir
      });

      applyVisibility(dir);

      lastScrollY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(handleTick);
      }

      const entryContentElem = document.querySelector('.entry-content');
      const { left, width } = entryContentElem ? entryContentElem.getBoundingClientRect() : {};
      if (banner) {
        banner.style.left = `${left}px`;
        banner.style.width = `${width}px`;
      }
    };

    //Also respond to resizes (viewport changes can affect visibility)
    window.addEventListener('resize', onScroll, {
      passive: true
    });
    window.addEventListener('scroll', onScroll, {
      passive: true
    });

    //Initial run
    console.log('Sticky banner initialized. Running initial visibility check…');
    handleTick();

    //Optional: observe DOM changes that might add/remove targets
    const mo = new MutationObserver(() => {
      console.log('DOM changed → re-evaluating visibility');
      onScroll();
    });
    mo.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  })();
};

const startExperiment = () => {
  init();
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  startExperiment();
};
