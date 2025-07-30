import card from './card';
import modal from './modal';

const cardWrapper = (id, data) => {
  const html = `
      <div class="${id}__cardWrapper">
        <div class="${id}__cardContent">
          <div class="${id}__cardList">
            ${[...data].map((item) => card(id, item)).join('\n')}
          </div>
        </div>
        ${modal(id)}
      </div>
    `;
  return html.trim();
};

export default cardWrapper;
