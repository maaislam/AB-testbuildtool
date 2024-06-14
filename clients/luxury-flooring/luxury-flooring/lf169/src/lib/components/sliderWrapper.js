const sliderWrapper = (id, element) => {
  const lists = Array.from(element.querySelectorAll('.pdp-review'));
  const updatedLists = lists.map((list) => {
    list.classList.add('swiper-slide');
    return list.outerHTML;
  });

  const htmlStr = `
          <div class="${id}__slider swiper">
              <div class="swiper-wrapper">
                    ${updatedLists.join('\n')}
              </div>
              <div class="swiper-pagination"></div>
          </div>
      `;
  return htmlStr.trim();
};

export default sliderWrapper;
