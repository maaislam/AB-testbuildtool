import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import getSearchSuggestions from './helpers/getSearchSuggestions';
import searchSuggestions from './components/searchSuggestions';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  //place new zipcode input field`

  //add input listener to validate zipcode

  const companyInput = document.getElementById('Company');

  //anchorElem.remove();
  companyInput.setAttribute('list', `${ID}__searchsuggestions`);
  companyInput?.addEventListener('input', ({ target }) => {
    const searchTerm = target.value;
    if (searchTerm === '' || searchTerm.length < 4 || searchTerm.length > 15) return;
    try {
      getSearchSuggestions(searchTerm)
        .then((response) => {
          console.log(response);
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then((data) => {
          console.log(data);
          //render search suggestion dropdown

          companyInput.insertAdjacentHTML(
            'afterend',
            searchSuggestions(ID, data[0].body.predictions)
          );
        });
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  });
};
