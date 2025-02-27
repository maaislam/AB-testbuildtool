import setup from './services/setup';
import shared from './shared/shared';
import header from './components/header';

const { ID } = shared;

const init = () => {
  const headerElem = document.querySelector('header');
  if (!document.querySelector(`.${ID}__header`)) {
    headerElem.insertAdjacentHTML('afterend', header(ID));
  }
};

const openSidebar = () => {
  const sidebarMenu = document.querySelector(`.${ID}__sideBarMenu`);
  const sidebarOverlay = document.querySelector(`.${ID}__sideBarMenuOverlay`);

  sidebarMenu.classList.remove('translate-x-full');
  sidebarMenu.classList.add('translate-x-0');
  sidebarOverlay.classList.remove('hidden', 'opacity-0');
  sidebarOverlay.classList.add('opacity-50');
};

const closeSidebar = () => {
  const sidebarMenu = document.querySelector(`.${ID}__sideBarMenu`);
  const sidebarOverlay = document.querySelector(`.${ID}__sideBarMenuOverlay`);

  sidebarMenu.classList.remove('translate-x-0');
  sidebarMenu.classList.add('translate-x-full');
  sidebarOverlay.classList.add('opacity-0');
  setTimeout(() => sidebarOverlay.classList.add('hidden'), 300);
};

const openSubMenu = () => {
  const subMenu = document.getElementById('whyProtonSubMenu');
  subMenu.classList.remove('translate-x-full');
  subMenu.classList.add('translate-x-0');
};

const closeSubMenu = () => {
  const subMenu = document.getElementById('whyProtonSubMenu');
  subMenu.classList.add('translate-x-full');
};

export default () => {
  setup(); //use if needed

  init();

  document.body.addEventListener('click', (event) => {
    const { target } = event;

    if (target.closest('#whyProtonBtn')) {
      const popover = document.getElementById('whyProtonPopOver');
      const overlay = document.getElementById('popoverOverlay');
      const isHidden = popover.classList.contains('hidden');

      overlay.classList.toggle('hidden', !isHidden);
      popover.classList.toggle('hidden');
    } else if (target.closest('#popoverOverlay')) {
      const popover = document.getElementById('whyProtonPopOver');
      const overlay = target.closest('#popoverOverlay');

      popover.classList.add('hidden');
      overlay.classList.add('hidden');
    } else if (target.closest(`.${ID}__hamburgerBtn`)) {
      openSidebar();
    } else if (target.closest(`.${ID}__closeSidebarBtn`) || target.closest(`.${ID}__sideBarMenuOverlay`)) {
      closeSidebar();
    } else if (target.closest(`.${ID}__whyProtonBtn`)) {
      openSubMenu();
    } else if (target.closest('#closeWhyProtonSubMenu')) {
      closeSubMenu();
    }
  });
};
