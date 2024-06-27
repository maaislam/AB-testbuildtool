import { uspsItem } from './uspsItem';

export const uspsWrapper = (id, data) => {
  const html = `
        <div class="${id}__uspsWrapper">
            <div class="uspsList">
                ${data.map((usps) => uspsItem(id, usps)).join('\n')}
            </div>
        </div>
    `;
  return html;
};
