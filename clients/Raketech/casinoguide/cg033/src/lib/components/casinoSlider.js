import { slider } from './slider';

export const casinoSlider = (id, data) => {
  const html = `
        <div class="${id}__casinoSlider">
            ${data.map((item, index) => slider(id, item, index)).join('\n')}
        </div>
    `;
  return html.trim();
};
