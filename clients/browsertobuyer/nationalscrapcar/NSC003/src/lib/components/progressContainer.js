const progressContainer = (id) => {
  const html = `
        <div class="${id}__decoy decoy_loading_container">
            <div class="decoy_loader_parent">
                <div class="decoy_loader_background"></div>
                <div class="decoy_loader_foreground animated"></div>
            </div>
            <div class="decoy_loader_screen">
                <div class="screen screen1">
                    <h1 class="screen_title">We’re comparing prices from over 130 scrap yards...</h1>
                    <div class="screen_box">
                        <p class="screen_review_title">Great service, found me the best price and all went very smoothly.</p>
                        <p class="screen_review_author">Paul K</p>
                    </div>
                </div>
                <div class="screen screen2">
                    <h1 class="screen_title">You could get 3x more for your car</h1>
                    <p class="screen_subtitle">When you tell us about</p>
                    <div class="screen_box">
                        <div>
                        <img src="https://cdn-3.convertexperiments.com/uf/10021806/10025545/mileage.png" width="50" atl="The Mileage">
                        <span>The Mileage</span>
                        </div>
                        <div>
                        <img src="https://cdn-3.convertexperiments.com/uf/10021806/10025545/engine.png" width="55" atl="The Engine">
                        <span>Engine and Gearbox Condition</span>
                        </div>
                    </div>
                    <p class="screen_bottom">Just select GET HIGHER PRICE on the next step...</p>
                </div>
                <div class="screen screen2-new">
                    <h1 class="screen_title">Comparing scrap yards</h1>
                    <ul class="searching-animation">
                        <li class="loading">Searching 130+ scrap yards</li>
                        <li class="loading" style="display:none;">Searching scrap yards near <span class="postal-code"></span></li>
                        <li class="loading" style="display:none;">Searching garages and salvage experts</li>
                    </ul>
                </div>
            </div>
            <div class="decoy_loader_footer">
                <div>
                    <span><strong>Rated Excellent</strong></span>
                    <span><strong>4.85/5</strong> from <strong>3469</strong> reviews</span>
                    <img src="https://cdn-3.convertexperiments.com/uf/10021806/10025545/reviews.png" class="reviewStars" width="130">
                </div>
                <div>
                    <a rel="noreferrer" target="_blank" href="https://www.reviews.io/company-reviews/store/scrap-car-comparison-ltd" title="Read more reviews on REVIEWS.io"><img src="https://cdn-3.convertexperiments.com/uf/10021806/10025545/reviewsio-logo--white%201.png" alt="REVIEWS.io Logo" width="150" height="20"></a>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default progressContainer;
