import imageItem from './imageItem';

const imageItems = (id, imagesData) => {
  const htmlStr = `<div class="${id}__swiper swiper">
        <div class="swiper-wrapper">
            ${imagesData.map((imageData) => imageItem(id, imageData)).join('\n')}
        </div>
    
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>`;

  return htmlStr.trim();
};

export default imageItems;
