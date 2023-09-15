/*eslint-disable no-useless-escape */
const searchItem = (id, data) => {
  const { casino, license, casinoDisplayName } = data;
  const isSelected = window.selectedCasinos.includes(casino);

  const htmlStr = `
    <div class="${id}__searchitem">
        <label class="wrapper" data-license="${license}">${casinoDisplayName || casino}
            <input id="${id}__${casino.replace(/[\/\-_ ]/g, '').toLowerCase()}" type="checkbox" ${
    isSelected ? 'checked' : ''
  } class="${id}__stagetwo-checkbox" data-license="${license}" data-brand="${casino}" ">
            <span class="checkmark"></span>
        </label>
    </div>`;

  return htmlStr;
};

export default searchItem;
