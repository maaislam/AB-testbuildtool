const bettingWrapper = (id, icon) => {
  const html = `
    <div class="${id}__container">
      <div class="${id}__bettingWrapper">
          ${icon}
      </div>
    </div>
  `;
  return html.trim();
};

export default bettingWrapper;
