;(() => {
  const jsLocation = 'http://localhost:3000/main.bundle.js'
  const cssLocation = 'http://localhost:3000/styles/main.css'
  const socket = new WebSocket('ws://localhost:3000/ws')
  const fileFetcher = (fileLocation, fileType) => {
    const config = {
      js: {
        id: 'echologyx_script',
        htmlTag: 'script',
      },
      css: {
        id: 'echologyx_style',
        htmlTag: 'style',
      },
    }

    fetch(fileLocation)
      .then(function (response) {
        return response.text()
      })
      .then(function (fileData) {
        const newFile = document.createElement(config[fileType].htmlTag)

        newFile.id = config[fileType].id
        newFile.textContent = fileData
        document.querySelector(`#${config[fileType].id}`)?.remove()
        document.querySelector('head').append(newFile)
      })
      .catch(function (err) {
        console.warn('Something went wrong.', err)
      })
  }

  // Listen for messages
  socket.addEventListener('message', (event) => {
    if (JSON.parse(event.data).type !== 'ok') return
    fileFetcher(cssLocation, 'css')

    fileFetcher(jsLocation, 'js')
  })
})()
