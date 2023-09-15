import { searchClose, searchIcon } from '../assets';

const searchbar = (id) => {
  const htmlStr = `
    <div class="${id}__search-container">
        <input type="text" id="${id}__search-input" placeholder="Search">
        <span class="search-icon">${searchIcon}</span>
        <span class="clear-icon">${searchClose}</span>
    </div>
    `;
  return htmlStr;
};

export default searchbar;
