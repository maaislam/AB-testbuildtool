import stickyNav from './components/stickyNav';
import { observeIntersection } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const anchorPoint = document.body;

  anchorPoint.insertAdjacentHTML('beforeend', stickyNav(ID, VARIATION));

  const stickySection = document.querySelector(`.${ID}__stickyNavWrapper`);
  const headerElem = document.querySelector('.header-wrapper');

  let scrollPos = 0;
  let scrollAmount = 0;

  //Adding scroll event
  window.addEventListener('scroll', () => {
    let scrollTimer;
    clearTimeout(scrollTimer);

    const currentScrollPos = document.body.getBoundingClientRect().top;

    //Check if the user has scrolled down 100px
    scrollAmount += scrollPos - currentScrollPos;

    if (scrollAmount >= 100) { //Scrolling down 100px or more
      headerElem.classList.add('slide-out-top');

      stickySection.classList.remove('slide-out-bottom');
      stickySection.classList.remove(`${ID}__hide`);
      stickySection.classList.add(`${ID}__show`);
      scrollAmount = 0; //Reset scroll amount
    } else if (currentScrollPos > scrollPos) { //Scrolling up
      headerElem.classList.remove('slide-out-top');

      stickySection.classList.remove(`${ID}__show`);
      stickySection.classList.add('slide-out-bottom');
      scrollTimer = setTimeout(() => {
        stickySection.classList.add(`${ID}__hide`);
      }, 250);
      scrollAmount = 0; //Reset scroll amount
    }

    scrollPos = currentScrollPos;
  });
};


export default () => {
  setup();
  init();
};
