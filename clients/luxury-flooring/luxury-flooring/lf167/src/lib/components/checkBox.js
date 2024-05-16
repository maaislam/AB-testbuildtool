export const checkBox = (id) => {
  const html = `
    <div class="${id}__checkBox">
        <input type="checkbox" id="add-10percent-wastage" name="add-10percent-wastage" value="10">
        <label for="add-10percent-wastage">
            Add 10% wastage 
        </label>
        <div class="tooltip" data-bind="visible: !wastage_covered">
            <div class="tooltip-toggle">?</div>
            <span class="tooltip-contents ${id}__hide" role="tooltip"><p><strong>What is wastage?</strong><br> When working out how much flooring to buy, it's important to add on a bit extra. This is because each room is unique in its size and shape and often you'll have to cut several boards to accommodate this. This extra allowance is known as 'wastage'.</p></span>
        </div>
    </div>
  `;
  return html;
};
