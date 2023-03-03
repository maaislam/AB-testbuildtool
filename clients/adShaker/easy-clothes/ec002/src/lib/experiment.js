import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

import { getMenuData, getSizeOptions, observeDOM, resetSizeSelection } from './helpers/utils';

import menuItems from './components/menuItems';
import navSizeOption from './components/navSizeOption';
import sizeDropdownItems from './components/sizeDropdownItems';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking(`new nav variation ${VARIATION}`); //use if needed
  console.log(ID);

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__size-wrapper h5`) && !target.closest(`.${ID}__sizedropdownitems`)) {
      e.preventDefault();
      e.stopPropagation();
      const dropdown = document.querySelector(`.${ID}__sizedrodownitems`);
      dropdown?.classList.toggle(`${ID}__hide`);
    } else if (target.closest(`.${ID}__size`)) {
      const inputState = target.closest('label').querySelector('input').checked;
      console.log('test', inputState);
      target.closest('label').querySelector('input').checked = !inputState;
    }
  });

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  //collect meny data
  const menuData = getMenuData();
  const newMenuAnchor = document.querySelector('.header__content');

  //render menu

  if (VARIATION === '1' && !document.querySelector(`.${ID}__menuitems`)) {
    newMenuAnchor.insertAdjacentHTML('beforeend', menuItems(ID, menuData));
    return;
  }

  //if size option is present render size dropdown

  if (!document.querySelector(`.${ID}__sizenav`) && !document.querySelector(`.${ID}__menuitems`)) {
    const sizeOption = document.querySelector('.collection-sidebar-section__accordion');
    const renderMenu = sizeOption ? navSizeOption(ID, menuData) : menuItems(ID, menuData);
    newMenuAnchor.insertAdjacentHTML('beforeend', renderMenu);
    const navSizeWrapper = document.querySelector(`.${ID}__size-wrapper`);
    if (!sizeOption) return;
    const sizeoptions = getSizeOptions();

    navSizeWrapper.insertAdjacentHTML('beforeend', sizeDropdownItems(ID, sizeoptions));

    resetSizeSelection(ID);
    const callback = (mutation, urlChanged) => {
      urlChanged && resetSizeSelection(ID);
    };

    observeDOM('body', callback);
  }
};
