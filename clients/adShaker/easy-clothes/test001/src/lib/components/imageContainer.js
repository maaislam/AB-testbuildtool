const imageContainer = (id, imageData, index) => {
  const { defaultImg, srcSets, alt } = imageData;
  const htmlStr = `
        <div class="${id}__imagecontainer swiper-slide ">
            <img data-index="${index}" src="${defaultImg}" alt="${alt}" srcset="${srcSets}"/>
        </div>
    `;
  return htmlStr.trim();
};

export default imageContainer;
