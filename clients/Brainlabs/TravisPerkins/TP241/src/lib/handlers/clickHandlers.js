import { removeAppBanner, testRemoveConditions } from '../helpers/utils';

export const clickHandler = (anchorElm, shared, fireEvent) => {
  const { ID } = shared;

  anchorElm.addEventListener('click', ({ target }) => {
    const targetMatched = (desiredMatch) =>
      target.matches(desiredMatch) || target.closest(desiredMatch);

    if (targetMatched(`.${ID}__appbanner--getapp`)) {
      sessionStorage.setItem(`${ID}__uservisitstore`, true);
      fireEvent('User interacts with cta', shared);
    } else if (targetMatched(`.${ID}__appbanner--close`)) {
      sessionStorage.setItem(`${ID}__userclosed`, true);
      removeAppBanner(ID);
      fireEvent('User closes the banner', shared);
    } else if (
      targetMatched('[class^="TopBarMobilestyled__MenuIcon-sc"]') &&
      !targetMatched('[data-test-id="header-menu-window"]') &&
      !testRemoveConditions(ID)
    ) {
      fireEvent('User interacts with burger menu', shared);
    } else if (
      targetMatched('[data-test-id="header-search-button"]') &&
      !testRemoveConditions(ID)
    ) {
      fireEvent('User interacts with search', shared);
    }
  });
};
