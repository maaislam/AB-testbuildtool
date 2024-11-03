const blackFridayBanner = (id) => {
    const htmlStr = `<div class="${id}__blackFridayBanner">
        <div class="${id}__banner">
            <div class="${id}__promo_top promo_top">
                <a href="https://www.luxuryflooringandfurnishings.co.uk/sale.html/">
                    <div class="promo_top_inner">
                        <div class="promo">
                            <div class="code black-side">
                                <div class="black-side-skew">
                                    <div class="save_upto_icon">
                                        <h4>
                                            <strong>Save Up To 70%</strong>
                                        </h4>
                                    </div>
                                    <p>ON SELECTED LINES</p>
                                </div>
                            </div>
                            <div class="red-side">
                                <div class="extra_off">
                                    <h4>BLACK FRIDAY SALE</h4>
                                    <div class="${id}__couponCodeWrapper">
                                        <div class="coupon_code">
                                            <p class="discount-percentage">70% OFF</p>
                                            <p class="discount-text">SELECTED LINES</p>
                                        </div>
                                        <div class="plus_icon">
                                            <svg fill="#fff" width="64px" height="64px" viewBox="0 0 1024.00 1024.00" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M486 691h52V538h153v-52H538V333h-52v153H333v52h153z"></path></g></svg>
                                        </div>
                                        <div class="coupon_code">
                                            <p class="discount-percentage">+ 10% OFF</p>
                                            <p class="discount-text">WITH CODE <span>EARLY10</span></p>
                                        </div>
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
export default blackFridayBanner;
