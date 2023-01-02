const searchSuggestions = (id, suggestions) => {
  const datalistOption = (option) => `<option value="${option}">${option}</option>`;
  const htmlStr = `
      <datalist id="${id}__searchsuggestions" class="${id}__searchsuggestions">
          ${suggestions.map((option) => datalistOption(option.description)).join('')}
      </datalist> `;

  return htmlStr.trim();
};

export default searchSuggestions;
