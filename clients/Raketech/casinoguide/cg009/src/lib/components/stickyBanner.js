export const stickyBanner = (ID) => {
  const html = `
    <div class="MuiBox-root ${ID}__stickBanner">
    <div class="MuiBox-root mui-1v68uba ${ID}__stickBannercontainer">
        <div class="MuiBox-root mui-1xlzx9v ${ID}__mainText">
        <p class="MuiTypography-root MuiTypography-body1 mui-nq8bje">
            11 Freespins + upp till 2000 kr på första
        </p>
        <p class="MuiTypography-root MuiTypography-body1 mui-nq8bje">insättningen</p>
        </div>
        <a
        class="${ID}__casinoLink MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedTertiary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedTertiary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-disableElevation MuiButton-fullWidth mui-1a81167"
        tabindex="0"
        target="_blank"
        rel="nofollow noopener noindex"
        href="/go/mrvegascasino"
        >Till casinot<span class="MuiTouchRipple-root mui-w0pj6f"></span
        ></a>
        <div class="MuiBox-root mui-dspu10 ${ID}__subText">
        Reklamlänk | 18+ | Spela ansvarsfullt | <a
            target="_blank"
            rel="nofollow noopener noindex"
            href="/go/mrvegasterms"
            style="font-weight: 700"
            >Regler &amp; Villkor</a
        >
        </div>
    </div>
    </div>
    `;

  return html.trim();
};
