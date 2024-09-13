import shared from '../shared/shared';
import { crossIcon } from '../assets/icons';

const { VARIATION } = shared;

const searchFormMobile = (id, className, value) => {
  const html = `
    <div class="${id}__searchForm ${className}">
        <div class="${id}__formWrapper">
            <form action="/search" method="get" class="search-modal__wrapper" role="search">
            <button type="submit" class="text-link search-modal__submit">
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-search" viewBox="0 0 64 64"><path d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"></path></svg>
                <span class="icon__fallback-text">Search</span>
            </button>
            <input type="hidden" name="type" value="product">
            <input type="hidden" name="options[prefix]" value="last">
            <input type="search" name="q" value="${
              value || ''
            }" placeholder="Search for Joggers, Shorts, Hoodies..." id="SearchModalInput" class="search-modal__input" aria-label="Search our store">
           
            </form>
             ${VARIATION === '2' ? `<div class="${id}__cross">${crossIcon}</div>` : ''}
        </div>
    </div>
    `;
  return html.trim();
};
export default searchFormMobile;
