const casinoCard = (id, singleCasinoData) => {
  const { offers, btnText, btnLink, badge } = singleCasinoData;
  //console.log('🚀 ~ file: casinoCard.js:3 ~ casinoCard ~ btnLink:', btnLink);

  const htmlStr = `  
    <div class="${id}__casinocard" data-type="${badge}">
        <div class="wrapper">
            <div class="${id}__casinocard-info">
                
            </div>
            <div class="${id}__casinocard-offers">${offers}</div>
            <a href="${btnLink}" target="_blank" class="${id}__casinocard-cta">${btnText}</a>
        </div>
        <div class="${id}__casinocard-disclaimer"><ul class="tc__TUudd cas001__disclaimer-0"><li>Reklamlänk |</li><li>
          <a href="/tc/${
            btnLink.split('/till/')[1]
          }" rel="nofollow" target="_blank"> Villkor gäller |</a></li><li>18+ år | Spela ansvarsfull| Regler &amp; villkor gäller | <a href="https://stodlinjen.se/" target="_blank" rel="nofollow noopener">stodlinjen.se</a> | <a href="https://www.spelpaus.se/" target="_blank" rel="nofollow noopener">spelpaus.se</a> |<!-- --> <!-- -->|<!-- --> <a href="https://stodlinjen.se/" rel="nofollow" target="_blank">Spela ansvarsfullt</a> <!-- -->|<!-- --> <a href="https://www.spelpaus.se/" rel="nofollow" target="_blank">Stödlinjen.se</a></li></ul></div>
        ${badge ? `<div class="${id}__casinocard-badge">Bästa casinon</div>` : ''} 
    </div>`;

  return htmlStr;
};

export default casinoCard;
