import menuItems from './menuItems';
import newCartBtn from './newCartBtn';

const menubar = (id, menus, basketCount) => {
  const menusToUse = basketCount > 0 ? menus.filter((item) => item.title !== 'Basket') : menus;
  const htmlStr = `<div class="${id}__menubar ${basketCount <= 0 ? `${id}__extra-padding` : ''}">
        <div class="${id}__menubar-wrapper">
            ${menusToUse.map((menu) => menuItems(id, menu)).join('\n')}
            ${newCartBtn(id, basketCount)}
        </div>
    </div>`;

  return htmlStr;
};

export default menubar;
