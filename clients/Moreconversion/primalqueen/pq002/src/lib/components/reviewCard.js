/*eslint-disable no-unused-vars */
import { startIcon, tickMark } from '../assets/icon';
import ratingStars from '../helpers/ratingStar';
import shared from '../shared/shared';

const { ID, VARIATION } = shared;

const reviewCard = (id, data) => {
  const {
    author,
    reviewRating,
    reviewUserPhotos,
    productUrl,
    reviewMessage,
    reviewTitle,
    verifiedReviewer
  } = data;

  console.log('🚀 ~ reviewCard ~ reviewRating:', reviewRating);

  const htmlStrv1 = `
        <div  class="${id}__reviewCard swiper-slide" ">
            <div class="${id}__review">
                <div class="${id}__review-col1">
                    <img src="${reviewUserPhotos}"
                        alt="" />
                </div>
                <div class="${id}__review-col2">
                    <div class="row1">
                        <div class="reviewer-name">
                            <span class="${id}__name">${author}</span>
                            ${
                              verifiedReviewer ? `<span class="${id}__icon">${tickMark}</span>` : ''
                            }
                            
                        </div>
                        <div class="reviewer-ratings">
                            ${ratingStars(reviewRating, 'v1-color')}
                        </div>
                    </div>
                    <div class="row2">
                        <div class="review-msg">
                            ${reviewMessage}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

  const htmlStrv2 = `
        <div  class="${id}__reviewCard swiper-slide" ">
        <div class="${id}__review">
            <div class="${id}__review-col1">
                <img src="${reviewUserPhotos}"
                    alt="" />
            </div>
            <div class="${id}__review-col2">
                <div class="row2">
                    <div class="review-msg">
                        ${reviewMessage}
                    </div>
                </div>
                <div class="row1">
                    <div class="reviewer-name">
                        <span class="${id}__name">${author}</span>
                        ${verifiedReviewer ? `<span class="${id}__icon">${tickMark}</span>` : ''}
                        
                    </div>
                    <div class="reviewer-ratings">
                        <img src="https://primalqueen.com/cdn/shop/files/s5_star_156x27.png?v=13965070243375512321"/>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

  const htmlStrv3 = `
    <div  class="${id}__reviewCard swiper-slide" ">
        <div class="${id}__review">
            <div class="${id}__review-col1">
                <img src="${reviewUserPhotos}"
                    alt="" />
            </div>
            <div class="${id}__review-col2">
                <div class="row2">
                    <div class="reviewer-ratings">
                        ${ratingStars(reviewRating, 'v3-color')}
                    </div>
                    <div class="review-msg">
                        ${reviewMessage}
                    </div>
                </div>
                <div class="row1">
                    <div class="reviewer-name">
                        <span class="${id}__name">${author}</span>
                        ${
                          verifiedReviewer ? `<span class="${id}__icon">${tickMark}</span>` : ''
                        }              
                    </div>
                </div>
            </div>
        </div>
    </div>`;

  const htmlStrv4 = `
    <div  class="${id}__reviewCard swiper-slide" ">
    <div class="${id}__review">
        <div class="${id}__review-col1">
            <img src="${reviewUserPhotos}"
                alt="" />
        </div>
        <div class="${id}__review-col2">
            <div class="row2">
                <div class="review-msg">
                    ${reviewMessage}
                </div>
            </div>
            <div class="row1">
                <div class="reviewer-name">
                    <span class="${id}__name">${author}</span>
                    ${verifiedReviewer ? `<span class="${id}__icon">${tickMark}</span>` : ''}
                    
                </div>
                <div class="reviewer-ratings">
                    ${ratingStars(reviewRating, 'v4-color')}
                </div>
            </div>
        </div>
    </div>
    </div>`;

  const mainHtml =
    VARIATION === '1'
      ? htmlStrv1
      : VARIATION === '2'
      ? htmlStrv2
      : VARIATION === '3'
      ? htmlStrv3
      : htmlStrv4;

  return mainHtml.trim();
};

export default reviewCard;
