import card from './card';

const cardWrapper = (id, data) => {
  const html = `
        <div class="${id}__card-wrapper">
            ${data.map((item) => card(id, item)).join('\n')}
        </div>
    `;

  return html.trim();
};
export default cardWrapper;
