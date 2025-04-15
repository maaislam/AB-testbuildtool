import { casino } from './casino';

export const modalContent = (id, data) => {
  const html = `
          <div class="${id}__modal-content">
              <h1>TOP OFFERS TODAY</h1>
              <div class="${id}__booksmarkWrapper">
                  <div class="${id}__booksmarkContainer">
                    ${data.map((item, index) => casino(id, index, item)).join('\n')}
                  </div>
              </div>
              <a href="/betting-sites/" class="${id}__showMoreBtn">Show more bookmakers</a>
          </div> 
    `;

  return html.trim();
};
