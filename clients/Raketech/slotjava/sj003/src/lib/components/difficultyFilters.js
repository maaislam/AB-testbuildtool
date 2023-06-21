import difficultyFilter from './difficultyFilter';

const difficultyFilters = (id, difficultyData) => {
  const htmlStr = `
        <div class="${id}__difficultys-block">
          <div class="${id}__difficulty card-list box">
              ${difficultyData.map((item) => difficultyFilter(id, item)).join('\n')}
          </div>
          <div class="${id}__difficulty card-list slider">
            <div class="slider">
                <input class="difficulty-slider medium" type="range" min="1" max="3" step="1" value="2" data-filter="difficulty">
                <div class="slider-labels">
                    <div class="slider-label">Easy</div>
                    <div class="slider-label">Medium</div>
                    <div class="slider-label">Hard</div>
                </div>
                
            </div>
          </div>
        </div>
    `;
  return htmlStr;
};
export default difficultyFilters;
