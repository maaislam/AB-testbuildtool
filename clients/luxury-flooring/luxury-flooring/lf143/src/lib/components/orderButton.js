const orderButton = (ID) => {
  const html = `
        <button type="button" title="Order a sample" class="action primary green ${ID}__order-button">
            <span>Order a sample</span>
        </button>
    `;

  return html.trim();
};

export default orderButton;
