export const uspsItem = (id, data) => {
  const { icon, iconType, title, subtitle } = data;
  const selectedTag =
    iconType === 'svg'
      ? `<div class="${id}__icon ${id}__${iconType}">${icon}</div>`
      : `<div class="${id}__icon ${id}__${iconType}"><img src="${icon}"/></div>`;

  const isClickAble = iconType === 'image' ? `${id}__roomVisualizer` : '';

  const html = `
    <div class="${id}__uspsItem ${isClickAble}">
        ${selectedTag}
        <div class="${id}__content">
            <div class="${id}__title">${title}</div>
            <div class="${id}__subtitle">${subtitle}</div>
        </div>
    </div>
  `;
  return html;
};
