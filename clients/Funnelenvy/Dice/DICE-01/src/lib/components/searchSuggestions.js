const searchSuggestions = (id, suggestions) => {
  const datalistOption = (option) => `<option value="${option}">${option}</option>`;
  const htmlStr = suggestions.map((option) => datalistOption(option.description)).join('');

  return htmlStr.trim();
};

export default searchSuggestions;
