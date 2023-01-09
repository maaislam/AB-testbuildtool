import searchSuggestions from '../components/searchSuggestions';
import getSearchSuggestions from '../helpers/getSearchSuggestions';
import { debounce } from '../helpers/utils';
import { ID } from '../shared/shared';

const zipInputHandler = debounce((target) => {
  const searchTerm = target.value;
  if (searchTerm === '' || searchTerm.length < 4 || searchTerm.length > 15) return;

  try {
    getSearchSuggestions(searchTerm)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        //render search suggestion dropdown
        const { predictions } = data[0].body;
        document.querySelector(`.${ID}__searchsuggestions`).innerHTML = searchSuggestions(
          ID,
          predictions
        );
        if (predictions.length > 0) {
          document.querySelector(`.${ID}__searchsuggestions`).classList.remove(`${ID}__hide`);
        }
      });
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
});

export default zipInputHandler;
