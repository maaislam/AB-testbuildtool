const typeFilter = (id, data) => {
  const { text, url, imageSrc } = data;

  const htmlStr = `
    <a href="${url}" class="${id}__typefilter" data-filter="${text}">
        <div class="${id}__typefilter-image">
            <img src="${imageSrc}" alt="">
        </div>
        <div class="${id}__typefilter-text">
            ${text}
        </div>
    </a>`;

  return htmlStr;
};

export default typeFilter;
