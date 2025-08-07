/*eslint-disable no-underscore-dangle */
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { isAndroid, isApple, isMobile, pollerLite } from './helpers/utils';
import swiper from './helpers/swiper';
import heroSection from './components/heroSection';
import { bulletPoints, sliderData } from './data/data';
import initSwiper from './helpers/initSwiper';
import { tickIcon } from './assets/icons';
import content from './components/content';

swiper();
let collectedData = [];
window._conv_q = window._conv_q || [];

const { ID, VARIATION } = shared;

const init = () => {
  if (!document.querySelector(`.${ID}__heroSection`)) {
    document.querySelector('main').insertAdjacentHTML('afterbegin', heroSection(ID, sliderData));
  }

  if (document.querySelectorAll(`.${ID}__sliderBox .swiper-slide`).length > 0) {
    initSwiper(ID);
  }

  if (isMobile() && isAndroid()) {
    document.querySelector('.rating-image.google').style.display = 'block';
    document.querySelector('.rating-image.apple').style.display = 'none';
  }

  if (isMobile() && isApple()) {
    document.querySelector('.rating-image.google').style.display = 'none';
    document.querySelector('.rating-image.apple').style.display = 'block';
  }

  pollerLite(
    [
      () =>
        document.querySelectorAll('[data-testid="plans-cards"] [data-testid="tag"]').length === 3,

      () =>
        document.querySelectorAll('[data-testid="plans-cards"] [data-testid="plan-button-link"]')
          .length === 3
    ],
    () => {
      const cards = document.querySelectorAll('[data-testid="plans-cards"] > div');
      collectedData = [...cards].map((card) => {
        const title = card.querySelector('h3.text-2xl')?.textContent || '';
        const price = card.querySelector('div.text-purple-800 span.text-3xl')?.textContent || '';
        const tagElem = card.querySelector('[data-testid="tag"]');
        const tag = tagElem ? tagElem.textContent?.match(/\d+/)[0] || '' : '0';
        const link = card.querySelector('a[data-testid="plan-button-link"]')?.href || '';
        return {
          title,
          price,
          tag,
          link
        };
      });

      if (collectedData.length > 0) {
        setTimeout(() => {
          document.querySelector(`.${ID}__content`).innerHTML = content(ID, collectedData);
        }, 3000);
      }
    }
  );
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.dropdown-selected')) {
      const clickedItem = target.closest('.dropdown-selected');
      const wrapper = clickedItem.closest('.dropdown');
      wrapper.classList.toggle('open');

      if (wrapper.classList.contains('open')) {
        window._conv_q.push(['triggerConversion', '1004101533']);
      }
    } else if (!target.closest('.dropdown')) {
      const clickedItem = document.querySelector('.dropdown-selected');
      const wrapper = clickedItem.closest('.dropdown');
      wrapper.classList.remove('open');
    } else if (target.closest('.dropdown-item')) {
      const selectedItem = target.closest('.dropdown-item');
      const { item } = selectedItem.dataset;
      const wrapper = selectedItem.closest('.dropdown');
      const dropdownSelected = wrapper.querySelector('.dropdown-selected');
      dropdownSelected.querySelector('span:first-child').textContent = selectedItem.textContent;
      wrapper.classList.remove('open');

      //update the dom
      const isExistItem = collectedData.find((data) => data.title === item);
      if (isExistItem) {
        const card = document.querySelector(`.${ID}__content`);
        const price = card.querySelector('.price');
        price.innerHTML = `${isExistItem.price}<span>/month</span>`;
        const discount = card.querySelector('.discount');
        if (isExistItem.tag) {
          discount.querySelector(
            'span:last-child'
          ).innerHTML = `<strong>${isExistItem.tag}% discount</strong>`;
        }

        const button = card.querySelector('.get-the-deal-button');
        button.href = isExistItem.link;

        const features = card.querySelector('.features');
        if (bulletPoints[isExistItem.title]) {
          features.innerHTML = bulletPoints[isExistItem.title]
            .map((item1) => `<li><span>${tickIcon}</span><span>${item1}</span></li>`)
            .join('\n');
        }
      }
    } else if (target.closest('.get-the-deal-button')) {
      window._conv_q.push(['triggerConversion', '1004101534']);
    } else if (target.closest('[data-testid="hero-cta"]')) {
      window._conv_q.push(['triggerConversion', '1004101534']);
    }
  });

  if (VARIATION === 'control') return;

  init();
};
