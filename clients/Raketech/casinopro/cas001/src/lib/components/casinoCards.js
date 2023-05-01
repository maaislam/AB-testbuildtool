import casinoCard from './casinoCard';

const casinoCards = (id, data, view) => {
  const htmlStr = `
    <div class="${id}__casinocards" data-orientation="${view}">
        ${data.map((singleCasinoData) => casinoCard(id, singleCasinoData)).join('\n')}
    </div>`;

  return htmlStr;
};

export default casinoCards;
