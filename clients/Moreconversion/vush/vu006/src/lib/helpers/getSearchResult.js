const getSearchResult = (searchQuery) => {
  return fetch(
    `https://www.vushstimulation.com/search/suggest?q=${searchQuery}&section_id=predictive-search`
  )
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
      throw new Error(`Request failed with status: ${response.status}`);
    })
    .then((html) => {
      const parser = new DOMParser();
      const parsedHTML = parser.parseFromString(html, 'text/html');

      const shopifyElement = parsedHTML.querySelector('.shopify-section');
      const resultHtml = shopifyElement.innerHTML;

      return resultHtml;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};

export default getSearchResult;
