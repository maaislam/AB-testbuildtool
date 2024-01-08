const initialProductsFetch = (url) => {
    return fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc;
    })
    .catch((error) => {
      console.log('An error occurred:', error);
    });
};

export default initialProductsFetch;
