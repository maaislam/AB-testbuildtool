const themeFilter = (id, data) => {
  const { name, imgSrcKey } = data;
  const htmlStr = `
    <div class="${id}__theme-wrapper">
        <input type="checkbox" id="${id}__theme-${imgSrcKey}" name="${id}__theme-${imgSrcKey}" value="${name}" data-filter="themes">
        <label for="${id}__theme-${imgSrcKey}">
            <div class="checkbox-image" 
              style="background-image:url(https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/slotjava/hp-filter-sj003/${imgSrcKey}.png) ">
            </div>
            <div class="checkbox-text">
              <span>${name}</span>
            </div>
        </label>       
    </div>`;
  return htmlStr;
};
export default themeFilter;
