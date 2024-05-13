import { desktopIcon, mobileIcon } from '../assets/icons';

export const imageStr = (id) => {
  const html = `
        <div class="${id}__images">
            <div class="${id}__images-item ${id}__desktopIcon">${desktopIcon}</div>
            <div class="${id}__images-item ${id}__mobileIcon">${mobileIcon}</div>
        </div>
    `;
  return html;
};
