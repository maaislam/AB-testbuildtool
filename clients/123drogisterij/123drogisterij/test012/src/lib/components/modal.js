const modal = (id, content = '') => {
  const htmlStr = `
    <div class="ppatc__popup">
        <div class="ppatc__popup-bg"></div>
        <div class="ppatc__popup-container">
        <div class="ppatc__popup-content">
            <div class="ppatc__popup-form">
                <button type="button" class="ppatc__popup-close ${id}__denyoffer"></button>
                <div class="ppatc__popup-header">Extra besparen?</div>
                <div class="ppatc__popup-items">
                    ${content}
                </div>
                <div class="ppatc__popup-footer">
                    <button type="button" class="ppatc__popup-btn ${id}__atc">In winkelmand</button>
                    <button type="button" class="ppatc__popup-link">Nee, vandaag niet</button>
                </div>
            </div>
        </div>
        </div>
    </div>`;

  return htmlStr;
};

export default modal;
