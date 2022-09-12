const catalogItem = (id, data) => {
  const { live_url, slug, infos, small_cover } = data;

  const isActive = location.pathname.indexOf(slug) !== -1;
  const oldStyleUrl = location.search.indexOf('?rep_id=rep') !== -1;
  // eslint-disable-next-line no-undef
  const catlogUrl = oldStyleUrl ? `${live_url}?rep_id=${PDP_MANAGER.API_DATA.rep_id}` : live_url;
  const catalogTitle = infos.publication.title;

  const htmlStr = `<a href="${catlogUrl}" class="${id}__catalog--items swiper-slide ${
    isActive ? `${id}__active-catalog` : ''
  }"><div class="catalog-imgwrapper"><img src="${small_cover}" alt="${catalogTitle}"></div> 
    <span class="title">${catalogTitle}</span>
    </a>`;
  return htmlStr;
};

export default catalogItem;
