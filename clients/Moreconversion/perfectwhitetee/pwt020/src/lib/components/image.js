const image = (id, productImageSrc) => {
  const html = `
    <div class="${id}__imageWrapper"><img src="${productImageSrc}"/></div>
  `;
  return html.trim();
};

export default image;
