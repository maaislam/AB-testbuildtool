const customCheckbox = (id) => {
    const htmlStr = `<div class="${id}__checkbox custom-checkbox">
      <label class="custom-checkbox-label">
        <input type="checkbox" id="belt-checkbox">
        <span class="custom-check"></span>Include Enhanced Retention Belt</label>
    </div>`;

    return htmlStr;
};
export default customCheckbox;
