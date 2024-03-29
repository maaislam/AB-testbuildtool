const chevron =
  '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 9L7.5 6L4.5 3" stroke="#00002A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const homeIcon =
  '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.5L6 1L10.5 4.5V10C10.5 10.5523 10.0523 11 9.5 11H2.5C1.94772 11 1.5 10.5523 1.5 10V4.5Z" stroke="#035B74" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.5 11V6H7.5V11" stroke="#035B74" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const addBreadcrumb = (id) => {
  const htmlStr = `<div class="${id}_breadcrumb-container">
    <div class="${id}_braedcrumb-item">
      ${homeIcon}
    </div>
    ${chevron}
    <div class="${id}_braedcrumb-item">
      <a href="/">CasinoGuide</a>
    </div>
    ${chevron}
    <div class="${id}_braedcrumb-item">
      <a href="/recensioner">Recensioner</a>
    </div>
    ${chevron}
    <div class="${id}_braedcrumb-item active-item">
      <spam>Leo Vegas Casino</spam>
    </div>
  </div>`;

  if (!document.querySelector(`.${id}_breadcrumb-container`)) {
    console.log('test');
    document
      .querySelector('.MuiContainer-root .mui-1cpixy9')
      .insertAdjacentHTML('beforebegin', htmlStr);
  }
};

export default addBreadcrumb;
