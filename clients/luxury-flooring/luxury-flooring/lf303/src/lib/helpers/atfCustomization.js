import { bestsellerTag } from '../components/bestsellerTag';
import { uspsWrapper } from '../components/uspsWrapper';
import { uspsData } from '../data/data';

const atfCustomization = (id) => {
  const reviewsSummary = document.querySelector('.product-info-main .product-reviews-summary');
  const sampleAddForm = document.querySelector('.sample-add-form');
  const galarry = document.querySelector('.gallery-placeholder');
  //best seller imag add on the right side
  const bestSellerImgHTML = `<div class="${id}__bestsellerImage">
      <img src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test303/badge_bestseller.png"/>
    </div>`;
  if (!document.querySelector(`.${id}__bestsellerImage`)) {
    reviewsSummary.insertAdjacentHTML('afterbegin', bestSellerImgHTML);
  }

  //text change
  sampleAddForm.querySelector('button[type="submit"] > span').innerText = 'Order a free sample';

  const roomVisualizerHTML = `
      <button class="${id}__roomVisualizerBtn" type="button">
        <span>See it in your room</span>
      </button>
    `;

  if (!document.querySelector(`.${id}__roomVisualizerBtn`)) {
    sampleAddForm.querySelector('button').insertAdjacentHTML('afterend', roomVisualizerHTML);
  }

  //add usps icon section
  if (!document.querySelector(`.${id}__uspsWrapper`)) {
    sampleAddForm.insertAdjacentHTML('afterend', uspsWrapper(id, uspsData));
  }

  //bestseller tag add section
  if (!document.querySelector(`.${id}__bestsellerTag`)) {
    galarry.insertAdjacentHTML('beforeend', bestsellerTag(id));
  }

  //mobile
  const uspsWrapperMobile = document.querySelector(`.${id}__uspsWrapper`).cloneNode(true);
  const mobileReviewSection = document
    .querySelector('.product-info-main .product-reviews-summary')
    .cloneNode(true);
  const productTitleMobile = document
    .querySelector('.product-info-main .page-title-wrapper')
    .cloneNode(true);

  const mobileHeader = document.createElement('div');
  mobileHeader.classList.add(`${id}__mobileHeader`);
  mobileHeader.appendChild(uspsWrapperMobile);
  mobileHeader.appendChild(mobileReviewSection);
  mobileHeader.appendChild(productTitleMobile);

  if (!document.querySelector(`.${id}__mobileHeader`)) {
    galarry.insertAdjacentElement('beforebegin', mobileHeader);
  }
};

export default atfCustomization;
