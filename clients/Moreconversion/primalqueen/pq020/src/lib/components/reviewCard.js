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

  const htmlStrv1 = `
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
                            ${
                              verifiedReviewer ? `<span class="${id}__icon">${tickMark}</span>` : ''
                            }
                            
                        </div>
                        <div class="reviewer-ratings">
                            <img src="https://primalqueen.com/cdn/shop/files/s5_star_156x27.png?v=13965070243375512321"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  return htmlStrv1.trim();
};

export default reviewCard;
