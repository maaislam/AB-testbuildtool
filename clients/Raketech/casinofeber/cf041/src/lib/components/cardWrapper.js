import { card } from './card';
import { miniCard } from './miniCard';

export const cardWrapper = (id, topCardsData, bottomCardsData) => {
  const html = `
        <div class="block ${id}__cardWrapper">
            <div class="container">
               <div class="${id}__cardContainer">
                    ${topCardsData.map((data) => card(id, data)).join('\n')}
               </div>   
               <div class="${id}__miniCardContainer">
                    ${bottomCardsData.map((data) => miniCard(id, data)).join('\n')}
               </div>
            </div>
        </div>
    `;
  return html.trim();
};
