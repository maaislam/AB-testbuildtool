const offerEnd = (id) => {
    const htmlStr = `
    <div class="offer_end ${id}__offerEnd">
        <p>HURRY! OFFERS END</p>
        <div class="countdown">
            <div class="countdown-content">
                <style>
                    .countdown {
                        min-height: 95px
                    }

                    .countdown:before {
                        background: #A6383E;
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
                <span class="label day">Days</span>
                <span class="label hou">Hrs</span>
                <span class="label min">Mins</span>
                <span class="label sec">Sec</span>
                <span class="value day"></span>
                <span class="value hou"></span>
                <span class="value min"></span>
                <span class="value sec"></span>
            </div>
        </div>
    </div>
    `;

    return htmlStr;
};
export default offerEnd;
