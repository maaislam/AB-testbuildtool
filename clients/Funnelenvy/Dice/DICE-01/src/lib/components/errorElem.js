const errorHtml = (ID) => `
<div class="${ID}__mktZipError mktoError"
    style="right: 90px; bottom: -35px;">
  <div class="mktoErrorArrowWrap">
      <div class="mktoErrorArrow"></div>
  </div>
  <div id="ValidMsgCompany"
        role="alert"
        tabindex="-1"
        class="mktoErrorMsg">This field is required.</div>
</div>
`;

export default errorHtml;
