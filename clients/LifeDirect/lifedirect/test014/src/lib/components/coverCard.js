import { questionIcon } from '../data';
import coverSelector from './coverSelector';
import levelCoverChildSelect from './levelCoverChildSelect';

const coverCard = (id, allCoverData) => {
  const htmlStr = `
    <div class="${id}__covercard">
        <h2 class="${id}__covercard--title">Build your life cover quote</h2>
        <h3 class="${id}__covercard--subtitle">Select a Premium Structure</h3>
        ${coverSelector(id, allCoverData.stepped)}
        <div class="${id}__covercard--seperator">OR</div>
        ${coverSelector(id, allCoverData.level, levelCoverChildSelect(id))}
        <div class="${id}__aboutcovers">${questionIcon}<span>About Premium Structures</span></div>
    </div>`;

  return htmlStr.trim();
};

export default coverCard;
