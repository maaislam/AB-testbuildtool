import { ratings } from '../assets/icons';
import { ratingColorObj, textColorObj } from '../data/data';

const ratingsConatiner = (id, rating, logoBgColor, link) => {
  const selectTextColor = textColorObj[logoBgColor];
  const ratingColor = ratingColorObj[logoBgColor];
  const html = `
    <div class="${id}__ratingsContainer">
      ${
        rating
          ? `<div class="ratings-average" ${
              selectTextColor ? `${selectTextColor.style}` : ''
            }>${rating}</div>`
          : ''
      } 
      <span class="${ratingColor ? `${ratingColor}` : ''}">
        ${ratings}
      </span>
      <a class="cta-review" href="${link}" ${
    selectTextColor ? `${selectTextColor.style}` : ''
  }>Läs recension</a>
    </div>
  `;
  return html.trim();
};

export default ratingsConatiner;
