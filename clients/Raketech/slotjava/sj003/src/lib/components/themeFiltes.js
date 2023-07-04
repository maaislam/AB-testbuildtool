import themeFilter from './themeFilter';

const themeFilters = (id, themeData) => {
  const htmlStr = `
        <div class="${id}__themes-block">
          <h4 class="heading">Temática</h4>
          <div class="${id}__themes card-list">
              ${themeData.map((item) => themeFilter(id, item)).join('\n')}
          </div>
        </div>
    `;
  return htmlStr;
};
export default themeFilters;
