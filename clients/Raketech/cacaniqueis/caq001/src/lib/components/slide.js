const slideTemplate = (id, VARIATION, slideInfo, index) => {
  const {
    contentImg,
    bgImage,
    title,
    casinoName,
    text,
    btnFirstTxt,
    btnFirstLink,
    btnFirstLabel,
    btnSecondTxt,
    btnSecondLink,
    btnSecondLabel
  } = slideInfo;

  const variationType = VARIATION === '1' ? 'B' : VARIATION === '2' ? 'C' : 'D';
  const slideIndex = index === 0 ? '1st Slide' : index === 1 ? '2nd Slide' : '3rd Slide';

  const htmlString = `
    <div class="swiper-slide">
      <div class="${id}__slide" style="background-image:url(${bgImage})" data-type=${variationType} data-index="${slideIndex}" data-name="${casinoName}">
        <div class="${id}__slide-img">
          <a class="${id}__slide-img-link" href="https://www.google.com/">
            <img src="${contentImg}" alt="${title}" />
          </a>
        </div>
        <div class="${id}__slide-content">
          <h3>${title}</h3>
          <p>${text}</p>
        </div>
        <div class="${id}__slide-btns">
          <a href="${btnFirstLink}" class="${id}__slide-btn btn-yellow" data-text="${btnFirstLabel}">${btnFirstTxt}</a>
          <a href="${btnSecondLink}" class="${id}__slide-btn btn-gray" data-text="${btnSecondLabel}">${btnSecondTxt}</a>
        </div>
      </div>
    </div>`;

  return htmlString;
};

export default slideTemplate;
