const getGameDesc = (gameUrl) => {
  window.abortController = new AbortController();
  return fetch(gameUrl, {
    signal: window.abortController.signal
  })
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      console.log('🚀doc:', doc);
      const gameDescElem = doc.querySelector('article > p');
      const gameDesc = gameDescElem ? gameDescElem.innerHTML : '';
      return gameDesc || '';
    })
    .catch((error) => {
      if (error.name === 'AbortError') {
        console.log('Network call aborted');
      } else {
        console.log('Error:', error);
      }
    });
};

export default getGameDesc;
