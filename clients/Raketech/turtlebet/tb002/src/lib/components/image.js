const image = (id, source) => {
  const html = `<div class="${id}__imageWrapper">
    <img src="${source}" alt="Image" class="${id}__image">
  </div>`;
  return html.trim();
};

export default image;
