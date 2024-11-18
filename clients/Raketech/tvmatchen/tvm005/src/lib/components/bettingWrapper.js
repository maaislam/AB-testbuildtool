import { bettingIcon } from '../assets/icons';

const bettingWrapper = (id) => {
  const html = `
    <div class="${id}__bettingWrapper">
        <div class="${id}__icon">${bettingIcon}</div>
        <div class="${id}__title">Betting<br>tip</div>
    </div>
  `;
  return html.trim();
};

export default bettingWrapper;
