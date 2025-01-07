import announcementBar from './announcementBar';

const wrapper = (id) => {
  const html = `
    <div class="${id}__wrapper container">
        <div class="${id}__container">
            <div class="${id}__offerSection">
                <div class="${id}__offerWrapper">
                    ${announcementBar(id)}
                    <img src="https://cdn-3.convertexperiments.com/uf/10042057/10049555/frame-35_677cdb5978bb9.png"  class="${id}__desktop"/>
                    <img src="https://cdn-3.convertexperiments.com/uf/10042057/10049555/frame-35-2_677d27b51b4da.png" class="${id}__mobile"/>
                </div>
            </div>
            <div class="${id}__contentSection">
                <div class="${id}__contentWrapper">
                    <div class="${id}__title">Join Primal Queen Today</div>
                    <div class="${id}__mainTitle">NEW YEARS<br>SPECIAL OFFER</div>
                    <div class="${id}__subText">1 Month Subscribe & Save</div>
                    <div class="comn_btn_box">
                        <div class="button_outer">
                            <a href="javascript:bookmarkscroll.scrollTo('join_pkg')" class="common_btn shadow-pulse">
                                JOIN PRIMAL QUEEN
                                <img src="//primalqueen.com/cdn/shop/files/btn_img_39x33.png?v=2484361063612256245" class="btn_img" width="39" height="33" alt="icon">
                            </a>
                        </div>
                        <ul class="btn_point">
                            <li>365-Day Money Back Guarantee</li>
                            <li>Free Shipping<sup>+</sup></li>
                        </ul>
                    </div>
                    <div class="${id}__timerSection">
                        <div class="${id}__timerTitle">Ship <span></span> if ordered within</div>
                        <div class="${id}__timer">
                            <div class="${id}__section">
                                <div class="${id}__time ${id}__hour">02</div>
                                <div class="${id}__text">Hours</div>
                            </div>
                            <div class="${id}__section">
                                <div class="${id}__time ${id}__min">13</div>
                                <div class="${id}__text">Mins</div>
                            </div>
                            <div class="${id}__section">
                                <div class="${id}__time ${id}__sec">47</div>
                                <div class="${id}__text">Sec</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
  return html.trim();
};

export default wrapper;
