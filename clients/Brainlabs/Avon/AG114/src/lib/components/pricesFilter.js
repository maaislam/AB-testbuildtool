import priceFilter from './priceFilter';

const pricesFilters = (id, filterData) => {
  const htmlStr = `
        <div class="${id}__pricesfilter">
            ${filterData.map((item) => priceFilter(id, item)).join('\n')}
        </div>`;
  return htmlStr;
};

export default pricesFilters;
