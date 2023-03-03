const menuItem = (id, data) => {
  const { name, link } = data;

  const isActive = link === window.location.href ? 'active' : '';

  const htmlStr = `
        <a href="${link}" class="${id}__menuitem ${isActive}">${name}</a>
    `;

  return htmlStr.trim();
};

export default menuItem;
