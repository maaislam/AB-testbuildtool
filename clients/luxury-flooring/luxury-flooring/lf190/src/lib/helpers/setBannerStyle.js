const setBannerStyle = () => {
  const banner = document.querySelector('.lf190__productOverview.lf190__desktop'); //Replace with your selector

  if (banner) {
    const rect = banner.getBoundingClientRect();
    console.log(rect, 'rect');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const topScreenElem = document.querySelector('.top-screen');
    const mainWidth = window.getComputedStyle(topScreenElem).width;
    document.body.style.setProperty('--banner-top', `${rect.top + scrollTop}px`);
    document.body.style.setProperty('--banner-height', `${rect.height}px`);
    document.body.style.setProperty('--banner-overflow-width', `${mainWidth}`);
  }
};

export default setBannerStyle;
