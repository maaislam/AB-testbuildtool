const renderModal = (id, comparePageUrl) => {
  const htmlStr = `
        <div class="${id}__overlay lb-overlay js--close-Lightbox"></div>
        <div class="${id}__DataHolder-Wrap lb-DataHolder-Wrap" role="dialog" tabindex="-1" aria-hidden="false" style="width: 936px; height: 1242px; top: 37px; margin-left: auto; margin-right: auto;"><div class="lb-close-bl js--close-Lightbox" style="width: 936px; margin-left: auto; margin-right: auto;"><button class="lb-btn-cancel"><span class="icon-cancel-text">CLOSE</span><span class="icon-cancel"></span></button></div><div class="lb-DataHolder js--lightbox" role="document" style="width: 936px; background-color: transparent;"><div class="wrp wrp__modal--error modal__qty">

    <div class="row">

        <div class="lg-22 lg-offset-1 md-22 md-offset-1 sm-24 sm-offset-0">

            <div class="infobox infobox--error" role="alert">

                <div class="infobox__block">

                    <span class="infobox__text" tabindex="0">

                        <span class="infobox__icon icon-cancel"></span>
                        <p id="compare-error-message-text">
                            You can compare up to four items. Please remove an item from your compare list.
                        </p>

                    </span>

                </div>

            </div>

        </div>

    </div>

    <div class="modal__btn">

        <a href="${comparePageUrl}" class="btn btn--lg btn--primary id-go-to-compare-button">Go to Compare Page</a>

    </div>

    </div></div></div>
    `;

  return htmlStr.trim();
};
export default renderModal;
