const highlightCard = (id, data) => {
  const { title, subTitle, terms, badge, image, link, btnText } = data;

  const learnMoreBtnClass = btnText === 'Läs mer' ? `${id}__learnmore` : '';

  const htmlStr = `
  <a
    href="${link}"
    class="container__3UvJN ${id}__highlightcard swiper-slide col-8 col-12-md col-12-sm ${learnMoreBtnClass}"
    target="_blank"
    rel="noopener nofollow"
    style="
      background-image: url(${image});
      background-size: cover;
      background-position: center;">
      <div><span class="subTag__2v1dp">${badge}</span></div>
      <div class="overlay__27Csa"></div>
      <div class="innerContainer__1XQ-1">
          <h2 class="title__3V-xL">${title}</h2>
          <h2 class="description__2yK1S">
            ${subTitle}
          </h2>
          <span data-toplist-item-link="${link}" class="${id}__cta ${learnMoreBtnClass} cta__1HzOA cta__3Rtjm" ><strong>${btnText}</strong></span>
          <p class="terms__1r9NT">
            ${terms}
          </p>
      </div>
  </a>
`;

  return htmlStr.trim();
};

export default highlightCard;
