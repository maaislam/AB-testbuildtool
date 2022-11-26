const spinner = () => {
  const htmlStr = `<div id="spinner-overlay" class="spinner__overlay" style="background-color: #fff"></div>
        <div id="spinner-combined" class="spinner__wrapper" aria-hidden="false"><div class="spinner__overlay--modal"></div>
        <h2 class="h2 spinner__overlay--message" role="alert">Please wait <span class="sm-hide">whilst we update your selection</span></h2>
    </div>`;

  return htmlStr.trim();
};

export default spinner;
