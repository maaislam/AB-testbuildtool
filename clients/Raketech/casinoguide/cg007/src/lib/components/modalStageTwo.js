import { closev2 } from '../assets';
import searchItems from './searchItems';
import searchbar from './searchbar';

const modalStageTwo = (id, casinoData) => {
  const htmlStr = `
      <div class="${id}__modalstagetwo container">
          
            <div class="${id}__modalstagetwo-content">
                <div class="${id}__text-wrapper">
                    <div class="${id}__modalstagetwo-title">
                        <span class="headline">Välj de casinon där du redan har ett aktivt konto.</span>
                        <span class="${id}__modal-close ${id}__modalstagetwo-close ${id}__close">${closev2}</span>
                    </div>
                    <div class="${id}__modalstagetwo-text">Våra anpassade listor baseras på dina svar, så att du kan hitta casinon med tillgänglig bonus.</div>
                </div>
                ${searchbar(id)}
                ${searchItems(id, casinoData)}
                <div class="${id}__btns-wrapper">
                    <div class="${id}__modalstagetwo-button back">Välj Stäng</div>
                    <div class="${id}__modalstagetwo-button submit">Välj Stäng</div>
                </div>
            </div>
      </div>
    `;
  return htmlStr;
};

export default modalStageTwo;
