const optionWrapper = (id, data) => {
  const { title, sellPrice, comparePrice, url, value } = data;
  const html = `
        <div class="${id}__radio-container" id="${id}__${value}" data-url=${url}>
            <div class="${id}__wrapper">
                <input type="radio" id="${value}" name="${id}__options" value="${value}" ${
    value === 'subscribe' ? 'checked' : ''
  }>
                <label for="${value}">
                    <span class="${id}__text">${title}</span>
                    <span class="${id}__priceWrapper">
                        <span class="${id}__sellPrice">${sellPrice}</span>
                        <span class="${id}__comparePrice">${comparePrice}</span>
                    </span>
                </label>
            </div>
            ${
              value === 'onetime'
                ? `
                <span class="${id}__additionalInfo">
                    *Does not include free bamboo lid glass jar, on-the-go pill case, mystery gift
                </span>
                
                `
                : ''
            }
        </div>
    `;
  return html.trim();
};

export default optionWrapper;
