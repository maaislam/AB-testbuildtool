const initMobileSwiper = (container) => {
  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

  if (!isMobile()) return;

  const baseConfig = {
    slidesPerView: 1.04,
    spaceBetween: 10
  };
  const slider = new window.Swiper(`${container}`, baseConfig);
  console.log('🚀 ~ initMobileSwiper ~ slider:', slider);
};
export default initMobileSwiper;
