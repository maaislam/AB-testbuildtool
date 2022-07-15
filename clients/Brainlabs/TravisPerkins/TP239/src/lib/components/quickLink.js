import { rightArrow } from '../data';

const quickLink = (id, { name, icon, link, color }) => {
  const htmlStr = `
    <a href="${link}" class="${id}__quicklink ${id}__quicklink--${color}">
        <span class="${id}__quicklink--icon">${icon}</span>
        <span class="${id}__quicklink--name">${name}</span>
        <span class="${id}__quicklink--angle">${rightArrow}</span>
    </a>
    `;

  return htmlStr.trim();
};

export default quickLink;
