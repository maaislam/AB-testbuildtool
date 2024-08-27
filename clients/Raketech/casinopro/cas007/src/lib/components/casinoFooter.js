const casinoFooter = (id) => {
  const html = `
        <div class="MuiBox-root ${id}__casinoFooter"><span>Reklamlänk</span> | <span>18+ år</span> | <a rel="nofollow"
       target="_blank"
       data-element="toplist"
       data-operator="Pop Casino"
       data-type="terms"
       href="/tc/pop-casino/">Regler &amp; villkor gäller</a> | <a rel="nofollow"
       target="_blank"
       href="https://stodlinjen.se/">Stödlinjen.se</a> | <a rel="nofollow"
       target="_blank"
       href="https://www.spelpaus.se/">Spelpaus.se</a> | <span>Spela ansvarsfull</span></div>
    `;

  return html.trim();
};

export default casinoFooter;
