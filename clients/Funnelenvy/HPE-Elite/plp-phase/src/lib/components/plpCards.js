import plpCard from './plpCard';

const plpCards = (id, data) => {
  const htmlStr = data.map((item) => plpCard(id, item)).join('\n');

  return htmlStr.trim();
};

export default plpCards;
