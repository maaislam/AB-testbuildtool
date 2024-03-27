export const fakeButton = (ID) => {
  const html = `
        <button type="button" title="Add to Basket" class="action primary tocart ${ID}__fakeATB" >
            <span>Add to Basket</span>
        </button>
    `;

  return html.trim();
};
