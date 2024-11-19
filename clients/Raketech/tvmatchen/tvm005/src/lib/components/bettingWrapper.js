import { bettingIcon } from '../assets/icons';

const bettingWrapper = (id, icon) => {
  const html = `
    <div class="${id}__bettingWrapper">
        ${icon}
    </div>
  `;
  return html.trim();
};

export default bettingWrapper;
