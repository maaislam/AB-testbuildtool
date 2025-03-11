import { closeIcon, searchIcon } from '../assets/icons';
import resultContainer from './resultContainer';

const searchContainer = (id) => {
  const html = `
    <div class="${id}__search-container">
        <div class="${id}__overlay"></div>
        <span class="${id}__search-icon-static">
            ${searchIcon}
            ${closeIcon}
        </span>
        <div class="${id}__search-box">
            <div class="${id}__search-box-wrapper">
                <input type="text" class="${id}__searchInput" placeholder="Search...">
                <span class="${id}__search-icon">${searchIcon}</span>
            </div>
            <span class="${id}__close-icon">${closeIcon}</span>
        </div>
        ${resultContainer(id)}
    </div>
  `;
  return html.trim();
};

export default searchContainer;
