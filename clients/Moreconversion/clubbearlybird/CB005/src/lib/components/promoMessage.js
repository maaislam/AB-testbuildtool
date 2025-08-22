const promoMessage = (id) => {
  const html = `
    <div class="${id}__wrapper">
            <div class="upgrade-container">
                <span class="upgrade-text">UPGRADE TO A <span class="highlight">45 SERVING STARTER KIT</span> TO GET <span class="highlight">FREE SHIPPING</span></span>
                <a href="/pages/golife#16074793" class="upgrade-button">UPGRADE - $49</a>
            </div>
        </div>
    `;
  return html.trim();
};

export default promoMessage;
