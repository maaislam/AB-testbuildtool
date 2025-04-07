import { card } from './card';

export const cardWrapper = (id, topCardsData) => {
  const html = `
        <div class="block ${id}__cardWrapper">
            <div class="container">
               <div class="${id}__cardContainer">
                    ${topCardsData.map((data) => card(id, data)).join('\n')}
               </div>   
            </div>
        </div>
    `;
  return html.trim();
};
