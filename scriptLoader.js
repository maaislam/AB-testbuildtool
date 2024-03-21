(() => {
  const sharedBundle = 'http://localhost:7000/shared.bundle.js';
  const jsLocation = 'http://localhost:7000/main.bundle.js';
  const cssLocation = 'http://localhost:7000/styles/main.css';
  const socket = new WebSocket('ws://localhost:7000/ws');
  const fileFetcher = (fileLocation, fileType) => {
    const config = {
      js: {
        id: 'salyenz_script',
        htmlTag: 'script'
      },
      bJs: {
        id: 'salyenz_buildScript',
        htmlTag: 'script'
      },

      css: {
        id: 'salyenz_style',
        htmlTag: 'style'
      }
    };

    fetch(fileLocation)
      .then((response) => {
        return response.text();
      })
      .then((fileData) => {
        const newFile = document.createElement(config[fileType].htmlTag);

        newFile.id = config[fileType].id;
        newFile.textContent = fileData;
        if (fileType === 'css') {
          document.querySelector(`#${config[fileType].id}`)?.remove();
          document.querySelector('head').append(newFile);
          return;
        }
        //console.log(fileData !== document.querySelector(`#${config[fileType].id}`)?.text);
        if (fileData !== document.querySelector(`#${config[fileType].id}`)?.text) {
          document.querySelector(`#${config[fileType].id}`)?.remove();
          document.querySelector('head').append(newFile);
        }
      })
      .catch((err) => {
        console.warn('Something went wrong.', err);
      });
  };
  fileFetcher(sharedBundle, 'bJs');
  //Listen for messages
  socket.addEventListener('message', (event) => {
    if (JSON.parse(event.data).type !== 'ok') return;
    fileFetcher(jsLocation, 'js');
    fileFetcher(cssLocation, 'css');
  });
})();
