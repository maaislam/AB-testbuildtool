/*eslint-disable no-unused-vars */
export const uspsItem = (id, data) => {
  const { icon, iconType, title, subtitle, link } = data;
  const selectedTag =
    iconType === 'svg'
      ? `<div class="${id}__icon ${id}__${iconType}">${icon}</div>`
      : `<div class="${id}__icon ${id}__${iconType}"><img src="${icon}"/></div>`;

  const isClickAble = iconType === 'image' ? `${id}__roomVisualizer` : '';

  const html = `
    <a class="${id}__uspsItem" href="${link}">
        ${selectedTag}
        <div class="${id}__content">
            <div class="${id}__title">${title}</div>
            <div class="${id}__subtitle">${subtitle}</div>
        </div>
    </a>
  `;
  return html;
};
