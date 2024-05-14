export const checkBox = (id) => {
  const html = `
    <div class="${id}__checkBox">
        <input type="checkbox" id="add-10%-wastage" name="add-10%-wastage" value="10">
        <label for="add-10%-wastage">
            Add 10% wastage 
            <div class="tooltip-toggle">?</div>
        </label>
    </div>
  `;
  return html;
};
