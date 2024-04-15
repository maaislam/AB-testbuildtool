//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { pollerLite } from '../../../../../../../../globalUtil/util';
import formWrapper from './components/formWrapper';
import { addJsToPage } from './helpers/utils';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION == 'control') {

  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  //add js
  const hbsptJs = 'https://js.hsforms.net/forms/v2.js?pre=1';
  addJsToPage(hbsptJs, `${ID}__hbspt--js`);
  pollerLite([() => typeof window.hbspt === 'object', '#hs_cos_wrapper_dnd_area-module-12'], () => {
    const anchorElem = document
      .getElementById('hs_cos_wrapper_dnd_area-module-12')
      .closest('.row-fluid-wrapper');

    if (
      document.querySelector(`.${ID}__hbsptcontainer #hsForm_a80ae059-9d8f-4b60-8af2-d5b964b3a55b`)
    ) {
      return;
    }
    anchorElem.insertAdjacentHTML('beforebegin', formWrapper(ID));

    window.hbspt.forms.create({
      region: 'na1',
      portalId: '521369',
      formId: 'a80ae059-9d8f-4b60-8af2-d5b964b3a55b',
      target: `.${ID}__hbsptcontainer > .form-wrapper`,
      onFormSubmitted: (data) => {
        console.log(data);
      }
    });
  });
};
