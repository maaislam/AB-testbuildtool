import menuItem from './menuItem';

const menuItems = (id, menudata) => {
  const htmlStr = `
        <div class="${id}__menuitems">
            <div class="${id}__menuitems-wrapper">
                ${menudata.map((item) => menuItem(id, item)).join('\n')}
            </div>
        </div>
    `;

  return htmlStr.trim();
};

export default menuItems;
