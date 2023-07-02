const gameBtnsMobile = (gameLink, gameName) => {
  const awsImgPath =
    'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/slotjava/slot-card-redesign';
  const htmlStr = `
    <div class="game-buttons-mb" data-gamename="${gameName}">
        <div class="play-money-btn-mb">
        <span>Verifica nel casinò</span>
        </div>
        <a href="${gameLink}" class="play-now-btn-mb">

        <span>Continua &nbsp;</span>
        <img src="${awsImgPath}/play.svg" alt="play button">

        </a>
    
    </div>
    `;
  return htmlStr;
};
export default gameBtnsMobile;
