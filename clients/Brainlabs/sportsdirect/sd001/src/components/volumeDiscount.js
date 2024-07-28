import notification from './notification';

const volumeDiscount = () => {
  const htmlStr = `
    <div class="volume-discount-container">
        <label for="quantity-slider">Select Quantity:</label>
        <div class="slider-labels">
            <span>2-5</span>
            <span>6-10</span>
            <span>11-20</span>
            <span>20+</span>
        </div>
        <input type="range" id="quantity-slider" min="5" max="20" value="1">
        <input type="number" id="quantity-input" min="1" value="1">
        <p id="savings-message">You will save 0%</p>
        <button id="add-to-bag-btn">Add to Bag</button>
    </div>
    ${notification()}
`;

  return htmlStr;
};
export default volumeDiscount;
