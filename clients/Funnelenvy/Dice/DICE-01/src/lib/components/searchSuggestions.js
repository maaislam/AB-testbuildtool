const searchSuggestions = (id, suggestions) => {
  const datalistOption = (option) =>
    `<div class="${id}__zipcodeoption" data-value="${option}">${option}</div>`;
  const htmlStr = suggestions.map((option) => datalistOption(option.description)).join('');

  return htmlStr.trim();
};

export default searchSuggestions;
