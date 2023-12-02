export const promoBanner = (ID) => {
  const html = `
    <div class="header-promo ${ID}__header-promo" style="background-color: rgb(212, 25, 8);">
        <div class="header-promo-container centered" style="color: #ffffff;">
        <div class="header-promo-top hide--desktop">
            <span class="header-promo-message text-center"><p><a href="/collections/3-wick-candles" title="Up to 60% OFF Black Friday Sale Ending in:">Up to 60% OFF Black Friday Sale Ending in:</a></p></span>  
            
        </div>
        <span class="header-promo-message hide--mobile text-center"><p><a href="/collections/3-wick-candles" title="3 Wick Candles">Candle Day Weekend ends in: </a></p></span>
        <span class="header-promo-countdown" id="header-promo-countdown">
            <div><span class="time">0</span><span>days</span></div>
            <div><span class="time">0</span><span>hours</span></div>
            <div><span class="time">0</span><span>minutes</span></div>
            <div><span class="time">0</span><span>seconds</span></div>
        </span>
        
        </div>
    </div>
    `;

  return html.trim();
};
