const catalogItem = (id, data) => {
  const { live_url, slug, infos, small_cover } = data;

  const isActive = location.pathname.indexOf(slug) !== -1;
  const catalogTitle = infos.publication.title;

  const htmlStr = `<a href="${live_url}" class="${id}__catalog--items swiper-slide ${
    isActive ? `${id}__active-catalog` : ''
  }"><div class="catalog-imgwrapper"><img src="${small_cover}" alt="${catalogTitle}"></div> 
    <span class="title">${catalogTitle}</span>
    </a>`;
  return htmlStr;
};

export default catalogItem;
