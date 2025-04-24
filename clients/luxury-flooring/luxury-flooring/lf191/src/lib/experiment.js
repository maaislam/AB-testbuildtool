import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import buttonElem from './components/button';
import pressFeatures from './components/pressFeatures';

const { ID, VARIATION } = shared;

const getDOMFromURL = async (url) => {
  try {
    const res = await fetch(url, {
      mode: 'cors'
    });
    const html = await res.text();
    const parser = new DOMParser();
    return parser.parseFromString(html, 'text/html');
  } catch (err) {
    console.error('Failed to fetch or parse:', err);
    return null;
  }
};

const hideElement = () => {
  const girdConatinerItems = document.querySelectorAll(
    `.${ID}__photoGalarySection .grid-container:not(.${ID}__fakeGallery) .grid-item`
  );

  girdConatinerItems.forEach((item, index) => {
    if (index < 8 && !item.classList.contains('last-header-image')) {
      item.classList.add(`${ID}__show`);
    } else {
      item.classList.add(`${ID}__hidden`);
    }
  });
};

const showElement = () => {
  const girdConatinerItems = document.querySelectorAll(
    `.${ID}__photoGalarySection .grid-container:not(.${ID}__fakeGallery) .grid-item`
  );

  girdConatinerItems.forEach((item, index) => {
    item.classList.remove(`${ID}__hidden`);
  });
};

const init = () => {
  const targetPoint = document.querySelector('.usps-main.usps-main-new-design + .widget.block');
  getDOMFromURL('https://luxuryflooring.co.uk/customer-gallery').then((doc) => {
    if (doc) {
      const mainContent = doc.querySelector('.column.main');
      mainContent.classList.add(`${ID}__photoGalarySection`);
      if (mainContent && !document.querySelector(`.${ID}__photoGalarySection`)) {
        targetPoint.insertAdjacentElement('afterend', mainContent);
      }

      const gallerySection = document.querySelector(`.${ID}__photoGalarySection`);

      if (!document.querySelector(`.${ID}__btnWrapper`)) {
        gallerySection.insertAdjacentHTML('beforeend', buttonElem(ID));
      }
      hideElement();
      console.log('Page title:', mainContent);
    }
  });

  pollerLite(['.about_us_main'], () => {
    const aboutUsWrapper = document.querySelector('.about_us_main');
    const targetPoint2 = document.querySelector('.columns .column.main');

    if (!document.querySelector(`.${ID}__aboutUsWrapper`)) {
      targetPoint2.insertAdjacentElement('beforeend', aboutUsWrapper);
      aboutUsWrapper.classList.add(`${ID}__aboutUsWrapper`);
    }

    const mainTitle = aboutUsWrapper.querySelector('h2');
    const subTitle = aboutUsWrapper.querySelector('p + p');
    const footerTitle = subTitle.nextElementSibling;
    const button = aboutUsWrapper.querySelector('a');
    mainTitle.textContent = 'Luxury Made Affordable Since 2012';
    subTitle.textContent =
      'With more than 10 years’ experience in the flooring industry we’ve provided new floors to 100,000 happy homes (and counting!)';
    footerTitle.textContent =
      'We’re proud to offer over 200 floors in a variety of styles, colours and materials. From beautifully rustic solid wood to super durable vinyls; no matter what your style you’re sure to find a floor to suit your home.';
    button.textContent = 'About Luxury Flooring';
  });

  pollerLite(['.press-features'], () => {
    const pressFeaturesElem = document.querySelector('.press-features');
    console.log(pressFeatures, 'pressFeatures');
    if (!document.querySelector(`.${ID}__press-features`)) {
      pressFeaturesElem.insertAdjacentHTML('beforebegin', pressFeatures(ID));
    }
  });
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__btn`)) {
      const clickedItem = target.closest(`.${ID}__btn`);
      const wrapper = clickedItem.closest(`.${ID}__photoGalarySection`);
      wrapper.classList.toggle(`${ID}__active`);
      if (wrapper.classList.contains(`${ID}__active`)) {
        showElement();
        clickedItem.textContent = 'Hide Customer Gallery';
      } else {
        hideElement();
        clickedItem.textContent = 'View Customer Gallery';
      }
    }
  });

  init();
};
