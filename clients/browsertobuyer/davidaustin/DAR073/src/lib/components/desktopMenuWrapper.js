import desktopMenuItem from './desktopMenuItem';

const desktopMenuWrapper = (id, data, classes) => {
  const html = `
    <div class="${classes} ${id}__desktopMenuWrapper flex items-start gap-gutter flex-wrap gap-y-lg">
        ${data?.hasChildren?.map((item) => desktopMenuItem(id, item, item.hasChildren)).join('\n')}
    </div>
  `;
  return html.trim();
};

export default desktopMenuWrapper;
