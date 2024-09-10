import { downArrow } from '../assets/icons';

const button = (id, operatorName) => {
  const html = `
        <td class="${id}__button" data-name="${operatorName}">
            <span class="${id}__text">Show details</span>
            <span class="${id}__icon">${downArrow}</span>
            </td>
    `;
  return html.trim();
};

export default button;
