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

                                                    .countdown .label {
                                                        text-align: center;
                                                        margin-top:4px;
                                                        text-transform: capitalize;
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
                                            <div class="countdown-timer apply-grid show-day">
                                                <span class="value day" id="${id}__days"></span>
                                                <span class="value hou" id="${id}__hours"></span>
                                                <span class="value min" id="${id}__minutes"></span>
                                                <span class="value sec" id="${id}__seconds"></span>
                                                <span class="label day">Days</span>
                                                <span class="label hou">Hrs</span>
                                                <span class="label min">Mins</span>
                                                <span class="label sec">Sec</span>
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
