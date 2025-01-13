import { tickIcon, roundTick } from '../assets/icons';

const headerContent = (ID, data, variation) => {
  const html = `
        <div class="${ID}__headerContent">
            <div class="${ID}__container">
                <h1 class="${ID}__title">Scrap your car the hassle-free way</h1>
                <ul class="${ID}__itemsList">
                    ${data
                      .map((item) => {
                        return `
                            <li class="${ID}__item">
                                <span>${variation === '1' ? tickIcon : roundTick}</span>
                                <p>${item.name}</p>
                            </li>
                        `;
                      })
                      .join('\n')}
                </ul>
            </div>
        </div>
    `;

  return html.trim();
};

export default headerContent;
