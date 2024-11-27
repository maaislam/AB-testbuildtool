import setup from './services/setup';
import shared from './shared/shared';
import { isScrolledIntoView, pollerLite } from './helpers/utils';
import footerMenuData from './data/data';
import footerWrapper from './components/footerWrapper';

const { ID, VARIATION } = shared;
let isScrolling = false;

const setActiveItem = (element) => {
  const visibleElement = element;
  const getId = visibleElement.id;
  const exstingActiveItem = document.querySelectorAll('.footer-menu-item.active');
  exstingActiveItem.forEach((item) => {
    item.classList.remove('active');
  });

  document.querySelector(`.footer-menu-item[data-id="${getId}"]`).classList.add('active');
};

const init = () => {
  if (!document.querySelector('.footer-wrapper')) {
    document.body.insertAdjacentHTML('beforeend', footerWrapper(ID, footerMenuData));
  }
  const wrapper = document.querySelector('#MainContent');
  pollerLite(['#join_pkg'], () => {
    const briefSection = wrapper.querySelector('.section_6');
    briefSection.id = 'belief';

    const useSection = wrapper.querySelector('.section_7');
    useSection.id = 'use';

    const reviewsSection = wrapper.querySelector('.section_5');
    reviewsSection.id = 'custom-reviews';

    const faq = wrapper.querySelector('.section_13');
    faq.id = 'faq';
  });
};

export default () => {
  setup(); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.footer-menu-item')) {
      const clickedItem = e.target.closest('.footer-menu-item');
      const { id } = clickedItem.dataset;

      const exstingActiveItem = document.querySelectorAll('.footer-menu-item.active');
      exstingActiveItem.forEach((item) => {
        item.classList.remove('active');
      });

      //Disable scroll event temporarily
      isScrolling = true;

      clickedItem.classList.add('active');
      window.bookmarkscroll.scrollTo(`${id}`);

      //Re-enable scroll listener after a delay
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    }
  });

  init();

  window.addEventListener('scroll', () => {
    if (isScrolling) return;
    if (isScrolledIntoView(document.querySelector('.section_6'))) {
      setActiveItem(document.querySelector('.section_6'));
    } else if (isScrolledIntoView(document.querySelector('.section_7'))) {
      setActiveItem(document.querySelector('.section_7'));
    } else if (isScrolledIntoView(document.querySelector('.section_13'))) {
      setActiveItem(document.querySelector('.section_13'));
    } else if (isScrolledIntoView(document.querySelector('#join_pkg'))) {
      setActiveItem(document.querySelector('#join_pkg'));
    } else if (isScrolledIntoView(document.querySelector('.section_5'))) {
      setActiveItem(document.querySelector('.section_5'));
    } else if (isScrolledIntoView(document.querySelector('#our_story'))) {
      setActiveItem(document.querySelector('#our_story'));
    }
  });
};
