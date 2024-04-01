import { arrow } from '../data/icon';

export const upArrow = (ID) => {
  const html = `
        <div class="${ID}__upArrow">
            ${arrow}
        </div>
    `;

  return html.trim();
};
