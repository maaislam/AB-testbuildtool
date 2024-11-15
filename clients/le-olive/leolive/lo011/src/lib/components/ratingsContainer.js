import { ratingStars } from '../helpers/utils';

const ratingsContainer = (id) => {
  const html = `
    <div class="${id}__ratingsWrapper">
        <div class="${id}__ratingsContainer">
            <div class="${id}__ratings">
                ${ratingStars(id, 5)}
                <div class="${id}__ratingsValue">
                    <span class="${id}__first">
                        9
                        <span class="${id}__second">41</span>
                    </span> 
                    <span class="${id}__text">Reviews</span>
                </div>
            </div>
            <div class="${id}__info">
                    <div class="${id}__infoContainer">
                        ${ratingStars(id, 1)}
                        <div class="${id}__summary">
                            <span class="${id}__first">4.</span>
                            <span class="${id}__second">6</span>
                        </div>
                    </div>
                    <p>Powered by Loox Reviews</p>
               </div>
            </div>
        </div>
    </div>
  `;
  return html.trim();
};

export default ratingsContainer;
