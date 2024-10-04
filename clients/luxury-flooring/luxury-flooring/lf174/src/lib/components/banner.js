const banner = (id) => {
    const htmlStr = `<div class="${id}__bannerWrapper">
        <div class="${id}__banner">
            <div class="${id}__promo_top promo_top"> <!-- top_with_timer -->
                <a href="https://www.luxuryflooringandfurnishings.co.uk/sale.html/">
                    <div class="promo_top_inner">
                        <div class="promo">
                            <div class="code">
                                <div class="save_upto_icon">
                                    <h4>
                                        <strong>Save Up To 70%</strong>
                                    </h4>
                                </div>
                                <p>ON SELECTED LINES</p>
                            </div>
                            <div class='${id}__plusIcon'>+</div>
                            <div class="end">
                                <div class="extra_off">
                                    <h4>TRADE MEMBER OFFER</h4>
                                    <div class="coupon_code">
                                        <h3>EXTRA 15% OFF EVERYTHING</h3>
                                    </div>
                                </div>
                                <div class="offer_end">
                                    <p>HURRY! OFFERS ENDING SOON!</p>
                                    <div class="offer_end ${id}__offerEnd">
                                        <div class="countdown">
                                            <div class="countdown-content">
                                                <style>
                                                    .countdown-content {
                                                        display: none;
                                                    }
                                                    .countdown .main-heading {
                                                        font-size: 50px;
                                                        font-family: 'Lucida-bright';
                                                        font-weight: normal;
                                                        letter-spacing: 10px;
                                                        margin-bottom: 0px;
                                                        vertical-align: middle;
                                                    }

                                                    .countdown .countdown-content span:last-child:after {
                                                        content: unset
                                                    }

                                                    .countdown .countdown-content strong:after {
                                                        content: unset;
                                                    }

                                                    .countdown .countdown-content span:after {
                                                        content: '|';
                                                        font-weight: 400;
                                                        margin: 0 .3em
                                                    }

                                                    @media (min-width: 768px) {
                                                        .countdown .countdown-content span:after {
                                                            content: '|';
                                                            font-weight: 400;
                                                            margin: 0 .3em
                                                        }

                                                        .countdown span.main-heading:after {
                                                            content: unset;
                                                        }
                                                    }

                                                    @media (max-width: 1023px) {

                                                        .countdown .countdown-content *,
                                                        .countdown-content p {
                                                            font-size: 18px;
                                                            line-height: 1.3;
                                                        }
                                                    }
                                                </style>
                                            </div>
                                            <div class="countdown-timer apply-grid show-day"
                                                data-bind="css: { 'apply-grid': showTimer, 'show-day': showDay, 'triple-days': day.length > 2 }">
                                                <span class="label day ${id}__hide">Days</span>
                                                <span class="label hou ${id}__hide">Hrs</span>
                                                <span class="label min ${id}__hide">Mins</span>
                                                <span class="label sec ${id}__hide">Sec</span>
                                                <span class="value day">19</span>
                                                <span class="value hou">05</span>
                                                <span class="value min">30</span>
                                                <span class="value sec">10</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>`;
    return htmlStr;
};
export default banner;
