import searchSuggest from '../components/searchSuggest';
import { debounce } from '../helpers/utils';
import shared from '../shared/shared';

const locationInputhandler = debounce((searchString) => {
  const { ID: id } = shared;
  return fetch(`https://vxp.joindeleteme.com/bff/api/v1/locations?location=${searchString}`, {
    headers: {
      Accept: '*/*'
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //remove old dropdown
      //render new dropdown
      const getLocalForm = document.querySelector(`.${id}__getlocal--form`);
      document.querySelector(`.${id}__searchsuggestions`)?.remove();
      getLocalForm?.insertAdjacentHTML('beforeend', searchSuggest(id, data));
    });
}, 500);

export default locationInputhandler;
