const image = (id, src) => {
  const html = `
        <img height="87" width="483" alt="" src="${src}" class="${id}__image">
    `;
  return html.trim();
};
export default image;
