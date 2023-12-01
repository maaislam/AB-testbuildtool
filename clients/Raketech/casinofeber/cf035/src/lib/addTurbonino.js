const addTurbonino = (id) => {
    console.log('🚀 ~ file: addTurbonino.js ~ line 1 ~ addTurbonino ~ addTurbonino');
    const anchorPoint = document.querySelector('.toplist-holder h3');

    const htmlStr = `<div class='${id}__cardContainer'>
        <div class='${id}__cardHeader'>
            <span class='${id}__header-text'>Månadens Casino</span>
            <span class='${id}__header-icon'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqUlEQVR4nO2ZS6hNURzGf04crxPJI3llcAdiaCaZ3AGRgfKMuhkwEBkYUdx7Bh7dm0cpJCkZKRl4RhG5JUSZyOMK3VAUl0jc6x6t+u/62u1zzrbPuZ21cr5ag7PWf3/n+9Zae631Xxua+H8wCsgTIMYB54A/QAl4CmwGhhEIzprweHH1OTxHi/T8IPAzZmI7nmOHiL0EjAFOSF0fMAGPcUvEbrS64cAjqW/DU4wHfptIN42mSlubGLiAp1glIh/G2qZI2ys8xRkR2Z7QHo3ONzyEm+efxMD8WHtOVqfveIhNIr43YdOaLu1v8AwzbHmMBHYkxCyW9jt4hssi7pmdgeLokJhDeIQNIszN8YVl4rolbjWeYDLwUYQdKRPndt5+ixkAJuIJzov410ChTNwaibuHJ1gpotyhrbVC7GmJ7bQRiYrbveuK0UAR6LHhLqUoJyvwueX0fZXnfwAXq3RCavH6sqUpvVV6sWAjlJbvaC05Q/EfxbuyLCXvO+BzQvmSwLk/q4EeIdkCjCgTp39WD0yLZXFu6s7NQqRzvpz4oTAQvSs6fQ+TAWmFDYUBh+UVjuNBGGiJ7SvBGWgV3gchGtgtvMdCNHBTeNeFZiBvO3LE65bWoAwsEs7nWUkaaaAonMdDNNAtnO6kG5SBQuxCbFJoBpYK3+NaiBpl4KDwdYVo4InwLQnNwCxJeH4BY0Mz0CVcLq2sCWnygbzEDNoJMisWWK9HfO44XRM0I9uaYML93hYbgZKlhjeAfcAKYGbKladPOG5TB7QniMtaPgBXgL323cCliPOA9cC1hFh3+Vsz3J3m3ZQC75sQvVLPUt4Cc+ohXk3sAV4m3AsNWP0uYKQ8M9t6udO+kX1NIbwfOOXrB7+c9epa4ABwFXhhH7yvAztt+WyiCRqAv0Hrrm3kEhmiAAAAAElFTkSuQmCC">
            </span>
        </div>
        <div class='${id}__cardBody'>
            <div class='${id}__logo'>
                <a class="img" href="/spela/happy-casino" rel="nofollow noreferrer">
                    <img loading="eager" alt="casino" src="https://media.casinofeber.se/operators/happy-casino.png?w=200&amp;q=80&amp;auto=format">
                </a>
            </div>
            <div class='${id}__content'>
                <div class='${id}__content-text'>
                    <p>Se vilka slots som har levererat högst vinster och störst förluster just nu i Turboninos Hot and Cold funktion.</p>
                </div>
                <div class='${id}__content-btn'>
                    <a href='https://site.turbonino.com/index.php?aname=rtcasino_new&zone_id=A175780C' target='_blank'>Till Turbonino</a>
                </div>
            </div>
        </div>
        <div class='${id}__cardFooter'>
            <div class="toplist-terms">
                Reklamlänk | 18+ | <a href="/spela/happy-casino/villkor" target="_blank" rel="nofollow noreferrer noopener">Regler &amp; villkor gäller</a> | Spela ansvarsfullt | <a href="https://www.stodlinjen.se" target="_blank" rel="nofollow noreferrer noopener">stodlinjen.se</a>
            </div>
        </div>
    </div>`;

    anchorPoint.insertAdjacentHTML('afterend', htmlStr);
};
export default addTurbonino;
