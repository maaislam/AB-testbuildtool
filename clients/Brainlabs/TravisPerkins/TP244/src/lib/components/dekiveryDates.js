import deliveryDate from './deliveryDate';

const deliveryDates = (id, datas) => {
  const htmlStr = `
        <div class="${id}__deliverydates swiper ${id}__deliverydates--swiper">
          <div class="${id}__deliverydates--title">
              <span>Choose your delivery date</span>
          </div>
          <div class="swiper-wrapper">
              ${datas.map((data, i) => deliveryDate(id, data, i)).join('\n')}
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
         
        </div>`;
  return htmlStr.trim();
};

export default deliveryDates;
