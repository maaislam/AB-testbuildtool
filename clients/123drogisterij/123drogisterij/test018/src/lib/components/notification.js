const notification = (id, price, className) => {
  const html = `
    <div class="upsell-notification ${id}__upsell-notification ${className}">
        <div class="upsell-notification-alert">!</div>
        <div class="upsell-notification-title">
            <strong>Uw voordeel: ${price}</strong>
        </div>
    </div>
  
  `;
  return html.trim();
};

export default notification;
