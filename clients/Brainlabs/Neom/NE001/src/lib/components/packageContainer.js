import { product } from './product';

export const packageContainer = (ID, data) => {
  const html = `
        <div class="${ID}__packageContainer">
            <div class="${ID}__packageContainer-products">
                ${data.map((item) => product(ID, item)).join('\n')}
            </div>
        </div>
    `;

  return html.trim();
};
