/*eslint-disable no-unused-vars */
import { startIcon, tickMark } from '../assets/icons';
import ratingStars from '../helpers/ratingStar';
import shared from '../shared/shared';

const { ID, VARIATION } = shared;

const reviewCard = (id, data) => {
  const { author, reviewRating, reviewMessage, verifiedReviewer } = data;

  const htmlStrv1 = `
        <div  class="${id}__reviewCard swiper-slide" ">
            <div class="${id}__review">
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
                            ${ratingStars(reviewRating, 'v1-color')}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

  return htmlStrv1.trim();
};

export default reviewCard;
