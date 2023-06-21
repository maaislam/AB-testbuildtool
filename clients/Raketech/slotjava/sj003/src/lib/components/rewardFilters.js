import rewardFilter from './rewardFilter';

const rewardFilters = (id, rewardData) => {
  const htmlStr = `
        <div class="${id}__rewards-block">
          <h4 class="heading">Attributes</h4>
          <div class="${id}__rewards card-list">
              ${rewardData.map((item) => rewardFilter(id, item)).join('\n')}
          </div>
        </div>
    `;
  return htmlStr;
};
export default rewardFilters;
