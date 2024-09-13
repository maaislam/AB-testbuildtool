const shippingProtection = (id, price) => {
    const htmlStr = `<div class='${id}__shippingProtectionWrapper'>
        <div class='${id}__shippingProtection'>
            <div class='protection-icon-wrapper'>
                <img src='https://cdn.shopify.com/s/files/1/0346/8741/8505/files/redo-shield_png.png?v=1725478063' alt='lock-icon'>
            </div>
            <div class='protection-message'>
                <p class='price-message'>Free Returns + Package Protection for ${price}</p> 
            </div>
            <div class='toggle-switch'>
                <span class="switch">
                    <input id="switch-rounded" type="checkbox"  ${window.Route.Protection.status === 1 && 'checked'} />
                    <label class='${id}__switchLabel' for="switch-rounded"></label>
                </span>
            </div>
        </div>
        <div class='${id}__shippingProtection damage-message-wrapper'>
            <div class='protection-icon-wrapper'>
                <img src='https://cdn.shopify.com/s/files/1/0346/8741/8505/files/redo-shield_png.png?v=1725478063' alt='lock-icon'>
            </div>
            <div class='protection-message'>
                <p class='damage-message'>Free returns and protection from loss or damage</p> 
            </div>
            <div class='toggle-switch'>
                <span class="switch">
                    <input id="switch-rounded" type="checkbox" />
                    <label for="switch-rounded"></label>
                </span>
            </div>
        </div>
    </div>`;

    return htmlStr;
};
export default shippingProtection;
