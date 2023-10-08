const priceFilter = (id, data) => {
  const { text, val, url, filterIcon } = data;

  const htmlStr = `
    <div class="${id}__pricefilter" data-filterurl="${url}">
      <div class="${id}__pricefilter-image">
        <img src="${filterIcon}" alt="price filter" />
      </div>
      <div class="${id}__pricefilter-text">
        <span class="text">${text}</span>
        <span class="val">${val}</span>
      </div>
    </div>`;

  return htmlStr;
};

export default priceFilter;
