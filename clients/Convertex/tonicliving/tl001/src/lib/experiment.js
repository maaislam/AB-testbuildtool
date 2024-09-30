import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const desktopMenuContainer = document.querySelector('#main-nav .navigation__tier-1-container');
  const duplicateElement = desktopMenuContainer.cloneNode(true);
  duplicateElement.classList.add(`${ID}__navigation__tier`);
  if (!document.querySelector(`.${ID}__navigation__tier`)) {
    desktopMenuContainer.insertAdjacentElement('afterend', duplicateElement);
  }

  const newMenuItemContainer = document.querySelector(`.${ID}__navigation__tier`);
  const navigationItem = newMenuItemContainer.querySelectorAll(
    '.navigation__tier-1 > li.navigation__item--with-children'
  );
  navigationItem.forEach((item) => {
    const onLink = item.querySelector('.navigation__link');
    const navigationToggle = item.querySelector('.navigation__children-toggle');

    onLink && onLink.removeAttribute('href');
    navigationToggle && navigationToggle.removeAttribute('href');

    const nolinks = item.querySelectorAll('a[href="#"]');
    nolinks.forEach((nolink) => {
      nolink.removeAttribute('href');
    });

    if (item.classList.contains('navigation__item--show-children')) {
      item.classList.classList.remove('navigation__item--show-children');
    }
  });
};

export default () => {
  setup();
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (
      target.closest(
        '.navigation__item--with-children:not(.navigation__item--show-children) > a.navigation__link'
      ) &&
      target.closest('.navigation__tier-1')
    ) {
      const element = target.closest('.navigation__item--with-children');
      const parent = element.closest('.navigation__tier-1');
      parent.querySelectorAll('.navigation__item--show-children').forEach((item) => {
        item.classList.remove('navigation__item--show-children');
      });
      element.classList.add('navigation__item--show-children');
    } else if (
      target.closest('.navigation__item--show-children > a.navigation__link') &&
      target.closest('.navigation__tier-1')
    ) {
      const element = target.closest('.navigation__item--with-children');
      element.classList.remove('navigation__item--show-children');
    }
  });
  if (VARIATION === 'Control') return; //

  init(); //
};
