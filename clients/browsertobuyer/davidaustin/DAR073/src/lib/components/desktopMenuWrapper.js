import desktopMenuItem from './desktopMenuItem';

const desktopMenuWrapper = (id, data) => {
  const html = `
    <div class="${id}__desktopMenuWrapper flex items-start gap-gutter flex-wrap gap-y-lg">
        ${data.map((item) => desktopMenuItem(id, item, item.hasChildren)).join('\n')}
    </div>
  `;
  return html.trim();
};

export default desktopMenuWrapper;
