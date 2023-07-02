import gameBtnsMobile from './gameBtnsMobile';
import gameOverlay from './gameOverlay';

const gameCard = (id, gameData) => {
  const { gameName, gameLink, imgSrc, numOfLikes } = gameData;
  const awsImgPath =
    'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/slotjava/slot-card-redesign';
  const htmlString = `
    <div class="${id}__gamecard" data-position="gif card">
       <a href="${gameLink}" class="${id}__gamecard-img">
        <img src="${imgSrc}" alt="${gameName}" />
       </a>
        <a href="${gameLink}" class="${id}__gamecard-details">
            <div class="gamecard-title">${gameName}</div>
            <div class="gamecard-likes">
            <img src="${awsImgPath}/heart.svg" alt="heart icon">
            <span>&nbsp;${numOfLikes}</span></div>
        </a>
        ${gameBtnsMobile(gameLink, gameName)}
        ${gameOverlay(id, gameData)}
    </div>
    `;
  return htmlString;
};

export default gameCard;
