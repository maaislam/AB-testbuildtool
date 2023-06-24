import gameCard from './gameCard';

const gameCards = (id, gamesData) => {
  const htmlString = `
    <div class="${id}__gamecards">
    ${gamesData.map((gameData) => gameCard(id, gameData)).join('\n')}
    </div>`;
  return htmlString;
};

export default gameCards;
