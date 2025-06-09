import { getParagraphText } from '../helpers/utils';

export const textContainer = (id, tag) => {
  const html = `
        <div class="${id}__text-container ${id}__${tag}">
            <p class="${id}__clamp-text">
                ${getParagraphText()}
            </p>
            <button class="${id}__btn">Lue lisää</button>
        </div>

    `;
  return html.trim();
};
