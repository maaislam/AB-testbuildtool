const titleLoginHeader = (id) => {
    document.querySelector(`.${id}__section--header`)?.remove();
    const htmlStr = `   
      <div class="${id}__section--header">
          <div class="${id}__header--icon">
              <div class="${id}__login--icon">${window.loginIcon}</div>
              <div class="${id}__login--text">
                  <a class="${id}__text" href="https://www.kickz.com/de/checkout-login/">Zum Kundenlogin</a>
              </div>
              <div class="${id}__login--arrow">${window.loginArrow}</div>
          </div>
          <div class="${id}__header-title">Gastbestellung</div>
      </div>`;
    return htmlStr;
};

export default titleLoginHeader;