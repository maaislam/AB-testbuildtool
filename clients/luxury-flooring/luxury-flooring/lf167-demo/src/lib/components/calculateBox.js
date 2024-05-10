export const calculateBox = (id) => {
  const html = `
        <div class="${id}__calculateBox">
            <div class="${id}__calculateBox-wrapper">
                <div class="${id}__calculateBox-content">
                    <div class="${id}__calculateBox-content-input">
                        <p>Number of m² required</p>
                        <div class="${id}__input-box">
                            <input type="number" value="0"/>
                            <span class="${id}__quantity">m²</span>
                        </div>
                        <a href="#">How much do I need?</a>
                    </div>
                    <div class="${id}__vertical-line"></div>
                    <div class="${id}__calculateBox-content-summery">
                        <p>Total</p>
                        <div class="${id}__subtotal">£0.00</div>
                        <div class="${id}__checkBox">
                            <input type="checkbox" id="add-10%-wastage" name="add-10%-wastage" value="10">
                            <label for="add-10%-wastage">
                                Add 10% wastage 
                                <div class="tooltip-toggle">?</div>
                            </label>
                        </div>
                        <div class="${id}__extraInfo">(0 packs / 0m²)</div>
                    </div>
                </div>

                <div class="${id}__calculateBox-atc">
                    <button type="button" title="Add to Basket" class="action primary tocart" id="product-addtocart-button">
                        <span>Add to Basket</span>
                    </button>
                </div>
                <div class="${id}__calculateBox-message">Delivery available from <strong>Monday, 26 June</strong></div>
            </div>
        </div>
    `;
  return html;
};
