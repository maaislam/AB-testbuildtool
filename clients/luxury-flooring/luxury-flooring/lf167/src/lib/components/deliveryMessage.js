export const deliveryMessage = (id, deliveryData) => {
  const html = `
        <div class="${id}__delivery-message">Delivery available from <strong>${deliveryData}</strong></div>
    `;

  return html;
};
