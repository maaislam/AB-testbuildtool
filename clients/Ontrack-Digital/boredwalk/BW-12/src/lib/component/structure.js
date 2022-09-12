/*eslint-disable array-callback-return */
const styleSwiperItem = (value, text, data) => {
  return `
         <div class="swiper-slide" data-attr="${value}">
          <div>
              <img src="${data[text.trim()].thumbnail}" />
          
          </div>
         <span>${text}</span>
         </div>
      
      `;
};

export const styleSlider = (id, data) => {
  return `
        <div class="swiper ${id}__Swiper">
           <div class="swiper-wrapper">
                ${[...document.querySelectorAll('#data-variant-style option')]
                  //eslint-disable-next-line array-callback-return
                  //eslint-disable-next-line consistent-return
                  .map((item, index) => {
                    if (
                      index !==
                      document.querySelectorAll('#data-variant-style option').length - 1
                    ) {
                      return styleSwiperItem(item.value, item.innerText, data);
                    }
                  })
                  .join('\n')}
           </div>
           <div class="swiper-button-next"></div>
           <div class="swiper-button-prev"></div>
        </div>
    
    `;
};

export const colorSwatchesContainer = (id) => {
  return `
    <div class="${id}__colorSwatches"></div>
  
  `;
};
