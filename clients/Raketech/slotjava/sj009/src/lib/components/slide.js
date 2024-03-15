const slideTemplate = (id, slideInfo) => {
  const {
    contentImg,
    bgImage,
    title,
    text,
    btnFirstTxt,
    btnFirstLink,
    btnSecondTxt,
    btnSecondLink,
  } = slideInfo;

  const htmlString = `
    <div class="swiper-slide">
      <div class="${id}__slide" style="background-image:url(${bgImage})">
        <div class="${id}__slide-img">
          <img src="${contentImg}" alt="${title}" />
        </div>
        <div class="${id}__slide-content">
          <h3>${title}</h3>
          <p>${text}</p>
        </div>
        <div class="${id}__slide-btns">
          <a href="${btnFirstLink}" class="${id}__slide-btn btn-yellow">${btnFirstTxt}</a>
          <a href="${btnSecondLink}" class="${id}__slide-btn btn-gray">${btnSecondTxt}</a>
        </div>
      </div>
    </div>`

    return htmlString;
};

export default slideTemplate;