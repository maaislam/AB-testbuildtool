import { inputSearchIcon } from '../assets/icons';

const searchWrapper = (id) => {
  const html = `
         <div class="${id}__searchBar">
            <input type="text" class="${id}__input" placeholder="Search"/>
            <span class="${id}__inputSearch">${inputSearchIcon}</span>
        </div>
    `;

  return html.trim();
};

export default searchWrapper;
