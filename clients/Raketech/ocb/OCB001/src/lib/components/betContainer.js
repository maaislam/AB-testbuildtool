import { addedElements } from '../data/data';
import { betItem } from './betItem';

export const betContainer = (ID) => {
  const html = `
        ${addedElements.map((item) => betItem(ID, item)).join('\n')}
    `;

  return html;
};
