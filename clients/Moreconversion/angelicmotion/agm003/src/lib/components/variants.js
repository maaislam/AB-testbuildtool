import { variant } from './variant';

export const variants = (id, data, isAvailable) => {
  const html = `
        <ul class="${id}__variants-list" >
            ${data.map((item) => variant(id, item, isAvailable)).join('\n')}
        </ul>
    `;

  return html;
};
