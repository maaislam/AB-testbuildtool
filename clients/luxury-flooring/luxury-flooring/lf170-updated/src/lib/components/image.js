const image = (src) => {
  const html = `
        <img src="${src}" class="new-image-element">
    `;
  return html.trim();
};

export default image;
