import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

let mainBannerInView = true;
let lastScrollTop = 0;
let isScrolling;

const closeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="24px" height="24px"><g fill="#fff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M4.99023,3.99023c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80921 0.22907,1.09303l6.29297,6.29297l-6.29297,6.29297c-0.26124,0.25082 -0.36647,0.62327 -0.27511,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27511l6.29297,-6.29297l6.29297,6.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-6.29297,-6.29297l6.29297,-6.29297c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-6.29297,6.29297l-6.29297,-6.29297c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30273z"/></g></g></svg>';

const renderBanner = () => {
  const htmlString = `
  <div class="${ID}__banner ${mainBannerInView ? `${ID}__hide` : ''}">
    <span class="${ID}__close">${closeIcon}</span>
    <div class="${ID}__banner__content extra_off">
        <h4><b>Extra 5% OFF</b></h4>
        <div class="coupon_code">
            <h3>CODE: <b>LUXURY5</b></h3>
        </div>
    </div>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', htmlString);
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

export default () => {
  setup();
  if (sessionStorage.getItem('bannerClosed')) return;
  observeIntersection(document.querySelector('.homepage-banner'), 0.5, (entries) => {
    entries.forEach((entry) => {
      const bannerSticky = document.querySelector(`.${ID}__banner`);
      if (!entry.isIntersecting) {
        mainBannerInView = false;
        bannerSticky.classList.remove(`${ID}__hide`);

        bannerSticky.classList.remove('slide-out-top');

        return;
      }

      mainBannerInView = true;
      bannerSticky.classList.add(`${ID}__hide`);

      //bannerSticky.classList.add('slide-out-top');
    });
  });

  renderBanner();

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    const bannerSticky = document.querySelector(`.${ID}__banner`);
    const showBanner = () => {
      bannerSticky.classList.remove(`${ID}__hide`);
      bannerSticky.classList.add('slide-in-top');
      bannerSticky.classList.remove('slide-out-top');
    };

    const hideBanner = () => {
      bannerSticky.classList.remove('slide-in-top');
      bannerSticky.classList.add('slide-out-top');
      setTimeout(() => {
        bannerSticky.classList.add(`${ID}__hide`);
      }, 500);
    };
    window.clearTimeout(isScrolling);

    if (currentScroll <= lastScrollTop) {
      hideBanner();
      //Set a timeout to run after scrolling ends
      console.log('Scrolling has stopped.', mainBannerInView);
      isScrolling = setTimeout(() => {
        //Run the callback
        if (!mainBannerInView) {
          showBanner();
        }
      }, 550);
    } else if (currentScroll > lastScrollTop && !mainBannerInView) {
      showBanner();
    }
    //Clear our timeout throughout the scroll

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; //For Mobile or negative scrolling
  });

  document.querySelector(`.${ID}__close`).addEventListener('click', () => {
    const bannerSticky = document.querySelector(`.${ID}__banner`);
    bannerSticky.remove();
    sessionStorage.setItem('bannerClosed', true);
  });
};
