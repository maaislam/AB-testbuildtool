const successStr = (id) => {
  const html = `
        <div class="heroSection ${id}__heroSection ${id}__thankyou-hero">
            <div class="new-header">
                <div class="heronewsec">
                <div class="header-mobile">An Inogen POC may be covered by Medicare or other Insurance!</div>

                <div class="header_txt">
                    <h1>An Inogen POC may be covered by Medicare or other Insurance!</h1>
                    <img decoding="async"
                        src="//cdn.inogen.com/wp-content/uploads/2025/08/medicare_card_img.png"
                        alt="Medicare Insurance bg"
                        class="medicare_img perfmatters-lazy entered pmloaded"
                        data-src="//cdn.inogen.com/wp-content/uploads/2025/08/medicare_card_img.png"
                        data-ll-status="loaded">
                </div>
                <div class="innerContainer">
                    <div class="${id}__content">
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default successStr;
