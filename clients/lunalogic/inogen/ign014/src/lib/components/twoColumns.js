const twoColumns = (id, data) => {
  const html = `
        <div class="${id}__twoColumnsWrapper">
            <div class="${id}__twoColumnsInner">
                <div class="${id}__twoColumnsLeft" style="background-image: url(${data.items[0].bgLink});">
                   <div class="${id}__icon">${data.items[0].icon}</div>
                   <div class="${id}__title">${data.items[0].title}</div>
                   <div class="${id}__subtext">${data.items[0].subtitle}</div>
                </div>
                <div class="${id}__twoColumnsRight" style="background-image: url(${data.items[1].bgLink});">
                     <div class="${id}__icon">${data.items[1].icon}</div>
                   <div class="${id}__title">${data.items[1].title}</div>
                   <div class="${id}__subtext">${data.items[1].subtitle}</div>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default twoColumns;
