import { star } from './star';

export const product = (ID, data) => {
  const {
    imageURL,
    reviewsRating,
    reviewsNumber,
    title,
    originalPrice,
    originalPriceText,
    tradePrice,
    tradePriceText,
    atcText,
    atcColor
  } = data;

  const html = `
    <div class="${ID}__tradeProdItem">
        <div class="${ID}__image">
            <img src="${imageURL}" alt="${title}"/>
        </div>
        <div class="${ID}__reviews">
            ${star(ID)}
            <div class="${ID}__ratingsContainer">
                <span class="${ID}__ratings">${reviewsRating}</span>
                <span class="${ID}__number">(${reviewsNumber} reviews)</span>
            </div>
        </div>
        <div class="${ID}__title">
            <p>${title}</p>
        </div>
        <div class="${ID}__originalPriceContainer">
            <span class="${ID}__originalPrice">${originalPrice}</span>
            <span class="${ID}__originalPriceText">${originalPriceText}</span>
        </div>
        <div class="${ID}__tradePriceContainer">
            <span class="${ID}__tradePrice">${tradePrice}</span>
            <span class="${ID}__tradePriceText">${tradePriceText}</span>
        </div>
        <div class="${ID}__counterContainer">
            <div class="${ID}__decrement ${ID}__btn">-</div>
            <div>
                <input type="number" pattern="\\d*" class="${ID}__inputField" value="1">
            </div>
            <div class="${ID}__increment ${ID}__btn">+</div>
        </div>
        <div class="${ID}__atcContainer">
            <button class="${ID}__atc" style="background-color:${atcColor};">
                <span>${atcText}</span>
            </button>
        </div>
    </div>
  `;

  return html.trim();
};
