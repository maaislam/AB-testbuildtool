import difficultyFilters from './difficultyFilters';
import filterFooter from './filterFooter';
import rewardFilters from './rewardFilters';
import themeFilters from './themeFiltes';

const filterWrapper = (id, filterData) => {
  const htmlStr = `
        <div class="${id}__filters container">
            <header class="${id}__section-header section__header section__header_line">
                <h2 class="heading heading_line">Filtros</h2>
            </header>
            ${themeFilters(id, filterData.themes)}
            ${rewardFilters(id, filterData.riskAndReward)}
            ${difficultyFilters(id, filterData.difficulty)}
            ${filterFooter(id)}
        </div>
    `;
  return htmlStr;
};

export default filterWrapper;
