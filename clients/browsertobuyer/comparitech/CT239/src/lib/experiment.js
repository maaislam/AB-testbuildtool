import stickyBanner from './components/stickyBanner';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

//Function to update the sticky banner with the content of the visible element
const showStickyBanner = (vpnName, logo, href, promoText) => {
  const stickySections = document.querySelectorAll(`.${ID}__stickyBanner`);
  stickySections.forEach((section) => {
    section.remove();
  });

  const attachPoint = document.querySelector('.main-content > .content');
  attachPoint.insertAdjacentHTML('beforeend', stickyBanner(ID, vpnName, logo, href, promoText));

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

export default () => {
  setup();

  //Get all section headers and CTA links
  const sectionHeaders = document.querySelectorAll('h2 [href*="/l/header"]');
  const ctaLinks = document.querySelectorAll('p a[href*="/l/cta"]');

  //Create a sticky element
  const attachPoint = document.querySelector('.main-content > .content');
  attachPoint.insertAdjacentHTML('beforeend', stickyBanner(ID));

  //Function to check if an element is in view

  //Scroll event listener to update sticky element content
  window.addEventListener('scroll', () => {
    for (let i = 0; i < sectionHeaders.length; i++) {
      const header = sectionHeaders[i];
      const cta = ctaLinks[i];

      //Get positions
      const headerRect = header.getBoundingClientRect();
      const ctaRect = cta.getBoundingClientRect();

      const vpnName = header.textContent.replace(/[\d\s\.]+/g, '');

      const { href } = header;
      const newHrefFirstPart = href.split('/l/')[0];
      const newHref = `${newHrefFirstPart}/l/stickycta`;
      const logoElems = document.querySelectorAll('img');

      const logoElem = [...logoElems].find((elem) => {
        const getAlt = elem.alt || elem.querySelector('img').alt;

        return getAlt.toLowerCase() === vpnName.toLowerCase();
      });

      const imgElem = logoElem.querySelector('img') ? logoElem.querySelector('img') : logoElem;

      const logo = imgElem ? imgElem.src : '';

      const promoElements = document.querySelectorAll('.ctech-get_deal_wrapper');
      const promoElement = [...promoElements].find((elem) => {
        const titleElem = elem.querySelector('.title');

        return titleElem.textContent.toLowerCase().includes(vpnName.toLowerCase());
      });

      const promoHeader = promoElement.querySelector('.heading');
      const promoText = promoHeader.textContent;

      //Determine if user is within the section
      if (headerRect.top < window.innerHeight && ctaRect.bottom > 0) {
        //User is within the current section
        const stickyElement = document.querySelector(`.${ID}__stickyBanner`);
        //stickyElement.textContent = `You are viewing the section for: ${header.textContent}`;
        stickyElement.style.display = 'block';
        showStickyBanner(vpnName, logo, newHref, promoText);
        break;
      } else {
        const stickyElement = document.querySelector(`.${ID}__stickyBanner`);
        //Hide the sticky element if no matching section is found
        stickyElement.style.display = 'none';
        hideStickyBanner();
      }
    }
  });
};
