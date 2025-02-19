import setup from './services/setup';
import shared from './shared/shared';
import menuData from './data/menuData';

const { ID } = shared;

const init = () => {
  const allMenuItems = document.querySelectorAll('[data-action="navigation"] > ul > li');
  allMenuItems.forEach((item) => {
    const linkElement = item.querySelector('a');
    const link = linkElement.href;
    const isExistingMenuItem = menuData.find((menu) => link.includes(menu.link));
    isExistingMenuItem
      ? item.classList.add(`${ID}__${isExistingMenuItem.classTag}`)
      : item.classList.add(`${ID}__staticOrder`);
  });
};

export default () => {
  setup();
  console.log(ID);

  init();
};
