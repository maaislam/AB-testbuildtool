import notification from './notification';

const volumeDiscount = (id) => {
  const htmlStr = `
    <div class="volume-discount-wrapper col-xs-12">
      <div class="volume-discount-container">
        <label class="header-title" for="quantity-slider">Buy more, get more off!</label>
        <div class="slider-container">
          <datalist class="slider-labels">
            <option>1</option>
            <option>2</option>
            <option class="hidden-label">3</option>
            <option class="hidden-label">4</option>
            <option>5</option>
            <option class="hidden-label">6</option>
            <option class="hidden-label">7</option>
            <option class="hidden-label">8</option>
            <option class="hidden-label">9</option>
            <option>10</option>
            <option class="hidden-label">11</option>
            <option class="hidden-label">12</option>
            <option class="hidden-label">13</option>
            <option class="hidden-label">14</option>
            <option class="hidden-label">15</option>
            <option class="hidden-label">16</option>
            <option class="hidden-label">17</option>
            <option class="hidden-label">18</option>
            <option class="hidden-label">19</option>
            <option>20</option>
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
