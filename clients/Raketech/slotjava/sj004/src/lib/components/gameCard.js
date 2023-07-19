import gameBtnsMobile from './gameBtnsMobile';
import gameOverlay from './gameOverlay';

const gameCard = (id, gameData) => {
<<<<<<< HEAD
  const { gameName, gameLink, imgSrc, numOfLikes } = gameData;
<<<<<<< HEAD
  const htmlString = `
    <div class="${id}__gamecard">
=======
=======
  const { gameName, gameLink, imgSrc, numOfLikes, gameGif } = gameData;

>>>>>>> upstream/main
  const awsImgPath =
    'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/slotjava/slot-card-redesign';
  const htmlString = `
    <div class="${id}__gamecard" data-position="gif card">
>>>>>>> upstream/main
       <a href="${gameLink}" class="${id}__gamecard-img">
        <img src="${imgSrc}" alt="${gameName}" data-gif="${gameGif}" data-img="${imgSrc}"/>
       </a>
        <a href="${gameLink}" class="${id}__gamecard-details">
            <div class="gamecard-title">${gameName}</div>
            <div class="gamecard-likes">
<<<<<<< HEAD
            <img src="">
            <span>${numOfLikes}</span></div>
        </a>
         <div class="game-buttons-mb">

         <div class="play-money-btn-mb">
          <span>Play with real money</span>
        </div>
        <a href="${gameLink}" class="play-now-btn-mb">
     
        <span>Play now</span>
          
    
        </a>
        
      </div>


=======
            <img src="${awsImgPath}/heart.svg" alt="heart icon">
            <span>&nbsp;${numOfLikes}</span></div>
        </a>
        ${gameBtnsMobile(gameLink, gameName)}
>>>>>>> upstream/main
        ${gameOverlay(id, gameData)}
    </div>
    `;
  return htmlString;
};

export default gameCard;
