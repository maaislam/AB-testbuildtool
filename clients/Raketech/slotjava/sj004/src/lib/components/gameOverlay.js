import { truncateText } from '../helpers/utils';

const gameOverlay = (id, gameData) => {
  const { gameName, gameLink, numOfLikes, gameGif, gameDesc, gameId } = gameData;
  const awsImgPath =
    'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/slotjava/slot-card-redesign';
  const htmlString = `
    <div class="${id}__gameoverlay hide_content">
      <div class="game-overlay-content">
        <div class="game-gif" style="position: relative">
          <img src="${gameGif}" alt="${gameName}" />
          <div class="favourite-button card__favourite-button" data-slot-id="${gameId}" style="display:block"></div>
        </div>

        <div class="game-name-section">
          <div class="game-name">${gameName}</div>
            <div class="game-stats">
              <div class="game-likes">
                <img src="${awsImgPath}/heart.svg" alt="heart icon">
                <span>&nbsp;${numOfLikes}</span>
              </div>
            </div>
          </div>
          <div class="game-description">
              
          </div>
          <div class="game-buttons">
            <a href="${gameLink}" class="play-now-btn">
              <span>Gioca gratis &nbsp;</span>
              <img src="${awsImgPath}/play.svg" alt="play button">
            </a>
            <div class="play-money-btn " data-gamename="${gameName}">
                <span>Esplora casino</span>
            </div>
          </div>
      </div>
    </div>
    `;
  return htmlString;
};

export default gameOverlay;
//<span>${truncateText(gameDesc)}</span>
