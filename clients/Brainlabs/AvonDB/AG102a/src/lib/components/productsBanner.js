import cardClose from './cardClose';
import productCard from './productCard';

const productsBanner = (id, datas, position) => {
  const htmlStr = `
    <div class="${id}__banner-block" style="top: ${position.top};right: ${position.right}">
        <div class="${id}__productsbanner">
            <div class="${id}__showhide">
                ${cardClose(id)}
            </div>
            <div class="swiper ${id}__swiper">
                <div class="swiper-wrapper">
                    ${datas.map((data) => productCard(id, data)).join('\n')}
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>   
    `;
  return htmlStr.trim();
};

export default productsBanner;
