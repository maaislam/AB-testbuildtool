/*eslint-disable no-unused-vars */
import ratingStars from '../helpers/ratingStar';

const reviewCard = (id, data) => {
  const { author, reviewRating, reviewUserPhotos, productUrl, reviewMessage, reviewTitle } = data;
  console.log('🚀 ~ reviewCard ~ reviewRating:', reviewRating);
  //https://cdn.stamped.io/tr:h-180:/uploads/photos/306356_8451914826005_2f1a208c_1fb5_4c87_ac38_7958f91cdebf.jpg
  const imageCdn = 'https://cdn.stamped.io/tr:h-180:/uploads/photos/';
  const htmlStr = `
      <a href="${productUrl}" class="${id}__reviewCard swiper-slide" ">
        <div class="${id}__review">
            <div class="${id}__review-col1">
                <img src="${imageCdn}${reviewUserPhotos.split(',')[0]}"
                    alt="" />
            </div>
            <div class="${id}__review-col2">
                <div class="row1">
                    <div class="reviewer-name">
                        ${author}
                    </div>
                    <div class="reviewer-ratings">
                        ${ratingStars(reviewRating)}
                    </div>
                </div>
                <div class="row2">
                    <div class="review-msg">
                        ${reviewMessage}
                    </div>
                </div>
            </div>
        </div>
    </a>`;

  return htmlStr.trim();
};

export default reviewCard;
