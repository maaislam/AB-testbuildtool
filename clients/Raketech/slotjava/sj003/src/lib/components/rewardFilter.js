const rewardFilter = (id, data) => {
  const { name, imgSrcKey } = data;
  const htmlStr = `
    <div class="${id}__reward-wrapper">
        <input type="checkbox" id="${id}__reward-${imgSrcKey}" name="${id}__reward-${imgSrcKey}" value="${name}" data-filter="rewards">
        <label for="${id}__reward-${imgSrcKey}">
            <div class="checkbox-image">
              <img src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/slotjava/hp-filter-sj003/${imgSrcKey}.svg" alt="${name}" />
            </div>
            <div class="checkbox-text">
              <span>${name}</span>
            </div>
        </label>       
    </div>`;

  return htmlStr;
};

export default rewardFilter;
