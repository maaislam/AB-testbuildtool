export const casino = (id, index, item) => {
  const { name, logoImg, title, link, TCLink, code } = item;
  const html = `
        <div class="MuiBox-root mui-141vli0" style="background-color: ${item.bgColor};">
            <div class="MuiBox-root mui-4ataaz"><a data-element="clicks-to-operators"
                data-operator="${name}"
                data-placement="Popup toplist"
                data-position="${index}"
                data-type="logo"
                rel="nofollow noindex"
                target="_blank"
                title="${name}: Highly Recommended Betting Site in India"
                class="${id}__casinoLogo mui-86aufa ${id}__logoImageWrapper"
                href="${link}"><img alt=""
                        loading="lazy"
                        width="200"
                        height="80"
                        decoding="async"
                        data-nimg="1"
                        class="mui-s0quiy"
                        srcset="${logoImg} 1x, ${logoImg} 2x"
                        src="${logoImg}"
                        style="color: transparent;"></a></div>
            <div class="MuiBox-root mui-1z07fve">
                <div class="MuiBox-root mui-1rll8ue"><span class="MuiTypography-root MuiTypography-h4 mui-6nihh7">${title}</span><a class="MuiTypography-root MuiTypography-caption mui-s7ffus"
                    data-element="clicks-to-t&amp;c"
                    data-operator="${name}"
                    data-placement="Popup toplist"
                    data-position="${index}"
                    data-type="text"
                    href="${TCLink}">Terms &amp; Conditions</a>
                </div>
                <div class="MuiBox-root mui-vpzhwf"><a
                    class="${id}__casinoBtn MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth mui-17i2e2k"
                    tabindex="0"
                    data-element="clicks-to-operators"
                    data-operator="${name}"
                    data-placement="Popup toplist"
                    data-position="${index}"
                    data-type="button"
                    rel="nofollow noindex"
                    target="_blank"
                    href="${link}">Visit<span
                            class="MuiTouchRipple-root mui-w0pj6f"></span></a></div>
            </div>
            ${
              code
                ? `
                <div class="MuiBox-root mui-bp5ir">
                <div class="MuiBox-root mui-15killv">
                    <p class="MuiTypography-root MuiTypography-body2 mui-jnfq6o">Exclusive with OCB - use</p><button
                            class="${id}__btn MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary MuiButton-disableElevation mui-ail1rb"
                            tabindex="0"
                            type="button"
                            data-element="clicks-to-code"
                            data-operator="${name}"
                            data-placement="Popup toplist"
                            data-position="${index}"
                            data-type="icon"
                            data-code="${code}"
                            aria-label="Copied!"><span
                            class="MuiTypography-root MuiTypography-body2 mui-lx3k3m">${code}</span><span
                            class="MuiButton-icon MuiButton-endIcon MuiButton-iconSizeSmall mui-kcxyz4"><svg
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-1394qrh"
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="ContentCopyRoundedIcon">
                                <path
                                    d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z">
                                </path>
                            </svg></span></button>
                    </div>
                </div>   
                `
                : ''
            }
            <div class="MuiBox-root mui-1ivnllj"></div>
        </div>
    `;
  return html.trim();
};
