const brochureCover = (id, data) => {
  const htmlStr = `
        <a class="${id}__brochurecover" data-title="${data.title}" href="${data.live_url}">
            <img src="${data.cover}" alt="${data.title}">
        </a>`;

  return htmlStr.trim();
};

export default brochureCover;
