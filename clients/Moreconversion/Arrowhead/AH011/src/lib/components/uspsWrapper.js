import { uspsItem } from './uspsItem';

export const uspsWrapper = (id, data) => {
  const html = `
        <div class="${id}__uspsWrapper">
            ${data.map((item) => uspsItem(id, item)).join('\n')}
        </div>
    `;
  return html;
};
