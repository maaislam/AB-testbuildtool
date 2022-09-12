import reelItem from './reelItem';

const reelItems = (id, reelDatas) => {
  const htmlStr = `<div class="${id}__swiper-container">
        <div class=" ${id}__close-btn"></div>
        <div class=" ${id}__swiper swiper">
        <div class="swiper-pagination"></div>
        <div class="swiper-wrapper">
            ${reelDatas.map((reelData, i) => reelItem(id, reelData, i)).join('\n')}
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</div>`;

  return htmlStr.trim();
};

export default reelItems;
