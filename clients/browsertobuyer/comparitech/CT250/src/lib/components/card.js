import { formatDate } from '../helpers/utils';

const card = (id, item) => {
  const { title, link, aurthor, authorlink, date } = item;
  const html = `
    <div class="${id}__card">
        <a href="${link}" class="${id}__card-title">${title}</a>
        <div class="${id}__card-info">
            By <a href="${authorlink}" class="${id}__card-author">${aurthor}</a> on <span>${formatDate(
    date
  )}</span>
        </div>
    </div>
  `;
  return html.trim();
};

export default card;
