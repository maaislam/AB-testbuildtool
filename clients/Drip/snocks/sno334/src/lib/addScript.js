const addScript = (jsUrl) => {
  const script = document.createElement('script')

  script.type = 'text/javascript'
  script.src = `${jsUrl}`

  const scriptExists = document.querySelector(`[src="${jsUrl}]`)
  !scriptExists && document.querySelector('head').append(script)
}

export default addScript
