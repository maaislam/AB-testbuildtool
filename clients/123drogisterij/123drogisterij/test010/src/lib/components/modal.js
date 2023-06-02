const modal = (id) => {
  const htmlStr = `

    <div class="ppatc__popup">
        <div class="ppatc__popup-bg"></div>
        <div class="ppatc__popup-container">
        <div class="ppatc__popup-content">
            <div class="ppatc__popup-form">
                <button type="button" class="ppatc__popup-close ${id}__denyoffer"></button>
                <div class="ppatc__popup-header">Extra besparen?</div>
                <div class="ppatc__popup-items">
                    <div class="ppatc__popup-item">
                    <div class="ppatc__popup__item-image ${id}__offerimg">
                        <i
                        style="
                            background-image: url(https://www.123drogisterij.nl/media/catalog/product/cache/72397c0f1c9d1dba8fb4d8781a0ee7d0/t/e/tena_men_level_1.jpg);
                        "
                        ></i>
                    </div>
                    <b class="ppatc__popup__item-title ${id}__title">TENA For Men Level 1</b>
                    <div class="ppatc__popup__item-price ${id}__offerprice">€&nbsp;11,53</div>
                    <div class="ppatc__popup__item-form"></div>
                    <div class="ppatc__popup__item-message">
                        <p class="product name product-item-name">
                        <strong>Bestel <span class="${id}__offerqty">1</span> verpakkingen </strong>
                        met GRATIS verzending
                        </p>
                    </div>
                    </div>
                </div>
                <div class="ppatc__popup-footer">
                    <button type="button" class="ppatc__popup-btn ${id}__atc">Ja, ik wil besparen</button
                    ><button type="button" class="ppatc__popup-link ${id}__denyoffer">Nee, vandaag niet</button>
                </div>
            </div>
        </div>
        </div>
    </div>`;

  return htmlStr;
};

export default modal;
