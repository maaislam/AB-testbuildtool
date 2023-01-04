import { debounce } from './utils';

const getSearchSuggestions = debounce((searchTerm) => {
  const url =
    'https://funnelenvy.app.n8n.cloud/webhook-test/10973993-151a-4478-b088-2d30ef86dc1d/check'; //n8n WebHook URL

  //finally send along our request as a POST request to the n8n endpoint
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8'
    },
    mode: 'cors',
    body: JSON.stringify({
      searchTerm
    })
  };
  return fetch(url, options);
});

export default getSearchSuggestions;
