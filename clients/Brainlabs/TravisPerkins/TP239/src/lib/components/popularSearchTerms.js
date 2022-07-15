import popularSearchTerm from './popularSearchTerm';

const popularSearchTerms = (id, searchTerms) => {
  const htmStr = `
  <div class="${id}__popularsearch">
        <div class="${id}__popularsearch--title ${id}__title">Popular search terms with your trade type:</div>
        <div class="${id}__popularsearch--terms">
            ${searchTerms.map((searchTerm) => popularSearchTerm(id, searchTerm)).join('\n')}
        </div>
    </div>
    `;
  return htmStr.trim();
};

export default popularSearchTerms;
