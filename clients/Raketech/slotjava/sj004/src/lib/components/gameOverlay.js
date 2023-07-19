import { truncateText } from '../helpers/utils';

const gameOverlay = (id, gameData) => {
<<<<<<< HEAD
  const { gameName, gameLink, numOfLikes, gameGif, gameDesc } = gameData;
<<<<<<< HEAD

  const htmlString = `
    <div class="${id}__gameoverlay hide_content">
  <div class="game-overlay-content">
  <div class="game-gif">
    <img src="${gameGif}" alt="${gameName}" />
  </div>

  <div class="game-name-section">
    <div class="game-name">${gameName}</div>
    <div class="game-stats">
      <div class="game-likes">
        <span>❤</span>
        <span>${numOfLikes}</span>
      </div>
      
      </div>
      </div>
      <div class="game-description">
        <span>${gameDesc}</span>
      </div>
      <div class="game-buttons">
        <a href="${gameLink}" class="play-now-btn">
          <span>Play now</span>
          <img src="">
        </a>
        <div class="play-money-btn">
          <span>Play with real money</span>
        </div>
      </div>
    
  </div>
=======
=======
  const { gameName, gameLink, numOfLikes, gameGif, gameDesc, gameId } = gameData;
>>>>>>> upstream/main
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
>>>>>>> upstream/main
    </div>
    `;
  return htmlString;
};

export default gameOverlay;
//<span>${truncateText(gameDesc)}</span>
