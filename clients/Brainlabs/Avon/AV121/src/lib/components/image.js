const image = (id, { title, featured_image, sampleUrl }) => {
  const htmlStr = `
    <a class="${id}__image ${id}__pdp-link" href="${sampleUrl}">
        <img src="${featured_image}" alt="${title}" loading="lazy">
    </a>`;

  return htmlStr.trim();
};

export default image;
