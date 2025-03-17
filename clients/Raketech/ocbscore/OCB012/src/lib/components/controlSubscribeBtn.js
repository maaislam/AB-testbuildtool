const controlSubscribeBtn = (id) => {
  const html = `
    <div class="MuiCardContent-root ${id}__controlSubcribe mui-1qw96cp"><div class="MuiStack-root mui-1hdbc19"><h4 class="MuiTypography-root MuiTypography-h4 mui-1ilrwq6">Sign Up For Free Predictions!</h4><p class="MuiTypography-root MuiTypography-body1 mui-1pqxy4t">Sign up to the OCBscores newsletter for expert tips and predictions, match analysis, in-depth reviews, plus exclusive bonus codes.</p><button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth ocb_web_newsletter className1 className2 mui-5jbd64" tabindex="0" type="button" data-attribute="Newsletter">Subscribe<span class="MuiTouchRipple-root mui-w0pj6f"></span></button></div></div>
  `;
  return html.trim();
};

export default controlSubscribeBtn;
