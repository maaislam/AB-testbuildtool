import { getStarHTML } from '../helpers/utils';

const casinoCard = (id, singleCasinoData) => {
  const { name, details, btnText, btnLink, rating, ratingCopy, badge, casinoLogo, disclaimer } =
    singleCasinoData;

  const htmlStr = `  
    <div class="${id}__casinocard" data-type="${badge}">
        <div class="wrapper">
            <div class="${id}__casinocard-info">
                <div class="casino-logo">
                    <img src="${casinoLogo}" alt="${name}">
                </div>
                <div class="casino-rating">
                    <div class="cas-title">${name}</div>
                    <div class="rating-star">${getStarHTML(rating)}</div>
                    <div class="rating-copy">${ratingCopy}</div>
                </div>
            </div>
            <div class="${id}__casinocard-details">${details}</div>
            <a href="${btnLink}" class="${id}__casinocard-cta">${btnText}</a>
        </div>
        <div class="${id}__casinocard-disclaimer">${disclaimer}</div>
        ${badge ? `<div class="${id}__casinocard-badge">${badge}</div>` : ''} 
    </div>`;

  return htmlStr;
};

export default casinoCard;
