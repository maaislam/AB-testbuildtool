import { uspsWrapper } from '../components/uspsWrapper';
import { uspsData } from '../data/data';

const atfCustomization = (id) => {
  const reviewsSummary = document.querySelector('.product-info-main > .product-reviews-summary');
  const sampleAddForm = document.querySelector('.sample-add-form');
  //best seller imag add on the right side
  const bestSellerImgHTML = `<div class="${id}__bestsellerImage">
      <img src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test303/badge_bestseller.png"/>
    </div>`;
  if (!document.querySelector(`.${id}__bestsellerImage`)) {
    reviewsSummary.insertAdjacentHTML('afterbegin', bestSellerImgHTML);
  }

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
};

export default atfCustomization;
