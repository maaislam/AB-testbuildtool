export const variantItem = (ID, productId, firsrSelectedVariant, data) => {
  const { appliedOption, id, available } = data;
  const isActive = firsrSelectedVariant.id === id ? 'active' : '';
  const html = `
     <div class="variant-input ${ID}__variant-input ${isActive}" data-value="${appliedOption}" data-variant-id="${id}">
        <label class="${ID}__size ${!available ? 'disabled' : ''}">
                ${appliedOption}
        </label>
    </div>
  `;
  return html;
};
