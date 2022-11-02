//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const cloneSerachBar = `<form class="form minisearch ${ID}__minisearch" id="search_mini_form2" action="https://www.123drogisterij.nl/catalogsearch/result/" method="get">
                            <div class="field search">
                                <label class="label" for="search" data-role="minisearch-label">
                                    <span>Zoeken</span>
                                </label>
                                <div class="control">
                                    <input id="search2" type="text" name="q" value="" placeholder="Zoek uw product" class="input-text" maxlength="128" role="combobox" aria-haspopup="false" aria-autocomplete="both" autocomplete="off">
                                                    </div>
                            </div>
                            <div class="actions">
                                <button type="submit" title="Zoeken" class="action search">
                                    <span>Zoeken</span>
                                </button>
                            </div>
                          </form>`;
  const mobileNavSection = document.querySelector('nav.navigation > ul > li');
  mobileNavSection.insertAdjacentHTML('beforebegin', cloneSerachBar);
};
