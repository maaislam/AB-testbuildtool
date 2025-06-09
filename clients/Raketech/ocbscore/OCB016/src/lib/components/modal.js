import { orangeDot, closeIcon } from '../assets/icons';
import { modalContent } from './modalContent';

const modal = (id, data) => {
  const html = `
    <div class="${id}__modal">
        <div class="${id}__modal-overlay"></div>
          <div class="${id}__modal-container">
                 <div class="${id}__modal-header">
                    <h2>Want to get the most out of your bets?</h2>
                    <div class="${id}__closeWrapper">
                        ${closeIcon}
                    </div>
                 </div>
                 <div class="${id}__lists">
                    <div class="${id}__item">
                        <div class="${id}__item__icon">${orangeDot}</div>
                        <p>Open an account with new betting sites</p>
                    </div>
                    <div class="${id}__item">
                        <div class="${id}__item__icon">${orangeDot}</div>
                        <p>Unlock welcome bonuses</p>
                    </div>
                    <div class="${id}__item">
                        <div class="${id}__item__icon">${orangeDot}</div>
                        <p>Maximize your earning if you win</p>
                    </div>
                 </div>     
                 ${modalContent(id, data)}
          </div>
          
        </div>
    </div>
    `;
  return html.trim();
};

export default modal;
