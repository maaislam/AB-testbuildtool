const subsButton = (id, data) => {
  const html = `
      <div class="${id}__subsButton">
            <a
          class="${id}__subsLink MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth mui-znoxve"
          tabindex="0"
          data-element="clicks-to-operators"
          data-operator="${data.operator}"
          data-placement="odds-page"
          data-type="button"
          rel="nofollow noindex"
          target="_blank"
          href="${data.link}">
            <p class="MuiTypography-root MuiTypography-body1 mui-vp5xag">1</p>
            <p class="MuiTypography-root MuiTypography-body1 mui-1sruf3z">${data.firstTeamOddNumber}</p><span
                  class="MuiTouchRipple-root mui-w0pj6f"></span>
        </a>
        <a
          class="${id}__subsLink MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-disableElevation MuiButton-fullWidth mui-znoxve"
          tabindex="0"
          data-element="clicks-to-operators"
          data-operator="${data.operator}"
          data-placement="odds-page"
          data-type="button"
          rel="nofollow noindex"
          target="_blank"
          href="${data.operator}">
            <p class="${id}__counter MuiTypography-root MuiTypography-body1 mui-vp5xag">2</p>
            <p class="${id}__number MuiTypography-root MuiTypography-body1 mui-1sruf3z">${data.secondTeamOddNumber}</p><span
                  class="MuiTouchRipple-root mui-w0pj6f"></span>
        </a>
      </div>
    `;
  return html.trim();
};

export default subsButton;
