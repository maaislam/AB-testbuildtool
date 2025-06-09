const quizBanner = (id) => {
  const html = `
        <div class="aiden-banner-category ${id}__quizBanner">
            <div class="aiden-banner-category-image">
                <picture><source type="image/webp" srcset="https://www.123drogisterij.nl/media/wysiwyg/image.webp"><img src="https://www.123drogisterij.nl/media/wysiwyg/image.png" width="140" height="180" alt="Keuzehulp mederwerker" loading="lazy"></picture>
            </div>      
            <div class="aiden-banner-category-content">
                <div class="aiden-banner-category-content-text">
                    <strong class="aiden-banner-category-title">Twijfelt u welk broekje u nodig hebt?</strong>
                                    <span class="aiden-banner-category-subtitle">Ontdek snel wat het best past bij uw situatie!</span>
                                </div>
                <button data-advisor-id="88decf0f-65d1-4dfa-b43a-0fc89d726a7a" type="button" class="action primary">
                    Start de keuzehulp
                </button>
            </div>
        </div>
    `;
  return html.trim();
};

export default quizBanner;
