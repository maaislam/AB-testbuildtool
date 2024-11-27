import stickyBanner from './component/stickyBanner';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

//Function to update the sticky banner with the content of the visible element
const showStickyBanner = (vpnName, logo, href) => {
  const stickySections = document.querySelectorAll(`.${ID}__stickyBanner`);
  stickySections.forEach((section) => {
    section.remove();
  });

  const attachPoint = document.querySelector('.main-content > .content');
  attachPoint.insertAdjacentHTML('beforeend', stickyBanner(ID, vpnName, logo, href));

  const banner = document.querySelector(`.${ID}__stickyBanner`);
  const contentWidth = document.querySelector('.main-content > .content');
  const attachPointWidth = contentWidth.clientWidth;

  banner.classList.remove(`${ID}__hide`);
  banner.classList.remove('slide-out-top');
  banner.classList.add(`${ID}__show`);

  banner.style.width = `${attachPointWidth}px`;
};

//Function to hide the sticky banner
const hideStickyBanner = () => {
  const banner = document.querySelector(`.${ID}__stickyBanner`);
  if (banner) {
    banner.classList.remove(`${ID}__show`);
    banner.classList.add('slide-out-top');
  }
};

const init = () => {
  const attachPoint = document.querySelector('.main-content > .content');
  attachPoint.insertAdjacentHTML('beforeend', stickyBanner(ID));

  //Function to check if an element is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //Element comes into view
        const element = entry.target;

        //Check if it's the h2 header
        if (element.matches('h2 [href*="/l/header"]')) {
          const linkParentElem = element.closest('h2');
          const vpnName = element.textContent.trim();

          const { href } = element;
          const newHrefFirstPart = href.split('/l/')[0];
          const newHref = `${newHrefFirstPart}/l/stickycta`;

          const logoElem = linkParentElem.nextElementSibling.querySelector('.ctech-review-badge img');
          const logo = logoElem ? logoElem.src : '';

          showStickyBanner(vpnName, logo, newHref);
        }

        if (element.matches('p a[href*="/l/cta"]')) {
          hideStickyBanner();
        }
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  //Select elements to observe
  const startElements = document.querySelectorAll('h2 [href*="/l/header"]');
  const endElements = document.querySelectorAll('p a[href*="/l/cta"]');

  [...startElements, ...endElements].forEach((element) => observer.observe(element));
};

export default () => {
  setup();
  init();
};
