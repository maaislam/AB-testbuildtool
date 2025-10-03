const policyStr = (id) => {
  const html = `
        <div class="${id}__policyConatiner" id="guideContainer-rootPanel-guidetextdraw___guide-item" class="fd-col-lg-12 fd-col-md-12 fd-col-sm-12 fd-col-xs-12" data-guide-parent-id="guideContainer-rootPanel__">
        <div class="guidetextdraw guidefield">
            <div class="guideFieldNode guideTextDraw privacyPolicy guideStaticText af-field-filled" id="guideContainer-rootPanel-guidetextdraw__" style=";" data-guide-view-bind="guideContainer-rootPanel-guidetextdraw__" data-disabled="false">
            <p>Clicking 'Submit' means you agree to the&nbsp; <a title="https://www.spglobal.com/terms-of-use" href="https://www.spglobal.com/terms-of-use" data-clickable-id="clickable-1" target="_blank" data-event-name="link" data-link-text="Terms" data-link-title="form-terms" data-link-location="form-terms" data-event-flag="true">
                <b>
                    <u>Terms</u>
                </b>
                <span class="cmp-link__screen-reader-only">(opens in a new tab)</span>
                </a>&nbsp;and have read and understand the&nbsp; <a title="https://www.spglobal.com/corporate-privacy-policy" href="https://www.spglobal.com/corporate-privacy-policy" data-clickable-id="clickable-2" target="_blank" data-event-name="link" data-link-text="Privacy Policy" data-link-title="form-privacy-policy" data-link-location="form-privacy-policy" data-event-flag="true">
                <b>
                    <u>Privacy Policy</u>
                </b>
                <span class="cmp-link__screen-reader-only">(opens in a new tab)</span>
                </a>. </p>
            </div>
        </div>
        </div>
    `;
  return html.trim();
};

export default policyStr;
