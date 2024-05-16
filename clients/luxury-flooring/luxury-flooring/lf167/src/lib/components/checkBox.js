export const checkBox = (id) => {
  const html = `
    <div class="${id}__checkBox">
        <input type="checkbox" id="add-10percent-wastage" name="add-10percent-wastage" value="10">
        <label for="add-10percent-wastage">
            Add 10% wastage 
            <div class="tooltip-toggle">?</div>
        </label>
    </div>
  `;
  return html;
};
