const gameOverlay = (id, gameData) => {
  const { gameName, gameLink, numOfLikes, gameGif, gameDesc } = gameData;

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
    </div>
    `;
  return htmlString;
};

export default gameOverlay;
