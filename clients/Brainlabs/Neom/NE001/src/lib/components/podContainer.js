import { product } from './product';

export const podContainer = (ID, data) => {
  const html = `
        <div class="${ID}__podContainer">
            <div class="${ID}__podContainer-products">
                ${data.map((item) => product(ID, item)).join('\n')}
            </div>
        </div>
    `;

  return html.trim();
};
