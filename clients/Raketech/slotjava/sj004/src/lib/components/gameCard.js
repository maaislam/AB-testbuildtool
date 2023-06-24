import gameOverlay from './gameOverlay';

const gameCard = (id, gameData) => {
  const { gameName, gameLink, imgSrc, numOfLikes } = gameData;
  const htmlString = `
    <div class="${id}__gamecard">
       <a href="${gameLink}" class="${id}__gamecard-img">
        <img src="${imgSrc}" alt="${gameName}" />
       </a>
        <a href="${gameLink}" class="${id}__gamecard-details">
            <div class="gamecard-title">${gameName}</div>
            <div class="gamecard-likes">
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


        ${gameOverlay(id, gameData)}
    </div>
    `;
  return htmlString;
};

export default gameCard;
