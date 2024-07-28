import notification from './notification';

const volumeDiscount = (id) => {
  const htmlStr = `
    <div class="volume-discount-wrapper col-xs-12">
      <div class="volume-discount-container">
        <label class="header-title" for="quantity-slider">Buy more, get more off!</label>
        <div class="slider-container">
          <div class="slider-labels">
            <span class="hidden-label">1</span>
            <span>2</span>
            <span class="hidden-label">3</span>
            <span class="hidden-label">4</span>
            <span>5</span>
            <span>6</span>
            <span class="hidden-label">7</span>
            <span class="hidden-label">8</span>
            <span class="hidden-label">9</span>
            <span>10</span>
            <span>11</span>
            <span class="hidden-label">12</span>
            <span class="hidden-label">13</span>
            <span class="hidden-label">14</span>
            <span class="hidden-label">15</span>
            <span class="hidden-label">16</span>
            <span class="hidden-label">17</span>
            <span class="hidden-label">18</span>
            <span class="hidden-label">19</span>
            <span>20</span>
          </div>
          <input type="range" id="quantity-slider" min="1" max="20" value="1">
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
