import card from './card';

const cards = (id, data) => {
  const htmlStr = `
    <div class="${id}__cardSection">
      <div class="${id}__cards">
        ${data.map((item) => card(id, item)).join('\n')}
      </div>
    </div>
  `;

  return htmlStr;
};

export default cards;
