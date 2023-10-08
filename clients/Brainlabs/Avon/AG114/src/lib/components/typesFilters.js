import typeFilter from './typeFilter';

const typesFilters = (id, filterData, bannerData) => {
  const { headline, subHeadline, bannerImage } = bannerData;

  const htmlStr = `
    <div class="${id}__typefilters">
      <div class="filter-banner" style="background-image:url(${bannerImage})">
          <div class="headline">${headline}</div>
          <div class="subheadline">${subHeadline}</div>
      </div>
      <div class="${id}__typefilter-block">
          <div class="${id}__typefilters-wrapper">
              ${filterData.map((item) => typeFilter(id, item)).join('\n')}
          </div>
      </div>
    </div>`;
  return htmlStr;
};

export default typesFilters;
