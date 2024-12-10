const notification = (id, price, className) => {
  const html = `
    <div class="${id}__upsell-notification ${className}">
        <div class="upsell-notification-titlee">
            <strong>Uw voordeel: ${price}</strong>
        </div>
    </div>
  
  `;
  return html.trim();
};

export default notification;
