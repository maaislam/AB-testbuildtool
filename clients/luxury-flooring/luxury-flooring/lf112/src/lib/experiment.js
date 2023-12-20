import { observeDOM } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const data = {
  1: {
    badge: 'GUIDE',
    title: 'Learn All About Engineered Wood Floors',
    ctaText: 'View flooring guide',
    ctaLink: '/engineered-wood-advice',
    imgSrc: 'https://luxury-flooring.s3.amazonaws.com/editorial_banner1.png',
    contentPosition: 'top'
  },
  2: {
    badge: 'INSPIRATION',
    title: 'Caroline’s Mid-Century Space',
    ctaText: 'Read her story',
    ctaLink: '/news/customer-homes-blossoming-home/',
    imgSrc: 'https://luxury-flooring.s3.amazonaws.com/editorial_banner2.png',
    contentPosition: 'bottom'
  },
  3: {
    badge: 'INFORMATION',
    title: 'Pay 25% Now, Get Your Floor Delivered Later!',
    ctaText: 'Learn more',
    ctaLink: '/hold-your-stock',
    imgSrc: 'https://luxury-flooring.s3.amazonaws.com/editorial_banner3.png',
    contentPosition: 'top'
  }
};

const renderHtml = (itemData) => {
  const { badge, title, ctaText, ctaLink, imgSrc, contentPosition } = itemData;

  return `
    <a href="${ctaLink}" class="${ID}__editorial">
      <div class="${ID}__content ${ID}__content--${contentPosition}">
        <div class="${ID}__content__badge">${badge}</div>
        <div class="${ID}__content__title">${title}</div>
        <div class="${ID}__content__cta" >${ctaText}</div>
      </div>
      <div class="${ID}__img" style="background-image:url(${imgSrc})">
        
      </div>
    </a>
  `;
};

const init = () => {
  const attachPoint = document.querySelector('.products>.product:nth-child(5)');
  attachPoint.classList.add(`${ID}__attach-point`);
  if (document.querySelector(`.${ID}__editorial`)) return;
  attachPoint.insertAdjacentHTML('afterend', renderHtml(data[VARIATION]));
};

const adjustPosition = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const pageValue = searchParams.get('p');
  const newlYAddedPage = Number(pageValue) > 1 ? Number(pageValue) + 1 : 2;
  //console.log('🚀 ~ file: experiment.js:62 ~ adjustPosition ~ newlYAddedPage:', newlYAddedPage);
  const secondpage = document.querySelector(`.products[amscroll-page="${newlYAddedPage}"]`);
  if (!secondpage) return;
  const secondpageFirstProduct = secondpage.querySelector('.product:nth-child(1)');
  const secondpageSecondProduct = secondpage.querySelector('.product:nth-child(2)');

  if (!secondpageFirstProduct || !secondpageSecondProduct) return;
  const firstPage = document.querySelector(`.products[amscroll-page="${newlYAddedPage - 1}"]`);
  const prodList = firstPage.querySelector('ol');
  prodList.insertAdjacentElement('beforeend', secondpageFirstProduct);
  prodList.insertAdjacentElement('beforeend', secondpageSecondProduct);
};

export default () => {
  setup();
  init();
  if (window.matchMedia('(max-width: 767px)').matches) return;
  observeDOM('.main', adjustPosition);
};
