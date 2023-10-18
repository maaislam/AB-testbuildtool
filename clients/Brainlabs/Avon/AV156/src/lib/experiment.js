import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  setup();
  const starSvg = `<span class=${ID}__starSvg>
    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.39148 0.448943L3.95068 3.24838L1.19838 3.69368C0.995268 3.7265 0.811784 3.83106 0.683142 3.9873L0.633148 4.05472C0.403375 4.40033 0.475754 4.86576 0.813444 5.12838L3.06882 6.88246L2.1633 9.96511C2.09599 10.1941 2.13554 10.4403 2.27146 10.6384L2.32242 10.7051C2.59166 11.0227 3.06997 11.0967 3.42983 10.8636L6.13861 9.10801L8.84738 10.8636C9.05126 10.9957 9.30454 11.0341 9.54016 10.9687L9.61646 10.9436C10.0126 10.7927 10.2332 10.3709 10.1139 9.96511L9.20779 6.88246L11.4638 5.12838C11.6245 5.00336 11.7321 4.82503 11.7659 4.62764L11.7753 4.5499C11.8048 4.13735 11.5072 3.76288 11.0788 3.69368L8.32594 3.24838L6.88573 0.448943C6.80491 0.291833 6.67383 0.164439 6.51217 0.0858843C6.09954 -0.114627 5.59779 0.0479195 5.39148 0.448943Z" fill="#546264"/>
    </svg>  
  </span>
  `;

  if (window.DY.deviceInfo.type === 'desktop') {
    const topRatedUrlElem = document.querySelector('#HeaderSubmenus [href*="/top-rated"]');
    const topRatedMenuItem = topRatedUrlElem.closest('li');
    const topRatedMenu = topRatedMenuItem.closest('ul');

    topRatedUrlElem.classList.add(`${ID}__topRatedUrlElem`);
    topRatedMenu.classList.add(`${ID}-${VARIATION}__topRatedMenu`);
    topRatedMenuItem.classList.add(`${ID}-${VARIATION}__topRatedMenu-item`);

    if (!document.querySelector(`.${ID}__starSvg`)) {
      topRatedUrlElem.insertAdjacentHTML('afterbegin', starSvg);
    }
  } else {
    const hamburgerBtn = document.querySelector('header #Hamburger');
    hamburgerBtn.addEventListener('mousedown', () => {
      if (document.body.classList.contains('AG060a')) {
        const mobileNavSaleElem = document.querySelector(
          '.AG060a_MobileNav > .AG060a_MobileNav_level ul li'
        );
        const mobileNavTopRatedUrlElem = document.querySelector(
          '.AG060a_MobileNav .AG060a_MobileNav_level ul li a[href*="/773/bestsellers"]'
        );
        const mobileNavTopRatedListItem = mobileNavTopRatedUrlElem.parentElement;
        const starSvgElem = document.querySelector(`.${ID}__starSvg`);

        mobileNavTopRatedListItem.classList.add(`${ID}-${VARIATION}__topRatedMenu-item`);
        mobileNavTopRatedUrlElem.classList.add(`${ID}__topRatedUrlElem`);

        if (!starSvgElem) {
          mobileNavTopRatedUrlElem.insertAdjacentHTML('afterbegin', starSvg);
        }
        mobileNavSaleElem.insertAdjacentElement('beforebegin', mobileNavTopRatedListItem);
      } else {
        const topRatedUrlElem = document.querySelector(
          'nav#HamburgerMenuNew ul#HamburgerCategories li a[href*="/top-rated"]'
        );
      }
    });
  }
};

export default () => {
  init();
};
