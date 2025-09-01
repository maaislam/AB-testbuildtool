const tabElement = (id) => {
  const html = `
      <div class="tabs-accordion ${id}__tabs-accordion">
    <div class="tabs-accordion-item">
        <div class="tabs-accordion-title">Description<!-- start icon-arrow-down.liquid (SNIPPET) -->
            <svg version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 129 129"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 enable-background="new 0 0 129 129">
                <g>
                    <path
                          d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z">
                    </path>
                </g>
            </svg>
        </div>
        <div class="tabs-accordion-content"
             >

             <div class="product-pack">
                <div class="pack-info">
                    <h3 class="pack-title">Sample Pack (6 servings) includes:</h3>
                    <ul class="pack-list">
                    <li>2 of each flavor</li>
                    </ul>
                </div>
                
                <div class="pack-info">
                    <h3 class="pack-title">Or Starter Kit (45 servings) includes:</h3>
                    <ul class="pack-list">
                    <li>Free Cocktail Shaker</li>
                    <li>Free E-book</li>
                    <li>Free Shipping</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="tabs-accordion-item">
        <div class="tabs-accordion-title">Ingredients<!-- start icon-arrow-down.liquid (SNIPPET) -->
            <svg version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 129 129"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 enable-background="new 0 0 129 129">
                <g>
                    <path
                          d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z">
                    </path>
                </g>
            </svg>
        </div>
        <div class="tabs-accordion-content"
             >
            <div class="product-pack">
                <h3 class="pack-title">Ashwaghanda, Electrolytes, Antioxidant Blend, Nootropics, BioPerine™ Black Pepper (Piper nigrum), Malic Acid, Citric Acid, Natural Flavors, Silica, Sucralose</h3>
            </div>

        </div>
    </div>
</div>
    `;

  return html.trim();
};

export default tabElement;
