import notification from './notification';

const volumeDiscount = (id) => {
  const visibleOptions = [1, 2, 5, 11, 20];
  let optionsHtml = '';
  for (let i = 1; i <= 20; i += 1) {
    const className = visibleOptions.includes(i) ? '' : 'hidden-label';
    optionsHtml += `<option class="${className}">${i}</option>`;
  }
  const htmlStr = `
    <div class="volume-discount-wrapper col-xs-12">
      <div class="volume-discount-container">
        <label class="header-title" for="quantity-slider">Buy more, get more off!</label>
        <div class="slider-container">
          <datalist class="slider-labels">
            ${optionsHtml}
          </datalist>
          <input type="range" id="quantity-slider" min="1" max="20" value="1" step="1" list="values">
        </div>
        <div class='${id}__atcContainer'>
          <p id="savings-message">You would save 0%</p>
          <input type="number" id="quantity-input" min="1" value="1">
          <button id="add-to-bag-btn">Add to Bag</button>
        </div>
      </div>
    </div>

    ${notification()}
`;

  return htmlStr;
};
export default volumeDiscount;
