const atcBtn = (id) => {
    const htmlStr = `<div class="${id}__atcBtn product-form__buttons">
    <button type="button" name="add" class="product-form__submit button button--full-width button--primary">
            <span class='atc-text'>Add to Cart</span>
            <div class="loading-overlay__spinner hidden">
              <svg aria-hidden="true" focusable="false" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
              </svg>
            </div>
          </button></div>`;
    return htmlStr;
};
export default atcBtn;
