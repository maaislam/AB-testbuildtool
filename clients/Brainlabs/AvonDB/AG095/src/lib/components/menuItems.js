const menuItems = (id, itemData) => {
  const htmlStr = `
        <div class="${id}__menubar--item ${id}__menubar-item--${itemData.title}">
            <span class="icon">
                ${itemData.icon}
            </span>
            <span class="title">
                ${itemData.title === 'Brochures' ? 'Show Brochures' : itemData.title}
            </span>
        </div>
    `;
  return htmlStr;
};

export default menuItems;
