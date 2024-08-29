import { uspsItem } from './uspsItem';

export const widget = (id, uspsData) => {
  const html = `
    <div class="${id}__widgetContainer">
        <div class="${id}__widgetBox">
            ${uspsData.map((data) => uspsItem(id, data)).join('\n')}
        </div>
    </div>
  `;
  return html;
};
