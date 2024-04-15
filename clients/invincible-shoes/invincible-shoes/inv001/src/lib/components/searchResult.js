const searchResult = (id, index, data) => {
  const { image, title, url } = data;

  const htmlString = ` 
    <li id="search-result-${index}"
    class="predictive-search-item ${id}__predictive-search-item"
    role="option"
    data-search-result=""><a class="predictive-search-item__link"
       href="${url}"
       tabindex="-1">
        <div class="predictive-search__column predictive-search__column--image"><img
                 class="predictive-search-item__image ls-is-cached lazyloaded"
                 src="${image}"
                 data-src="${image}"
                 data-image=""
                 alt=""></div>
        <div
             class="predictive-search__column predictive-search__column--content predictive-search__column--center">
            <span class="predictive-search-item__title"><span
                      class="predictive-search-item__title-text">${title}</span></span><span class="visually-hidden">, </span><span
                  class="visually-hidden">1 of 4</span>
        </div>
    </a></li>
    `;
  return htmlString;
};

export default searchResult;
