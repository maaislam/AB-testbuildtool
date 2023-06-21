const gameOverlay = (id, gameName) => {
  const htmlString = `
    <div class="${id}__gamecard hide_content">
  <div class="game-overlay-content">
  <div class="game-gif">
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="" />
  </div>

  <div class="game-name-section">
    <div class="game-name">Game Name</div>
    <div class="game-stats">
      <div class="game-likes">
        <span>❤</span>
        <span>1000</span>
      </div>
      <div class="game-views">
        <span>❤</span>
        <span>1000</span>
      
      </div>
      </div>
      </div>
      <div class="game-description">
        <span
          >A game about wonderful adventures, super action. You can also add a little descriptive text</span
        >
      </div>
      <div class="game-buttons">
        <a href="" class="play-now-btn">
          <span>Play now</span>
          <span>💨</span>
        </a>
        <a href="" class="play-money-btn">
          <span>Play with real money</span>
        </a>
      </div>
    
  </div>
    </div>
    `;
  return htmlString;
};

export default gameOverlay;
